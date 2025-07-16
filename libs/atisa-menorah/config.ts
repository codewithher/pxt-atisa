
namespace config {
    // Onboard DotStar LED
    export const PIN_ONBOARD_DOTSTAR_DATA = DAL.PA00;
    export const PIN_ONBOARD_DOTSTAR_CLOCK = DAL.PA01;
    export const NUM_ONBOARD_DOTSTARS = 1;

    // Digital pins
    export const PIN_D0 = DAL.PA08;
    export const PIN_D1 = DAL.PA02;
    export const PIN_D2 = DAL.PA09;
    export const PIN_D3 = DAL.PA07;
    export const PIN_D4 = DAL.PA06;
    export const PIN_D13 = DAL.PA10;

    // Analog pins
    export const PIN_A0 = PIN_D1;
    export const PIN_A1 = PIN_D2;
    export const PIN_A2 = PIN_D4;
    export const PIN_A3 = PIN_D3;
    export const PIN_A4 = PIN_D0;

    // LED
    export const PIN_LED = PIN_D13;

    // I2C pins
    export const PIN_SDA = PIN_D0;
    export const PIN_SCL = PIN_D2;

    // SPI pins
    export const PIN_SCK = PIN_D3;
    export const PIN_MISO = PIN_D2;
    export const PIN_MOSI = PIN_D4;

    // UART pins
    export const PIN_RX = PIN_D3;
    export const PIN_TX = PIN_D4;

    // Neopixel configuration
    export const PIN_NEOPIXEL = DAL.PB23;
    export const NUM_NEOPIXELS = 7; // 7 candles + 1 shamash

    // Not supported
    export const PIN_JACK_TX = PIN_TX;
}
