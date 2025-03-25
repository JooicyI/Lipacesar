document.addEventListener("DOMContentLoaded", function(){
    const botonesAcordeon = document.querySelectorAll(".botonAcordeon");

    botonesAcordeon.forEach(boton => {
        boton.addEventListener("click", function(){
            const item_acordeon = this.parentElement;

            document.querySelectorAll(".itemAcordeon").forEach(item => {
                if(item !== item_acordeon){
                    item.classList.remove("active");
                }
            });
            item_acordeon.classList.toggle("active");
        });
    });
});