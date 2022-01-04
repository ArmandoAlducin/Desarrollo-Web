/*Scroll menu*/

window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0);
})

/* Scroll icon float */

window.addEventListener("scroll",function(){
    if ("abajo",window.scrollY>1150){
        document.getElementById('container').style.display = "block";
    }else{
        document.getElementById('container').style.display = "none";
    }
    
})


/*Mostrar Menu movil*/
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click",function(){
    menu.classList.toggle("mostrar");
});

/*Mostrar submenu  movil*/
const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i < subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click",function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;
            
            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        }
    });
}

/*SLIDER*/
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next(){
 let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
 slider.style.marginLeft = "-200%";
 slider.style.transition = "all 0.5s";
 setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
 }, 500);  
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
       slider.style.transition = "none";
       slider.insertAdjacentElement('afterbegin', sliderSectionLast);
       slider.style.marginLeft = "-100%";
    }, 500);  
   }

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});

setInterval(function(){
    Next();
}, 4000);



/* FORM */
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:atencion-comercial-valmex@gnp.com.mx?subject=nombre: ${form.get('name')}  correo: ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}

/* Eventos botones mostrar Arrendam Finan*/

function mostrarcarac(){
    document.getElementById('carac-arrend-fin').style.display = "block";
    document.getElementById('beneficios').style.display = "none";
    document.getElementById('condiciones-arre').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
}
function mostrarbeneficios(){
    document.getElementById('beneficios').style.display = "block";
    document.getElementById('carac-arrend-fin').style.display = "none";
    document.getElementById('condiciones-arre').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
}
function mostrarcondiciones(){
    document.getElementById('condiciones-arre').style.display = "block";
    document.getElementById('beneficios').style.display = "none";
    document.getElementById('carac-arrend-fin').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";

}

/* Eventos botones mostrar Arrendam Puro*/


    function mostrarbeneficios2(){
    document.getElementById('arren-puro').style.display = "block";
    document.getElementById('condiciones-puro').style.display = "none";
    document.getElementById('caract-puro').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
}

    function mostrarcondiciones2(){
    document.getElementById('condiciones-puro').style.display = "block";
    document.getElementById('arren-puro').style.display = "none";
    document.getElementById('caract-puro').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
}
function mostrarcarac2(){
    document.getElementById('caract-puro').style.display = "block";
    document.getElementById('arren-puro').style.display = "none";
    document.getElementById('condiciones-puro').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";

}

/* Eventos botones mostrar Automotriz*/

function mostrarbeneficios3(){
    document.getElementById('beneficios-automotriz').style.display = "block";
    document.getElementById('carac-automotriz').style.display = "none";
    document.getElementById('condiciones-automotriz').style.display = "none";
    document.getElementById('modalidadesycat').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
}

    function mostrarcondiciones3(){
    document.getElementById('condiciones-automotriz').style.display = "block";
    document.getElementById('beneficios-automotriz').style.display = "none";
    document.getElementById('carac-automotriz').style.display = "none";
    document.getElementById('modalidadesycat').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
}
function mostrarcarac3(){
    document.getElementById('carac-automotriz').style.display = "block";
    document.getElementById('beneficios-automotriz').style.display = "none";
    document.getElementById('condiciones-automotriz').style.display = "none";
    document.getElementById('modalidadesycat').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
    
}
function mostrarmodal3(){
    document.getElementById('modalidadesycat').style.display = "block";
    document.getElementById('carac-automotriz').style.display = "none";
    document.getElementById('condiciones-automotriz').style.display = "none";
    document.getElementById('beneficios-automotriz').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
}

function mostrarcondti(){
    document.getElementById('condicionesporti').style.display = "block";
    document.getElementById('condiciones-fin-pag').style.display = "none";
    
}
    function mostrarcondfinti(){
        document.getElementById('condiciones-fin-pag').style.display = "block";
        document.getElementById('condicionesporti').style.display = "none";

}

/*Mostrar quienes somos */
function mostrarquienessom(){
    document.getElementById('quienessom').style.display = "block";
    document.getElementById('contpermor').style.display = "none";
    document.getElementById('contperfi').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
}


/* Mostrar productos */
function mostrarcontarren(){
    document.getElementById('arrenfin').style.display = "block";
    document.getElementById('arrenpuro').style.display = "none";
    document.getElementById('credauto').style.display = "none";
    document.getElementById('contperfi').style.display = "none";
    document.getElementById('quienessom').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
}

function mostrarcontpuro(){
    document.getElementById('arrenpuro').style.display = "block";
    document.getElementById('arrenfin').style.display = "none";
    document.getElementById('credauto').style.display = "none";
    document.getElementById('contperfi').style.display = "none";
    document.getElementById('quienessom').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
}

function mostrarcontauto(){
    document.getElementById('credauto').style.display = "block";
    document.getElementById('arrenpuro').style.display = "none";
    document.getElementById('arrenfin').style.display = "none";
    document.getElementById('contperfi').style.display = "none";
    document.getElementById('quienessom').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
}

function mostrarcontti(){
    document.getElementById('contperfi').style.display = "block";
    document.getElementById('arrenpuro').style.display = "none";
    document.getElementById('credauto').style.display = "none";
    document.getElementById('arrenfin').style.display = "none";
    document.getElementById('quienessom').style.display = "none";
    document.getElementById('aviso-privacidad').style.display = "none";
}


/* Mostrar Aviso Privacidad */
function mostraravisoprivacidad(){
    document.getElementById('aviso-privacidad').style.display = "block";
    document.getElementById('arrenpuro').style.display = "none";
    document.getElementById('arrenfin').style.display = "none";
    document.getElementById('credauto').style.display = "none";
    document.getElementById('contperfi').style.display = "none";
    document.getElementById('quienessom').style.display = "none";
}