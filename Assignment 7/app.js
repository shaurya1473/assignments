const inputBox = document.querySelector("input[type='text']");
const addBtn = document.querySelector("button");
const cardImage = document.querySelector(".cardImage");
const dates = document.querySelector(".dates");
const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const weatherType = document.querySelector(".weatherType");
const maxTemp = document.querySelector(".maxTemp");
const minTemp = document.querySelector(".minTemp");
const humidityy = document.querySelector(".humidityy");
const pressuree = document.querySelector(".pressuree");

// Enter Button
addBtn.onclick = () => {
    const API_KEY = "35ab8abbb8ad8b9d867c040a0b364af5"; //API KEY from Open Weather
    let userData = inputBox.value; //Taking the input from user


    //Using fetch method to fetch the data from open weather API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userData + '&appid=' + API_KEY + '')

    //Covert data from string format to JSON format
    .then((res) => {
            return res.json()
        })
        //The whole data
        .then((data) => {
            console.log(data);

            //Current Date
            const date = new Date();
            dates.innerHTML = date.toDateString();

            //Name of City
            let nameOfCity = data['name'];
            cityName.innerHTML = nameOfCity;

            //Temp Value and convert in into Kelvin to Celsius
            let tempValue = data['main']['temp'];
            tempValue -= 273;
            temp.innerHTML = Math.floor(tempValue) + '&#176;<span class="celsius">C</span>';

            //Weather Type
            let typeOfWeather = data['weather'][0]['main'];
            weatherType.innerHTML = typeOfWeather;

            //Weather Icon
            // let iconWeather = document.createElement('img');
            // iconWeather.src = "http://openweathermap.org/img/wn/" + data['weather'][0]['icon'] + ".png";
            // weatherType.prepend(iconWeather);

            //Changing the background image basis on their weather type
            if (typeOfWeather == "Mist" || typeOfWeather == "Fog") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80')"
            } else if (typeOfWeather == "Clouds") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1469365556835-3da3db4c253b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3VkeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')"
            } else if (typeOfWeather == "Clear") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1603883055407-968560f7522e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')"
            } else if (typeOfWeather == "Snow") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')"
            } else if (typeOfWeather == "Drizzle" || typeOfWeather == "Sand") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpenpsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')"
            } else if (typeOfWeather == "Thunderstorm" || typeOfWeather == "Tornado") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60')"
            } else if (typeOfWeather == "Haze" || typeOfWeather == "Smoke") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')"
            } else if (typeOfWeather == "Rain") {
                cardImage.style.backgroundImage = "url('https://assets.thehansindia.com/h-upload/2021/08/17/1102463-pain.webp')"
            }

            //Extra Weather details (Min Temperature)
            let minTemperature = data['main']['temp_min'];
            minTemperature -= 273;
            minTemp.innerHTML = Math.floor(minTemperature) + '&#176;C(Min Temp)';

            //Extra Weather details (Max Temperature)
            let maxTemperature = data['main']['temp_max'];
            maxTemperature -= 273;
            maxTemp.innerHTML = Math.floor(maxTemperature) + '&#176;C(Max Temp)';

            //Some More Extra Weather details (Humidity)
            let humidity = data['main']['humidity'];
            humidityy.innerHTML = humidity + '%(Humidity)';

            //Some More Extra Weather details (pressure)
            let pressure = data['main']['pressure'];
            pressuree.innerHTML = pressure + 'mb(Pressure)';

            //Empty Input box
            inputBox.value = "";
        })
        //To catch error if present and show
        .catch((err) => {
            console.log(err);
        });
}