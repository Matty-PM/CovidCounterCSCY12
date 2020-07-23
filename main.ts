//Determines the value of customers and sets the customer value to zero
//Limit determines the max number of partrons within the store
let customers = 0
let limit = 5
//Adding of patrons within the store
input.onButtonPressed(Button.A, function () {
    customers += 1
    //If customers equal to or less than than allow addition
    if (customers <= limit) {
        basic.showString("Y")
        images.iconImage(IconNames.Yes).showImage(0)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showNumber(customers)
        basic.clearScreen()
    //If customer count is greater than 'limit' alert
    //Value of 'limit' can change
    } else if (customers > limit) {
        while (true) {
            images.iconImage(IconNames.No).showImage(0)
            basic.showNumber(customers)
            music.playTone(131, music.beat(BeatFraction.Whole))
        }
    //
    } else {
        images.iconImage(IconNames.No).showImage(0)
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.showNumber(customers)
        basic.clearScreen()
    }
})
//Removing of patrons within the store
input.onButtonPressed(Button.B, function () {
    //Customer amount cannot be lower than zero but if greater than can remove
    if (customers > 0) {
        customers += -1
        images.iconImage(IconNames.No).showImage(0)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showNumber(customers)
        basic.clearScreen()
    //Alerts user customer number is zero
    } else {
        basic.showNumber(0)
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.clearScreen()
    }
})

