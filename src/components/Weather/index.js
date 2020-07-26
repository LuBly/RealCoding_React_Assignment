import React from "react";
const API_WEATHER = "http://localhost:8888/weather-service/weathers?";

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weatherData : {
                weather : [
                    {
                        main : "string",
                        description : "string"
                    }
                ],
                main : {
                    temp : 0,
                }
            },
        };
    }


    componentDidMount() {
        const { cityName } = this.props.match.params;
        const weathers = this.state
        fetch(API_WEATHER +'cityName='+ cityName)
          .then((res) => res.json())
          .then((data)=>{
            this.setState({
                weatherData : data,
            });
          });
    }

     render() {
        const { cityName } = this.props.match.params;
        const { match } = this.props;
        const { weatherData } = this.state;
        var currentWeather = weatherData.weather[0].main;
        var currentWeatherDescription = weatherData.weather[0].description;
        var currentTemp = (weatherData.main.temp-273.15).toFixed(2);
        return (
            <div>
              <h2>CityName:{cityName}</h2>
              <p>날씨 : {currentWeather}</p>
              <p>날씨 상세 : {currentWeatherDescription}</p>
              <p>기온 : {currentTemp} </p>
            </div>
          );
     }
};
export default Weather;