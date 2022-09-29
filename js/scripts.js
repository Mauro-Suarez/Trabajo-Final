window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    console.log('altura header', document.getElementsByTagName("header")[0].clientHeight, 'altura nav', document.getElementsByTagName("nav")[0].clientHeight, 'altura scroll', document.documentElement.scrollTop);

    if (document.documentElement.scrollTop > document.getElementsByTagName("header")[0].clientHeight) {
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(224, 255, 255, 0.9)";
    }
    else {
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(224, 255, 255, 0.5)";
    }
}

//pregunta la edad al entrar al sitio por 1era vez, si es mayor de 18 años ingresa sino es redirigido a la pagina principal de google

if (localStorage.getItem('pageLoadCount') < 1) {
    do {
        if (edad == null) {
            var edad = prompt("Por favor ingrese su edad para entrar el sitio: ")
            if (edad == null) {
                alert('Salió de la web.');
                console.log("Salió");
                localStorage.setItem('pageLoadCount', 0);
                location.href = ("https://www.google.com")
                break
            }
            else {
                if (Number.isInteger(+edad) === true) {
                    if (edad < 18) {
                        alert("No puede ingresar porque es menor de 18 años, esta saliendo del sitio.");
                        localStorage.setItem('pageLoadCount', 0);
                        location.href = ("https://www.google.com")
                        break
                    }
                    else {
                        var contador_carga_pag = Number(localStorage.getItem('pageLoadCount')) + 1;
                        localStorage.setItem('pageLoadCount', contador_carga_pag);
                        alert("Bienvenido");
                    }
                    console.log("edad", edad);
                }
                else {
                    localStorage.setItem('pageLoadCount', 0);
                    alert("No introdujiste un valor válido, por favor ingrese un número entero.");
                    console.log(edad, "NO es entero");
                    edad = null;
                }
            }
        }
    } while (edad == null && contador_carga_pag == null);
}
// Check if the opened browser
// window is closed or not

/*
if (window.closed == true) {
    alert("Esta saliendo de la web");
};*/