def on_button_pressed_a():
    music.play_melody("- - - - - - - - ", 120)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    if True:
        music.play_melody("- - - - - - - - ", 120)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)
