const myname=document.getElementById('myname');
const email=document.getElementById('email');
const pass=document.getElementById('pass');
const form=document.getElementById('form');
const name_err=document.getElementById('name_err')
const email_err=document.getElementById('email_err')
const pass_err=document.getElementById('pass_err')
const output=document.getElementById('Output')



form.addEventListener('submit',e=>{
    
    outputVal=[]
    if(myname.value===""){
        outputVal.push("please enter a valid name")
    }
    if(email.value.length<4){
        outputVal.push("please enter a valid email")
    }
    if(pass.value.length<6){
        outputVal.push("please enter a valid pass")
    }
    if(output.length>1){
        e.preventDefault();
        output.innerText=outputVal.join(', ')
    }
   
})
    
