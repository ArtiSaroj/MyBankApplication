var regex = /^[a-z0-9]+$/;
var IFSCCode3 = InputIFSCCode3.getValue();

if (IFSCCode3 != "" || null || undefined) {
    if (regex.test(IFSCCode3) != true) {
        InputIFSCCode3.setValidity("Invalid");
        IFSCCode = "Invalid";
    } else {
        InputIFSCCode3.setValidity("None");
        IFSCCode = "Valid";
    }
} else {
    InputIFSCCode3.setValidity("None");
    IFSCCode = "Invalid";
}

console.log("IFSCCode", IFSCCode);
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
