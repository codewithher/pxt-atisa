/// <reference path="../../node_modules/pxt-core/built/pxtsim.d.ts"/>

console.log("LED Candles visuals module loaded");

namespace pxsim.lantern {
    export interface ICandleTheme {
        candleOn?: string;      // Color when candle is lit
        candleOff?: string;     // Color when candle is unlit
    }

    export const defaultCandleTheme: ICandleTheme = {
        candleOn: "#ff9933",    // Orange candle
        candleOff: "#4d4d4d",   // Dark gray
    };

    export function mkCandlesSvg(xy: Coord, count: number = 7, spacing: number = 30, candleRadius: number = 10): 
        { el: SVGGElement, candles: SVGGElement[] } {
        
        const group = svg.elt("g") as SVGGElement;
        const candles: SVGGElement[] = [];
        
        const [x, y] = xy;

        for (let i = 0; i < count; i++) {
            // Candle element - using circle for simplicity, can be changed to rect if needed
            const candle = svg.elt("circle", {
                class: 'sim-candle',
                cx: x + i * spacing,
                cy: y,
                r: candleRadius,
                fill: defaultCandleTheme.candleOff
            }) as unknown as SVGGElement;
            
            candles.push(candle);
            group.appendChild(candle);
        }

        return { el: group, candles };
    }

    export class CandleView {
        public element: SVGGElement;
        private candles: SVGGElement[] = [];
        private theme: ICandleTheme;
        private state: pxsim.LEDCandlesState;
        private changed = true;
        private animationFrame: number;

        constructor() {
            this.theme = { ...defaultCandleTheme };
            this.element = svg.elt("g", { class: "sim-candles" }) as SVGGElement;
            this.state = pxsim.ledCandlesState();
            this.initialize();
            this.startAnimation();
        }

        private initialize() {
            const { el, candles } = mkCandlesSvg(
                [0, 0],
                this.state.getCandleCount()
            );
            
            this.candles = candles;
            this.element.appendChild(el);
            
            // Initial update
            this.updateState();
        }

        private startAnimation() {
            const animate = () => {
                if (this.changed || this.state.hasChanged()) {
                    this.updateState();
                    this.changed = false;
                    this.state.clearChanged();
                }
                this.animationFrame = requestAnimationFrame(animate);
            };
            this.animationFrame = requestAnimationFrame(animate);
        }

        private stopAnimation() {
            if (this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
                this.animationFrame = undefined;
            }
        }

        public updateState() {
            if (!this.state) return;

            const count = Math.min(this.state.getCandleCount(), this.candles.length);
            
            for (let i = 0; i < count; i++) {
                const candleState = this.state.getCandleState(i);
                if (!candleState) continue;

                const { isLit, brightness, color } = candleState;
                const baseColor = color || this.theme.candleOn;
                
                // Update candle
                const candle = this.candles[i];
                svg.fill(candle, isLit ? baseColor : this.theme.candleOff);
                
                // Apply brightness/opacity
                candle.style.opacity = isLit ? brightness.toString() : '0';
            }
        }

        public updateTheme(theme?: Partial<ICandleTheme>) {
            if (theme) {
                this.theme = { ...defaultCandleTheme, ...theme };
                this.changed = true;
            }
        }

        public setPositions(positions: {x: number, y: number}[]) {
            positions.forEach((pos, i) => {
                if (i < this.candles.length) {
                    const candle = this.candles[i] as SVGCircleElement;
                    candle.cx.baseVal.value = pos.x;
                    candle.cy.baseVal.value = pos.y;
                }
            });
            this.changed = true;
        }

        public dispose() {
            this.stopAnimation();
            if (this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        }
    }
}