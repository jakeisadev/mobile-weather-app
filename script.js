//Validation Script

function myZipCode() {

    let str = document.getElementById("zip").value;
    let zipCodeAlert = document.getElementById("zipcode-alert");
    
    if(str.length < 5) {
        //If str.length < 5, display an alert on doc that says below
        zipCodeAlert.style.display="block";
        zipCodeAlert.innerHTML="Zip Code must be 5 digits";
        zipCodeFlag = false;
    }else {
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

//Validation for enter key to be used
document.addEventListener('keypress', function (e) {
    // If Enter is Pressed, 
        //If the length is equal to 5, then send API request
        //otherwise don't do anything

    let str = document.getElementById("zip").value;
    if(e.key == 'Enter'){
        e.preventDefault();
        if(str.length == 5){
            getWeatherData(str);
            console.log(Object)
        }
        else {
            return false;
        }
        
    }
    
});

//Retrieve Weather Data
//Set city to whatever the user inputs
const getWeatherData = (zip) => {

    fetch(`http://api.weatherapi.com/v1/current.json?key=ab742bd6c230495d9be133233220305&q=${zip}&aqi=no`)
    .then(res => res.json())
    .then((data) => {
        //Setting variables within the object to be applied to HTML
        //let temp = `${data.current.temp_f}`; <-- general format
        document.getElementById("temperature").innerHTML = `${data.current.temp_f}&deg`;
        document.getElementById("weather").innerHTML = `${data.current.condition.text}`;
        document.getElementById("state").innerHTML = `${data.location.name}` + ", " + `${data.location.region}`;
        let date = `${data.current.last_updated}`
        console.log(data);
        // console.log(date);
        if(`${data.current.condition.text}` === "Sunny") {
            document.getElementById("icon").innerHTML = "<img src=images/sunny.png>";
        }
    });
}