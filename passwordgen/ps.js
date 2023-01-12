const outputA=document.querySelector('#output');
const copy=document.querySelector('#copy');
const passwordlengthA=document.querySelector('#length');
const numberA=document.querySelector('#number');
const captialA=document.querySelector('#captial');
const smallA=document.querySelector('#small');
const symbolA=document.querySelector('#symbol');
const spaceA=document.querySelector('#space');

const frm=document.querySelector('#frm');





copy.addEventListener('click',async()=>{
    const pass=outputA.value;
    if(pass){
        await navigator.clipboard.writeText(pass);
        alert('COPIED');

    }else{
        alert("Password type pannu da VENNA!!!!");
    }
    console.log(pass);

});


function generateRandomChar(min,max)
{
    const limit=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);

}

function captialValue(){
    return generateRandomChar(65,90);
}
function smallValue(){
    return generateRandomChar(97,122);
}
function numberValue(){
    return generateRandomChar(48,57);
}
function spaceValue(){
    return generateRandomChar(32);
}
function symbolValue(){
    const symbols="~!@#$%^&*()_-+={}[]|<>/?':;";
    return symbols[Math.floor(Math.random()*symbols.length)];

}

const functionArray=[
    {
        checkbox:captialA,
        fun:captialValue
    },

    {
        checkbox:smallA,
        fun:smallValue
    },

    {
        checkbox:numberA,
        fun:numberValue
    },

    {
        checkbox:symbolA,
        fun:symbolValue
    },
    {
        checkbox:spaceA,
        fun:spaceValue
    }


];

frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const limit=passwordlengthA.value;




    let generatePassword="";

    
    const funArray=functionArray.filter(({checkbox})=>checkbox.checked);
    
    
    for(i=0;i<limit;i++){
        const index=Math.floor(Math.random()*funArray.length);
        const letter=funArray[index].fun();
        generatePassword+=letter;

    }

    outputA.value=generatePassword;
});




