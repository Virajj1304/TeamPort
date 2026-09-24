export const project = {
  name: "TerraPulse",
  tagline: "Real-time soil intelligence for precision agriculture.",
  description:
    "TerraPulse transforms raw sensor data into actionable soil health maps — helping farmers reduce water waste by 40% and increase yield predictability.",
  team: "Studio Meridian",
  competition: "Global AgriTech Challenge 2026",
  status: "Working Prototype",
  version: "v0.3",
  accent: "#2D6A4F", // muted forest green — the ONE accent color
  demoUrl: "https://demo.terrapulse.dev",
  prototypeUrl: "https://app.terrapulse.dev",
  repoUrl: "https://github.com/studio-meridian/terrapulse",
};

export const changelog = [
  {
    version: "v0.1",
    date: "Jun 2026",
    note: "First sensor integration, raw data dashboard.",
  },
  {
    version: "v0.2",
    date: "Jul 2026",
    note: "Soil health scoring model, map visualization.",
  },
  {
    version: "v0.3",
    date: "Sep 2026",
    note: "Irrigation recommendations, mobile-responsive UI.",
  },
];

export const why = {
  problem:
    "70% of global freshwater is used in agriculture — yet most farms irrigate based on guesswork, not data.",
  limitation:
    "Existing precision agriculture tools are expensive, complex, and designed for industrial-scale farms.",
  opportunity:
    "Low-cost soil sensors and modern web mapping make real-time soil intelligence accessible to any farm.",
  insight:
    "We realized the bottleneck isn't data collection — it's translating raw sensor readings into decisions a farmer can act on in under 30 seconds.",
};

export const features = [
  {
    number: "01",
    title: "Live Soil Maps",
    description:
      "Sensor data rendered as a real-time heat map, showing moisture, pH, and nutrient levels across fields.",
  },
  {
    number: "02",
    title: "Health Scoring",
    description:
      "Each zone receives a 0–100 soil health score, updated every 15 minutes from sensor telemetry.",
  },
  {
    number: "03",
    title: "Smart Irrigation",
    description:
      "Zone-level irrigation recommendations based on current soil state, weather forecast, and crop type.",
  },
  {
    number: "04",
    title: "Alert System",
    description:
      "Push notifications when soil conditions drop below configurable thresholds for any monitored zone.",
  },
];

export const pipeline = {
  input: "Raw sensor data (moisture, pH, NPK, temperature)",
  process: "Scoring model + geospatial mapping engine",
  output: "Actionable soil health maps & irrigation plans",
};

export const prototypeChecklist = [
  "Live sensor data ingestion",
  "Interactive soil health map",
  "Zone-level scoring & alerts",
  "Basic irrigation recommendations",
];

export const timeline = [
  {
    step: "01",
    title: "Idea",
    date: "May 2026",
    description:
      "Identified the gap between raw agricultural data and actionable decisions during a field visit.",
  },
  {
    step: "02",
    title: "First Build",
    date: "Jun 2026",
    description:
      "Connected three soil sensors to a basic web dashboard. Data was live but unusable.",
  },
  {
    step: "03",
    title: "Testing",
    date: "Jul–Aug 2026",
    description:
      "Tested with two local farms. Learned that map-based visualization beat tables every time.",
  },
  {
    step: "04",
    title: "Current Version",
    date: "Sep 2026",
    description:
      "Rebuilt the UI around maps, added scoring, and shipped irrigation recommendations.",
  },
];

export const lessons = [
  {
    title: "Tables don't work for farmers",
    description:
      "Our first dashboard was a data table. Every tester ignored it. Maps changed everything.",
  },
  {
    title: "Scores beat raw numbers",
    description:
      "Showing \"pH: 6.2\" meant nothing. Showing \"Soil Health: 74/100\" drove immediate action.",
  },
  {
    title: "Alerts need context",
    description:
      "\"Low moisture\" without location or severity was noise. Zone-level, severity-graded alerts worked.",
  },
];
