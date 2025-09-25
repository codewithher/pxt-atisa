// this is the basic highlight code needed. All it does is have the highlight show up. no dependency on another component
let highlightRect: SVGRectElement | undefined;


function getSimulatorSVG(): SVGSVGElement | null {
  // Try to find the main simulator SVG by class
  console.warn("trying to find main svg.");
  const svg = document.querySelector("#svg838");
  return svg && svg instanceof SVGSVGElement ? svg : null;
}

const svg = getSimulatorSVG();

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
if (svg) {
  svg.appendChild(highlightRect);
} else {
  console.error("SVG element not found");
}