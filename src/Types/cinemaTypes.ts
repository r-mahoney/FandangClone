interface ShowTimes {
  start_time: number;
  end_time: number;
}

export interface Cinema {
  cinema_id: number;
  cinema_name: string;
  distance: number;
  logo_url: string;
  showings: {
    Standard: {
      film_id: number;
      film_name: string;
      times: ShowTimes[];
    };
    "3D"?: {
      film_id: number;
      film_name: string;
      times: ShowTimes[];
    };
    IMAX?: {
      film_id: number;
      film_name: string;
      times: ShowTimes[];
    };
    "3DIMAX"?: {
      film_id: number;
      film_name: string;
      times: ShowTimes[];
    };
  };
}
