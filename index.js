const PI = 3.141592653589793;
//PI = 2
let firstname = 'Jhonny'
let lastname = 'Matta'
let age = 18

let person = {firstname:'Jhonny', lastname:'Matta', age: 18}
person.age = 19
//alert(person.age)
//alert(person.firstname)

let numbers = [4,5,8,11,55,23,47]
//window.alert(numbers[6]);

//alert(numbers[numbers.length - 1])

let names = ['Joseph','Adb','Mira','Rym']
let Cars = [
            {name:'Toyota',model:'Yaris'},
            {name:'Toyota', model:'Prado'},
            {name:'Nissan', model:'XTrail'}
           ]
alert(Cars[1].model)           

// Add Options Programmatically to Select
var ddl=document.getElementById('DDLNames').innerHTML;
var option= document.createElement('option');
option.innerHTML="lil";
ddl.appendChild(option);

// Add Items to UL Programmatically
var mycourses=document.getElementById('MyCourses').innerHTML;
var li=document.createElement('li');
li.innerHTML="lila";
mycourses.appendChild(li);

 document.getElementById('btnLogin').innerHTML = 'Try to Login';
function test()
{
 var _uname =  document.getElementById('uname').value;
 var _pwd = document.getElementById('pwd').value;

 var authentic = Authenticate(_uname,_pwd)

 if (authentic == true) 
 {
     //alert('Mabrouk E Login')
     document.getElementById('btnLogin').innerHTML = 'Logout';
     document.getElementById('MyImg').src = './images/Smile.webp'
 }
 else 
 {
     alert('Rou7 L3ab, wrong username')
     document.getElementById('MyImg').src = './images/sad.jpg'
 }
}

function Authenticate(uname,pwd)
{
    if ((uname == 'rony') && (pwd == 'rizk')) 
    {
        return true;
    }
    else 
    {
        return false;
    }
}

function ValidateUserName(){
    var toRet = false;
    UserName= document.getElementById('uname').value;
    Password= document.getElementById('pwd').value;
    if ((UserName.length >= 4) && (Password.length >= 4)){
        toRet = true;
        document.getElementById('btnLogin').disabled = false;
    }
    else 
    {
       toRet = false;
       document.getElementById('btnLogin').disabled = true;
    }
    
}