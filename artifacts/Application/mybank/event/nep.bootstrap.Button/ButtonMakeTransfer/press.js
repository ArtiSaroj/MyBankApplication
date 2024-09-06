InputFromAccount.setEnabled(false);
InputReceiversName3.setEnabled(false);
InputReceiversBankName.setEnabled(false);
InputAccountNo.setEnabled(false);
InputReAccountNo.setEnabled(false);
InputIFSCCode3.setEnabled(false);
InputTransferAmount.setEnabled(false);
CheckRadioToggle7.setEnabled(false);
CheckRadioToggle8.setEnabled(false);

ButtonMakeTransfer.setVisible(false);
ButtonBackMakeTransfer.setVisible(true);
ButtonConfirmTransfer.setVisible(true);

// FlexBox43.setBlocked(true);
// FlexBox44.setBlocked(false);
// FlexBox45.setBlocked(true)

TextStep1.setBlocked(true);
ImageStep1.addStyleClass("GrayOutImage");
TextEnterDetails.setBlocked(true);
TextStep2.setBlocked(false);
ImageStep2.removeStyleClass("GrayOutImage");
TextConfirmTransaction.setBlocked(false);
TextStep3.setBlocked(true);
ImageStep3.addStyleClass("GrayOutImage");
TextAknowledgement.setBlocked(true);

TextStep1MobileView.setVisible(false);
TextStep2MobileView.setVisible(true);
TextStep3MobileView.setVisible(false);

// InputReceiversName3.removeStyleClass("RemoveBackground");
// InputReceiversBankName.removeStyleClass("RemoveBackground");
// InputAccountNo.removeStyleClass("RemoveBackground");
// InputReAccountNo.removeStyleClass("RemoveBackground");
// InputIFSCCode3.removeStyleClass("RemoveBackground");
// InputTransferAmount.removeStyleClass("RemoveBackground");

var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
// today = mm + '/' + dd + '/' + yyyy;

transaction_name = InputReceiversName3.getValue();
transaction_date = today;
transaction_amount = InputTransferAmount.getValue();
transaction_account = InputAccountNo.getValue();

// var options = {
//     data: {
//         "act_no": transaction_account,
//         "act_name": transaction_name,
//         "amount": transaction_amount,
//         // "transaction_date": transaction_date,
//         "crdr": "Debited"
//     }
// };

// console.log("options",options);
// apiRestAPIAddUserTransaction(options);

//Validate form

// ButtonContinue1.setEnabled(true);
ButtonBackMakeTransfer.addStyleClass("buttonContinue");
ButtonConfirmTransfer.addStyleClass("buttonContinue");

