const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.dates')

let hour = document.querySelectorAll('.hour')
//let txtArea = document.querySelectorAll('#txt') 
//let btn = document.querySelectorAll('.btn')

let btn0 = document.querySelector('.btn0')
let txt0 = document.querySelector('#txt0')
let btn1 = document.querySelector('.btn1')
let txt1 = document.querySelector('#txt1')
let btn2 = document.querySelector('.btn2')
let txt2 = document.querySelector('#txt2')
let btn3 = document.querySelector('.btn3')
let txt3 = document.querySelector('#txt3')
let btn4 = document.querySelector('.btn4')
let txt4 = document.querySelector('#txt4')
let btn5 = document.querySelector('.btn5')
let txt5 = document.querySelector('#txt5')
let btn6 = document.querySelector('.btn6')
let txt6 = document.querySelector('#txt6')
let btn7 = document.querySelector('.btn7')
let txt7= document.querySelector('#txt7')
let btn8 = document.querySelector('.btn8')
let txt8 = document.querySelector('#txt8')



//const dateTime = new Date()
//currentDay.textContent = dateTime

function formatTime(date){
  const hours12 = date.getHours() % 12 || 12
  const minutes = date.getMinutes()
  const isAm = date.getHours()< 12
return `${hours12.toString().padStart(2,' 0')}:${minutes.toString().padStart(2,"0")} ${isAm ? "AM" : "PM"}`

}
function formatDate(date){
  const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const MONTHS = ['January','February','March','April','May','June','July','Auguest','October','November','Decemeber']

  return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}

setInterval(() => {
  const now = new Date();
  timeElement.textContent = formatTime(now)
  dateElement.textContent = formatDate(now);
}, 200)



btn0.addEventListener('click',function(){
  let txt0 = document.querySelector('#txt0').value
  localStorage.setItem('#txt0',txt0)

  console.log('clicked')
})
  document.querySelector('#txt0').textContent=localStorage.getItem('#txt0')
//--
btn1.addEventListener('click',function(){
  let txt1 = document.querySelector('#txt1').value
  localStorage.setItem('#txt1',txt1)
})
document.querySelector('#txt1').textContent = localStorage.getItem('#txt1')
//-
btn2.addEventListener('click',function(){
  let txt2 = document.querySelector('#txt2').value
  localStorage.setItem('#txt2',txt2)
})
document.querySelector('#txt2').textContent = localStorage.getItem('#txt2')
//--
btn3.addEventListener('click',function(){
  let txt3 = document.querySelector('#txt3').value
  localStorage.setItem('#txt3',txt3)
})
document.querySelector('#txt3').textContent = localStorage.getItem('#txt3')
//--
btn4.addEventListener('click',function(){
  let txt4 = document.querySelector('#txt4').value
  localStorage.setItem('#txt4',txt4)
})
document.querySelector('#txt4').textContent = localStorage.getItem('#txt4')
//--
btn5.addEventListener('click',function(){
  let txt5 = document.querySelector('#txt5').value
  localStorage.setItem('#txt5',txt5)
})
document.querySelector('#txt5').textContent = localStorage.getItem('#txt5') 
//--
btn6.addEventListener('click',function(){
  let txt6 = document.querySelector('#txt6').value
  localStorage.setItem('#txt6',txt6)
})
document.querySelector('#txt6').textContent = localStorage.getItem('#txt6')
//--
btn7.addEventListener('click',function(){
  let txt7 = document.querySelector('#txt7').value
  localStorage.setItem('#txt7',txt7)
})
document.querySelector('#txt7').textContent = localStorage.getItem('#txt7')
//--
btn8.addEventListener('click',function(){
  let txt8 = document.querySelector('#txt8').value
  localStorage.setItem('#txt8',txt8)
})
document.querySelector('#txt8').textContent = localStorage.getItem('#txt8')
/*
function testing(){
  console.log('clicked')
 
}
 newBtn.addEventListener('click',testing)
*/


//console.log(txtArea)
//console.log(hour)
//console.log(btn)
//console.log(hour[1].textContent)
//console.log(currentDay.textContent)




//for(let i = 0; i < hour.length; i++){

//if(currentDay.textContent === hour[i].textContent){
  //   document.getElementById('txt').style.backgroundColor = "red"
  // }else{
    //    console.log('the if statement not working ')
   //}
    // console.log(hour[i].textContent)
//}



