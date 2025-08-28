// heart icone functinality
const hearts = document.getElementsByClassName("heart-icon")
for(let heart of hearts){
    heart.addEventListener('click',function(){
   const hearCount = document.getElementById("heart-count").innerText
   const currentHeartCount = Number(hearCount) + 1;
   document.getElementById("heart-count").innerText= currentHeartCount;
 
    })
}
// call button functionality
const callBtns = document.getElementsByClassName("call-btn")
for(let callbtn of callBtns){
    callbtn.addEventListener('click', function(){
       const serviceName = callbtn.parentNode.parentNode.children[1].children[1].innerText;
       const serviceNumber = callbtn.parentNode.parentNode.children[2].children[0].innerText;
       let time = new Date().toLocaleTimeString("en-US");
       let coins = parseInt(document.getElementById("coins-count").innerText);
       totalCoins = coins;
    let newCoins = coins - 20;
    if(newCoins < 20){

        alert("Not Enough Coins To Make A Call")
        return;
       }
       document.getElementById("coins-count").innerText= newCoins
       
       
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

    
    })
}

// clear button functionalities
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function(){
    document.getElementById("history").innerHTML="";
})

// copy button functionalities
const copyBtns = document.getElementsByClassName('copy-btn')
for(let copybtn of copyBtns){
    copybtn.addEventListener('click', function(){
        
        const card  = copybtn.closest('.card');
        const number = card.querySelector('span').innerText;
        
        navigator.clipboard.writeText(number)
        .then(() =>{

        const copyCount = document.getElementById("copy-count").innerText;
        const currentCopyCount = Number(copyCount) + 1;

        document.getElementById("copy-count").innerText = currentCopyCount;

        alert(`Copied: ${number}`)
        })
        .catch(err => {
            console.error("Failed to copy:", err);
        });

    });
}



