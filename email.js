function validate()
{
  var mail=document.myform.email.value;
  var ex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (ex.test(mail))
 {
    return (true)
 }
  alert("You have entered an invalid email address!")
  return (false)
}