// console.log(user.phone_no, "user")
// var phonee = 9988776655;
var phonee = user.phone_no;
if(phonee == InputEnterMobNo.getValue()){
    ButtonContinue1.setEnabled(true);
    ButtonContinue1.addStyleClass("buttonContinue");
    InputEnterMobNo.setValidity("Valid")
}else{
    ButtonContinue1.setEnabled(false)
    InputEnterMobNo.setValidity("Invalid");
}