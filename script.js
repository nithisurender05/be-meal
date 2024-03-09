
function foodTime(){
  var mealTimes=[];
  var quanity = document.getElementById("quantity").value;
  for(let i=0;i<quanity;i++){
    var time = prompt("Enter meal times "+(i+1)+":");
    mealTimes.push(time);
  }
  return mealTimes;
}
function nutrional(){
  var checkedGoals=[];
  var checkedboxes= document.querySelectorAll('input[name="goal"]:checked');
  //a drop down menu or maybe a check box that allows you to multi select as many goals as you have
   //protien, iron, fat, carbs, fiber, sugar, salt, calcium, vitamins, minerals
  checkedboxes.forEach(function(checkbox){
    checkedGoals.push(checkbox.value);
  });
  localStorage.setItem('selectedNutritionalGoals' , JSON.stringify(checkedGoals));
}
function dietry(){
  var checkedDiet=[];
  var checked=document.querySelectorAll('input[name="diet"]:checked');
  checkedboxes.forEach(function(checkbox){
    checkedGoals.push(checkbox.value);
  });
  localStorage.setItem('selectedDietaryRestrictions' , JSON.stringify(checkedDiet));
}


document.addEventListner("DOMContentLoaded",function(){
  var question1Form=document.getElementById("question1Form");
  var question4Form=document.getElementById("question4Form")
  if(question1Form){
    question1Form.addEventListener("change",function(){
     nutrional();
    });
  }
  if(question3Form){
    question3Form.addEventListener("change",function(){
     dietry();
    });
  }
  
}