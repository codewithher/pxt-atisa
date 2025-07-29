namespace config {
    // Map physical pins to logical pins using PXT core constants
    // These map to the definitions in atisa_menorah.h
    
    // Candle pins
    export const CANDLE0 = DAL.CFG_CANDLE0;
    export const CANDLE1 = DAL.CFG_CANDLE1;
    export const CANDLE2 = DAL.CFG_CANDLE2;
    export const CANDLE3 = DAL.CFG_CANDLE3;
    export const CANDLE4 = DAL.CFG_CANDLE4;
    export const CANDLE5 = DAL.CFG_CANDLE5;
    export const CANDLE6 = DAL.CFG_CANDLE6;
    
    // Power pins
    export const VBAT = DAL.CFG_PIN_VBAT;
    
    // Analog/Digital pins
    export const PIN_A0 = DAL.CFG_PIN_A0;
    export const PIN_A1 = DAL.CFG_PIN_A1;
    export const PIN_A2 = DAL.CFG_PIN_A2;
    export const PIN_A3 = DAL.CFG_PIN_A3;
    export const PIN_A4 = DAL.CFG_PIN_A4;
    
    // Digital pins
    export const PIN_D0 = DAL.CFG_PIN_D0;
    export const PIN_D1 = DAL.CFG_PIN_D1;
    export const PIN_D2 = DAL.CFG_PIN_D2;
    export const PIN_D3 = DAL.CFG_PIN_D3;
    export const PIN_D4 = DAL.CFG_PIN_D4;
    
    // I2C pins
    export const PIN_SDA = DAL.CFG_PIN_SDA;
    export const PIN_SCL = DAL.CFG_PIN_SCL;
    
    // SPI pins
    export const PIN_MOSI = DAL.CFG_PIN_MOSI;
    export const PIN_MISO = DAL.CFG_PIN_MISO;
    export const PIN_SCK = DAL.CFG_PIN_SCK;
    
    // Built-in LED and Neopixel
    export const PIN_LED = DAL.CFG_PIN_LED;
    export const PIN_NEOPIXEL = DAL.CFG_PIN_NEOPIXEL;
    export const NUM_NEOPIXEL = 1;
    // additional pins to look for: SPI, I2C, Flash
}