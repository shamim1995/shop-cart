
function calculateShipping(product, isIncrease) {
    let phoneNumber = document.querySelector(product+'-number');
    let phoneIntNumber = parseInt(phoneNumber.value);
    let addNumber = phoneIntNumber;

    if (isIncrease === true) {
        addNumber = phoneIntNumber + 1;
    } else if (isIncrease === false && addNumber > 0) {
        addNumber = phoneIntNumber - 1;
    }
     phoneNumber.value = addNumber;
     let phoneAmount = addNumber * 1200;

    if(product==="#phone"){
        phoneAmount=addNumber*1200;

    }else if(product==="#cover"){
    phoneAmount = addNumber * 59;
    }
    
    document.querySelector(product+"-price").innerText = phoneAmount;
   
    shopTotal();
    
};

function shopTotal() {
    let addPhonePrice = getInto("#phone");
    let addCoverPrice= getInto("#cover");
    let totalAmount= addPhonePrice *1200+ addCoverPrice*59;
    let taxAmount= totalAmount*0.1
    let result = taxAmount+totalAmount;

    document.querySelector('#sub-total').innerText=totalAmount;
    document.querySelector('#tax').innerText = Math.round(taxAmount);
    document.querySelector('#shop-total').innerText =Math.round(result);

};
function getInto(product) {
    let coverPrice = document.querySelector(product+"-number");
    let addCoverPrice = parseInt(coverPrice.value);
    return addCoverPrice;
}


// let increasingBtn = document.querySelector("#increasing");
// increasingBtn.addEventListener('click',function(){
//     calculateShipping(true);   
// });

// document.querySelector("#dcreasing").addEventListener("click", function () {
//     calculateShipping(false);
// });

// function calculateShipping(isIncrease) {
//      let iphoneNumber = document.querySelector("#iphoneNumber");
//      let quantityNumber = iphoneNumber.value;
//      let iphoneIntNumber = parseInt(quantityNumber);
//      let addNumber = iphoneIntNumber;
     
//     if(isIncrease===true){
//         addNumber = iphoneIntNumber + 1;
//     } else if (isIncrease === false && addNumber > 0) {
//        addNumber = iphoneIntNumber - 1;
//     }
//      iphoneNumber.value = addNumber;
//      let phoneAmount = addNumber * 1200;
//      document.querySelector("#phoneAmount").innerText = phoneAmount;
// }





//shipping close handler

let closeBtn= document.querySelector("#closeBtn");
closeBtn.addEventListener("click",function(){
    document.querySelector(".iphoneSection").style.display="none";
})