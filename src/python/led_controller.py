#import pigpio

pi = pigpio.pi()

RED_PIN = "" #GPIO Pin Number
GREEN_PIN = "" #GPIO Pin Number
BLUE_PIN = "" #GPIO Pin Number

pi.set_mode(RED_PIN, pigpio.OUTPUT)
pi.set_mode(GREEN_PIN, pigpio.OUTPUT)
pi.set_mode(BLUE_PIN, pigpio.OUTPUT)

def SetLED(r, g, b):
    pi.set_PWM_dutycycle(RED_PIN, r)
    pi.set_PWM_dutycycle(GREEN_PIN, g)
    pi.set_PWM_dutycycle(BLUE_PIN, b)

def cleanup():
    pi.stop()

    