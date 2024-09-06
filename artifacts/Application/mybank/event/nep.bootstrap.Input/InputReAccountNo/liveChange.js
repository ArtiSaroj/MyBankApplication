var regex = /^\d{0,12}$/;
var reAccountNo = InputReAccountNo.getValue();

if (regex.test(reAccountNo) != true) {
    InputReAccountNo.setValidity("Invalid");
    reReceiversAccountNo = "Invalid";
}
else if (reAccountNo == ""||null||undefined ){
    reReceiversAccountNo = "Invalid";
}   
else {
    InputReAccountNo.setValidity("None");
    reReceiversAccountNo = "Valid";
}

console.log("reReceiversAccountNo", reReceiversAccountNo);
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
