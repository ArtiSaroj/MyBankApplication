
FlexBoxKeyBenefits.setVisible(true)
var card_name = CheckRadioGetCreditLabel.getSelectedRadio().getLabel();
var limit = modelstoreAllCreditCards.getData().find((limit) => limit.card_name == card_name);
TextLimit.setText("Limit: "+limit.card_limit);

TextBenefit1.setText(limit.benefit1);
TextBenefit2.setText(limit.benefit2);
TextBenefit3.setText(limit.benefit3);
