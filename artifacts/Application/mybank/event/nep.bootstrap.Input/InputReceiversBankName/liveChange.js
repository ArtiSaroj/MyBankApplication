var regex = /^[a-zA-Z ]*$/;
var receiversBankName2 = InputReceiversBankName.getValue();

if (regex.test(receiversBankName2) != true) {
    InputReceiversBankName.setValidity("Invalid");
    receiversBankName = "Invalid";
} else if (receiversBankName2 == "" || null || undefined) {
    receiversBankName = "Invalid";
}
else {
    InputReceiversBankName.setValidity("None");
    receiversBankName = "Valid";
}
console.log("receiversBankName", receiversBankName, receiversName);
if (
    receiversName == "Valid" &&
    receiversBankName == "Valid" &&
    receiversAccountNo == "Valid" &&
    reReceiversAccountNo == "Valid" &&
    IFSCCode == "Valid" &&
    transferAmount == "Valid"
) {
    console.log(
        receiversName,
        receiversBankName,
        receiversAccountNo,
        reReceiversAccountNo,
        IFSCCode,
        transferAmount
    );
    console.log("all valid");
    ButtonMakeTransfer.setEnabled(true);
    ButtonMakeTransfer.addStyleClass("buttonContinue");
} else {
    console.log("all In valid");
    ButtonMakeTransfer.setEnabled(false);
    ButtonMakeTransfer.removeStyleClass("buttonContinue");
}

// console.log("both condition",(receiversName == "Valid") && (receiversBankName == "Valid"));

// if((receiversName == "Valid") && (receiversBankName == "Valid")){
//     console.log(receiversName,receiversBankName);
//     console.log("all valid");
//     ButtonMakeTransfer.setEnabled(true);
//     ButtonMakeTransfer.addStyleClass("buttonContinue");
// }
// else{
//      console.log("all In valid");
// }
