interface Color {
  r: number;
  g: number;
  b: number;
}

const percentColors: Array<{ pct: number; color: Color }> = [
  {
    pct: 0,
    color: {
      r: 0xe7,
      g: 0x4c,
      b: 0x3c,
    },
  },
  {
    pct: 0.33,
    color: {
      r: 0xf1,
      g: 0xc4,
      b: 0x0f,
    },
  },
  {
    pct: 0.66,
    color: {
      r: 0x2e,
      g: 0xcc,
      b: 0x71,
    },
  },
  {
    pct: 1,
    color: {
      r: 0x34,
      g: 0x98,
      b: 0xdb,
    },
  },
];

export const setColorByStat = (stat: number) => {
  const pct = stat / 200;

  for (var i = 1; i < percentColors.length - 1; i++) {
    if (pct < percentColors[i].pct) {
      break;
    }
  }
  var lower = percentColors[i - 1];
  var upper = percentColors[i];
  var range = upper.pct - lower.pct;
  var rangePct = (pct - lower.pct) / range;
  var pctLower = 1 - rangePct;
  var pctUpper = rangePct;
  var color = {
    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper),
  };
  return "rgb(" + [color.r, color.g, color.b].join(",") + ")";
};
