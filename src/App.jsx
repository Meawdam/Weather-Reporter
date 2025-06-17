import Weather from "./components/Weather.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=18.79&longitude=98.98&current_weather=true&hourly=temperature_2m,wind_speed_10m,relative_humidity_2m"
        );
        if (!response.ok) {
          throw Error("Bad response");
        }
        setWeather(await response.json());
      } catch (error) {
        console.log("Something went wrong", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && weather) {
      console.log(weather);
    }
  }, [loading, weather]);

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header />
      <hr />
      <Weather data={weather}/>
      <Footer />
    </div>
  );
}

export default App;
