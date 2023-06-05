 var red = document.querySelector('.dendo');
var yellow = document.querySelector('.denvang');
var green = document.querySelector('.denxanh');


document.getElementById("dendo1").addEventListener("click", function() {
     red.classList.add("do"); // add ham va thay doi remove la xoa
     yellow.classList.remove("vang");
     green.classList.remove("xanh");
})

document.getElementById("denvang2").addEventListener("click", function() {
    yellow.classList.add("vang");
    red.classList.remove("do");
    green.classList.remove("xanh");// add ham va thay doi
    
})
document.getElementById("denxanh3").addEventListener("click", function() {
    green.classList.add("xanh");
    red.classList.remove("do");// add ham va thay doi
    yellow.classList.remove("vang");
    
})

