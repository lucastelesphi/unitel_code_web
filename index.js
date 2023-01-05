function menushow(){
    let menumobile = document.querySelector(".mobile-menu")
    if(menumobile.classList.contains("open")){
        menumobile.classList.remove("open");
        document.querySelector(".icon").src ="./menu-white-36dp.svg";
       }else{
        menumobile.classList.add("open");
        document.querySelector(".icon").src = "./close-white-36dp.svg";
       }
}