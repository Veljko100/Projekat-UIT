const faq = document.getElementsByClassName("faq-page");
for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {

        this.classList.toggle("activeB");

        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });

    let obj = JSON.parse(localStorage.getItem("counter"));

    if (obj) {
        obj.knjizara++;

        localStorage.setItem("counter", JSON.stringify(obj));
    }


}

let sakriven = 1;
document.getElementById("metaMenu").addEventListener("click", function () {
    if (sakriven == 1) {

        document.getElementById("metaMenu").style.display = "block";
        document.querySelector("header").style.display = "none";
       

    } else {
        document.getElementById("metaMenu").style.display = "block";
        document.querySelector("header").style.display = "block";

        
    }

})