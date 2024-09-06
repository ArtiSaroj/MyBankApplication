
function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 900000000000) + 100000000000;
  return randomNumber.toString();
}

var random12DigitNumber = generateRandomNumber();
console.log(random12DigitNumber);

var card_name = CheckRadioGetCreditLabel.getSelectedRadio().getLabel();
console.log("card_name",card_name);
var text_limit = TextLimit.getText();
var card_limit = text_limit.split("Limit: ");
var email_Id = user.email_id ;
var options = {
    data: {
        "email_id": email_Id,
        "card_no": random12DigitNumber,
        "card_name": card_name,
        "limit": card_limit[1],
        "spent": 0,
    }
};

apiassignCreditCard(options);