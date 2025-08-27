namespace config {
    export const PIN_NEOPIXEL = DAL.PB23;
    export const NUM_NEOPIXELS = 7;
    
    export const PIN_ONBOARD_DOTSTAR_DATA = DAL.PA00;
    export const PIN_ONBOARD_DOTSTAR_CLOCK = DAL.PA01;
    export const NUM_ONBOARD_DOTSTARS = 1;

    export const PIN_D0 = DAL.PA08;
    export const PIN_D1 = DAL.PA02;
    export const PIN_D2 = DAL.PA09;
    export const PIN_D3 = DAL.PA07;
    export const PIN_D4 = DAL.PA06;
    export const PIN_D13 = DAL.PA10;

    export const PIN_A0 = PIN_D1;
    export const PIN_A1 = PIN_D2;
    export const PIN_A3 = PIN_D3;
    export const PIN_A2 = PIN_D4;
    export const PIN_A4 = PIN_D0;

    export const PIN_LED = DAL.PA10;

    export const PIN_SDA = PIN_D0;
    export const PIN_SCL = PIN_D2;

    export const PIN_SCK = PIN_D3;
    export const PIN_MISO = PIN_D2;
    export const PIN_MOSI = PIN_D4;

    export const PIN_RX = PIN_D3;
    export const PIN_TX = PIN_D4;

    // not supported
    export const PIN_JACK_TX = PIN_TX;
}





// namespace config {
//     // Pins based on Trinket M0 layout
//     export const PIN_NEOPIXEL = DAL.PA02; // D1 controls all Menorah LEDs

//     // Other optional pins (define as needed)
//     export const PIN_A0 = DAL.PA02;
//     export const PIN_A1 = DAL.PA09;
//     export const PIN_A2 = DAL.PA08;
//     export const PIN_A4 = DAL.PA06;
//     export const PIN_D13 = DAL.PA10;

//     // If using buttons or other parts:
//     export const PIN_BUTTON_A = DAL.PA07; // Optional, for a button on D3 for example

//     // Simulator configuration
//     export const BOARD_NAME = "Menorah Trinket";
//     export const BOARD_ID = "menorah-trinket-v1";
//     export const PIN_DISPLAY_NAME = "menorah";
//     export const NUM_NEOPIXELS = 7; // Or however many LEDs your Menorah has

// }




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