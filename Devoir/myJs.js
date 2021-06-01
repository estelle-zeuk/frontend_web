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
