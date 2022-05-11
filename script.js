//Validation Script

// function myZipCode() {

//     let str = document.getElementById("zip").value;
//     let zipCodeAlert = document.getElementById("zipcode-alert");
    
//     if(str.length < 5) {
//         //If str.length < 5, display an alert on doc that says below
//         zipCodeAlert.style.display="block";
//         zipCodeAlert.innerHTML="Zip Code must be 5 digits";
//         zipCodeFlag = false;
//     }else {
//         zipCodeAlert.style.display="none";
//         zipCodeFlag = true;
//     }
// }

// let prevVal = "";
// document.querySelector('input').addEventListener('input', function(e) {
//     if(this.checkValidity()) {
//         //prevVal = true;
//     } else {
//         this.value = prevVal;
//         // alert("You may only enter numbers into this field. Please try again.")
//     }
// })

//Validation for enter key to be used
// document.addEventListener('keypress', function (e) {
//     // If Enter is Pressed, 
//         //If the length is equal to 5, then send API request
//         //otherwise don't do anything

//     let str = document.getElementById("zip").value;
//     if(e.key == 'Enter'){
//         e.preventDefault();
//         if(str.length == 5){
//             getWeatherData(str);
//             console.log(Object)
//         }
//         else {
//             return false;
//         }   
//     }
// });


//Retrieve Weather Data
//Set city to whatever the user inputs
// const getWeatherData = (zip) => {

    //Enter zip code or city
    //Put Celsius next to Farenheit
    //Think of better practice than else if


    const dispWeather = (e) => {
        e.preventDefault(); //DOn't refresh the page
        //dat can be either zip or city
        let data = document.getElementById('zip').value //Fetching the value of an input field.
        console.log(`You Entered ${data}`);

        document.getElementById('zip').value = ''

    fetch(`http://api.weatherapi.com/v1/current.json?key=ab742bd6c230495d9be133233220305&q=${data}&aqi=no`)
    .then(res => res.json())
    .then((data) => {

        console.log(data);
        //Setting variables within the object to be applied to HTML
        document.getElementById("temperature").innerHTML = `${data.current.temp_f}&deg`;
        document.getElementById("weather").innerHTML = `${data.current.condition.text}`;
        document.getElementById("state").innerHTML = `${data.location.name}` + ", " + `${data.location.region}`;
        document.getElementById("humidity").innerHTML = `${data.current.humidity} g/m3`;
        document.getElementById("wind-dr").innerHTML = `${data.current.wind_dir}`;
        document.getElementById("wind-mph").innerHTML = `${data.current.wind_mph}`;
        document.getElementById("precip").innerHTML = `${data.current.precip_in}`
        console.log(`${data.current.condition.icon}`);
        let imageUrl = `https:${data.current.condition.icon}`
        console.log(imageUrl);
            document.getElementById("icon").innerHTML = `<img src="${imageUrl}">`
    });
}
