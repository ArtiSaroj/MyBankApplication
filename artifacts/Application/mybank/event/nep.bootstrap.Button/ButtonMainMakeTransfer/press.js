App.to(PageMakeTransfer);
var act_no = user.act_no;
// InputFromAccount.setValue(act_no);

console.log("user account no", user.act_no);
var sentence = act_no.toString();


var formattedText = sentence.replace(sentence.substring(0, 8), "********");
InputFromAccount.setValue(formattedText);
InputFromAccount.setEditable(false);

 