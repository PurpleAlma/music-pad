const drum1=document.querySelector('.drum1')
const drum2=document.querySelector('.drum2')
const drum3=document.querySelector('.drum3')

const guitar1=document.querySelector('.guitar1')
const guitar2=document.querySelector('.guitar2')
const guitar3=document.querySelector('.guitar3')


const weird1=document.querySelector('.weird1')
const weird2=document.querySelector('.weird2')
const weird3=document.querySelector('.weird3')

const startButton=document.querySelector('.start-button')
const stopButton=document.querySelector('.stop-button')


const all =document.querySelectorAll('.all')

const first = document.querySelectorAll('#first-box')
const second = document.querySelectorAll('#second-box')
const third = document.querySelectorAll('#third-box')
const fourth = document.querySelectorAll('#fourth-box')
const fifth = document.querySelectorAll('#fifth-box')
const sixth = document.querySelectorAll('#sixth-box')

const bar1 =document.querySelectorAll('.first-bar')
const bar2 =document.querySelectorAll('.second-bar')
const bar3 =document.querySelectorAll('.third-bar')
const bar4 =document.querySelectorAll('.fourth-bar')
const bar5 =document.querySelectorAll('.fifth-bar')
const bar6 =document.querySelectorAll('.sixth-bar')




//drums.addEventListener('click',(e)=>console.log(e))

/*for (i in drums){if (drums[i].classList=='drum1'){
  console.log('okay')
}}*/

bar1.forEach(bar => {bar.addEventListener('click',(e)=>{e.target.classList.toggle('active')})})
bar2.forEach(bar => {bar.addEventListener('click',(e)=>{e.target.classList.toggle('active')})})
bar3.forEach(bar => {bar.addEventListener('click',(e)=>{e.target.classList.toggle('active')})})
bar4.forEach(bar => {bar.addEventListener('click',(e)=>{e.target.classList.toggle('active')})})
bar5.forEach(bar => {bar.addEventListener('click',(e)=>{e.target.classList.toggle('active')})})
bar6.forEach(bar => {bar.addEventListener('click',(e)=>{e.target.classList.toggle('active')})})


function isActive(box){
    if (box.classList.contains('active')){return true}
}

/* function drum(e) {
    setInterval((e) => {
    (drum_zone[0].classList.add('highlight'));
    }, 1000);
}
function guitar(e) {
    setInterval((e) => {
    (guitar_zone[0].classList.add('highlight'));
    }, 1000);
}
function weird(e){
    setInterval((e) => {
    (weird_zone[0].classList.add('highlight'));
    }, 1000); 
} */

startButton.addEventListener('click',porniren)
stopButton.addEventListener('click',()=>{
  stopButton.classList.toggle('stop-button-stop')
})
$(document).ready(function(){
  $('.stop-button').on('click', function () {
      $(this).text((i, t) => t == 'LOOP ACTIVE' ? 'LOOP STOPPED' : 'LOOP ACTIVE');
  });
});

function porniren(){
firstBar()
  .then(()=>secondBar())
  .then(()=>thirdBar())
  .then(()=>fourthdBar())
  .then(()=>fifthBar())
  .then(()=>sixthBar())
  .then(()=>reset())
  .then(()=>{ 
    if (stopButton.classList==('stop-button')){porniren()}
     })
}

  function firstBar() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        bar1[0].classList.add('highlight')
        first.forEach(e=>{if (isActive(e)){
          (e.childNodes[1].play())
        }})
        resolve('');
      }, );
    })
  }
  

  function secondBar() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        bar2[0].classList.add('highlight'), bar1[0].classList.remove('highlight')
        second.forEach(e=>{if (isActive(e)){
          (e.childNodes[1].play())
        }})
        resolve('');
      }, 500);
    })
  }
  
  function thirdBar() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        bar3[0].classList.add('highlight'), bar2[0].classList.remove('highlight')
        third.forEach(e=>{if (isActive(e)){
          (e.childNodes[1].play())
        }})
        resolve('');
      }, 500);
    })
  }

  function fourthdBar() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        bar4[0].classList.add('highlight'), bar3[0].classList.remove('highlight')
        fourth.forEach(e=>{if (isActive(e)){
          (e.childNodes[1].play())
        }})
        resolve('');
      }, 500);
    })
  }

  function fifthBar() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        bar5[0].classList.add('highlight'), bar4[0].classList.remove('highlight')
        fifth.forEach(e=>{if (isActive(e)){
          (e.childNodes[1].play())
        }})
        resolve('');
      }, 500);
    })
  }

  function sixthBar() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        bar6[0].classList.add('highlight'), bar5[0].classList.remove('highlight')
        sixth.forEach(e=>{if (isActive(e)){
          (e.childNodes[1].play())
        }})
        resolve('');
      }, 500);
    })
  }

  function reset() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        bar6[0].classList.remove('highlight')
        resolve('');
      }, 500);
    })
  }
  
