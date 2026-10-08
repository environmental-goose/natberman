---
title: "Live METAR Map"
label: "METAR Map"
active: true
year: "2019"
location: "Boston, MA"
client: "Personal Project"
order: 120
---

The live METAR map was originally created by prueker on github. I built my code based on his and designed my own electronics and mounting system that is a bit more robust than the original design and is able to accommodate 50 LEDs rather than 20.
    
    The map uses a Raspberry Pi to pull weather data (in the form of METAR's - Meteorological Terminal Aviation Routine Weather Reports) posted by the FAA on aviationweather.gov. The Pi then displays this weather on 50 individually addressable LEDs using the neopixel library.

The colors correspond to different weather reported by airports included in the map where:

  → Green = VFR (visual flight rules - good weather)
  → Blue = MVFR (marginal visual flight rules - okay weather, getting worse)
  → Red = IFR (instrument flight rules - bad weather)
  → Magenta = LIFR (low instrument flight rules - even worse weather)

The wiring is fairly simple. A barrel jack input brings 12v in from the wall and is wired directly into the LED power. An adjustable buck converter steps the voltage down to 5v for the Raspberry Pi. The Pi sends commands to the LEDs through one of its GPIO headers.

I also designed some mounts for the corners of the shadow box that stood the frame away from the wall to make more space for the LED wiring and to provide mounting positions for hanging it on the wall.
