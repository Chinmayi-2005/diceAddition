const buttonEl = document.getElementById("roll-button")


const dice1El = document.getElementById("dice1")
const dice2El = document.getElementById("dice2")

const rollHistoryEl=document.getElementById("roll-history")

let historyList = [];

function rollDice()
{
    const roll1=Math.floor(Math.random() * 6)+1;
    const roll2=Math.floor(Math.random() * 6)+1;
    const face1=getDiceFace(roll1);
    const face2=getDiceFace(roll2);
    dice1El.innerHTML = face1;
    dice2El.innerHTML = face2;
    
    historyList.push({ roll1 , roll2});
    updateRollHistory();
    console.log(historyList);
    
}

function updateRollHistory()
{
    rollHistoryEl.innerHTML = "";
    for(let i=0; i<historyList.length; i++)
    {
        const { roll1, roll2 } = historyList[i];
        const listItem=document.createElement("li")
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(roll1)}</span> + <span>${getDiceFace(roll2)}</span>=${roll1 + roll2}`;
        rollHistoryEl.appendChild(listItem);
    }
}

function getDiceFace(rollresult)
{
    switch(rollresult){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
             return "&#9858;";
        case 4:
             return "&#9859;";
        case 5:
             return "&#9860;";
        case 6:
             return "&#9861;";
        default:
            return ""

    }
}
buttonEl.addEventListener("click", ()=>{
    dice1El.classList.add("roll-animation");
    dice2El.classList.add("roll-animation");
    setTimeout(()=>{dice1El.classList.remove("roll-animation");
                    dice2El.classList.remove("roll-animation");
        rollDice();
},1000)
});