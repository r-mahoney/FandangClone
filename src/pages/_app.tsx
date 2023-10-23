import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import MoviesContext from "~/Contexts/MovieContext";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Header from "~/Components/Header";
import { useState, useEffect } from "react";
import getDefaultMovies from "~/utils/defaultMovies";
import getOptions from "~/utils/headers";

export const BASE_URL = "https://api-gate2.movieglu.com/";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [geolocation, setGeoLocation] = useState("");
  
  useEffect(() => {
    if ("geolocation" in navigator) {
      // Prompt user for permission to access their location
      navigator.geolocation.getCurrentPosition(
        // Success callback function
        (position) => {
          // Get the user's latitude and longitude coordinates
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setGeoLocation(`${lat};${lng}`);
        },
        // Error callback function
        (error) => {
          // Handle errors, e.g. user denied location sharing permissions
          console.error("Error getting user location:", error);
        },
      );
    } else {
      // Geolocation is not supported by the browser
      setGeoLocation("-22.0;14.0");
    }
  }, []);

  useEffect(() => {
    // (async () => {
    //   const data = await getData("filmsNowShowing/?n=25", options);
    //   setMovies(data);
    //   console.log(data);
    // })();

    /*
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    REMOVE BOTTOM CODE AND REPLACE WITH TOP CODE WHEN READY TO USE API INSTEAD OF STATIC DATA
    VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    */
   
    const data = getDefaultMovies()
    setMovies(data)
  }, []);

  const options = getOptions()
  return (
    <SessionProvider session={session}>
      <Header />
      <MoviesContext.Provider value={{movies}}>
        <Component {...pageProps} geolocation={geolocation}/>
      </MoviesContext.Provider>
    </SessionProvider>
  );
};

async function getData(url: string, options: object) {
  const response = await fetch(`${BASE_URL}${url}`, options);
  const movieData = await response.json();
  return movieData.films;
}

export default api.withTRPC(MyApp);
