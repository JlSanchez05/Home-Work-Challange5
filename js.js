let firstDiv = document.querySelector('.content')

let message = document.querySelector('.message')

firstDiv.addEventListener('click',function(){

 if(firstDiv.textContent=== 'important'){
      firstDiv.style.backgroundColor= 'red'
 }



})
console.log(firstDiv.textContent)