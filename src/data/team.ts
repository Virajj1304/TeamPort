export interface TeamMember {
  name: string;
  role: string;
  contribution: string;
  initials: string;
  photo?: string;
}

export const team: TeamMember[] = [
  {
    name: "Nachiket Patil",
    role: "AI / Backend",
    contribution:
      "Soil scoring model, sensor data pipeline, web application, and API architecture.",
    initials: "NP",
    photo: "/nachiket.png",
  },
  {
    name: "Viraj Sawant",
    role: "Hardware / Embedded",
    contribution:
      "Sensor integration, firmware, data transmission protocol, and UX design.",
    initials: "VS",
    photo: "/viraj.png",
  },
];
