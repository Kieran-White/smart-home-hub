    import pigpio
    import sys

    pi = pigpio.pi()

    RED_PIN = 25 #GPIO Number
    GREEN_PIN = 24 #GPIO Number
    BLUE_PIN = 23 #GPIO Number

    pi.set_mode(RED_PIN, pigpio.OUTPUT)
    pi.set_mode(GREEN_PIN, pigpio.OUTPUT)
    pi.set_mode(BLUE_PIN, pigpio.OUTPUT)

    def SetLED(hexcode):
        r, g, b = hex_to_rgb(hexcode)
        pi.set_PWM_dutycycle(RED_PIN, r)
        pi.set_PWM_dutycycle(GREEN_PIN, g)
        pi.set_PWM_dutycycle(BLUE_PIN, b)

    def cleanup():
        pi.stop()

    def hex_to_rgb(hexcode): #Gotta flip cause common anode LED
        hexcode = hexcode.lstrip('#')
        red = 255 - int(hexcode[0:2], 16)
        green = 255 - int(hexcode[2:4], 16)
        blue = 255 - int(hexcode[4:6], 16)

        return red, green, blue

    if __name__ == "__main__":
        args = sys.argv[1:]
        SetLED(*args)
