export default function getOptions(geolocation: string =  "-22.0;14.0") {
    //SANDBOX CREDENTIALS

    const options = {
        method: "GET",
        headers: {
          client: "MOVI_189",
          "x-api-key": "xTfflwuIm54fE6tKkbwPNaIQt1RCVI4x9vfSxcDf",
          authorization: "Basic TU9WSV8xODlfWFg6a25TN1R5TUdBeTVG",
          territory: "XX",
          "api-version": "v200",
          geolocation: geolocation,
          "device-datetime": new Date().toISOString(),
        },
      };

    //EVAL CREDENTIALS

    // const options = {
    //     method: "GET",
    //     headers: {
    //       client: "MOVI_189",
    //       "x-api-key": "tEzE1ndqIsa7ycJSrH33J1pZxwGaPOCc9KJtSDOT",
    //       authorization: "Basic TU9WSV8xODk6ZVJDV1Z6b1dINlFG",
    //       territory: "US",
    //       "api-version": "v200",
    //       geolocation: geolocation,
    //       "device-datetime": new Date().toISOString(),
    //     },
    //   };
      return options
}