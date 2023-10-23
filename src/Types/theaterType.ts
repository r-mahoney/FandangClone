export interface Theater {
  "Theater Name": string;
  Address: string;
  Movies: Movie[];
}

export interface Movie {
  [movieName: string]: {
    "Reserved seating": string[];
    "Reserved seating 1": string[];
    "Cinemark XD"?: string[];
    "No Refunds or Exchanges"?: string[];
    "No Refunds or Exchanges 1"?: string[];
    "RealD 3D"?: string[];
    "D-Box"?: string[];
    "Spanish Dubbed"?: string[];
    ScreenX?: string[];
    RPX?: string[];
    IMAX?: string[];
  };
}
