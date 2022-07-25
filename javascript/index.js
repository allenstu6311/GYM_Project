$(".cover").hide();

$(".notice-sale").mouseenter(function(){
  $(".cover").show();
})

$(".notice-sale").mouseout(function(){
  $(".cover").hide();
})


let q = 0;

setInterval(function(){
let slide = document.getElementsByClassName("slide-card");
q++;
if(q==slide.length){
  q=0
}

slide[q].style.opacity=1;
for(let i=0;i<slide.length;i++){
  if(q!=i){
      slide[i].style.opacity = 0;
  }

}
},3500)