let inputX = document.querySelector('#x')
let inputY = document.querySelector('#y')
let inputZ = document.querySelector('#z')
inputX.addEventListener('input', (event) => {
    let inputXvalue = inputX.value
    console.log(inputXvalue)
    let resultX= inputXvalue / 8
    let textX = document.querySelector('#tx')
    textX.innerHTML = resultX
})
inputY.addEventListener('input', (event) => {
    let inputYvalue = inputY.value
    console.log(inputYvalue)
    let resultY = inputYvalue / 3
    let textY = document.querySelector('#ty')
    textY.innerHTML = resultY
    
})
inputZ.addEventListener('input', (event) => {
    let inputZvalue = inputZ.value
    console.log(inputZvalue)
    let resultZ = inputZvalue / 8
    let textZ = document.querySelector('#tz')
    textZ.innerHTML = resultZ
    
}) 