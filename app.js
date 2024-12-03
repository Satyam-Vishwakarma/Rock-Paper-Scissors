let gameIcon=document.querySelectorAll(".gameIcon");
let rock=document.querySelector("#rock")
let paper=document.querySelector("#paper")
let scissors=document.querySelector("#scissors")
let comp=document.querySelector("#computer")
let finalMsg=document.querySelector("#finalMsg")
let msg=document.querySelectorAll(".msg")
let btn=document.querySelector("#btn");

rock.addEventListener("click", ()=>{
    let R="Rock"
    clickMatch(R);
    displyMsg(msg);
})
paper.addEventListener("click", ()=>{
    let P="Paper"
    clickMatch(P);
    displyMsg(msg);
})
scissors.addEventListener("click", ()=>{
    let S="Scissors"
    clickMatch(S);
    displyMsg(msg);
})
const clickMatch=(userValue)=>{
    let compValue=computer()
    if(compValue==="Rock"){
        comp.innerText="Computer choosen 'Rock'!"
        if(userValue==="Paper"){
            finalMsg.innerText="You Won ! Paper beat Rock";
        }
        else if(userValue==="Scissors"){
            finalMsg.innerText="You loss ! Rock beat Scissors";
        }
        else{
            finalMsg.innerText="Draw ! You also choosen Rock";
        }
    }
    else if(compValue==="Paper"){
        comp.innerText="Computer choosen 'Paper'!"
        if(userValue==="Scissors"){
            finalMsg.innerText="You won ! Scissors beat Paper";
        }
        else if(userValue==="Rock"){
            finalMsg.innerText="You loss ! Paper beat Rock";
        }
        else{
            finalMsg.innerText="Draw ! You also choosen Paper";
        }
    }
    else if(compValue==="Scissors"){
        comp.innerText="Computer choosen 'Scissors'!"

        if(userValue==="Rock"){
            finalMsg.innerText="You won ! Rock beat Scissors";
        }
        else if(userValue==="Paper"){
            finalMsg.innerText="You loss ! Scissors beat Paper";
        }
        else{
            console.log("match is draw")
            finalMsg.innerText="Draw ! you also choosen Scissors";
        }
    }
}
const computer=()=>{
    const obj=["Rock", "Paper", "Scissors"];
    let compValue=Math.floor(Math.random()*3);
    return obj[compValue];
}
const displyMsg=(msg)=>{
    msg.forEach((eachmsg)=>{
        eachmsg.classList.remove("hide")
    })
}
btn.addEventListener("click",()=>{
    msg.forEach((eachmsg)=>{
        eachmsg.classList.add("hide")
    })
})