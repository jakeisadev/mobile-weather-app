//Validation Script

function myZipCode() {

    let str = document.getElementById("zip").value;
    let zipCodeAlert = document.getElementById("zipcode-alert");
    
    if(str.length < 5) { //You have an error
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

document.addEventListener('keypress', function (e) {
    let str = document.getElementById("zip").value;
    if (e.keyCode === 13 && e.which === 13 && str.length < 5) {
        e.preventDefault();
        return false;
    }
    
});