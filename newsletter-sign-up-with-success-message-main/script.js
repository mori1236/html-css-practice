function inputFocusOut(){
    var form = document.getElementsByTagName("form");
    var input_mail = document.forms["form"]["email"]
    if (!input_mail.value.toLowerCase()
    .match(
     (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    )){
        form[0].getElementsByClassName("error")[0].style.display = "block";
        input_mail.classList.add('input-error');
    }
    else{
        form[0].getElementsByClassName("error")[0].style.display = "none";
         input_mail.classList.remove('input-error');
    }
}

function dismiss(){
    window.location.href="./";
}