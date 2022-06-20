const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.dates')

let hour = document.querySelectorAll('.hour')
let txtArea = document.querySelectorAll('#txt') 
let btn = document.querySelectorAll('.btn')

const dateTime = new Date()
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
}
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



