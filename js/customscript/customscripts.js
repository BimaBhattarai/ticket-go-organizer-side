$(document).ready(function () {
    // show form based on click the button in header
    $("header .mysliderButton").click(function () {
        // alert("Header button click");
        // aa.view class to popupwapper
        $('.popupwapper').addClass('view');
    })
    /*$('header .close').click(function () {
        alert("Header close click");
        $('.popupwapper').remove('view');
    })*/
})


// plain jav
// class = close
let closeDOM = document.getElementsByClassName('close')[0];
closeDOM.addEventListener('click', handleClose);

function handleClose(){
    document.getElementsByClassName('popupwapper')[0].classList.remove('view');
}



