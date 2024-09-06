// App.to(pageViewCredit)
// NavItemViewCredit.setSelected(true);
// var options = {
//     parameters: {
//          // "where": JSON.stringify({"email_id": user.email_id}), // Optional 
//         "where": JSON.stringify({"email_id": "yasmin@gmail.com"})
//     }
// };

// await apigetCreditCardDetails(options);
NavItemApplyCredit.removeStyleClass("navItemBlue");
NavItemViewCredit.removeStyleClass("navItemWhite");

NavItemApplyCredit.addStyleClass("navItemWhite");
NavItemViewCredit.addStyleClass("navItemBlue");

var options = {
    parameters: {
         "where": JSON.stringify({"email_id": user.email_id}), // Optional 
        // "where": JSON.stringify({"email_id": "yasmin@gmail.com"})
    }
};

apigetCreditCardDetails(options);

