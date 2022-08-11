function checkCreds(){
    console.log("CheckCred() started");
    //create variables
    var firstName;
    var lastName;
    var fullName;
    var badgeNumb;
    var fullnameLength;

    //inject form data
    firstName = document.getElementById("fName").value;
    console.log(firstName);
    lastName = document.getElementById("lName").value;
    console.log(lastName);
    fullname = firstName + " " + lastName;
    console.log(fullName);

    badgeNumb = document.getElementById("BadgeID").value;
    console.log("Badge number = " + badgeNumb);

    //check name length and badgeNumb length and go to UATSpace if everything is correct
    fullnameLength = fullName.length;
    console.log(fullnameLength);
    if(fullnameLength > 20){
        document.getElementById("LoginStatus").innerHTML = 
            "Full name is incorrect, please resubmit";
    } else if (badgeNumb > 999 || badgeNumb <1) {
        //check badge id number
        document.getElementById("loginStatus").innerHTML = 
            "Badge Number is incorrect, please resubmit";   
    } else { 
        alert("Credential submission successful, welcome " + fullName + "!");    
        location.replace("./UATSpace.html")
    }
}