

let currentInputType = ButtonSearch.getIcon();
let newInputType = currentInputType === "sap-icon://sys-cancel" ? "sap-icon://fa-solid/search" : "sap-icon://sys-cancel";

let newVisible = currentInputType === "sap-icon://sys-cancel" ? false : true;
// let newInputIcon = currentInputType === "Password" ? "sap-icon://hide" : "sap-icon://show";
ButtonSearch.setIcon(newInputType);

// Toast.hide();
FlexBox10.setVisible(newVisible);