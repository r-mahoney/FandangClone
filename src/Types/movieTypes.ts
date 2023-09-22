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
    still: {
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
  
  export interface Film {
    age_rating: [];
    film_id: number;
    film_name: string;
    film_trailer: string;
    images: MovieImage;
    imdb_id: number;
    imdb_title_id: number;
    other_titles: any;
    reslease_dates: [];
    synopsis_long: string;
  }