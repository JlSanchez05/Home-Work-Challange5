let currentDay = document.querySelector('#currentDay')
let hour = document.querySelectorAll('.hour')
let txtArea = document.querySelectorAll('#txt') 
let btn = document.querySelectorAll('.btn')

const dateTime = new Date()
//currentDay.textContent = dateTime

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

let timeReader = function(){
  if(currentDay.textContent == hour[1].textContent){
       console.log('if statement is working')

  }else {
       console.log('the if statemetn is not working')
  }
}
timeReader()
console.log(hour[5].textContent)

