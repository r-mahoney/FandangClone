import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Header from "~/Components/Header";
import { useState, useEffect } from "react";
import getOptions from "~/utils/headers";

export const BASE_URL = "https://api-gate2.movieglu.com/";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
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

  const options = getOptions()
  return (
    <SessionProvider session={session}>
      <Header />
        <Component {...pageProps} geolocation={geolocation}/>
    </SessionProvider>
  );
};

async function getData(url: string, options: object) {
  const response = await fetch(`${BASE_URL}${url}`, options);
  const movieData = await response.json();
  return movieData.films;
}

export default api.withTRPC(MyApp);
