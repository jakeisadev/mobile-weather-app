function myZipCode() {
    var str = document.getElementById("zip").value;
    var zipCodeAlert = document.getElementById("zipcode-alert");
    if(!((/^[0-9]{6}$/.test(str)))) {
        zipCodeAlert.style.display="block";
        zipCodeAlert.innerHTML="Zip Code must be only 6 digits";
        zipCodeFlag = false;
        return false;
    } else {
        zipCodeAlert.style.display="none";
        zipCodeFlag = true;
    }
}

