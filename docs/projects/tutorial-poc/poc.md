# Tutorial POC

```validation.global
# BlocksExistValidator
```

## Step 1: Buttons

Primary button element: `|primary button|`
Secondary button element `||secondary button||`.

## Step 2: Blocks and blocks hint

Get a `||input:temperature||` block and place it in the value slot of `||basic:show number||`.

```blocks
forever(function() {
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
```

## Step 3: Typescript and ts hint

This is an example of typescript hint

```typescript
sprites.onOverlap(
  SpriteKind.Player,
  SpriteKind.Enemy,
  function (sprite, otherSprite) {
    otherSprite.destroy();
  }
);
```

## Step 4: Validation

This code is supposed to validate user input

```blocks
// @validate-exists
basic.showString("HELLO!")
```
