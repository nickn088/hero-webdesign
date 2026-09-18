// Motion & Spring Tokens according to Emil Kowalski & Silent Luxury standard
export const motionTokens = {
  // Springs
  springHaptic: {
    type: "spring" as const,
    stiffness: 450,
    damping: 28,
    mass: 0.8,
  },
  springSnappy: {
    type: "spring" as const,
    stiffness: 500,
    damping: 32,
  },
  springGentle: {
    type: "spring" as const,
    stiffness: 280,
    damping: 26,
  },
  springBouncy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 22,
  },

  // Easings for cinematic editorial mask reveals
  easing: {
    editorial: [0.16, 1, 0.3, 1] as [number, number, number, number],
    smoothOut: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },

  // Durations
  duration: {
    micro: 0.15,
    quick: 0.3,
    medium: 0.5,
    cinematic: 0.85,
  },
};