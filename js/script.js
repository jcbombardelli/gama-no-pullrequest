const form1 = document.getElementById('form1');
form1.addEventListener('submit',(e)=>{
e.preventDefault();
let namePerson = document.getElementById('namePerson').value;
let email = document.getElementById('email').value;
let data = {
  namePerson,
  email,
}
let convertData = JSON.stringify(data);
localStorage.setItem('lead', convertData);
let content = document.getElementById('content');
let loading = '<p> Carregando a página ... </p>';
let ready = '<p> Dados salvos com sucesso ! </p>';
content.innerHTML = loading;
setTimeout(()=>{
content.innerHTML = ready;
}, 1000)
})
function countFridayMonday(){
    let today = new Date();
    let blackFridayDate = new Date("Nov 26, 2021 00:00:00"); //black friday 2021
    let cyberMondayDate = new Date("Nov 29, 2021 00:00:00");
    let difBlackToday = blackFridayDate - today;
    let difCyberToday = cyberMondayDate - today;
    let oneSecond = 1000;
    let oneMinute = oneSecond*60;
    let oneHour= oneMinute*60;
    let oneDay = oneHour*24; 
    let blackFridayDays = 0;
    let blackFridayHours = 0;
    let blackFridayMinutes = 0;
    let blackFridaySeconds = 0;
    let cyberMondayDays = 0;
    let cyberMondayHours = 0;
    let cyberMondayMinutes = 0;
    let cyberMondaySeconds = 0;
    let countDays = "";
    let countHours = "";
    let countMinutes = "";
    let countSeconds = "";
    let titlePromo = "CONTAGEM REGRESSIVA PARA BLACK FRIDAY";
     // Se as data ainda não tiver chegado, será calculada a diferença
    if(difBlackToday > 0){
      blackFridayDays = parseInt(difBlackToday/oneDay);
      blackFridayHours = parseInt((difBlackToday % oneDay)/oneHour);
      blackFridayMinutes = parseInt(((difBlackToday % oneDay) % oneHour)/oneMinute);
      blackFridaySeconds = parseInt((((difBlackToday % oneDay) % oneHour)%oneMinute)/oneSecond);
      titlePromo = "CONTAGEM REGRESSIVA PARA A BLACK FRIDAY:"
      countDays = blackFridayDays.toString();
      countHours = blackFridayHours.toString();
      countMinutes = blackFridayMinutes.toString();
      countSeconds = blackFridaySeconds.toString();
    } else if (difCyberToday > 0){ //se a Black Friday já passou, mas a Cyber Monday não, será calculada a diferença
      cyberMondayDays = parseInt(difCyberToday/oneDay);
      cyberMondayHours = parseInt((difCyberToday % oneDay)/oneHour);
      cyberMondayMinutes = parseInt(((difCyberToday % oneDay) % oneHour)/oneMinute);
      cyberMondaySeconds = parseInt((((difCyberToday % oneDay) % oneHour)%oneMinute)/oneSecond);
      titlePromo = "CONTAGEM REGRESSIVA PARA A CYBER MONDAY:"
      countDays = cyberMondayDays.toString();
      countHours = cyberMondayHours.toString();
      countMinutes = cyberMondayMinutes.toString();
      countSeconds = blackFridaySeconds.toString();
    } else{
      titlePromo = "A CONTRAGEM REGRESSIVA ACABOU! CADASTRE-SE EM NOSSO SITE PARA MAIORES INFORMAÇÕES!"
    }
       
    //document.getElementById("days").innerText = blackFridayDays.toString;
    let hCounter = document.getElementById('titlepromo');
    hCounter.innerText = titlePromo;
    let p1 = document.getElementById('days');
    p1.innerText= countDays;
    let p2 = document.getElementById('hours');
    p2.innerText = countHours;
    let p3 = document.getElementById('minutes');
    p3.innerText= countMinutes;
    let p4 = document.getElementById('seconds');
    p4.innerText = countSeconds;
   // let divDashP = document.getElementById("dashp");
    //setInterval(function(){ 
   //   divDashP.innerHTML = "testando";
   // }, 1000);
  }
         
  countFridayMonday();
  
