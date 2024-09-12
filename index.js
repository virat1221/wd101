let userentries= document.getElementById("registrationForm");
const a = JSON.parse(localStorage.getItem("user-entries")) || [];

userentries.addEventListener("submit", user =(event)=>{
    event.preventDefault();
    const name= document.getElementById("name").value;
    const email= document.getElementById("email").value;
    const pass= document.getElementById("password").value;
    const dob= document.getElementById("dob").value;

    const checked=document.getElementById("terms").checked;
    const entry = {
        name,
        email,
        pass,
        dob,
        checked
    }
    a.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(a));
    window.location.reload()

})   
const b = JSON.parse(localStorage.getItem("user-entries")) || [];
b.map((be)=>{



document.getElementById("w1").innerHTML = document.getElementById("w1").innerHTML + `<tr>
            <td class="px-4 py-2 border-b">${be.name}</td>
            <td class="px-4 py-2 border-b">${be.email}</td>
            <td class="px-4 py-2 border-b">${be.pass}</td>
            <td class="px-4 py-2 border-b">${be.dob}</td>
            <td class="px-4 py-2 border-b">${be.checked}</td>
        </tr>`
    
})


document.getElementById("dob").addEventListener('input',(event)=>{
event.preventDefault();
let age = new Date().getFullYear() - new Date(dob.value).getFullYear();
function check(){
if(age > 18 || age<55){
    dob.setCustomValidity("age shuld be between 18 to 55");
    dob.reportValidity();
}else{
    dob.setCustomValidity('');
}
}
check()


});
document.getElementById("email").addEventListener('input',(event)=>{
event.preventDefault();
function isValidEmail(email) {
// Basic regex for validating email addresses
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailPattern.test(email);
}

function check(ev){
console.log("dsf",isValidEmail(ev))
if(!isValidEmail(ev)){

    email.setCustomValidity(`email  ${email.value}  is not right format`);
email.reportValidity();
}else if(isValidEmail(ev)){
    email.setCustomValidity('');
}
}
check(email.value)


});

