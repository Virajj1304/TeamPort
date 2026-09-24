export interface TeamMember {
  name: string;
  role: string;
  contribution: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    name: "Arjun Mehta",
    role: "AI / Backend",
    contribution: "Soil scoring model, sensor data pipeline, API architecture.",
    initials: "AM",
  },
  {
    name: "Priya Rajan",
    role: "Hardware / Embedded",
    contribution:
      "Sensor integration, firmware, data transmission protocol.",
    initials: "PR",
  },
  {
    name: "Leo Nakamura",
    role: "Product / UX",
    contribution:
      "User research, map-based interface design, farmer testing sessions.",
    initials: "LN",
  },
  {
    name: "Sara Johansson",
    role: "Frontend / Systems",
    contribution:
      "Web application, real-time map rendering, responsive UI, deployment.",
    initials: "SJ",
  },
];

export const teamStatement =
  "We combine agricultural ML, embedded systems, product design, and full-stack engineering — each skill shaped by real fieldwork, not just theory.";
