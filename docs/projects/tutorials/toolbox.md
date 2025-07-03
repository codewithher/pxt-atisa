# Toolbox


## Introduction @showdialog

The @showdialog annotation is used to show a dialog when the project is opened.

## Template block

The `template` codeblock header are used as a reset point for the tutorial.

```template
forever(function () {
    pixel.setColor(0xff0000)
    music.baDing.play()
})
```

## Blocks block

The `blocks` codeblock header is used to limit the blocks that are available in
the toolbox. Instead of using a config file, the available blocks are inferred.

```blocks
forever(function() {
    pixel.setColor(0xff0000)
    music.baDing.play()
})
```

## Image block

Images can be used as part of the tutorial in the panel.

![A breadboard with a LED turned off](/static/projects/digital-io/blinky/off.png)


## Blocks reference

Blocks can be referenced 

Add another ``||blocks:pause||`` and ``||pins:digital write||`` to create a blinking effect.
Make sure the digital write is **HIGH**.

```blocks
forever(function() {
    pins.D0.digitalWrite(false)
    pause(500)
    pins.D0.digitalWrite(true)
    pause(500)    
})
```

Play with the duration in your pauses to create different patterns.

## Config block

Buttons can also be referenced. Look at the simulator and make sure your program works as expected. 

If you have a @boardname@, press ``|Download|`` and follow the instruction to get your code on your device.

Click on the **wrench** icon under the simulator to get detailed breadboarding instructions.

![The wrench button](/static/projects/digital-io/blinky/wrench.png)

```config
feature=uf2
feature=pind0
```
