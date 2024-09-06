if(InputPassword1.getValue() != InputPassword2.getValue()){
    InputPassword2.setValidity("Invalid");
    InputPassword1.setValidity("None");
    TextPasswordMisMatch.setVisible(true);
}else{
    InputPassword1.setValidity("Valid");
    InputPassword2.setValidity("Valid");
    TextPasswordMisMatch.setVisible(false);
}