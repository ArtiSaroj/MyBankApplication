var beneficiaryName = InputBeneficiaryName.getValue();
var beneficiaryAccNo = InputBeneficiaryAccNo.getValue();
var beneficiaryReAccNo = InputBeneficiaryReAccNo.getValue();
var ifscCode = InputIFSCCode.getValue();
var email_Id = InputEmailId.getValue();
var concatAbbreviation = [];
var phone_no = InputPhoneNo.getValue();

const PrintFirstLetter = (word) => {
    let words = word.split(" ");

    for (let i = 0; i < words.length; i++) {
        let firstLetter = words[i][0];
        concatAbbreviation.push(firstLetter);
    }
};
PrintFirstLetter(beneficiaryName);
let abbreviation = concatAbbreviation.join("");
console.log(abbreviation);
console.log(beneficiaryAccType);

var options = {
    parameters: {
        "where": "" // Optional
    },
    data: {
        "id": "",
        "email_id":  user_email_id,
        "beneficiaries_email_id": email_Id,
        "beneficiaries_name": beneficiaryName,
        "beneficiaries_phone_no":  phone_no,
        "beneficiaries_acc_no":beneficiaryAccNo,
        "beneficiaries_name_abbreviation":  abbreviation,
        "beneficiaries_account_type": beneficiaryAccType,
        "beneficiaries_IFSC_Code":  ifscCode,
        "createdAt": "",
        "createdBy": "",
        "updatedAt": "",
        "updatedBy": ""
    }
};

apiRestAPIAddBeneficiariesDetails(options);

// var options = {
//     data: {
//         "beneficiaries_email_id": email_Id,
//         "beneficiaries_name": beneficiaryName,
//         "beneficiaries_phone_no":  phone_no,
//         "beneficiaries_acc_no":beneficiaryAccNo,
//         "beneficiaries_name_abbreviation":  abbreviation,
//         "beneficiaries_account_type": beneficiaryAccType,
//         "beneficiaries_IFSC_Code": ifscCode,
//         "createdAt": "",
//         "createdBy": "",
//         "updatedAt": "",
//         "updatedBy": ""
//     }
// };

// apiRestAPIAddBeneficiariesDetails(options);

var id = "c8fa1863-13fa-4475-b1fc-431aaa541394";

// var options = {
//     // parameters: {
//     //     "where":
//     // },
//     data: {
//         "id":  id,
//         "beneficiaries_email_id": email_Id,
//         "beneficiaries_name": beneficiaryName,
//         "beneficiaries_phone_no":  phone_no,
//         "beneficiaries_acc_no":beneficiaryAccNo,
//         "beneficiaries_name_abbreviation":  abbreviation,
//         "beneficiaries_account_type": beneficiaryAccType,
//         "beneficiaries_IFSC_Code": ifscCode,
//         "createdAt": "",
//         "createdBy": "",
//         "updatedAt": "",
//         "updatedBy": ""
//     }
// };

// apiRestAPIEditBeneficiariesDetails(options);


// var options = {
//     parameters: {
//         "where":  JSON.stringify({"id" : id})
          
// }};



// apiRestAPIDeleteBeneficiariesDetails(options);

