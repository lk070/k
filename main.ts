let Taster = 0
led.enable(false)
basic.forever(function () {
    if (Taster == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(200)
    }
    if (Taster == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1 && Taster == 0) {
        Taster = 1
        basic.pause(200)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1 && Taster == 1) {
        Taster = 0
        basic.pause(200)
    }
})
