let boat=document.getElementById("boat")
let ptag=document.getElementById("p")
let text=document.getElementById("text")
let but1=document.querySelector(".but");
let wed=document.querySelector("#wed")
let ober=document.querySelector("#over")
window.addEventListener("scroll",function(){
    var adde=window.scrollY;

    boat.style.top=adde*0.9 +'px';
    text.style.top=adde*1.7+'px';
    
})

// let img1=document.querySelector("#ring")
// img1.addEventListener("scroll",()=>{
//     wed.style.textAlign="center"
//     wed.style.diplay="flex"

// })
let ptr=document.querySelector("#whq")
let what=document.querySelector(".what")
    what.addEventListener("click",()=>{
        window.location.href="https://web.whatsapp.com/"
    })
     what.addEventListener("mouseover",()=>{
        ptr.style.transition="ease 3s"
        ptr.style.display="block"
     })

     what.addEventListener("mouseout",()=>{
        ptr.style.display="none"
     })
    let lo=document.querySelector(".but")
    let lo1=document.querySelector(".btn2")
    let lo2=document.querySelector(".btn3")
    lo1.addEventListener("click",()=>{
        window.location.href="login.html"
    })
    lo2.addEventListener("click",()=>{
        window.location.href="sign.html"
    })

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween:-2,
        autoplay: {
          delay: 2000,
        },
        loop: true,
      });
    
      let swiperContainer = document.querySelector(".mySwiper");
    
      swiperContainer.addEventListener("mouseover", () => {
        swiper.autoplay.stop();
      });
    
      swiperContainer.addEventListener("mouseleave", () => {
        swiper.autoplay.start();
      });