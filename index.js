const lengthText = document.getElementById("length-calc-text")
const volumeText = document.getElementById("volume-calc-text")
const massText = document.getElementById("mass-calc-text")
const convertBtn = document.getElementById("convert-btn")
const inputNum = document.getElementById("input-number")

//define darkOrLightMode()
function darkOrLightMode() {
    document.body.classList.toggle("dark-mode")
}

convertBtn.addEventListener("click", function() {
    let numberToConvert = inputNum.value
    
    f2m = (numberToConvert / 3.281).toFixed(3)
    m2f = (numberToConvert * 3.281).toFixed(3)
    g2l = (numberToConvert / 0.264).toFixed(3)
    l2g = (numberToConvert * 0.264).toFixed(3)
    k2p = (numberToConvert / 2.204).toFixed(3)
    p2k = (numberToConvert * 2.404).toFixed(3)
    
    lengthText.innerText = `${numberToConvert} meters = ${m2f} feet | ${numberToConvert} feet = ${f2m} meters`
    volumeText.innerText = `${numberToConvert} liters = ${l2g} gallons | ${numberToConvert} gallons = ${g2l} liters`
    massText.innerText = `${numberToConvert} kilos = ${k2p} pounds | ${numberToConvert} pounds = ${p2k} kilos`
})


/* 
    When the button is clicked, run a function
        Grab value from input
        multiply by conversion values & round to 3 decimal places
            length
            volume
            mass
        clear input field
        overwrite card calculations
*/

/* conversion references
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/