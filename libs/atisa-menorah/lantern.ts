//% color="#FF5533" icon="\uf06d" weight=90
namespace lantern {
    let strip: light.LightStrip;
    
    // Initialize the NeoPixel strip if not already done
    function initStrip() {
        if (!strip) {
            // Create a NeoPixel strip with 7 LEDs (one for each candle)
            // Using pin P0 as the default data pin for the NeoPixel strip
            strip = light.createStrip(pins.D0, 7);
            strip.setBrightness(255);
        }
        return strip;
    }

    /**
     * Lights up a single candle with the specified color
     * @param index which candle to light (0-6)
     * @param color RGB color of the candle (e.g., 0xFF0000 for red)
     */
    //% block="light candle at $index with color $color"
    //% index.min=0 index.max=6
    //% color.shadow="colorNumberPicker"
    export function lightCandle(index: number, color: number): void {
        const s = initStrip();
        if (index >= 0 && index < s.length()) {
            s.setPixelColor(index, color);
            s.show();
        }
    }

    /**
     * Lights up all candles with the specified color
     * @param color RGB color for all candles (e.g., 0xFF0000 for red)
     */
    //% block="light all candles with color $color"
    //% color.shadow="colorNumberPicker"
    export function lightAllCandles(color: number): void {
        const s = initStrip();
        s.setAll(color);
        s.show();
    }

    /**
     * Turns off all candles
     */
    //% block="clear all candles"
    export function clearCandles(): void {
        lightAllCandles(0); // 0 means off
    }

    /**
     * Sets the brightness of the candles
     * @param brightness a number between 0 (off) and 255 (full brightness)
     */
    //% block="set candle brightness to $brightness"
    //% brightness.min=0 brightness.max=255
    export function setBrightness(brightness: number): void {
        const s = initStrip();
        s.setBrightness(brightness);
        s.show();
    }
}

// // Include the light namespace for NeoPixel support
// //% block="light"
// namespace light {
//     export function createStrip(pin: DigitalPin, numleds: number): NeoPixelStrip {
//         // This will be implemented by the NeoPixel extension
//         return null;
//     }

//     export class NeoPixelStrip {
//         public setPixelColor(index: number, rgb: number): void {}
//         public setAll(rgb: number): void {}
//         public show(): void {}
//         public setBrightness(brightness: number): void {}
//         public length(): number { return 0; }
//     }
// }
