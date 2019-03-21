var countries = [
    {
        name: "Alemania",
        id: 8888
    },
    {
        name: "Italia",
        id: 8888222
    },
    {
        name: "España",
        id: 99
    },
    {
        name: "Bélgica",
        id: 2
    }
]

function createCountriesDropdown() {
    // var countries = ["Alemania", "Italia", "España", "Bélgica"]

    countries.sort((a, b) => a.name.localeCompare(b.name))
    var selectDOMEl = document.createElement("select")
    selectDOMEl.setAttribute("id", "mySelect")
    document.querySelector("body").appendChild(selectDOMEl)

    var optionDOMEl
    var mySelectDOM = document.querySelector("#mySelect")

    countries.forEach(function (country) {
        optionDOMEl = document.createElement("option")
        optionDOMEl.innerHTML = country.name
        optionDOMEl.setAttribute("value", country.id)
        mySelectDOM.appendChild(optionDOMEl)
    })
}

//we use this so we ensure the DOM is fully loaded prior running the code
window.onload = createCountriesDropdown