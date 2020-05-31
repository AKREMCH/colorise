
var domEverything = document.querySelector('.everything');
var domColor1 = document.querySelector('#color1');
var domColor2 = document.querySelector('#color2');
var domTocopy = document.querySelector('.toCopy');
var domBody = document.querySelector('body');
var hideShowBox = document.querySelector('.boxCopy');
var domBtncopy = document.querySelector('.btnCopy');

//init
/*  */

domBody.style.backgroundImage = 'linear-gradient(to right, ' + domColor1.value + ',' + domColor2.value + ')';
domTocopy.value = 'background-image: linear-gradient(to right, ' + domColor1.value + ',' + domColor2.value + ')';

// domBody.style.backgroundImage = 'linear-gradient(to right, '+domColor1.value+','+domColor2.value+')';


domColor1.addEventListener('input', function () {
    domBody.style.backgroundImage = 'linear-gradient(to right, ' + domColor1.value + ',' + domColor2.value + ')';
    domTocopy.value = 'background-image: linear-gradient(to right, ' + domColor1.value + ',' + domColor2.value + ')';
    domTocopy.style.backgroundColor = 'linear-gradient(to right, ' + domColor1.value + ',' + domColor2.value + ')';



});

domColor2.addEventListener('input', function () {
    domBody.style.backgroundImage = 'linear-gradient(to right, ' + domColor1.value + ',' + domColor2.value + ')';
    domTocopy.value = 'background-image: linear-gradient(to right, ' + domColor1.value + ',' + domColor2.value + ')';
    hideShowBox.style.display = 'block';
    domTocopy.style.backgroundColor = 'linear-gradient(to right, ' + domColor1.value + ',' + domColor2.value + ')';


});


domBtncopy.addEventListener('click', function () {
    document.querySelector('.toCopy').select();
    domTocopy.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert('color copied !');
});




// disapear button

$(document).ready(function () {
    $("body").dblclick(function () {

        if (domEverything.style.display = "none") {

            $(".everything").show();
        }
        if (domEverything.style.display = "block") {
            $(".everything").hide();
        }

    });
});




