export interface Theater {
  "Theater Name": string;
  Address: string;
  Movies: Movie[];
}

export interface Movie {
  times: string[];
  film_name: string;
  cinema_name: string;
  show_type: string;
}
