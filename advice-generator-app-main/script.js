window.addEventListener('DOMContentLoad', FetchData);
const ad_title =  document.querySelector("#advice-head");
const ad_body = document.querySelector("#advice-body");
const dice =document.querySelector('#dice')
async function FetchData  (){
    const response = await fetch("http://api.adviceslip.com/advice");
    const json = await response.json();
    console.log(json);
    ad_title.innerText = `Advice ${json.slip.id}`;
    ad_body.innerText = `:${json.slip.advice}`;
}
dice.addEventListener('click', FetchData)