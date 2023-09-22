import { Film } from "~/Types/movieTypes";

export default function getDefaultCinemaTimes(film: Film) {
  const cinemaObj = [
    {
      cinema_id: 10636,
      cinema_name: "Cinema 6",
      distance: 57.55892076987,
      logo_url: "https://assets.movieglu.com/chain_logos/xx/UK-0-sq.jpg",
      showings: {
        Standard: {
          film_id: film.film_id,
          film_name: film.film_name,
          times: [
            {
              start_time: "22:00",
              end_time: "00:24",
            },
          ],
        },
      },
    },
    {
      cinema_id: 42963,
      cinema_name: "Cinema 7",
      distance: 80.352112347501,
      logo_url: "https://assets.movieglu.com/chain_logos/xx/UK-0-sq.jpg",
      showings: {
        Standard: {
          film_id: film.film_id,
          film_name: film.film_name,
          times: [
            {
              start_time: "20:50",
              end_time: "23:14",
            },
          ],
        },
      },
    },
    {
      cinema_id: 45353,
      cinema_name: "Cinema 8",
      distance: 140.95552847269,
      logo_url: "https://assets.movieglu.com/chain_logos/xx/UK-0-sq.jpg",
      showings: {
        Standard: {
          film_id: film.film_id,
          film_name: film.film_name,
          times: [
            {
              start_time: "22:10",
              end_time: "00:34",
            },
          ],
        },
      },
    },
    {
      cinema_id: 8845,
      cinema_name: "Cinema 2",
      distance: 207.52516109344,
      logo_url: "https://assets.movieglu.com/chain_logos/xx/UK-1-sq.jpg",
      showings: {
        Standard: {
          film_id: film.film_id,
          film_name: film.film_name,
          times: [
            {
              start_time: "21:15",
              end_time: "23:39",
            },
          ],
        },
      },
    },
    {
      cinema_id: 9435,
      cinema_name: "Cinema 5",
      distance: 207.88720228852,
      logo_url: "https://assets.movieglu.com/chain_logos/xx/UK-1-sq.jpg",
      showings: {
        Standard: {
          film_id: film.film_id,
          film_name: film.film_name,
          times: [
            {
              start_time: "22:00",
              end_time: "00:24",
            },
          ],
        },
      },
    },
    {
      cinema_id: 8910,
      cinema_name: "Cinema 3",
      distance: 210.52659233787,
      logo_url: "https://assets.movieglu.com/chain_logos/xx/UK-1-sq.jpg",
      showings: {
        Standard: {
          film_id: film.film_id,
          film_name: film.film_name,
          times: [
            {
              start_time: "20:40",
              end_time: "23:04",
            },
            {
              start_time: "21:20",
              end_time: "23:44",
            },
          ],
        },
      },
    },
  ];

  return cinemaObj;
}
