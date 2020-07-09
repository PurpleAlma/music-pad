const drum1=document.querySelector('.drum1')
const drum2=document.querySelector('.drum2')
const drum3=document.querySelector('.drum3')
const adrum1=drum1.querySelector('audio')
const adrum2=drum2.querySelector('audio')
const adrum3=drum3.querySelector('audio')

const guitar1=document.querySelector('.guitar1')
const guitar2=document.querySelector('.guitar2')
const guitar3=document.querySelector('.guitar3')
const aguitar1=guitar1.querySelector('audio')
const aguitar2=guitar2.querySelector('audio')
const aguitar3=guitar3.querySelector('audio')

const weird1=document.querySelector('.weird1')
const weird2=document.querySelector('.weird2')
const weird3=document.querySelector('.weird3')
const aweird1=weird1.querySelector('audio')
const aweird2=weird2.querySelector('audio')
const aweird3=weird3.querySelector('audio')

const startButton=document.querySelector('.start-button')



const all =document.querySelectorAll('.all')
const drum_zone = document.querySelectorAll('.drums-zone')
const guitar_zone = document.querySelectorAll('.guitar-zone')
const weird_zone = document.querySelectorAll('.weird-zone')

const drums =document.querySelectorAll('#drum-box')
const guitars =document.querySelectorAll('#guitar-box')
const weirds =document.querySelectorAll('#weird-box')



//drums.addEventListener('click',(e)=>console.log(e))

/*for (i in drums){if (drums[i].classList=='drum1'){
  console.log('okay')
}}*/

drums.forEach(drum => {drum.addEventListener('click',(e)=>{e.target.classList.toggle('active')})})
guitars.forEach(guitar => {guitar.addEventListener('click',(e)=>{e.target.classList.toggle('active')})})
weirds.forEach(weird => {weird.addEventListener('click',(e)=>{e.target.classList.toggle('active')})})


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

function porniren(){
firstBar()
  .then(()=>secondBar())
  .then(()=>thirdBar())
  .then(()=>reset())
  .then(()=>porniren())
}

  function firstBar() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        console.log('ONE');
        drum_zone[0].classList.add('highlight')
        drums.forEach(e=>{if (isActive(e)){
          (e.childNodes[1].play())
        }})
        resolve('');
      }, );
    })
  }

  function secondBar() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        console.log('TWO');
        guitar_zone[0].classList.add('highlight'), drum_zone[0].classList.remove('highlight')
        guitars.forEach(e=>{if (isActive(e)){
          (e.childNodes[1].play())
        }})
        resolve('');
      }, 500);
    })
  }
  
  function thirdBar() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        console.log('THREE');
        guitar_zone[0].classList.remove('highlight'), weird_zone[0].classList.add('highlight')
        weirds.forEach(e=>{if (isActive(e)){
          (e.childNodes[1].play())
        }})
        resolve('');
      }, 500);
    })
  }
  function reset() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        console.log('FOUR');
        weird_zone[0].classList.remove('highlight')
        resolve('');
      }, 500);
    })
  }
  