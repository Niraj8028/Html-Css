
const names=document.getElementById('name');
const pass=document.getElementById('pass');
const form=document.getElementById('form')
const output=document.getElementById('output')

function getSentence() {
    return document.getElementById('name').value;   
  }
function getChar() {
    return document.getElementById('pass').value;   
  }


form.addEventListener('submit',(e)=>{
    // let text=e.getElementById('name').innerText;
    // let Char=e.getElementById('pass').innerText;
    
    let outputValue=[]; 
    let sentence=getSentence();
    let char=getChar();

    outputValue.push(sentence);
    outputValue.push(char);
    
    if(names.value === ''){  
       outputValue.push("Sentence is required")
    }
    if(pass.value.length<1){
        outputValue.push("Input must be 1 Char")
    }
    

    if(outputValue.length>0){
        e.preventDefault();
        output.innerText=outputValue.join(',')
        console.log(sentence);
    }
    // else{
    //     sentence.innerText=(char)
    // }
    
})