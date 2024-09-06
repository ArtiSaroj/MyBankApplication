InputFromAccount.setEnabled(true);
InputReceiversName3.setEnabled(true);
InputReceiversBankName.setEnabled(true);
InputAccountNo.setEnabled(true);
InputReAccountNo.setEnabled(true);
InputIFSCCode3.setEnabled(true);
InputTransferAmount.setEnabled(true);
CheckRadioToggle7.setEnabled(true);
CheckRadioToggle8.setEnabled(true);


InputFromAccount.setBackgroundColor();
InputFromAccount.setBorder();
InputReceiversName3.setBackgroundColor();
InputReceiversName3.setBorder();
InputReceiversBankName.setBackgroundColor();
InputReceiversBankName.setBorder();
InputAccountNo.setBackgroundColor();
InputAccountNo.setBorder();
InputReAccountNo.setBackgroundColor();
InputReAccountNo.setBorder();
InputIFSCCode3.setBackgroundColor();
InputIFSCCode3.setBorder();
InputTransferAmount.setBackgroundColor();
InputTransferAmount.setBorder();


InputReceiversName3.setValue();
InputReceiversBankName.setValue();
InputAccountNo.setValue();
InputReAccountNo.setValue();
InputIFSCCode3.setValue();
InputTransferAmount.setValue();



ButtonMakeTransfer.setVisible(true);
ButtonBackMakeTransfer.setVisible(false);
ButtonConfirmTransfer.setVisible(false);
ButtonMakeAnotherTransfer.setVisible(false);

// FlexBox43.setBlocked(false);
// FlexBox44.setBlocked(true);
// FlexBox45.setBlocked(true);

TextStep1.setBlocked(false);
ImageStep1.removeStyleClass("GrayOutImage");
TextEnterDetails.setBlocked(false);
TextStep2.setBlocked(true);
ImageStep2.addStyleClass("GrayOutImage");
TextConfirmTransaction.setBlocked(true);
TextStep3.setBlocked(true);
ImageStep3.addStyleClass("GrayOutImage");
TextAknowledgement.setBlocked(true);


TextStep1MobileView.setVisible(true);
TextStep2MobileView.setVisible(false);
TextStep3MobileView.setVisible(false);



// InputReceiversName3.addStyleClass("RemoveBackground");
// InputReceiversBankName.addStyleClass("RemoveBackground");
// InputAccountNo.addStyleClass("RemoveBackground");
// InputReAccountNo.addStyleClass("RemoveBackground");
// InputIFSCCode3.addStyleClass("RemoveBackground");
// InputTransferAmount.addStyleClass("RemoveBackground");