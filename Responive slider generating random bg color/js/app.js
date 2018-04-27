$(function() {

    var input= $('input');

    input.on('input',function(){
        document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
});