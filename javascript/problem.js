var question = document.getElementsByClassName("problem-question");
var answer = document.getElementsByClassName("problem-answer");
var change = document.getElementsByClassName("change");

for(let i=0;i<question.length;i++){
    question[i].onclick = function(){
        for(let j=0;j<answer.length;j++){
            if(i != j){
                answer[j].style.opacity=0;
                change[j].innerHTML = "+";
            }
        }
        if(answer[i].style.opacity==1){
       
            change[i].innerHTML = "–";
            answer[i].style.opacity=0;
            change[i].innerHTML = "+";
            change[i].style.transformRotate="(0deg)" ;
        }
        else{
            answer[i].style.opacity=1;
            change[i].innerHTML = "–";
          
        }
    
    }
}