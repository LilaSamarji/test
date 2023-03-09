var names=['lila','ahmad','rony','pierre'];
var select=document.getElementById('select');


 names.forEach( (x) => 
 {
   var option=document.createElement('option');
   
     option.innerHTML=x;
    select.appendChild(option);
    })