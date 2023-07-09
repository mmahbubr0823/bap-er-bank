document.getElementById('btn-submit').addEventListener('click', function(){
    const email = document.getElementById('email-field');
    const text = email.value;

    const passwordfield = document.getElementById('password-field');
    const password = passwordfield.value;
   if(text === 'mahbubfdtc@gmail.com' && password === 'asdf'){
    window.location.href = 'welcome%20bank/bank.html'
   }
   else{
    alert('your credential is not matched');

   }
    
})