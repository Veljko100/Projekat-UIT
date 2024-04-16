let obj = JSON.parse(localStorage.getItem("counter"));

if (obj) {
    obj.knjige++;

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