/* =========================
   PRELOADER
========================= */

window.addEventListener("load", () => {

    const preloader =
    document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }

});

/* =========================
   MENU MOVIL
========================= */

const menuBtn =
document.getElementById("menuBtn");

const navMenu =
document.getElementById("navMenu");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}

/* =========================
   NAVBAR STICKY
========================= */

const header =
document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background =
        "#02142f";

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.25)";

    }else{

        header.style.background =
        "#041f54";

        header.style.boxShadow =
        "none";

    }

});

/* =========================
   CONTADORES
========================= */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / 120;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,15);

        }else{

            if(target === 130000){

                counter.innerText =
                "S/ " +
                target.toLocaleString();

            }else if(target === 95){

                counter.innerText =
                target + "%";

            }else{

                counter.innerText =
                target;

            }

        }

    };

    updateCounter();

});

/* =========================
   BOTON VOLVER ARRIBA
========================= */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(topBtn){

        if(window.scrollY > 400){

            topBtn.style.display =
            "block";

        }else{

            topBtn.style.display =
            "none";

        }

    }

});

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}

/* =========================
   MODO OSCURO
========================= */

const darkBtn =
document.getElementById("darkMode");

if(localStorage.getItem("darkMode")
=== "enabled"){

    document.body.classList.add("dark");

}

if(darkBtn){

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(
            document.body.classList.contains("dark")
        ){

            localStorage.setItem(
                "darkMode",
                "enabled"
            );

        }else{

            localStorage.removeItem(
                "darkMode"
            );

        }

    });

}

/* =========================
   EFECTO APARICION
========================= */

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},{
    threshold:0.15
});

document
.querySelectorAll(
".service-card, .case-card, .stat-card"
)
.forEach(el => {

    observer.observe(el);

});

/* =========================
   EFECTO HOVER BOTONES
========================= */

const buttons =
document.querySelectorAll(
".btn-green, .btn-nav"
);

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
        "translateY(-3px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
        "translateY(0px)";

    });

});

/* =========================
   FORMULARIO CONTACTO
========================= */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            Swal.fire({

                icon:"success",

                title:"Consulta enviada",

                text:
                "Gracias por contactarnos. Nos comunicaremos pronto.",

                confirmButtonColor:
                "#00c26e"

            });

            contactForm.reset();

        }
    );

}