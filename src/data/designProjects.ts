export interface DesignProject {
  id: string;
  label: string;
  title: string;
  description: string;
  // Metadata fields (matching photo style)
  year?: string;
  location?: string;
  client?: string; // Company name or "Personal Project"
  specs?: string[];
  content?: string;
  codeSnippet?: string;
  images: { url: string; caption?: string }[];
  videos?: string[];
}

export const designProjects: DesignProject[] = [
  // 1. Aer1 System
  {
    id: "aer1-system",
    label: "Aer1 System",
    title: "Aer1 System",
    year: "2023–Present",
    location: "Boston, MA",
    client: "Aerflo",
    description: "2L of water per charge. As the most senior member of the mechanical engineering team, I helped bring a successfully prototyped design into serial production at a tier 1 asian CM and implemented many crucial document control and quality systems along the way.",
    content: `The system delivers high pressure CO2 (800+ psi) using a complex miniaturized manifold system. Given the pressures involved, we designed a quadruple redundant safety system to prevent over pressurization events.

The custom designed capsules include a novel refillable valve allowing each capsule to be re-filled and reused dozens of times over its lifetime.

My work at Aerflo has touched nearly every component in the product, across complex multi-action injection molded components, elastomers and softgoods, stamped & extruded metal, and blow molded plastic parts. This includes parts in the cap, bottle, CO2 cartridges, and other accessories.`,
    images: [],
    videos: ["//www.youtube.com/embed/qEbs4oX95wQ?wmode=opaque"],
  },
  // 2. Markforged FX10
  {
    id: "markforged-fx10",
    label: "Markforged FX10",
    title: "Markforged FX10",
    year: "2021–2024",
    location: "Watertown, MA",
    client: "Markforged",
    description: "In 2021 I began early R&D work with a small team on Markforged's next generation printer. The concept was a faster, larger, and more versatile industrial 3D printer - notably, with the ability to print both metal and composite filaments.",
    content: `Over the next 3 years, I led a team of 15+ mechanical, electrical, software, and systems engineers in the development of this printer. I personally architected the mechanical systems from concept industrial design drawings and led the team through multiple design / prototype rounds, eventually transitioning the design into production with a Tier 1 CM overseas.

The result was the FX10, a groundbreaking manufacturing tool.

The printer was a combination of several beautifully engineered systems, including a 60ºC actively heated chamber, dual nozzle composite print head, and high performance gantry capable of reaching 1m/s movement speeds.

We introduced many new systems in this printer, but the most ambitious was the vision system. A camera mounted on the back of the print head was used to take images during printing, allowing the existing AI fault detection engine, Blacksmith, to detect and correct print defects live.

Today, the FX10 is a best selling mid-range industrial 3D printer and is used in daily around the globe.`,
    images: [],
    videos: ["//www.youtube.com/embed/hjr0DHIjvnE?wmode=opaque"],
  },
  // 3. Markforged Metal X Gen 2
  {
    id: "markforged-metal-x-gen2",
    label: "Markforged Metal X Gen 2",
    title: "Markforged Metal X Gen 2 - Technical Lead",
    year: "2020–2021",
    location: "Watertown, MA",
    client: "Markforged",
    description: "After 3 years at Markforged (a 3D printing startup in Boston) I was made technical lead of the Metal X 3D printer. As a part of this role, I was tasked with leading the second generation refresh of the machine.",
    content: `This refresh included several functional and aesthetic changes as well as a recertification to a new safety standard in the EU (IEC 62368-3).

At a high level, the 3D printer works by printing a conventional filament with a high metal powder loading. This enables the printer to operate in an office environment without high temperature components or more dangerous powdered metal. After printing, the part goes through a 2 part de-binding process in an industrial de-greaser and high temperature sintering furnace.

Leading the project, I guided the team through the complete NPI process from design ideation, prototyping, testing & certification, production ramping, and launch in under a year while achieving an overall cost down on the BOM.

The second generation machine required the integration of a single fault tolerant safety system that electrically disconnected dangerous parts of the system once they became accessible through an open door. It also included an upgrade from a 4.3" internal display to 7" touch display on an arm - a design owned solely by me.

My responsibility as project leader also included:
• Safety system architecture and layout
• Design of complex and highly cosmetic sheet metal modules with integrated electronics
• Creation and maintenance a detailed program schedule and phase gate process documents
• Delivery of detailed designs and drawings to sourcing team for prototype builds
• Coordination and completion of safety and EMC compliance testing
• Writing and presentation of detailed status updates to engineering and executive leaders
• Release of final design packages to operations and sourcing teams for production ramp
• Oversight of pilot builds at factory in conjunction with operations and manufacturing teams

This project was an incredible learning experience for me. I had exposure to every level and detail of new product creation that is invaluable to my practical knowledge and skill of bringing a product to market.`,
    images: [],
  },
  // 4. Split Flap Clock
  {
    id: "split-flap-clock",
    label: "Split Flap Clock",
    title: "Split Flap Clock - Sony 8FC-69WA Restoration",
    year: "2022",
    location: "Boston, MA",
    client: "Personal Project",
    description: "I found a non-functioning Sony 8FC-69WA in a Connecticut thrift store. I've always loved the aesthetic and mechanisms in split flap clock displays so I removed the clock module and rebuilt it into one of my own.",
    content: `The teardown of the old clock was fascinating. It is unbelievable to me that a design like this was made at scale and made available so cheap. The density of components and complexity of design was well beyond what I could imagine was inside.

The clock uses a synchronous motor to keep time, using the 60Hz frequency of the incoming AC to spin at a constant rate. Despite my best efforts to repair it, the motor was dead, and no replacements were available online.

Without the original motor available, I designed a new interface for a spare stepper motor I had. I 3D printed the components and wired together a protoboard. The clock logic is run on an Arduino Nano and uses a quartz breakout module to keep accurate timing.

The timekeeping module was new to me in concept and practice. After hours of debugging why the clock couldn't keep time over 24 hours, I learned the hard way about how poor computers are at absolute timing. Just as fascinating was going a little deeper into the meaning of 'quartz' in time keeping. An extremely repeatable and precise frequency can be measured from the vibration of quartz crystal when a known electric current passes through it, keeping accurate time.

I also needed to implement a finicky error correction procedure because the 28BYJ-48 stepper motor I used has 2048 steps/revolution. Annoyingly, this didn't divide evenly into the 10 minutes per revolution of the clock driven gear (ending up with 204.8 steps/min). 205 steps/min ends up gaining a few minutes per week, and so every 5 minutes, a small step correction is made to make up for the accumulated 1 step (0.2*5) of error.

Once the code electronics were finalized, I enjoyed the raw design in the bare assembly and opted to not cover it with an outer case. The clock is a reliable timekeeper in my apartment to this day.`,
    images: [],
  },
  // 5. Automated Blinds V2
  {
    id: "automated-blinds-v2",
    label: "Automated Blinds V2",
    title: "Automated Blinds V2",
    year: "2023",
    location: "Boston, MA",
    client: "Personal Project",
    description: "This project is a continuation of my Automated Blinds V1 project where I repackaged the functionality into a more universal interface. My previous design only worked with a specific IKEA blind and mounted directly to the winding core.",
    content: `This new design works with any type of chain roller blind but retains all the same features any functionality: quiet actuation, discrete position control, voice activation through HomeKit integration.

The units are still hardwired into a central computer that manages the server connection and motor control.

I use these everyday to help me sleep. They automatically close when it's time for bed to block out light pollution from the street. At 6am they silently rise, allowing me to wake up naturally with the sun. A no comprimise solution.

All the board designs are unchanged. Only minor modifications to the original code in the V1 project were made to adjust to the new gear ratios. In the future, I'd like to design a bespoke PCBA to allow each unit to connect and manage its own movement without needing to be wired into a central computer. I may also look to cost optimize the assembly by removing the shafts and bearings, and integrating features into the printed components that would act as plastic bearing surfaces.

The design consists of a pancake stepper motor driving the blinds through a set of gears that increase the overall torque output of the device. A magnetic cover hides the motor and allows for sufficient airspace for cooling. The chain is driven by a custom drive interface that captures and pulls the individual chain balls.`,
    images: [],
  },
  // 6. 5DOF Robotic Arm
  {
    id: "5dof-robotic-arm",
    label: "5DOF Robotic Arm",
    title: "5DOF Robotic Arm - Senior Year Capstone",
    year: "2018",
    location: "Boston, MA",
    client: "Northeastern University",
    description: "My senior year capstone was an incredible deep dive into electromechanical design and precision systems. My group decided to complete a project from the human safe soft robotics lab at Northeastern University with mentorship from John Whitney, PhD.",
    content: `The project was the development of a 5DOF robotic arm with an exoskeleton interface designed to make driving the arm as intuitive as possible. As a part of the input interface, the exoskeleton would be able to deliver haptic feedback to the user based on the environmental conditions of the remote arm.

The task was split up among the group members through ownership of arm design, exoskeleton design, electrical hardware design, and software interface. I was personally responsible for the entirety of the robotic arm design shown.

This arm design achieved all 5 degrees of freedom required through a modular differential joint at the elbow and shoulder as well as a single rocker providing the 3rd degree of freedom in the shoulder joint. Each differential module was driven by two high torque brushless DC motors controlled with a custom driver board with magnetic axial encoding and real-time positional control.

The differential joint was an ultra dense design with nearly all structural components designed for 3D printing in order to drive shorter lead times and lighter actuated weights. The design went through several iterations, each making the assembly lighter and more compact.

The final design of the arm had a mere 12kg of actuated weight and could travel at up to 0.5m/s. The full system was designed in only 6 months and was proven operational on the bench. Motor controller bugs prevented us from doing live demonstrations on presentation day, but the exoskeleton was setup to transmit its input to a live simulation of the arm output on a computer.`,
    images: [],
  },
  // 7. Hilbert Curve Desk Art
  {
    id: "hilbert-curve-desk-art",
    label: "Hilbert Curve Desk Art",
    title: "Hilbert Curve Desk Art",
    year: "2021",
    location: "Boston, MA",
    client: "Personal Project",
    description: "A Hilbert Curve is a continuous fractal space-filling curve first described by the German mathematician David Hilbert in 1891. It belongs to a family of space filling curves that create very distinct and interesting fractal patterns.",
    content: `This particular project came to me by way of my coworker Angus who had printed a large copy of the curve. He inserted a small ball bearing which you could guide through the whole maze by tiling the part.

I designed a 2 DOF actuator using a single motor which rotated a ramped surface. A combination of pins and magnets keep the maze rotationally constrained - only allowing it to inherit the angle of the ramp.`,
    images: [],
  },
  // 8. Lamp Restoration
  {
    id: "lamp-restoration",
    label: "Lamp Restoration",
    title: "Lamp Restoration",
    year: "2023",
    location: "Boston, MA",
    client: "Personal Project",
    description: "I was digging through some old boxes in my mom's attic recently and came across this clip on lamp that I really enjoyed the style of. The clip had snapped off so I decided to redesign a new stand for it, one more suited to sitting on a table.",
    content: `I played around with a few different styles and ended up with this round ribbed design that turned out really well in a matte red. The new base is a 2 part 3D printed assembly (2 parts so I didn't need to disconnect the plug). I also cut an O-ring and ran it through a channel I included on the bottom face to keep it from sliding around on surfaces.

You can see the original lamp on the left, and some nice shots of the finished lamp on the right and below.`,
    images: [],
  },
  // 9. Tile Shelf
  {
    id: "tile-shelf",
    label: "Tile Shelf",
    title: "Tile Shelf",
    year: "2022",
    location: "Boston, MA",
    client: "Personal Project",
    description: "The tile shelf is a design inspired by some designs I saw online, but built custom for my own space.",
    content: `I designed a simple L-shape profile with dovetail joints to extend the length beyond my printers build volume. I applied glue to the joints to make them permanent.

Once assembled, I used grout to secure the tiles to the part and fill the gaps.

I use the tile shelf in my kitchen as a space for teas and hanging objects. I have made a few other smaller sizes for friends and family as gifts.`,
    images: [],
  },
  // 10. Automated Blind Conversion
  {
    id: "automated-blind-conversion",
    label: "Automated Blind Conversion",
    title: "Automated Blind Conversion Tutorial",
    year: "2020",
    location: "Boston, MA",
    client: "Personal Project",
    description: "A step-by-step guide to converting manual blinds into smart, automated window coverings using off-the-shelf components.",
    content: `This tutorial walks through the process of converting standard manual blinds into automated smart blinds. The project uses readily available components and can be completed in a weekend.

## Materials Needed
- Stepper motor (NEMA 17 recommended)
- ESP32 or ESP8266 microcontroller
- Motor driver (A4988 or TMC2209)
- 3D printed mounting brackets
- Power supply (12V 2A)

## Assembly Process
The conversion process involves designing and printing custom brackets that interface between the motor and your existing blind mechanism. The key is creating a robust connection that can handle the torque required to lift the blinds.`,
    codeSnippet: `// ESPHome configuration for blind control
esphome:
  name: smart-blinds
  platform: ESP32
  board: esp32dev

stepper:
  - platform: a4988
    id: blind_stepper
    step_pin: GPIO18
    dir_pin: GPIO19
    max_speed: 250 steps/s
    acceleration: 100 steps/s^2
    deceleration: 100 steps/s^2

cover:
  - platform: template
    name: "Window Blinds"
    device_class: blind
    open_action:
      - stepper.set_target:
          id: blind_stepper
          target: 2000
    close_action:
      - stepper.set_target:
          id: blind_stepper
          target: 0
    stop_action:
      - stepper.set_target:
          id: blind_stepper
          target: !lambda 'return id(blind_stepper).current_position;'
    position_action:
      - stepper.set_target:
          id: blind_stepper
          target: !lambda 'return (2000 * pos);'`,
    images: [],
  },
  // 11. Candle Molding
  {
    id: "candle-molding",
    label: "Candle Molding",
    title: "Candle Molding",
    year: "2023",
    location: "Boston, MA",
    client: "Personal Project",
    description: "A short curiosity project where I attempted to mold taper candles with interesting forms that I designed.",
    content: `Starting with the candle design, I engineered molds over several iterations, and successfully molded candle from beeswax which I gave as holiday gifts in 2023.

For some of the more delicate designs, I also designed custom silicone molds, which I poured and cured in my apartment.`,
    images: [],
  },
  // 12. METAR Map
  {
    id: "metar-map",
    label: "METAR Map",
    title: "Live METAR Map",
    year: "2019",
    location: "Boston, MA",
    client: "Personal Project",
    description: "The live METAR map was originally created by prueker on github. I built my code based on his and designed my own electronics and mounting system that is a bit more robust than the original design and is able to accommodate 50 LEDs rather than 20.",
    content: `The map uses a Raspberry Pi to pull weather data (in the form of METAR's - Meteorological Terminal Aviation Routine Weather Reports) posted by the FAA on aviationweather.gov. The Pi then displays this weather on 50 individually addressable LEDs using the neopixel library.

The colors correspond to different weather reported by airports included in the map where:
• Green = VFR (visual flight rules - good weather)
• Blue = MVFR (marginal visual flight rules - okay weather, getting worse)
• Red = IFR (instrument flight rules - bad weather)
• Magenta = LIFR (low instrument flight rules - even worse weather)

The wiring is fairly simple. A barrel jack input brings 12v in from the wall and is wired directly into the LED power. An adjustable buck converter steps the voltage down to 5v for the Raspberry Pi. The Pi sends commands to the LEDs through one of its GPIO headers.

I also designed some mounts for the corners of the shadow box that stood the frame away from the wall to make more space for the LED wiring and to provide mounting positions for hanging it on the wall.`,
    images: [],
  },
];

export const getProjectById = (id: string): DesignProject | undefined => {
  return designProjects.find(project => project.id === id);
};
