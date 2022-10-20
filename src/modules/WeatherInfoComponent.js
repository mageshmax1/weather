import React from "react";
import styled from "styled-components";
import { FaTemperatureLow } from 'react-icons/fa';

export const WeatherInfoIcons = {
    sunset: "/react-weather-app/icons/temp.svg",
    sunrise: "/react-weather-app/icons/temp.svg",
    humidity: "/react-weather-app/icons/humidity.svg",
    wind: "/react-weather-app/icons/wind.svg",
    pressure: "/react-weather-app/icons/pressure.svg",
};

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;


const InfoLabel = styled.span`
padding:30px;
`;

const WeatherInfoComponent = (props) => {
    const {weather, city} = props;
    console.log('city',city);
    console.log('weather',weather);
    // console.log('weather',JSON.stringify(weather));
    let temp=JSON.stringify(weather)
    console.log('weather',temp);
    console.log('weather',temp.temperature);

    return (
        <InfoContainer>
            <FaTemperatureLow />
            {/* <InfoLabel>
                <span>{weather.temperature}</span>
                {city}

            </InfoLabel> */}
            <InfoLabel><div><span>{weather.temperature}</span></div><div>{city}</div></InfoLabel>
        </InfoContainer>
    );
};
// const WeatherComponent = (props) => {
//     const {weather} = props;
//     const isDay = weather?.weather[0].icon?.includes('d')
//     const getTime = (timeStamp) => {
//         return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
//     }
//     return (
//         <>
//             <WeatherContainer>
//                 <Condition>
//                     <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
//                     {`  |  ${weather?.weather[0].description}`}
//                 </Condition>
//                 <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]}/>
//             </WeatherContainer>
//             <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>

//             <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
//             <WeatherInfoContainer>
//                 <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
//                                       value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
//                 <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
//                 <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
//                 <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
//             </WeatherInfoContainer>
//         </>
//     );
// };

export default WeatherInfoComponent;
// export default WeatherComponent;
