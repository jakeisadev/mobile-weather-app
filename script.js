function myZipCode() {
    var str = document.getElementById("zip").value;
    var zipCodeAlert = document.getElementById("zipcode-alert");
    if(!((/^[0-9]{5}$/.test(str)))) {
        zipCodeAlert.style.display="block";
        zipCodeAlert.innerHTML="Zip Code must be 5 digits";
        zipCodeFlag = false;
    } else {
        zipCodeAlert.style.display="none";
        zipCodeFlag = true;
    }
}

