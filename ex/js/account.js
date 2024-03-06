$(document).ready(function(){
 $("navbar").load('navbar.html');


 $("#login_btn").click(function(){
     let val = $("#login_phone").val()
     console.log(val);
     
 })

})
const hypenTel = (target) => {
   target.value = target.value
   .replace(/[^0-9]/g, '')
   .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    
   }
