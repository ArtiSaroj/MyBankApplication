InputFromAccount.setEnabled(true);
InputReceiversName3.setEnabled(true);
InputReceiversBankName.setEnabled(true);
InputAccountNo.setEnabled(true);
InputReAccountNo.setEnabled(true);
InputIFSCCode3.setEnabled(true);
InputTransferAmount.setEnabled(true);
CheckRadioToggle7.setEnabled(false);
CheckRadioToggle8.setEnabled(false);

ButtonMakeTransfer.setVisible(true);
ButtonBackMakeTransfer.setVisible(false);
ButtonConfirmTransfer.setVisible(false);

// FlexBox43.setBlocked(false);
// FlexBox44.setBlocked(true);
// FlexBox45.setBlocked(true)

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