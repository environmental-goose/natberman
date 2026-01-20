export interface DesignProject {
  id: string;
  label: string;
  title: string;
  description: string;
  specs?: string[];
  content?: string;
  codeSnippet?: string;
  images: { url: string; caption?: string }[];
}

export const designProjects: DesignProject[] = [
  {
    id: "automated-blinds-v2",
    label: "Automated Blinds V2",
    title: "Automated Blinds V2",
    description: "A second-generation automated window blind system with improved motor control and integration capabilities.",
    specs: [
      "Custom PCB design",
      "Stepper motor control",
      "Home Assistant integration",
      "3D printed components"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop", caption: "Motor assembly" },
      { url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop", caption: "Control board" },
    ]
  },
  {
    id: "aer1-system",
    label: "Aer1 System",
    title: "Aer1 System",
    description: "High-volume consumer air purification device designed for mass production with optimized assembly and cost efficiency.",
    specs: [
      "Design for manufacturing",
      "Injection molded housing",
      "HEPA filtration system",
      "IoT connectivity"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop", caption: "Product render" },
      { url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop", caption: "Internal components" },
    ]
  },
  {
    id: "markforged-fx10",
    label: "Markforged FX10",
    title: "Markforged FX10",
    description: "Industrial-grade continuous fiber reinforcement 3D printer designed for factory floor deployment.",
    specs: [
      "Continuous fiber reinforcement",
      "Industrial enclosure",
      "Automated material handling",
      "Fleet management integration"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop", caption: "Printer system" },
      { url: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&h=600&fit=crop", caption: "Print head detail" },
    ]
  },
  {
    id: "markforged-metal-x-gen2",
    label: "Markforged Metal X Gen 2",
    title: "Markforged Metal X Gen 2",
    description: "Second generation metal 3D printing system with improved sintering capabilities and part quality.",
    specs: [
      "Metal bound powder extrusion",
      "Automated wash station",
      "High-temperature sintering furnace",
      "Multi-material support"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop", caption: "Metal X system" },
      { url: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?w=800&h=600&fit=crop", caption: "Sintered parts" },
    ]
  },
  {
    id: "split-flap-clock",
    label: "Split Flap Clock",
    title: "Split Flap Clock",
    description: "A modern interpretation of the classic split-flap display, featuring custom mechanics and electronics.",
    specs: [
      "Custom split-flap modules",
      "Hall effect positioning",
      "ESP32 control",
      "NTP time sync"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1533749047139-189de3cf06d3?w=800&h=600&fit=crop", caption: "Clock display" },
      { url: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&h=600&fit=crop", caption: "Mechanism detail" },
    ]
  },
  {
    id: "automated-blind-conversion",
    label: "Automated Blind Conversion",
    title: "Automated Blind Conversion Tutorial",
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
    images: [
      { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop", caption: "Motor mount design" },
      { url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop", caption: "Wiring diagram" },
      { url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop", caption: "Completed installation" },
    ]
  },
  {
    id: "5dof-robotic-arm",
    label: "5DOF Robotic Arm",
    title: "5DOF Robotic Arm",
    description: "A desktop-scale robotic arm with five degrees of freedom, designed for precision manipulation and educational purposes.",
    specs: [
      "5 degrees of freedom",
      "Servo-driven joints",
      "Inverse kinematics control",
      "Gripper end effector"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop", caption: "Full arm assembly" },
      { url: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800&h=600&fit=crop", caption: "Joint mechanism" },
    ]
  },
];

export const getProjectById = (id: string): DesignProject | undefined => {
  return designProjects.find(project => project.id === id);
};