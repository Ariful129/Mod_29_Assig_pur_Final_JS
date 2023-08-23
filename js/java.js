
function fun(id1,id2)
{
    let a1= document.getElementById(id1);
    let a1_tex=a1.innerText;

    let a2= document.getElementById(id2);
    let a2_val=parseFloat(a2.innerText);
    
    let a3=document.getElementById('Total price')
    let a4=parseFloat(a3.innerText);
    let total_pri=a4+a2_val
    a3.innerText=total_pri.toFixed(2);


    let newItem = document.createElement("li");
    newItem.textContent = a1_tex;
    itemList.appendChild(newItem);
  
     
     let w2=document.getElementById('Total');
     w2.innerText=total_pri.toFixed(2);

     let y1=document.getElementById('make-pur');
     y1.style.backgroundColor = "#E527B2";
     y1.disabled=false;
     
    if(total_pri>=200)
        {
            let r1=document.getElementById('applyBtn');
            r1.style.backgroundColor = "#E527B2";
            r1.disabled=false;
            
        }

}

document.getElementById('applyBtn').addEventListener('click',function(){
    let m1=document.getElementById('couponInput')
    let inpromo=m1.value;
    if(inpromo==='SELL200'){
        let m2=document.getElementById('Total price')
        let total_pri_1=parseFloat(m2.innerText);

        let x3=document.getElementById('Discount');
        let dis_fi = (total_pri_1 * 0.20); 
        x3.innerText = dis_fi.toFixed(2);
            
        let x2=document.getElementById('Total');
        x2.innerText=(total_pri_1-dis_fi).toFixed(2);

    }
    else
    {
        alert('Wrong Promo Code')
    }
    m1.value='';
})

// Reset all
document.getElementById('make-pur').addEventListener('click',function(){
    let n1=document.getElementById('Total price');
    n1.innerText='00'

    let n2=document.getElementById('Discount');
    n2.innerText='00'

    let n3=document.getElementById('Total');
    n3.innerText='00'

    let itemList = document.getElementById("itemList");
    itemList.innerHTML = "";

    
    let dis1=document.getElementById('applyBtn');
    dis1.disabled=true;
})

//disable again
document.getElementById('go-Home').addEventListener('click',function(){
    let dis1=document.getElementById('applyBtn');
    dis1.disabled=true;
    dis1.style.backgroundColor = "gray";

    let dis2=document.getElementById('make-pur');
    dis2.disabled=true;
    dis2.style.backgroundColor = "gray";
    
})