// puts a highlight overlay in the bottom right of the simulator SVG


/// <reference lib="dom" />

// highlight-corner.ts
// Adds/removes a highlight overlay to the bottom right of the simulator SVG
console.warn("highlight-corner.ts loaded");

// Make the namespace globally available (not sure if need this) -- added during very first round of debugging
(window as any).atisaMenorahSim = {};

namespace atisaMenorahSim {
    let highlightRect: SVGRectElement | undefined;
    let isShown = false;

    // Call to show or hide the highlight
    export function setCornerHighlight(show: boolean) {
        console.warn("beginning test.");
        if (show === isShown) return;
        isShown = show;
        const svg = getSimulatorSVG();
        if (!svg) {
            console.warn("atisaMenorahSim: Simulator SVG element not found (id 'svg838'). Highlight not shown.");
            return;
        }

        if (show) {
            console.warn("shown.");
            if (!highlightRect) {
                console.warn("making react elem.");
                highlightRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                highlightRect.setAttribute("x", "390"); // Arbitrary values, adjust as needed
                highlightRect.setAttribute("y", "450");
                highlightRect.setAttribute("width", "60");
                highlightRect.setAttribute("height", "60");
                highlightRect.setAttribute("rx", "12");
                highlightRect.setAttribute("ry", "12");
                highlightRect.setAttribute("fill", "#f39c12");
                highlightRect.setAttribute("stroke", "#f39c12");
                highlightRect.setAttribute("stroke-width", "5");
                highlightRect.setAttribute("pointer-events", "none");
                highlightRect.setAttribute("class", "sim-corner-highlight");
            }
            svg.appendChild(highlightRect);
        } else {
            if (highlightRect && svg.contains(highlightRect)) {
                console.warn("hidden.");
                svg.removeChild(highlightRect);
            }
        }
    }

    // Helper to get the simulator's main SVG element
    function getSimulatorSVG(): SVGSVGElement | null {
        // Try to find the main simulator SVG by class
        console.warn("trying to find main svg.");
        const svg = document.querySelector("#svg838");
        return svg && svg instanceof SVGSVGElement ? svg : null;
    }
}

// To use: atisaMenorahSim.setCornerHighlight(true/false)
