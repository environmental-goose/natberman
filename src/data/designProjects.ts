export interface DesignProject {
  id: string;
  slug: string; // Supabase slug for image lookup
  label: string;
  title: string;
  description: string;
  specs?: string[];
  content?: string;
  codeSnippet?: string;
}

export const designProjects: DesignProject[] = [
  {
    id: "automated-blinds-v2",
    slug: "automated-blinds-v2",
    label: "Automated Blinds V2",
    title: "Automated Blinds V2",
    description: "A second-generation automated window blind system with improved motor control and integration capabilities.",
    specs: [
      "Custom PCB design",
      "Stepper motor control",
      "Home Assistant integration",
      "3D printed components"
    ],
  },
  {
    id: "aer1-system",
    slug: "aer1-system",
    label: "Aer1 System",
    title: "Aer1 System",
    description: "High-volume consumer air purification device designed for mass production with optimized assembly and cost efficiency.",
    specs: [
      "Design for manufacturing",
      "Injection molded housing",
      "HEPA filtration system",
      "IoT connectivity"
    ],
  },
  {
    id: "markforged-fx10",
    slug: "markforged-fx10",
    label: "Markforged FX10",
    title: "Markforged FX10",
    description: "Industrial-grade continuous fiber reinforcement 3D printer designed for factory floor deployment.",
    specs: [
      "Continuous fiber reinforcement",
      "Industrial enclosure",
      "Automated material handling",
      "Fleet management integration"
    ],
  },
  {
    id: "markforged-metal-x-gen2",
    slug: "markforged-metal-x-gen2",
    label: "Markforged Metal X Gen 2",
    title: "Markforged Metal X Gen 2",
    description: "Second generation metal 3D printing system with improved sintering capabilities and part quality.",
    specs: [
      "Metal bound powder extrusion",
      "Automated wash station",
      "High-temperature sintering furnace",
      "Multi-material support"
    ],
  },
  {
    id: "split-flap-clock",
    slug: "split-flap-clock",
    label: "Split Flap Clock",
    title: "Split Flap Clock",
    description: "A modern interpretation of the classic split-flap display, featuring custom mechanics and electronics.",
    specs: [
      "Custom split-flap modules",
      "Hall effect positioning",
      "ESP32 control",
      "NTP time sync"
    ],
  },
  {
    id: "automated-blind-conversion",
    slug: "automated-blind-conversion",
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
  },
  {
    id: "5dof-robotic-arm",
    slug: "5dof-robotic-arm",
    label: "5DOF Robotic Arm",
    title: "5DOF Robotic Arm",
    description: "A desktop-scale robotic arm with five degrees of freedom, designed for precision manipulation and educational purposes.",
    specs: [
      "5 degrees of freedom",
      "Servo-driven joints",
      "Inverse kinematics control",
      "Gripper end effector"
    ],
  },
];

export const getProjectById = (id: string): DesignProject | undefined => {
  return designProjects.find(project => project.id === id);
};
