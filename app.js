const timeLeft = document.getElementById('time-left')
const flightDate = new Date('01/01/2023 09:00')
const second = 1000
const minute = second *60
const hour = minute*60
const day = hour * 24
let timerId



function countDown(){
    const today = new Date()
    const timeSpan=flightDate - today;

if(timeSpan<= -day){
    timeLeft.innerHTML = "Hope you have a nice flight!"
    clearInterval(timerId)
    return
}
if(timeSpan<=0){
    timeLeft.innerHTML = "Bon Voage"
    clearInterval(timerId)
return
}
const days = Math.floor(timeSpan/day)
const hours = Math.floor((timeSpan%day)/ hour)
const minutes= Math.floor((timeSpan %hour)/minute)
const seconds= Math.floor((timeSpan%minute)/second)
timeLeft.innerHTML =days+ " days " +hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds '
}
setInterval(countDown, second)