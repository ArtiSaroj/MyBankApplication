let currentInputType = InputPassword2.getType();
let newInputType = currentInputType === "Password" ? "Text" : "Password";
// let newInputIcon = currentInputType === "Password" ? "sap-icon://hide" : "sap-icon://show";
InputPassword2.setType(newInputType);
// inLoginPassword._getValueHelpIcon().setSrc(newInputIcon);
// fpjd eoi 14/04/23 - add hide/show feature on the password logon input