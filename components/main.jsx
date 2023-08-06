import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherApp() {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (location) {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
                )
                .then((response) => {
                    // console.log(response.data);
                    setWeatherData(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [location]);

    function handleLocationChange(event) {
        setLocation(event.target.value);
    }

    return (
        <div className='bg-gray-400   my-5 p-5 mt-10 '>
            <h1 className='text-xl text-center py-2'>Weather App</h1>
            <form className='py-2 text-center'>
                <label >
                    Enter a location :
                    <input className='p-1 bg-gray-100 text-center  outline-none rounded-md ml-3' type="text" value={location} onChange={handleLocationChange} placeholder='Enter city' />
                </label>
            </form>
            {weatherData && (

                <div className='space-y-3  mt-5'>
                    <div className='bg-gradient-to-br from-gray-500 to-white px-6 py-2'>
                        <p className='text-xl'>{weatherData.name}</p>
                        <p className='md:text-center'>{weatherData.weather[0].description}</p>
                    </div>
                    <div className='bg-gradient-to-br from-gray-500 to-white px-6 py-2'>
                        <p className='text-xl'>Temperature</p>
                        <p className='md:text-center'>{weatherData.main.temp} °</p>
                    </div>
                    <div className='bg-gradient-to-br from-gray-500 to-white px-6 py-2'>
                        <p className='text-xl'>Feels like</p>
                        <p className='md:text-center'>{weatherData.main.feels_like} °</p>
                    </div>
                    <div className='bg-gradient-to-br from-gray-500 to-white px-6 py-2'>
                        <p className='text-xl'>Humidity</p>
                        <p className='md:text-center'>{weatherData.main.humidity}%</p>
                    </div>
                    <div className='bg-gradient-to-br from-gray-500 to-white px-6 py-2'>
                        <p className='text-xl'>Wind speed</p>
                        <p className='md:text-center'>{weatherData.wind.speed} mph</p>
                    </div>
                </div>
               
            )}
        </div>
    );
}

export default WeatherApp;
