let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");
const usersc=document.querySelector("#user-score");
const compsc=document.querySelector("#comp-score");
const getcompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() *3);
    return options[randIdx];
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw,try again";
    msg.style.backgroundColor="green";
}
const showwinner=(userwin,userchoice,compchoice)=>{
      if(userwin){
        userscore++;
        usersc.innerText=userscore;
        console.log("you win!");
        msg.innerText=`you win, ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor="red";

      }else{
        compscore++;
        compsc.innerText=compscore;
        console.log("you lost");
msg.innerText = `you lost, ${compchoice} beats ${userchoice}`;            msg.style.backgroundColor="orange";
      }
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);  
    const compchoice=getcompchoice();
    console.log("computer choice=",compchoice);
    if(userchoice===compchoice){
         drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }showwinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})