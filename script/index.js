// heart icone functinality
const hearts = document.getElementsByClassName("heart-icon")
for(let heart of hearts){
    heart.addEventListener('click',function(){
   const hearCount = document.getElementById("heart-add").innerText
   const currentHeartCount = Number(hearCount) + 1;
   document.getElementById("heart-add").innerText= currentHeartCount;
 
    })
}
// call button functionality
const callBtns = document.getElementsByClassName("call-btn")
for(let callbtn of callBtns){
    callbtn.addEventListener('click', function(){
       const serviceName = callbtn.parentNode.parentNode.children[1].children[1].innerText;
       const serviceNumber = callbtn.parentNode.parentNode.children[2].children[0].innerText;
       let time = new Date().toLocaleTimeString("en-US");
       let coins = parseInt(document.getElementById("coins").innerText);
       totalCoins = coins;
    let newCoins = coins - 20;
    if(newCoins < 20){
        newCoins = 20;
        alert("Not Enough Coins To Make A Call")
        return
       }
       document.getElementById("coins").innerText= newCoins
       
       
       alert(`Calling ${serviceName} at ${serviceNumber}... `)

       let historyDiv = document.createElement("div");
       historyDiv.innerHTML =`
                    <div  class="bg-[#FAFAFA] p-4 rounded-lg flex justify-between items-center mb-3 shadow-md">
                    <div>
                        <h1 class="text-[18px] font-semibold text-[#111111]">${serviceName}</h1>
                        <span class="text-[18px] text-[#5C5C5C]">${serviceNumber}</span>
                    </div>
                    <p>${time}</p>

                </div>
       `;
       document.getElementById("history").appendChild(historyDiv)

    
    } )
}

