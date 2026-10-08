---
title: "Split Flap Clock Restoration"
label: "Split Flap Clock"
active: true
year: "2025"
location: "Brooklyn, NY"
client: "Personal Project"
order: 40
---

I found a non-functioning Sony 8FC-69WA in a Connecticut thrift store and couldn't pass it up—I’ve always loved the mechanical soul of split-flap displays.
    
After a fascinating teardown that revealed an unbelievable density of earl electronics design, I decided to gut the dead internals and modernize the drive system while keeping the original aesthetic.

The original synchronous motor, which relied on the 60Hz AC frequency for timing, was beyond repair. To bring the clock back to life, I designed a custom interface to adapt a 28BYJ-48 stepper motor to the original clock modules.

The logic is handled by an Arduino Nano paired with a quartz RTC breakout module for precision. 

The build was a deep dive into the nuances of absolute timing. I learned the hard way about the limitations of software-based timekeeping and the physics of quartz vibration.

I also had to get creative with the code to account for the stepper motor’s 2048 steps/revolution; because this didn't divide evenly into the 10-minute rotation of the drive gear (204.8 steps/min), I implemented a periodic error-correction routine.

Every five minutes, the code executes a small step correction to offset the accumulated error, keeping the clock accurate to the second.

I eventually decided to skip the outer case and leave the raw assembly exposed. It’s been a reliable (and noisy) fixture in my apartment ever since.
