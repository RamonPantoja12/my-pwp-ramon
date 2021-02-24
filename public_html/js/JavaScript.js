window.addEventListener("scroll", function (){
    let  menuArea = document.getElementById('navbar');

    if (window.pageYOffset > 0){
        menuArea.classList.add("cus-menu");
    }else{
        menuArea.classList.remove()
    }
})