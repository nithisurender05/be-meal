
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
  var goals=["protein","iron","fat","carbs","fiber","sugar","salt","calcium","vitamin A","vitamin B","vitamin C","vitamin D","vitamin E","vitamin K"]];
  //a drop down menu or maybe a check box that allows you to multi select as many goals as you have
   //protien, iron, fat, carbs, fiber, sugar, salt, calcium, vitamins, minerals
  var goalsC=document.createElemet("div");
  // var protein = document.createElement("input");
  // protien.type = "checkbox";
  // protien.name = "goal";
  // protien.value="protein";
  goalsList.forEach(function(goal)){
    var checkbox=document.createElement("input");
    checkbpx.type = "checkbox";
    checkbox.name = "goal";
    checkbox.value=goal;
  }
  // var proteinLabel = document.createElement("label");
  // porteinLabel.innerHTML = "Protein";

  proteinLabel.appendChild(document.createTextNode("Protein"));
    document.body.appendChild(protein);
    document.body.appendChild(proteinLabel);
    document.body.appendChild(document.createElement("br"))

  document.querySelectorAll('input[name="goal]"').forEach(checkbox)=>{
    checkbox.addEventListner("change",function(){
      if(this.checked){
        goals.push(this.value);
      } 
      else{
        var index=goals.indexOf(this.value);
        if(index !===-1){
          goals.splice(index,1);
        } 
      }
    }
    
  }
}
document.addEventListner("DOMContentLoaded",function(){
  var question1Form=document.getElementById("question1Form");
  if(question1Form){
    question1Form.addEventListener("change",function(){
     nutrional();
    });
  }
}