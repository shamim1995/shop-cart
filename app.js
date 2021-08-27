let increasingBtn = document.querySelector("#increasing");
increasingBtn.addEventListener('click',function(){
    let iphoneNumber= document.querySelector("#iphoneNumber");
    let quantityNumber= iphoneNumber.value;
    let iphoneIntNumber = parseInt(quantityNumber);
    let addNumber = iphoneIntNumber + 1;
    iphoneNumber.value =addNumber;
    phoneAmount=addNumber*1200;
    document.querySelector("#phoneAmount").innerText=phoneAmount;

});

document.querySelector("#dcreasing").addEventListener("click",function(){
    let iphoneNumber= document.querySelector("#iphoneNumber");
    let quantityNumber =iphoneNumber.value;
    let iphoneIntNumber= parseInt(quantityNumber);
    let minusNumber=quantityNumber-1;
    iphoneNumber.value=minusNumber;
    let phoneAmount = minusNumber*1200;
   document.querySelector("#phoneAmount").innerText = phoneAmount;
    

})



let closeBtn= document.querySelector("#closeBtn");
closeBtn.addEventListener("click",function(){
    document.querySelector(".iphoneSection").style.display="none";
})