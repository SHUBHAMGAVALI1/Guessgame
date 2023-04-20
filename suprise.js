let computerguess;
let userguess=[];
let maxguess;
let song=new Audio('audio/mixkit-arcade-video-game-bonus-2044.wav');


const compguess=()=>{
    computerguess=Math.floor(Math.random()*100);
    // console.log(computerguess);
    document.querySelector('.secondboxsection').style.display='none';
    document.querySelector('.newgame').style.display='none';

}

// startgame function calling
 const  startgame=()=>{
    document.querySelector('.secondboxsection').style.display='block';
    document.querySelector('.firstboxsection').style.display='none';
 
};


// function startnewgame calling
const startnewgame=()=>{
    song.play();

    document.querySelector('.newgame').style.display='block';
    document.getElementById('inputbox').setAttribute('disabled',true);
    // song.play();
}


// function beginnewgame calling

const beginnewgame=()=>{

    window.location.reload();
    song.play();
}



// compareuess function calling
const compareguass=()=>{
    song.play();

    let usernum=Number(document.getElementById('inputbox').value);
    // console.log(usernum);
    userguess=[...userguess,usernum];
    // console.log(userguess);
    document.getElementById('guesses').innerText=userguess;
    if(userguess.length<maxguess){

    if(computerguess>usernum){document.getElementById('msg').innerText='you value is low. ';
    document.getElementById('inputbox').value="";
// console.log('you value is low. ');
}
    else if(computerguess<usernum){document.getElementById('msg').innerText='you value is high. ';
    document.getElementById('inputbox').value="";
    

// console.log('you value is high. ');
}
  else{document.getElementById('msg').innerText='there you go.';
  document.getElementById('inputbox').value="";
  startnewgame();
//   console.log('there you go');
// document.querySelector('.newgame').style.display='block';
}
}
else{

    if(computerguess>usernum){document.getElementById('msg').innerText="You Lose The Game.The Correct Number Is  " + computerguess;
    document.getElementById('inputbox').value="";
    startnewgame();
// console.log('you value is low. ');
}
    else if(computerguess<usernum){document.getElementById('msg').innerText="You Lose The Game.The Correct Number Is" + computerguess;
    document.getElementById('inputbox').value="";
    startnewgame();
// console.log('you value is high. ');
}

  else{
    
    document.getElementById('msg').innerText='there you go.';
  document.getElementById('inputbox').value="";
  startnewgame();

//   console.log('there you go');
// document.querySelector('.newgame').style.display='block';
}

} 
document.getElementById('attempts').innerHTML=userguess.length;
};


// function easymode call
const easymode=()=>{
song.play();
maxguess=10;
startgame();
// console.log(userguess.length);
// document.getElementById('attempts').innw=userguess.length;
};


// function hardmode call


const hardmode=()=>{
song.play();
maxguess=5;
startgame();
    };
    
