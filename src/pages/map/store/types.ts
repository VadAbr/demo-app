export const enum Accessibility {
  full,
  none,
  partially,
  temporarily_unavailable,
}

export const enum MarkerType {
  government,
  culture,
  education,
  sport,
  medicine,
  museum,
  rest,
  cafe,
}

export type TMarker = {
  name: string;
  coords: [number, number];
  address: string;
  accessibility: Accessibility;
  image?: string;
  description?: string;
  type?: MarkerType;
};
