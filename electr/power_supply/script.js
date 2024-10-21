const mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)')

function printLog(isMobileSize) {
    const pcbBlock = document.getElementById("main2")
    if(isMobileSize){
        pcbBlock.innerHTML = '<label for="Up">Вид сверху</label> <img id = "Up" src="img/pcbUP.png" alt=""> <label for="Down">Вид снизу</label> <img id = "Down" src="img/pcbDown.png" alt=""></img>'
    } else {
        pcbBlock.innerHTML = '<div class="LabelBlock"> <label for="Up">Вид сверху</label> <label for="Down">Вид снизу</label> </div> <div class="imgBlock"> <img id = "Up" src="img/pcbUP.png" alt=""> <img id = "Down" src="img/pcbDown.png" alt=""> </div>'
    }
}

printLog(mobileWidthMediaQuery.matches)

mobileWidthMediaQuery.addEventListener('change', function (event) {
  printLog(event.matches)
})
