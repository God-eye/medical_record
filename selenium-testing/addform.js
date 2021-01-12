require("chromedriver"); 
    

let swd = require("selenium-webdriver"); 
let browser = new swd.Builder(); 
let tab = browser.forBrowser("chrome").build();

let {email, pass, doctorName, diseaseName, date1, description, medicineName1, days1, perday1 } = require("./credentials.json"); 



let tabToOpen = 
    tab.get("http://localhost:3000/login"); 
tabToOpen 
    .then(function () { 

        tab.manage().window().maximize();

        let findTimeOutP = 
            tab.manage().setTimeouts({ 
                implicit: 10000,  
            }); 
        return findTimeOutP; 
    }) 
    .then(function () { 


        let promiseUsernameBox = 
            tab.findElement(swd.By.css("#formBasicEmail")); 
        return promiseUsernameBox; 
    }) 
    .then(function (usernameBox) { 


        let promiseFillUsername = 
            usernameBox.sendKeys(email); 
        return promiseFillUsername; 
    }) 
    .then(function () { 
        console.log( 
            "Username entered successfully in"
        ); 


        let promisePasswordBox = 
            tab.findElement(swd.By.css("#formBasicPassword")); 
        return promisePasswordBox; 
    }) 
    .then(function (passwordBox) { 


        let promiseFillPassword = 
            passwordBox.sendKeys(pass); 
        return promiseFillPassword; 
    }) 
    .then(function () { 
        console.log( 
            "Password entered successfully in"
        ); 


        let promiseSignInBtn = tab.findElement( 
            swd.By.css(".mb-3.btn.btn-primary") 
        ); 
        return promiseSignInBtn; 
    }) 
    .then(function (signInBtn) { 

        let promiseClickSignIn = signInBtn.click(); 
        return promiseClickSignIn; 
    }).then(function () {
        console.log("Successfully signed");

        let add = tab.findElement(swd.By.css("#add"));
        return add;
    }).then(function(add) {
        let addClick = add.click();
        return addClick;
    }).then(function(){
        console.log("succesfull")

        let doctor = tab.findElement(
            swd.By.css("#formBasicName.form-control"))
        return doctor;
    }).then(function(doctor) {
        let doctorFill = doctor.sendKeys(doctorName);
        return doctorFill; 
    }).then(function() {
        console.log("Doctor name succesfully entered");

        let disease = tab.findElement(swd.By.css("#formBasicDiseaseName.form-control"))
        return disease;
    }).then(function(disease) {
        let diseaseFill = disease.sendKeys(diseaseName);
        return diseaseFill;
    }).then(function() {
        console.log("Disease name succesfully entered");

        let date = tab.findElement(swd.By.css("#formBasicDate.form-control"))
        return date;
    }).then(function(date) {
        let dateFill = date.sendKeys(date1);
        return dateFill;
    }).then(function() {
        console.log("date Has Filled")

        let description1 = tab.findElement(swd.By.css("#textarea.form-control"));
        return description1;

    }).then(function(description1) {
        let descriptionFill = description1.sendKeys(description);
        return descriptionFill;
    }).then(function() {
        console.log("description has been added");

        let addmedicine = tab.findElement(swd.By.css(".mt-2.btn.btn-warning"));
        return addmedicine;
    }).then(function(addmedicine) {

        let addmedicineClick = addmedicine.click()
        return addmedicineClick;
    }).then(function() {
        console.log("clicked");
        let medicineName = tab.findElement(swd.By.css(".col-sm-4.mr-2.mt-3.form-control"))
        return medicineName;
    }).then(function(medicineName) {

        let medicineNameFill = medicineName.sendKeys(medicineName1);
        return medicineNameFill;
    }).then(function() {
        console.log("medicine name succesfully entered");

        let daysvalue =
            tab.findElement(swd.By.css(".col-sm-3.mr-2.mt-3.form-control"))
        return daysvalue;
    }).then(function(daysvalue) {

        let daysfill = daysvalue.sendKeys(days1)
        return daysfill;
    }).then(function() {
        console.log("days entered succesfully")
        let perdayvalue = 
            tab.findElement(swd.By.css("#perday.col-sm-3.mt-3.form-control"))
        return perdayvalue;
    }).then(function(perdayvalue) {
        let perdayFill = perdayvalue.sendKeys(perday1);
        return perdayFill;
    }).then(function() {
        console.log("perday entered succesfully")

        let submitButton = tab.findElement(swd.By.css(".submitButton.btn.btn-primary"))
        return submitButton;
    }).then(function(submitButton) {
        let submitClick = submitButton.click();
        return submitClick;
    }).then(function() {
        console.log("data pushed");

        let homeButton = tab.findElement(swd.By.css("#home"));
        return homeButton;
    }).then(function(homeButton) {
        let homeClick = homeButton.click()
        return homeClick;
    }).then( function() {
        console.log("testing complete")
    }) 
    .catch(function (err) { 
        console.log("Error ", err, " occurred!"); 
    }); 
