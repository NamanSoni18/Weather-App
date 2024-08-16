import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from 'axios';

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    temperatureC: '',
    temperatureF: '',
    humidity: '',
    icon: '',
    sunrise: '',
    sunset: '',
    moonrise: '',
    moonset: '',
  });
  const [location, setLocation] = useState({
    country: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];

    try {
      const responseWeather = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=88f78dba629b4c009a090708241608&q=${location.city}&aqi=yes`
      );

      const responseAstronomy = await axios.get(
        `https://api.weatherapi.com/v1/astronomy.json?key=88f78dba629b4c009a090708241608&q=${location.city}&dt=${formattedDate}`
      );

      const { temp_c, temp_f, humidity, condition } = responseWeather.data.current;
      const { sunrise, sunset, moonrise, moonset } = responseAstronomy.data.astronomy.astro;

      setWeatherData({
        temperatureC: temp_c,
        temperatureF: temp_f,
        humidity: humidity,
        icon: condition.icon,
        sunrise: sunrise,
        sunset: sunset,
        moonrise: moonrise,
        moonset: moonset,
      });

      console.log(responseWeather.data);
      console.log(responseAstronomy.data);
    } catch (error) {
      console.error("Error fetching the weather and astronomy data:", error);
    }
  };

  return (
    <div className="shine-border container mx-auto p-4 flex justify-center items-center h-screen">
      <div className="flex-1 text-center">
        <h2 className="text-2xl font-bold mb-4">Weather & Astronomy</h2>
        <div className="flex justify-center items-center mb-4">
          {weatherData.icon && <img src={weatherData.icon} alt="Weather Icon" />}
          <p className="text-lg font-bold ml-2">
            {weatherData.temperatureC}°C / {weatherData.temperatureF}°F
          </p>
        </div>
        <p className="text-lg font-bold mb-2">Humidity: {weatherData.humidity}%</p>
        <p className="text-lg font-bold mb-2">Sunrise: {weatherData.sunrise}</p>
        <p className="text-lg font-bold mb-2">Sunset: {weatherData.sunset}</p>
        <p className="text-lg font-bold mb-2">Moonrise: {weatherData.moonrise}</p>
        <p className="text-lg font-bold mb-2">Moonset: {weatherData.moonset}</p>
      </div>
      <div className="flex-1 ml-4">
        <h2 className="text-2xl font-bold mb-4">Get Weather & Astronomy</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="country">Country</Label>
            <Input name="country" id="country" value={location.country} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <Label htmlFor="city">City</Label>
            <Input type="text" id="city" name="city" value={location.city} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <Label htmlFor="state">State</Label>
            <Input type="text" id="state" name="state" value={location.state} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <Label htmlFor="pincode">Pincode</Label>
            <Input type="text" id="pincode" name="pincode" value={location.pincode} onChange={handleChange} />
          </div>
          <Button type="submit">Get Weather & Astronomy</Button>
        </form>
      </div>
    </div>
  );
}
