/// <reference path="../../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim.visuals {
    export interface ICandleTheme {
        candleOn?: string;
        candleOff?: string;
    }

    export const defaultCandleTheme: ICandleTheme = {
        candleOn: "#ff8c1a",  // Bright orange for lit candles
        candleOff: "#4d4d4d"  // Dark gray for unlit candles
    };

    export class CandleView {
        public element: SVGGElement;
        private candles: SVGCircleElement[] = [];
        private theme: ICandleTheme;
        private board: pxsim.DalBoard;

        constructor() {
            this.theme = {...defaultCandleTheme};
            this.element = svg.elt("g", { class: "sim-candles" }) as SVGGElement;
            this.board = (window as any).board as pxsim.DalBoard;
            this.createCandles();
        }

        private createCandles() {
            // Create 7 candles (6 regular + 1 shamash, but we'll handle all the same for now)
            for (let i = 0; i < 7; i++) {
                const candle = svg.elt("circle", {
                    r: 15,
                    class: "sim-candle",
                    fill: this.theme.candleOff
                }) as SVGCircleElement;

                // Position will be set by the parent component
                this.candles.push(candle);
                this.element.appendChild(candle);
            }
        }

        private updateCandles() {
            if (!this.candles.length) return;
            
            // Update all candles to their current theme state
            this.candles.forEach(candle => {
                // If we have a board and it's initialized, use the NeoPixel state
                if (this.board) {
                    const index = this.candles.indexOf(candle);
                    const neopixel = this.board.neopixelState(index);
                    if (neopixel) {
                        const rgb = neopixel.pixelColor(0);
                        if (rgb && (rgb[0] > 0 || rgb[1] > 0 || rgb[2] > 0)) {
                            // If pixel has color, use it
                            svg.fill(candle, `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
                            return;
                        }
                    }
                }
                
                // Otherwise use the theme's off color
                svg.fill(candle, this.theme.candleOff);
            });
        }

        public updateTheme(theme?: ICandleTheme) {
            if (theme) {
                this.theme = {...defaultCandleTheme, ...theme};
            }
            this.updateCandles();
        }

        public updateState() {
            if (!this.board) return;
    
            const neopixel = this.board.neopixelState(0); // Get the single NeoPixel strip
            if (!neopixel) return;
    
            this.candles.forEach((candle, index) => {
                const rgb = neopixel.pixelColor(index); // Get color for this candle's position
                if (rgb && (rgb[0] > 0 || rgb[1] > 0 || rgb[2] > 0)) {
                    svg.fill(candle, `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
                } else {
                    svg.fill(candle, this.theme.candleOff);
                }
            });
        }

        public setPositions(positions: {x: number, y: number}[]) {
            positions.forEach((pos, index) => {
                if (index < this.candles.length) {
                    this.candles[index].setAttribute('cx', pos.x.toString());
                    this.candles[index].setAttribute('cy', pos.y.toString());
                }
            });
        }
    }
}