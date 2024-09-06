console.log(this.getSelectedKey());

var rec = ModelData.FindFirst(modelListGroupBenefieciaries, "beneficiaries_email_id", this.getSelectedKey())
console.log("record",rec);
InputId.setValue(rec.id);
InputBeneficiaryName1.setValue(rec.
beneficiaries_name
);
InputBeneficiaryAccNo1.setValue(rec.beneficiaries_acc_no
);
InputBeneficiaryReAccNo1.setValue(rec.beneficiaries_acc_no
);
InputIFSCCode1.setValue(rec.beneficiaries_IFSC_Code
);
InputEmailId1.setValue(rec.beneficiaries_email_id
);
InputPhoneNo1.setValue(rec.beneficiaries_phone_no
);
if(rec.beneficiaries_account_type == "saving_acc"
){
    CheckRadioToggle2.setSelected(true);
}
else{
    CheckRadioToggle4.setSelected(true);
}
App.to(PageBeneficiarise);
NavBarAddBeneficary.setVisible(false);
NavBarUpdateBeneficary.setVisible(true);
// NavBarDisplayBeneficary.setVisible(true);

