pins.LED.digitalWrite(true);

let on = false;
pause(1000);

for(let i = 1000; i > 0; i -= 50) {
    pins.LED.digitalWrite(on = !on);
    music.playTone(440, i)
}

for(let i = 0; i < 1000; i += 20){
    pins.LED.digitalWrite(on = !on);
    music.playTone(440, i)
}
