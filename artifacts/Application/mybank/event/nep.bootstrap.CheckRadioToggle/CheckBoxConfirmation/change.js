console.log(CheckBoxConfirmation.getSelected());
let check = CheckBoxConfirmation.getSelected();
let newCheck = check === true ? true : false;
// let newInputIcon = currentInputType === "Password" ? "sap-icon://hide" : "sap-icon://show";
ButtonGetCard.setEnabled(newCheck);
if(newCheck == true){
    ButtonGetCard.addStyleClass("buttonContinue");
}else{
    ButtonGetCard.removeStyleClass("buttonContinue");
}
// inLoginPassword._getValueHelpIcon().setSrc(newInputIcon);
// fpjd eoi 14/04/23 - add hide/show feature on the password logon input