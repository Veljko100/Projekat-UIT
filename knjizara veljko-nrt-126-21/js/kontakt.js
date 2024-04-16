const dugme = document.getElementById("posalji");

dugme.addEventListener("click", validacija);


function validacija(e) {

    e.preventDefault();

    let brojac=0;
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const pass = document.getElementById("pass").value;
    const pass2 = document.getElementById("pass2").value;

    const poruka = document.getElementById("poruka").value;

    let imePatern = /^[A-Z][a-z]{2,20}(\s[A-Z][a-z]{2,20})+$/;
    if (!imePatern.test(ime)) {

        document.getElementById("ime").nextElementSibling.style.display = "inline-block";

    } else {
        document.getElementById("ime").nextElementSibling.style.display = "none";
        brojac++;
    }




    let emailPatern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if (!emailPatern.test(email)) {

        document.getElementById("email").nextElementSibling.style.display = "inline-block";

    } else {
        document.getElementById("email").nextElementSibling.style.display = "none";
        brojac++;
    }


    let telPatern = /^[0-9]{3}\/[0-9]{4}-[0-9]{2,3}$/;
    if (!telPatern.test(tel)) {

        document.getElementById("tel").nextElementSibling.style.display = "inline-block";

    } else {
        document.getElementById("tel").nextElementSibling.style.display = "none";
        brojac++;
    }

    if (pass2 != pass) {
        document.getElementById("pass").nextElementSibling.style.display = "inline-block";
    } else {
        document.getElementById("pass").nextElementSibling.style.display = "none";
        let passPatern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;



        if (!passPatern.test(pass2)) {

            document.getElementById("pass2").nextElementSibling.style.display = "inline-block";

        } else {
            document.getElementById("pass2").nextElementSibling.style.display = "none";
            brojac++;
        }


    }

    if (poruka.length < 5) {

        document.getElementById("poruka").nextElementSibling.style.display = "inline-block";

    } else {
        document.getElementById("poruka").nextElementSibling.style.display = "none";
        brojac++;

    }


    if (brojac==5){

        alert("Успешно слање поруке");
        window.location.href="index.html"
    }




}


let obj = JSON.parse(localStorage.getItem("counter"));

if (obj) {
    obj.kontakt++;

    localStorage.setItem("counter", JSON.stringify(obj));
}

let sakriven = 1;
document.getElementById("metaMenu").addEventListener("click", function () {
    if (sakriven == 1) {

        document.getElementById("metaMenu").style.display = "block";
        document.querySelector("header").style.display = "none";
        sakriven = 0;

    } else {
        document.getElementById("metaMenu").style.display = "block";
        document.querySelector("header").style.display = "block";

        sakriven = 1;
    }

})