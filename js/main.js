

const button = document.querySelector(".btn-mobile")
const menuMobile = document.querySelector(".nav-primary");


button.addEventListener( 'click', function(e){
    e.preventDefault();
 
    if(menuMobile.classList.contains("is-visible")){
        menuMobile.classList.remove("is-visible");
    }else{
            menuMobile.classList.add("is-visible")
    }

})