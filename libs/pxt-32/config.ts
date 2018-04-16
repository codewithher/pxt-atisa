
namespace config {
    export const PIN_D13 = DAL.P0_11;
    export const PIN_LED = DAL.P0_11;
    export const PIN_SDA = DAL.P0_28;
    export const PIN_SCL = DAL.P0_2;
    export const PIN_SCK = DAL.P0_2;
    export const PIN_MISO = DAL.P0_30;
    export const PIN_MOSI = DAL.P0_29;
    export const PIN_RX = DAL.P0_30;
    export const PIN_TX = DAL.P0_29;

    export const PIN_DISPLAY_MOSI = DAL.P0_3;
    export const PIN_DISPLAY_MISO = -1;
    export const PIN_DISPLAY_SCK = DAL.P0_4;
    export const PIN_DISPLAY_CS = DAL.P0_28;
    export const PIN_DISPLAY_DC = DAL.P0_29;

    export const DISPLAY_WIDTH = 128;
    export const DISPLAY_HEIGHT = 128;
}


game.setWaitAnyKey(keys.pauseUntilAnyKey)