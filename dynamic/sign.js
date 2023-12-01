let user=document.querySelector(".bt")
const valu2=JSON.parse(localStorage.getItem("loginDetails"))
user.addEventListener("click",()=>{
    let userEnter=document.querySelector(".us").value
    let passEnter=document.querySelector(".pas").value
    const valu1=user.value;
    const valu2=JSON.parse(localStorage.getItem("loginDetails"));
    const p4=document.querySelector("#nt")
    for(i=0;i<=valu2.length;i++){
        let created=valu2[i].Name;
        let pass=valu2[i].password;
        if(userEnter===created&&passEnter==pass){
            window.location.href="index.html"
            break;
        }
        else{
            p4.textContent="Worng Password"
        }
    }

})
let field=document.querySelector()