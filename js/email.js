function ValidateEmail(inputText)
{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat))
    {
        if(inputText.value.slice(inputText.value.length-3)=="edu"||inputText.value.slice(inputText.value.length-3)=="com"){
            alert("Valid email address!");
            document.form1.text1.focus();
            return true;
        }
        else{
            alert("You have entered an invalid email address!");
            document.form1.text1.focus();
            return false;
        }
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}
