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
    year: "2023–2025",
    location: "Brooklyn, NY",
    client: "Aerflo",
    description:"",
    content: `The Aer1 device is a novel portable water carbonating system that uses custom CO2 capsules to carbonate up to 2L of water per charge.
    
As the Lead Mechanical Engineer, I was responsible for evolving a rudimentary prototype into a production-ready consumer device. This involved scaling production at a Tier-1 Asian CM and implementing the company’s internal document control and quality systems from the ground up.

The system delivers high-pressure CO2 (800+ psi) through a complex injection molded manifold. To manage these pressures, I designed a quadruple-redundant safety system to protect the user across all possible use cases and misuse.

My work also included the design of the custom capsules, which feature a novel refillable valve and a precision-tuned membrane burst disc.

This first of it's kind refillable architecture allows capsules to be reused and refilled up to 60 times, significantly reducing the carbon footprint of the system compared to single use cans.

My work at Aerflo has touched nearly every component in the product ecosystem, including complex multi-action injection molded components, elastomers and softgoods, stamped & machined metal, and blow-molded plastic parts. 


Key Techanical Achievements:

  → Led mechanical development for a 100k+ unit/yr device, coordinating product definition, design execution, and production ramp.

  → Achieved a 28% COGS reduction on a 1M-unit/yr assembly by leading a cost-down redesign and optimizing processes onsite with Tier-1 suppliers.

  → Executed production builds onsite in Asia, troubleshooting assembly issues and optimizing line processes to ensure an on-schedule launch.

  → Rapidly iterated on hard and soft goods using an internal hand lathe, mill, and 3D printer a to de-risk subsystems prior to tooling.

  → Developed and implemented internal documentation and product change tracking processes from scratch, establishing company-wide standards for design quality and traceability.`,
    
    images: [],
    videos: ["//www.youtube.com/embed/qEbs4oX95wQ?wmode=opaque"],
  },
  // 2. Markforged FX10
  {
    id: "markforged-fx10",
    label: "Markforged FX10",
    title: "Markforged FX10",
    year: "2022–2024",
    location: "Watertown, MA",
    client: "Markforged",
    description: "",
    content: `Beginning in 2022, I led the early R&D and eventual full-scale development of Markforged's next-generation industrial platform.
    
As the project Lead, I managed a cross-functional team of 15+ mechanical, electrical, software, and systems engineers to deliver a faster, larger, and more versatile printer capable of processing both metal and composite filaments.

I personally architected the mechanical systems from initial industrial design concepts through multiple high-fidelity prototype rounds, eventually leading the transition to production with a Tier-1 CM.

The result was the FX10, a groundbreaking manufacturing tool featuring a 60ºC actively heated chamber, a dual-nozzle composite print head, and a high-performance gantry capable of 1m/s travel speeds.

The most ambitious sub-system was the integrated vision engine—a head-mounted camera that enables Markforged's Blacksmith AI software to identify and correct print defects in real-time. 

Today, the FX10 is a best-selling industrial printer, serving as a critical tool in manufacturing facilities worldwide.


KEY TECHNICAL ACHIEVEMENTS

  → Directed a team of 15+ engineers through the full NPI lifecycle, from early R&D and conceptual architecture to global production and launch.

  → Translated industrial design intent into a high-performance mechanical platform, including a 60ºC heated build volume and a 1m/s motion system.

  → Oversaw the development of a head-mounted optical system for live AI-driven fault detection and part-validation (Blacksmith).

  → Led the design transfer and production scaling with an overseas Tier-1 CM, ensuring all quality and performance targets were met for a global release.

  → Iterated on complex electromechanical assemblies to balance high-performance industrial specs with cost-effective, scalable manufacturing processes.`,
    images: [],
    videos: ["//www.youtube.com/embed/hjr0DHIjvnE?wmode=opaque"],
  },
  // 3. Markforged Metal X Gen 2
  {
    id: "markforged-metal-x-gen2",
    label: "Markforged Metal X Gen 2",
    title: "Markforged Metal X Gen 2",
    year: "2020–2021",
    location: "Watertown, MA",
    client: "Markforged",
    description: "",
    content: `After three years at Markforged, I was appointed Technical Lead for the Metal X 3D printer, specifically tasked with heading the second-generation refresh of the platform.
    
The Metal X utilizes an FFF-style process printing metal-powder-loaded filament, allowing for metal additive manufacturing in an office environment.

My role was to guide the team through the complete NPI process—from design ideation and prototyping to production ramping and launch—completing the entire cycle in under a year.

A primary driver for this refresh was the integration of a single-fault-tolerant safety system required for EU recertification (IEC 62368-3). This system electrically isolates hazardous components upon user access.

I also solely owned the design and integration of a new 7" touchscreen display on a custom articulating arm, upgrading from the previous 4.3" internal display.

Beyond the mechanical architecture, I managed the project’s high-level execution, maintaining the program schedule and phase gate documentation while coordinating with executive leadership and global sourcing teams to ensure a successful production ramp.


KEY TECHNICAL ACHIEVEMENTS

  → Product Leadership: Directed the end-to-end NPI process for a global product launch, achieving all technical milestones and a full BOM cost-down within a 12-month schedule.

  → Safety Systems Architecture: Designed and implemented a single-fault-tolerant safety system, successfully achieving IEC 62368-3 and EMC compliance for the EU market.

  → Complex Electromechanical Design: Developed highly cosmetic sheet metal modules with integrated electronics, balancing industrial design requirements with strict manufacturing tolerances.

  → Prototyping & Testing: Delivered detailed design packages and drawings for rapid prototype builds, overseeing testing and validation to de-risk the platform prior to production.

  → Manufacturing & Operations: Led pilot builds at the factory in conjunction with manufacturing teams, ensuring a seamless transition from engineering design to high-volume operations.

  → Executive Communication: Authored and presented detailed technical status updates and risk assessments to engineering and executive leadership throughout the product lifecycle.`,
    images: [],
  },
  // 4. Split Flap Clock
  {
    id: "split-flap-clock",
    label: "Split Flap Clock",
    title: "Split Flap Clock Restoration",
    year: "2025",
    location: "Brooklyn, NY",
    client: "Personal Project",
    description: "",
    content: `I found a non-functioning Sony 8FC-69WA in a Connecticut thrift store and couldn't pass it up—I’ve always loved the mechanical soul of split-flap displays.
    
After a fascinating teardown that revealed an unbelievable density of earl electronics design, I decided to gut the dead internals and modernize the drive system while keeping the original aesthetic.

The original synchronous motor, which relied on the 60Hz AC frequency for timing, was beyond repair. To bring the clock back to life, I designed a custom interface to adapt a 28BYJ-48 stepper motor to the original clock modules.

The logic is handled by an Arduino Nano paired with a quartz RTC breakout module for precision. 

The build was a deep dive into the nuances of absolute timing. I learned the hard way about the limitations of software-based timekeeping and the physics of quartz vibration.

I also had to get creative with the code to account for the stepper motor’s 2048 steps/revolution; because this didn't divide evenly into the 10-minute rotation of the drive gear (204.8 steps/min), I implemented a periodic error-correction routine.

Every five minutes, the code executes a small step correction to offset the accumulated error, keeping the clock accurate to the second.

I eventually decided to skip the outer case and leave the raw assembly exposed. It’s been a reliable (and noisy) fixture in my apartment ever since.`,
    images: [],
  },
  // 5. Automated Blinds V2
  {
    id: "automated-blinds-v2",
    label: "Automated Blinds Gen 2",
    title: "Automated Blinds Gen 2",
    year: "2024",
    location: "Brooklyn, NY",
    client: "Personal Project",
    description: "",
    content: `This project is a universal evolution of my initial Automated Blinds system.
    
While my previous design was locked to a specific IKEA model, this iteration utilizes a drive interface that captures and pulls standard chain-roller balls, making it compatible with almost any existing roller blind.
    
The system retains its core feature set: near-silent actuation, discrete position control, and full HomeKit integration for voice commands.

The unit uses a pancake stepper motor paired with a custom gear train to increase torque output for heavier blinds. I designed the assembly with a magnetic cover that conceals the motor while maintaining an air gap for cooling.

Currently, the units are hardwired to a central controller, but I’m looking toward a V3 that integrates a bespoke PCBA into each unit for independent wireless control.

I’m also exploring cost-optimization by replacing the metal shafts and bearings with integrated plastic bearing surfaces in the 3D-printed chassis.`,
    images: [],
  },
  // 6. 5DOF Robotic Arm
  {
    id: "5dof-robotic-arm",
    label: "5DOF Teleoperated Robotic Arm",
    title: "5DOF Teleoperated Robotic Arm",
    year: "2018",
    location: "Boston, MA",
    client: "Northeastern University",
    description: "",
    content: `For my senior capstone, I developed a 5DOF robotic arm under the mentorship of John Whitney, PhD, at Northeastern’s Human Safe Soft Robotics Lab.
    
The project focused on creating a remote-operated arm driven by an exoskeleton interface with integrated haptic feedback. While the team was split across electrical and software disciplines, I held sole responsibility for the mechanical architecture and design of the robotic arm itself.

The system achieves 5 degrees of freedom through a modular differential joint at the elbow and shoulder, supplemented by a single rocker for the third shoulder DOF.

The design was almost entirely 3D-printed, and had a total actuated weight of just 12kg. Each differential module is driven by high-torque brushless DC motors, utilizing magnetic axial encoding for real-time positional control.

Despite a condensed six-month development cycle, the arm reached a top velocity of 0.5m/s and was fully operational on the bench.

Although motor controller issues limited the live demo to an exoskeleton-to-simulation link, the project served as a deep dive into high-performance electromechanical systems and compact gear-train design.


Some technical highlights of my work:

  → Designed and iterated on a modular, high-density differential joint system to achieve 5DOF with minimal mass and high mechanical efficiency.

  → Integrated high-torque brushless DC motors with magnetic axial encoders to facilitate low-latency, real-time positional feedback.

  → Developed an almost entirely 3D-printed chassis, optimizing geometry to achieve a 12kg total actuated weight.

  → Coordinated mechanical constraints with electrical hardware and exoskeleton software owners to ensure a seamless interface between human input and robotic output.`,
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
    description: "",
    content: `A Hilbert Curve is a continuous fractal space-filling curve first described by David Hilbert in 1891. It’s part of a family of curves that create these really distinct, satisfying fractal patterns.
    
This project started when a coworker showed me a large 3D-printed version of the curve; he’d spend time guiding a small ball bearing through the whole maze just by tilting it by hand.

I wanted to automate that motion, so I designed a 2 DOF actuator that uses a single motor to spin a ramped surface. I used a combination of pins and diametric magnets to keep the maze from actually spinning with the motor and only inherit the tilt angle of the ramp.

The end result is a piece of desk art that flows endlessly, with a metal ball "solving" its way through the maze purely via gravity.`,
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
    description: "",
    content: `I was digging through some old boxes in my mom's attic recently and came across this clip on lamp that I really enjoyed the style of. The clip had snapped off so I decided to redesign a new stand for it, one more suited to sitting on a table.
    
I played around with a few different styles and ended up with this round ribbed design that turned out really well in a matte red. The new base is a 2 part 3D printed assembly (2 parts so I didn't need to disconnect the plug).

I also cut an O-ring and ran it through a channel I included on the bottom face to keep it from sliding around on surfaces.

I use the lamp to this day in my apartment.`,
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
    description: "",
    content: `The tile shelf is a design inspired by some designs I saw online, but built custom for my own space.
    
I designed a simple L-shape profile with dovetail joints to extend the length beyond my printers build volume. I applied glue to the joints to make them permanent.

Once assembled, I used grout to secure the tiles to the part and fill the gaps.

I use the tile shelf in my kitchen as a space for teas and hanging objects. I have made a few other smaller sizes for friends and family as gifts.`,
    images: [],
  },
  // 10. Automated Blind Conversion
  {
    id: "automated-blind-conversion",
    label: "Automated Blind Conversion",
    title: "Automated Blind Conversion",
    year: "2020",
    location: "Boston, MA",
    client: "Personal Project",
    description: "",
    content: `The IKEA HomeKit Integration was a personal challenge to develop a high-performance, cost-effective alternative to commerically available motorized blinds.
    
While retail HomeKit-enabled blinds often exceed $150 per unit, I engineered a system that delivers near-silent operation and full smart-home integration for a fraction of the cost by retrofitting standard IKEA hardware.

The project involved a complete overhaul of the blind's internal drive system. I replaced the manual spring-tensioner with a NEMA 17 stepper motor driven by TMC2208 drivers to ensure the blinds could operate in a bedroom environment without audible noise.

The mechanical architecture consists of 3D-printed gear reductions and flanged bearings that adapt the motor's output to the IKEA roller core.

On the software side, the system runs on an Arduino Nano 33 IoT using a custom firmware stack that handles precise step-counting for position control and an endstop-based homing routine for calibration.

To bridge the gap between the Arduino and the Apple ecosystem, I implemented a HomeBridge server on a Raspberry Pi, allowing the blinds to be treated as native HomeKit accessories with support for voice commands and automation with my other smart devices.


Some key techanical hightlights:

  → Designed and 3D-printed a custom drive bracket and gear-reduction system that retrofits standard manual blinds with NEMA 17 stepper motors.

  → Implemented TMC2208 stepper drivers and optimized firmware acceleration curves to achieve near-silent actuation (less than 35dB) for bedroom use.

  → Developed a full-stack IoT solution using Arduino (C++) and HomeBridge (JSON/Node.js) to enable native iOS/Siri integration (before ChatGPT existed!)

  → Engineered an automated homing routine using micro-switch endstops and non-volatile memory to maintain precise position tracking across power cycles.

  → Thermal & Power Management: Calculated and implemented power distribution for multi-unit setups.`,
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
    description: "",
    content: `A short curiosity project where I attempted to mold taper candles with interesting forms that I designed.

Starting with the candle design, I engineered molds over several iterations, and successfully molded multiple candle designs from beeswax which I gave as holiday gifts in 2023.

For some of the more delicate designs, I also designed custom silicone molds, which I poured and cured in my apartment. These allowed the molds to be peeled away without fracturing the delicate candle inside`,
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
    description: "",
    content: `The live METAR map was originally created by prueker on github. I built my code based on his and designed my own electronics and mounting system that is a bit more robust than the original design and is able to accommodate 50 LEDs rather than 20.
    
    The map uses a Raspberry Pi to pull weather data (in the form of METAR's - Meteorological Terminal Aviation Routine Weather Reports) posted by the FAA on aviationweather.gov. The Pi then displays this weather on 50 individually addressable LEDs using the neopixel library.

The colors correspond to different weather reported by airports included in the map where:

  → Green = VFR (visual flight rules - good weather)
  → Blue = MVFR (marginal visual flight rules - okay weather, getting worse)
  → Red = IFR (instrument flight rules - bad weather)
  → Magenta = LIFR (low instrument flight rules - even worse weather)

The wiring is fairly simple. A barrel jack input brings 12v in from the wall and is wired directly into the LED power. An adjustable buck converter steps the voltage down to 5v for the Raspberry Pi. The Pi sends commands to the LEDs through one of its GPIO headers.

I also designed some mounts for the corners of the shadow box that stood the frame away from the wall to make more space for the LED wiring and to provide mounting positions for hanging it on the wall.`,
    images: [],
  },
];

export const getProjectById = (id: string): DesignProject | undefined => {
  return designProjects.find(project => project.id === id);
};
