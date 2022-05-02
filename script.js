//Validation Script

function myZipCode() {
    var str = document.getElementById("zip").value;
    console.log('Length is : ', str.length);

    var zipCodeAlert = document.getElementById("zipcode-alert");
    var lengthRegex = /^[0-9]{5}$/.test(str);
    
    if(!lengthRegex ) { //You have an error
        console.log('Inside');
        zipCodeAlert.style.display="block";
        zipCodeAlert.innerHTML="Zip Code must be 5 digits";
        zipCodeFlag = false;
    } else {
        zipCodeAlert.style.display="none";
        zipCodeFlag = true;
    }
}

let prevVal = "";
document.querySelector('input').addEventListener('input', function(e) {
    if(this.checkValidity()) {
        //prevVal = true;
    } else {
        this.value = prevVal;
        // alert("You may only enter numbers into this field. Please try again.")
    }
})

//Weather API Script


//Constants of the id functions
const temp = document.querySelector('#temp');
const dateOutput = document.querySelector('#date');
const timeOutput = document.querySelector('#time');
const conditionOutput = document.querySelector('#condition');
const nameOutput = document.querySelector('#name');
const icon = document.querySelector('#icon');
const cloudOutput = document.querySelector('#cloud');
const humidityOutput = document.querySelector('#humidity');
const windOutput = document.querySelector('#wind');
const form = document.getElementById('#info');
const search = document.querySelector('#zip');
const btn = document.querySelector('#button');
const cities = document.querySelector('.city');

//Default city when page loads
let cityInput = "Charlotte"

//Add submit event
form.addEventListener('submit', (e) => {
    if(search.value.length == 0) {
        //alert('Please enter a city name');
    } else {
        /*Change from default city to the
        one written in the input field*/
        cityInput = search.value;
        /*Fetch and display Weather data from the API*/
        fetchWeatherData();
        //Remove all text form input field
        search.value = "";
    }
    //Prevent default behavior of the form
    e.preventDefault();
})

//Function that returns day of the week
function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"

    ];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
}

//Function that fetches data from the API
function fetchWeatherData() {
    fetch(`https://api.weatherapt.com/v1/current.json?key=9fe023bcd71845fa941221416220105=${cityInput}`)
    //Take data then convert to regular JS object
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //Add Temp to page
        temp.innerHTML = data.current.temp_f + "&#176;";
        conditionOutput.innerHTML = data.current.condition.text
        //Add Date & Time form city and then get d/mm/yyyy into separate variables
        const date = data.location.localtime;
        const y = parseInt(date.substr(0, 4));
        const m = parseInt(date.substr(5, 2));
        const d = parseInt(date.substr(8, 2));
        const time = date.substr(11);
        //Date reformatting
        dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m}, ${y}`
        timeOutput.innerHTML = time;
        //Add city to page
        nameOutput.innerHTML = date.location.time;
        /*Correspond icons*/
        const iconID = data.current.condition.icon.substr(
            /*Insert weather icon here once chosen.length
              then, reformat the icon url to local folder path by using:
              
              icon.src = "./icons/" + iconId;*/)
        //Weather details
        cloudOutput.innerHTML = data.current.cloud + "%";
        humidityOutput.innerHTML = data.current.humidity + "%";
        windOutput.innerHTML = data.current.wind_mph + "mph";
    })
}

fetchWeatherData();