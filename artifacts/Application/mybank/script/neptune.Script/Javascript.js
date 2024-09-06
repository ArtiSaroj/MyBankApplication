var TotalIncome, TotalSpent;
var user;
var receiversName,receiversBankName,receiversAccountNo,reReceiversAccountNo,IFSCCode,transferAmount;
// variable declartion for make transfer page
var transaction_name, transaction_date, transaction_amount, transaction_account;
var beneficiaryAccType = "saving_acc";

TextStep1.setBlocked(false);
// ImageStep1.addStyleClass("GrayOutImage");
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

FlexBoxMain.addStyleClass("flexBoxMain");

const item1 = "First item";
const item2 = "Second item";

// carouselButtonNavigation
ButtonNextCarousel.addStyleClass("carouselButtonNavigation");
ButtonPrevCarousel.setEnabled(false);

var carouselStatus;
function changeCarouselButtonColor() {
    if (carouselStatus == "Previous") {
        ButtonPrevCarousel.setEnabled(false);
        ButtonNextCarousel.setEnabled(true);
        ButtonPrevCarousel.removeStyleClass("carouselButtonNavigation");
        ButtonPrevCarousel.addStyleClass("carouselButtonNavigationDefault");
        ButtonNextCarousel.removeStyleClass("carouselButtonNavigationDefault");
        ButtonNextCarousel.addStyleClass("carouselButtonNavigation");
    } else if (carouselStatus == "Next") {
        ButtonPrevCarousel.setEnabled(true);
        ButtonNextCarousel.setEnabled(false);
        ButtonPrevCarousel.removeStyleClass("carouselButtonNavigationDefault");
        ButtonPrevCarousel.addStyleClass("carouselButtonNavigation");
        ButtonNextCarousel.removeStyleClass("carouselButtonNavigation");
        ButtonNextCarousel.addStyleClass("carouselButtonNavigationDefault");
    }
}

var user_email_id = "arti@gmail.com";
// var user_email_id = "yasmin@gmail.com";
var beneficiariesArray = [];
function beneficiariesDetails() {
    for (var i = 0; i < modelMultiModelGetBeneficiariesDetails.getData().length; i++) {
        if (user_email_id == modelMultiModelGetBeneficiariesDetails.getData()[i].email_id) {
            beneficiariesArray.push(modelMultiModelGetBeneficiariesDetails.getData()[i]);
        }
    }
    console.log("beneficiariesArray", beneficiariesArray);
    modelListGroupBenefieciaries.setData(beneficiariesArray);
}

if (window.innerWidth < 768) {
   
    FlexBoxHeaderStep2.setVisible(false);
    FlexBoxMakeTransferHeaderMobileView.setVisible(true);
    console.log("mobile view");
} else {
    FlexBoxMobileView.setVisible(false);
    FlexBoxHeaderStep2.setVisible(true);
    FlexBoxMakeTransferHeaderMobileView.setVisible(false);
    console.log("desktop view");
}

// -------------------------------yasmins code-------------------------------------------

function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 900000000000) + 100000000000;
    return randomNumber.toString();
}

function register() {
    var random12DigitAccNo = generateRandomNumber();
    console.log(random12DigitAccNo);

    var name1 = InputName.getValue();
    var dob = InputDOB.getValue();
    var age = InputAge.getValue();
    var email_id = InputUsername1.getValue();
    var password = InputPassword2.getValue();
    var phone_no = InputPhone.getValue();
    var act_no = random12DigitAccNo;
    var options = {
        data: {
            name: name1, // Required
            dob: dob, // Required
            age: age, // Required
            email_id: email_id, // Required
            phone_no: phone_no, // Optional
            password: password,
            act_no: act_no, // Required
        },
    };

    apicreateUser(options);
    
}
