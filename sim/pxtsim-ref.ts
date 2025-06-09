/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxt.d.ts" />
/// <reference path="../node_modules/pxt-common-packages/libs/base/configkeys.h" />

export namespace pxsim {
    export namespace DAL {
        // Device pin event types
        export const DEVICE_PIN_EVT_PULSE_HI = 1;
        export const DEVICE_PIN_EVT_PULSE_LO = 2;
        
        // Pin configuration constants
        export const CFG_PIN_NAME_MSK = 0x0000ffff;
        export const CFG_PIN_CONFIG_MSK = 0xffff0000;
        export const CFG_PIN_CONFIG_ACTIVE_LO = 0x10000;
        
        // Configuration keys
        export const CFG_PIN_LED = 13;
        export const CFG_PIN_NEOPIXEL = 20;
        export const CFG_PIN_RX = 21;
        export const CFG_PIN_TX = 28;
        export const CFG_PIN_SCL = 24;
        export const CFG_PIN_SDA = 25;
        export const CFG_PIN_SCK = 23;
        export const CFG_PIN_MISO = 18;
        export const CFG_PIN_MOSI = 19;
        
        // Add other constants as needed
    }
}
