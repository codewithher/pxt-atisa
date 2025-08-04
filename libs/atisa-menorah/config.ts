namespace config {
    // Pins based on Trinket M0 layout
    export const PIN_NEOPIXEL = DAL.PA02; // D1 controls all Menorah LEDs

    // Other optional pins (define as needed)
    export const PIN_A0 = DAL.PA02;
    export const PIN_A1 = DAL.PA09;
    export const PIN_A2 = DAL.PA08;
    export const PIN_A4 = DAL.PA06;
    export const PIN_D13 = DAL.PA10;

    // If using buttons or other parts:
    export const PIN_BUTTON_A = DAL.PA07; // Optional, for a button on D3 for example

    // Simulator configuration
    export const BOARD_NAME = "Menorah Trinket";
    export const BOARD_ID = "menorah-trinket-v1";
    export const PIN_DISPLAY_NAME = "menorah";
    export const NUM_NEOPIXELS = 7; // Or however many LEDs your Menorah has

}




/*

namespace config {
    export const PIN_A0 = DAL.PA02;
    export const PIN_D1 = DAL.PA05;
    export const PIN_D2 = DAL.PA06;
    export const PIN_D3 = DAL.PA09;
    export const PIN_D4 = DAL.PA08;

    export const PIN_SCL = DAL.PA09;
    export const PIN_SDA = DAL.PA08;
    export const PIN_RX = DAL.PA09;
    export const PIN_TX = DAL.PA08;
    export const PIN_MISO = DAL.PA06;
    export const PIN_MOSI = DAL.PA05;
    export const PIN_SCK = DAL.PA09;

    export const PIN_LED0 = DAL.PA05;
    export const PIN_LED1 = DAL.PA06;
    export const PIN_LED2 = DAL.PA08;
    export const PIN_LED3 = DAL.PA09;
    export const PIN_LED4 = DAL.PA02;
    export const PIN_LED5 = DAL.PA04;
    export const PIN_LED6 = DAL.PA07;
    export const PIN_LED = DAL.PA02;

    export const PIN_NEOPIXEL = DAL.PA01;
    export const NUM_NEOPIXEL = 1;
}


*/