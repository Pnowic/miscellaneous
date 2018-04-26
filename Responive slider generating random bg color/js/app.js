$(function() {

    var body = $('body'),
        input= $('input');

    //Version 1

    // input.on('input',function(){
    //     var inputValue = input.val();
    //
    //     switch (inputValue){
    //         case '0':
    //             body.removeClass();
    //             body.addClass('gradient0');
    //             break;
    //         case '1':
    //             body.removeClass();
    //             body.addClass('gradient1');
    //             break;
    //         case '2':
    //             body.removeClass();
    //             body.addClass('gradient2');
    //             break;
    //         case '3':
    //             body.removeClass();
    //             body.addClass('gradient3');
    //             break;
    //         case '4':
    //             body.removeClass();
    //             body.addClass('gradient4');
    //             break;
    //         case '5':
    //             body.removeClass();
    //             body.addClass('gradient5');
    //             break;
    //         case '6':
    //             body.removeClass();
    //             body.addClass('gradient6');
    //             break;
    //     }
    // });

    //Version 2

    input.on('input',function(){
        document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
});