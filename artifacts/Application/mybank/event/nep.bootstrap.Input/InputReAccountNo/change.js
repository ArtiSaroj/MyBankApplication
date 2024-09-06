// if((InputReAccountNo.getValue() != "" || null || undefined)&& (InputAccountNo.getValue() != "" || null || undefined)){
if (InputReAccountNo.getValue() != "" || null || undefined) {
    if (InputAccountNo.getValue() == InputReAccountNo.getValue()) {
        InputReAccountNo.setValidity("Valid");
    } else if (InputAccountNo.getValue() != InputReAccountNo.getValue()) {
        InputReAccountNo.setValidity("Invalid");
        reReceiversAccountNo = "Invalid";
    } else {
        InputReAccountNo.setValidity("None");
        reReceiversAccountNo = "Valid";
    }
}
else{
    reReceiversAccountNo = "Invalid";
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
