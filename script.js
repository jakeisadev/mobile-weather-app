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