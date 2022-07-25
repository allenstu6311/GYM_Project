var btn = document.getElementById("btn");
        

btn.addEventListener("click",function(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var measurement = document.getElementById("measurement");
    measurement.value = (weight/(height*height)*10000).toFixed(2);
})