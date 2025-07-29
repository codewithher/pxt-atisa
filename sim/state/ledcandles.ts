/// <reference path="../../node_modules/pxt-core/built/pxtsim.d.ts"/>

console.log("LED Candles state module loaded");

namespace pxsim.lantern {
    // Represents the state of an individual candle
    export interface CandleState {
        isLit: boolean;
        brightness: number;
        color?: string; // RGB color string (e.g., "#FF0000" for red)
    }

    // Manages the state of all LED candles
    export class LEDCandlesState {
        private candles: CandleState[] = [];
        private changed = true;
        private maxCandles: number;

        constructor(maxCandles: number = 9) {
            this.maxCandles = maxCandles;
            this.initializeCandles();
        }

        private initializeCandles() {
            this.candles = [];
            for (let i = 0; i < this.maxCandles; i++) {
                this.candles.push({
                    isLit: false,
                    brightness: 1.0,
                    color: "#FFA500" // Default to orange (candle color)
                });
            }
            this.changed = true;
        }

        // Set the state of a specific candle
        setCandleState(index: number, isLit: boolean, brightness: number = 1.0, color?: string): void {
            if (index < 0 || index >= this.maxCandles) return;
            
            const candle = this.candles[index];
            if (candle.isLit !== isLit || 
                candle.brightness !== brightness || 
                (color && candle.color !== color)) {
                
                candle.isLit = isLit;
                candle.brightness = Math.max(0, Math.min(1.0, brightness)); // Clamp between 0 and 1
                if (color) candle.color = color;
                this.changed = true;
            }
        }

        // Toggle a candle's lit state
        toggleCandle(index: number): void {
            if (index < 0 || index >= this.maxCandles) return;
            const candle = this.candles[index];
            this.setCandleState(index, !candle.isLit, candle.brightness, candle.color);
        }

        // Set all candles to a specific state
        setAllCandles(isLit: boolean, brightness: number = 1.0, color?: string): void {
            this.candles.forEach((candle, index) => {
                this.setCandleState(index, isLit, brightness, color);
            });
        }

        // Get the current state of all candles
        getCandleStates(): CandleState[] {
            return [...this.candles]; // Return a copy to prevent direct modification
        }

        // Get the state of a specific candle
        getCandleState(index: number): CandleState | undefined {
            if (index < 0 || index >= this.maxCandles) return undefined;
            return { ...this.candles[index] }; // Return a copy
        }

        // Check if any candle state has changed
        hasChanged(): boolean {
            return this.changed;
        }

        // Clear the changed flag
        clearChanged(): void {
            this.changed = false;
        }

        // Get the number of candles
        getCandleCount(): number {
            return this.maxCandles;
        }
    }

    // Register the LED candles state with the runtime
    export function ledCandlesState(): LEDCandlesState {
        const b = board() as any;
        if (!b.ledCandlesState) {
            // If not initialized yet, try to get it from the DalBoard instance
            if (b && b.board && b.board.ledCandlesState) {
                b.ledCandlesState = b.board.ledCandlesState;
            } else {
                console.warn("LED Candles state not initialized yet");
                return undefined;
            }
        }
        return b.ledCandlesState as LEDCandlesState;
    }
}

// Register the LED candles state with the board
namespace pxsim.board {
    export interface CommonBoard {
        ledCandlesState: pxsim.LEDCandlesState;
    }
}
