export interface MovieImage {
  poster: {
    "1": {
      image_orientation: string;
      region: string;
      medium: {
        film_image: string;
        width: number;
        height: number;
      };
      small?: {
        film_image: string;
        width: number;
        height: number;
      };
      large?: {
        film_image: string;
        width: number;
        height: number;
      };
    };
  };
  still?: {
    "2": {
      image_orientation: string;
      region: string;
      medium: {
        film_image: string;
        width: number;
        height: number;
      };
      small: {
        film_image: string;
        width: number;
        height: number;
      };
      large: {
        film_image: string;
        width: number;
        height: number;
      };
    };
  };
}

interface AgeRating {
  rating: string;
  age_rating_image: string;
  age_advisory: string;
}

export interface Film {
  id: string;
  film_name: string | null;
  film_id: number;
  film_length: string;
  genre: string;
  release_date: string;
  age_rating: string;
  age_rating_image: string;
  age_advisory: string;
  film_image: string;
  film_image_height: number;
  film_image_width: number;
  synopsis_long: string | null;
}
