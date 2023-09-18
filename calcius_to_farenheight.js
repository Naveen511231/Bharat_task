let cal=document.getElementById("calsius_input") ;
let far=document.getElementById("farenheight_input");

cal.addEventListener("input", function (){
    var f=(parseFloat(cal.value)*9/5)+32;
    document.getElementById("farenheight_input").value=f;
});
far.addEventListener("input", function (){
    var c=(parseFloat(far.value)-32)*5/9;
    document.getElementById("calsius_input").value=f;
})

