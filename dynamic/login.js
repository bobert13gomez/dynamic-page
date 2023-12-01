
let local=[]


let username=document.querySelector(".us")
let number=document.querySelector(".pas")
let password=document.querySelector(".pas2")
let date1=document.querySelector(".date1")
const use1=/^[a-zA-Z0-9_-]{3,16}$/;
let patt=/^\d{10}$/;
let realpat=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

username.addEventListener("input",()=>{
    let enterd=username.value
    let para1=document.querySelector("#pi")
    let userEnter=document.querySelector(".us").value
    let passEnter=document.querySelector(".pas").value
    
    const valu2=JSON.parse(localStorage.getItem("loginDetails"));
   
    for(i=0;i<=valu2.length;i++){
        let created=valu2[i].Name;
        let pass=valu2[i].password;
    if(use1.test(enterd)&&userEnter!=created&&passEnter!=pass){
        para1.textContent="Valid Username"
        para1.style.color="#adff2f"

    }
    else{
        para1.textContent="Invalid Username or Already Taken";
        para1.style.color="red"
    }}

})
number.addEventListener("input",()=>{
    let phone=number.value
    let para1=document.querySelector("#num")
   
    if(patt.test(phone)){
        para1.textContent="Valid Number"
        para1.style.color="#adff2f"

    }
    else{
        para1.textContent="Invalid Number";
        para1.style.color="red"
    }
})

date1.addEventListener("input",()=>{
    const date2= new Date(date1.value)
    const date3=new Date();
    const year2=date2.getFullYear()
    const year1=date3.getFullYear()
    const fullyear=19;
    let dat=document.querySelector("#pe")
    let dat1=document.querySelector(".dat")
    let field1=document.querySelector(".field1")
    let realage=year1-year2
    console.log(realage)
    if(realage>=19){
        
        dat.textContent="ELIGIBLE"
        dat.style.color="#adff2f"

    }
   else{
    field1.style.filter="blur(10px)"
    dat1.style.display="block" 
   }
    
})

password.addEventListener("input",()=>{
    let enteredpass=document.querySelector(".pas2").value
    let ele=document.querySelector("#realpa")
    
    if(realpat.test(enteredpass)){
       ele.textContent="Valid Password"
        ele.style.color="#adff2f"
    }

    else{
        ele.textContent="Invalid Password";
        ele.style.color="red"
    }
    
})   
let button=document.querySelector(".bt1")
button.addEventListener("click",()=>{
    const use1=/^[a-zA-Z0-9_-]{3,16}$/;
    let patt=/^\d{10}$/;
    let realpat=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let enterd=username.value
    let phone=number.value
    let enteredpass=document.querySelector(".pas2")
    const date2= new Date(date1.value)
    const day=date2.getDate()
    const month=date2.getMonth()+1
    const year=date2.getFullYear()
    const dob=day+"-"+month+"-"+year
    const date3=new Date();
    const year2=date2.getFullYear()
    const year1=date3.getFullYear()
    const fullyear=19;
    let dat=document.querySelector("#pe")
    let dat1=document.querySelector(".dat")
    let field1=document.querySelector(".field1")
    let realage=year1-year2
    let rad=document.querySelector(".gender")
    let rad1=document.querySelector(".gender1")
    const selectedRadio = document.querySelector('input[name="gender"]:checked');
     const select=selectedRadio.value
     console.log(select)
if(use1.test(enterd)&patt.test(number.value)&realpat.test(password.value)&realage>=fullyear&select){
    console.log('working')
}
let obj={Name:enterd,Mobile_Number:phone,password:password.value,DOB:dob,Gender:select}
const get1 = JSON.parse(localStorage.getItem("loginDetails")) || [];
get1.push(obj)
localStorage.setItem("loginDetails",JSON.stringify(get1))
window.location.href="login.html"




})

// let obj={Name:enterd,Mobile_Number:phone,password:password.value}
// local.push(obj)
// localStorage.setItem(local)
// console.log(localStorage)

let svg=document.querySelector(".sv")
svg.addEventListener("click",()=>{
    let dat1=document.querySelector(".dat")
    let field1=document.querySelector(".field1")
    field1.style.filter="blur(0px)"
    dat1.style.display="none"
})

let rad=document.querySelector(".gender")
rad.addEventListener("input",()=>{
const selectedRadio = document.querySelector('input[name="gender"]:checked');
console.log(selectedRadio.value)


})
let rad1=document.querySelector(".gender1")
rad1.addEventListener("input",()=>{
const selectedRadio = document.querySelector('input[name="gender"]:checked');
console.log(selectedRadio.value)


})

//////Login JS
let user=document.querySelector(".us")


























// let btn=document.querySelector(".bt")
// let p=document.querySelector("#p1")
// let username=document.querySelector(".us").value;
// const sec1=document.querySelector(".pas")
// const realpas=""
// sec1.addEventListener("input",()=>{  
//     let pass=document.querySelector(".pas").value;
//     const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     if(passwordPattern.test(pass)){
//         p.textContent="valid password"
//     }
//     else{
//         p.textContent="invalid password"

//     }  
// })

























































// btn.addEventListener("click",()=>{
//     let username=document.querySelector(".us").value;
//     let pass=document.querySelector(".pas").value;
//     localStorage.setItem('username',username)
//     localStorage.setItem('password',pass)
//     let use=localStorage.getItem('username')
//     let passe=localStorage.getItem('password',pass)
//     console.log(localStorage)
//     console.log(use)
//     console.log(passe)
    
    
    
//     })



