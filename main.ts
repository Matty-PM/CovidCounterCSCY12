let customers = 0
input.onButtonPressed(Button.A, function () {
    customers += 1
    if (customers <= 5) {
        basic.showString("Y")
        images.iconImage(IconNames.Yes).showImage(0)
    } else {
        basic.showString("Y")
        images.iconImage(IconNames.No).showImage(0)
    }
})
