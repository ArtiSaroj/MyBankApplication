
InputFromAccount.setEnabled(false);
InputReceiversName3.setEnabled(false);
InputReceiversBankName.setEnabled(false);
InputAccountNo.setEnabled(false);
InputReAccountNo.setEnabled(false);
InputIFSCCode3.setEnabled(false);
InputTransferAmount.setEnabled(false);
CheckRadioToggle7.setEnabled(false);
CheckRadioToggle8.setEnabled(false);
ButtonBackMakeTransfer.setVisible(true);



InputFromAccount.setBackgroundColor("Transparent");
InputFromAccount.setBorder("Border0");
InputReceiversName3.setBackgroundColor("Transparent");
InputReceiversName3.setBorder("Border0");
InputReceiversBankName.setBackgroundColor("Transparent");
InputReceiversBankName.setBorder("Border0");
InputAccountNo.setBackgroundColor("Transparent");
InputAccountNo.setBorder("Border0");
InputReAccountNo.setBackgroundColor("Transparent");
InputReAccountNo.setBorder("Border0");
InputIFSCCode3.setBackgroundColor("Transparent");
InputIFSCCode3.setBorder("Border0");
InputTransferAmount.setBackgroundColor("Transparent");
InputTransferAmount.setBorder("Border0");


ButtonBackMakeTransfer.setVisible(false);
ButtonConfirmTransfer.setVisible(false);
ButtonMakeAnotherTransfer.setVisible(true);

// FlexBox43.setBlocked(true);
// FlexBox44.setBlocked(true);
// FlexBox45.setBlocked(false);


TextStep1.setBlocked(true);
ImageStep1.addStyleClass("GrayOutImage");
TextEnterDetails.setBlocked(true);
TextStep2.setBlocked(true);
ImageStep2.addStyleClass("GrayOutImage");
TextConfirmTransaction.setBlocked(true);
TextStep3.setBlocked(false);
ImageStep3.removeStyleClass("GrayOutImage");
TextAknowledgement.setBlocked(false);

TextStep1MobileView.setVisible(false);
TextStep2MobileView.setVisible(false);
TextStep3MobileView.setVisible(true);

var options = {
    data: {
        "email_id": user_email_id,
        "act_no": transaction_account,
        "act_name": transaction_name,
        "amount": transaction_amount,
        "transaction_date": transaction_date,
        "crdr": "Debited",
    }
};

apiRestAPIAddUserTransaction(options);

ButtonMakeAnotherTransfer.addStyleClass("buttonContinue");