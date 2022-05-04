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
//Set default city to Charlotte, NC
const getWeatherData= (zip) => {

    fetch(`http://api.weatherapi.com/v1/current.json?key=ab742bd6c230495d9be133233220305&q=${zip}&aqi=no`)
    .then(res => res.json())
    .then(data => console.log(data));
    
}

// 

//Setting variables within the object fetched from API into HTML
