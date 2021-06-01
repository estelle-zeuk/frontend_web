/*$('.check_required').blur(function()
{
    if( $(this).val().length !== 0 ) {
        alert('champ rempli!');
    }
});*/

function required_checked(){
    form = true;
    if ($("#inputName").val.length === 0 || $('#inputPseudo').val.length === 0 || $('#inputEmail').val.length === 0 || $('#inputPhone').val.length === 0){
        console.log("One or more is not filled!");
        form = false;
        console.log(form);
    } else{
        console.log("Everything is filled");
        console.log(form);
    }

    if (form) {
        $("#submit-btn").prop('disabled', false);
    }
}


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    /*alert("ok");
    console.log("okay");
    $('.check_required').blur(function()
{
    form = true;
    
        $('input[class="check_required"]').each(function() {
            if ($(this).val().length === 0 ) {
               form = false;
               alert("Ici");
            }
        });
        if(form)
            $("#submit-btn").prop('disabled', false);

});*/
