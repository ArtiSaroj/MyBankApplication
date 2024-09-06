var regex = /^\d{0,12}$/ ;
var accountNo = InputAccountNo.getValue();

if (regex.test(accountNo) != true) {
    InputAccountNo.setValidity("Invalid");
    // InputAccountNo.setError("Value must be at least 5 characters long");
    receiversAccountNo = "Invalid";
}
else if (accountNo == ""||null||undefined ){
    receiversAccountNo = "Invalid";
}  
else {
    InputAccountNo.setValidity("None");
    // InputAccountNo.setValueStep("None");
     receiversAccountNo = "Valid";
}

console.log("receiversAccountNo",receiversAccountNo);
if(receiversName == "Valid" && receiversBankName == "Valid" && receiversAccountNo == "Valid" && reReceiversAccountNo == "Valid" && IFSCCode == "Valid" && transferAmount == "Valid"){
    console.log(receiversName,receiversBankName,receiversAccountNo,reReceiversAccountNo,IFSCCode,transferAmount);
    console.log("all valid");
     ButtonMakeTransfer.setEnabled(true);
    ButtonMakeTransfer.addStyleClass("buttonContinue");
}
else{
     console.log("all In valid");
    ButtonMakeTransfer.setEnabled(false);
    ButtonMakeTransfer.removeStyleClass("buttonContinue");
}