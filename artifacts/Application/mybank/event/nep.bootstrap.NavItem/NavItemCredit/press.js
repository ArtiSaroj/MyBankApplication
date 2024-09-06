App.to(pageManager)
NavItemApplyCredit.addStyleClass("navItemBlue");
NavItemViewCredit.addStyleClass("navItemWhite")

var options = {
    parameters: {
        "where": JSON.stringify({"email_id": user.email_id}), // Optional
        // where: JSON.stringify({ email_id: "yasmin@gmail.com" }),
    },
};
apigetCreditCardDetails(options);

FlexBoxItemBody.setHeight("calc(100% - 280px)");