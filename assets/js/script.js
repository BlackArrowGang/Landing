// var today = new Date('June 14, 2023 23:15:30'), // 'June 19, 2023 23:15:30'
// currDay = today.getDate(),
// currYear = today.getFullYear(),
// currMonth = today.getMonth();

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// // check if today is saturday
// if(today.getDay() == 6){
//     var startingDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
// } else{
//     var startingDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
// }

// selectedDate = document.querySelector(".selected-date");
// selectedDate.innerText = `${days[today.getDay()+1]}, ${months[startingDay.getMonth()]} ${startingDay.getDate()}`;

// let isPast = true
// for (var i = 0; i < 7; i++) {
//     var cell = document.getElementById("day" + i);
//     var currentDate = new Date(startingDay.getFullYear(), startingDay.getMonth(), startingDay.getDate() + i);
//     currentDay = currentDate.getDate();
//     cell.innerText = currentDay

//     // console.log(cell.innerText)
//     if(currentDay == today.getDate()){
//         // current day
//         isPast = false
//     } 

//     if(currentDay == today.getDate() + 1){
//         // target day
//         isPast = false
//         cell.classList.add("active");
//     } 

//     if(isPast){
//         // previous days
//         cell.classList.add("inactive");
//     }
// }

// function selectDate(id){
//     let firstDayOfWeek = document.getElementById("day0").innerText;

//     let selectedDayCell = document.getElementById("day" + id)
//     let selectedDay = selectedDayCell.innerText;

//     if(selectedDayCell.classList.contains('inactive')){
//         return
//     }
    
//     let currentMonth = startingDay.getMonth()
    
//     if(Number(selectedDay) < Number(firstDayOfWeek)){
//         currentMonth += 1;
//     }
    
//     let choosenDate = new Date(startingDay.getFullYear(),currentMonth,selectedDay)

//     selectedDate.innerText = `${days[id]}, ${months[currentMonth]} ${selectedDay}`;

//     let activeDay = document.querySelector('.active');

//     activeDay.classList.remove("active");
//     selectedDayCell.classList.add("active");

//     generateHourButtons(choosenDate);
// }

// function generateHourButtons(choosenDate){
//     let year = choosenDate.getFullYear(),
//     month = choosenDate.getMonth() + 1,
//     day = choosenDate.getDate();

//     let monthString = String(month);
//     let dayString = String(day);

//     if (monthString.length == 1){
//         month = "0" + month
//     }
//     if (dayString.length == 1){
//         day = "0" + day
//     }

//     const timeSlots = document.querySelector('.time-slots');

//     // remove previous time slots
//     while (timeSlots.hasChildNodes()) {
//         timeSlots.firstChild.remove();
//     }

//     let link = document.createElement("a");

//     link.textContent = "2:00 - 2:30 PM";

//     link.href = `https://calendly.com/reyes256/service-meeting/${year}-${month}-${day}T14:00:00-07:00?month=${year}-${month}&date=${year}-${month}-${day}`;

//     link.target = "_blank";

//     timeSlots.appendChild(link);
// }

const titleKeyWord = document.querySelector(".title-keyword");
const keyWordArray = ["Platform", "SRE", "DevOps", "Cloud"];


let index = 0;

function updateText() {
    titleKeyWord.textContent = keyWordArray[index];
    index = (index + 1) % keyWordArray.length;
}

setInterval(updateText, 2000);

function serviceLink(event) {
    console.log(event.target.tagName)
    if (event.target.tagName.toLowerCase() !== 'a') {
      let today = new Date();
      let currentYear = today.getFullYear();
      let currentMonth = Number(today.getMonth()) + 1;
      let currentDay = today.getDate();

      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

      let nextDay = currentDay + 1;
      if(Number(nextDay) > Number(daysInMonth)){
          nextDay = 1;
          currentMonth += 1;
      }
  
      if(String(nextDay).length == 1){
          nextDay = "0" + nextDay;
      }
  
      if(String(currentMonth).length == 1){
          currentMonth = "0" + currentMonth;
      }
  
      let url = `https://calendly.com/d/z7q-zjf-v2r/initial-consultation-call?month=${currentYear}-${currentMonth}&date=${currentYear}-${currentMonth}-${nextDay}`;
   
      window.open(url);
    }
  }