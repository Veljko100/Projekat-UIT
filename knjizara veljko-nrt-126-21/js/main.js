let obj = JSON.parse(localStorage.getItem("counter"));

if (obj) {
    let obj = JSON.parse(localStorage.getItem("counter"));

    if (obj) {
        obj.index++;

        localStorage.setItem("counter", JSON.stringify(obj));
    }

} else {
    let ob = {

        index: 1,
        galerija: 0,
        knjige: 0,
        knjizara: 0,
        kontakt: 0

    }

    localStorage.setItem("counter", JSON.stringify(ob));


}


let objekat = JSON.parse(localStorage.getItem("counter"));

let nizO = Object.entries(objekat);
console.log(nizO);

nizO.sort((a, b) => {

    if (a[1] < b[1]) {
        return 1;
    }

    if (a[1] > b[1]) {
        return -1;
    }

    if (a[1] == b[1]) {
        return 0;
    }
})



let html = ``;


nizO.forEach((elem, index) => {


    if (index < 3) {
        html += ` <article>
<a href="${elem[0]}.html" class="nas2">${elem[0]}</a>
<span class="brojKlikova">${elem[1]}</span>
<a href="${elem[0]}.html" class="btn">Погледај више</a>
</article>`
    }

})
document.querySelector(".fast").innerHTML = html;






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






