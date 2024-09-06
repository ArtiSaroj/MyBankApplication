var array = [];


for (const element of modelstoreAllCreditCards.getData()) {
    console.log(element.card_no);
    var card = modelcreditCardArray.getData().find((card) => card.card_name == element.card_name);
    if(!card){
        console.log(element);
        array.push(element);
    }
    
}


modelListOfCreditCards.setData(array);


