
function foodTime(){
  var breakfast= document.getElementById("breakfast").value;
  var lunch= document.getElementById("lunch").value;
  var dinner= document.getElementById("dinner").value;
  if(breakfast&&lunch&&dinner){
    localStorage.setItem('breakfast',breakfast);
    localStorage.setItem('lunch',lunch);
    localStorage.setItem('dinner',dinner);
  }
  else{
    alert("Plese enter a time for each meal");
  }
}
//a drop down menu or maybe a check box that allows you to multi select as many goals as you have
 //protien, iron, fat, carbs, fiber, sugar, salt, calcium, vitamins, minerals
function nutrional(){
  var checkedGoals=[];
  var checkedboxes= document.querySelectorAll('input[name="goal"]:checked');
  checkedboxes.forEach(function(checkbox){
    checkedGoals.push(checkbox.value);
  });
  localStorage.setItem('selectedNutritionalGoals' , JSON.stringify(checkedGoals));
}
function dietry(){
  var checkedDiet=[];
  var checkedboxes=document.querySelectorAll('input[name="diet"]:checked');
  checkedboxes.forEach(function(checkbox){
    checkedDiet.push(checkbox.value);
  });
  localStorage.setItem('selectedDietaryRestrictions' , JSON.stringify(checkedDiet));
}


document.addEventListener("DOMContentLoaded",function(){
  var question1Form=document.getElementById("question1Form");
  var question3Form=document.getElementById("question3Form");
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