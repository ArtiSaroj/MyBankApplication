// var regex = /^\d+$/ ;
// var regex = /[^0-9]/ ;
var regex = /^[0-9]+$/;
var transferAmount2 = InputTransferAmount.getValue();

console.log("InputTransferAmount", InputTransferAmount.getValue());
console.log("regex.test(transferAmount", regex.test(transferAmount2));
if (transferAmount2 != "" || null || undefined) {
    if (regex.test(transferAmount2) != true) {
        InputTransferAmount.setValidity("Invalid");
        console.log("InputTransferAmount", InputTransferAmount.getValue());
        transferAmount = "Invalid";
    } else {
        InputTransferAmount.setValidity("None");
        transferAmount = "Valid";
    }
} else {
    InputTransferAmount.setValidity("None");
    transferAmount = "Invalid";
}
console.log("transferAmount", transferAmount);

if (
    receiversName === "Valid" &&
    receiversBankName === "Valid" &&
    receiversAccountNo === "Valid" &&
    reReceiversAccountNo === "Valid" &&
    IFSCCode === "Valid" &&
    transferAmount === "Valid"
) {
    console.log("all valid");
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

console.log(
    "all status",
    receiversName,
    receiversBankName,
    receiversAccountNo,
    reReceiversAccountNo,
    IFSCCode,
    transferAmount
);
