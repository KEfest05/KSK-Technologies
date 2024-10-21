const mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)')

function printLog(isMobileSize) {
    const pcbBlock = document.getElementById("main2")
    if(isMobileSize){
        pcbBlock.innerHTML = '<label for="Up">Вид сверху</label> <img id = "Up" src="img/pcbUP.png" alt=""> <label for="Down">Вид снизу</label> <img id = "Down" src="img/pcbDown.png" alt=""></img>'
        pcbBlock.innerHTML += '<div class="linkBlock"> <a class="link link1" href="files/pcbUp.pdf" download="pcbUp.pdf">Скачать вид сверху</a> <a class="link link1" href="files/pcbDown.pdf" download="pcbDown.pdf">Скачать вид снизу</a> <a class="link" href="files/PCB_Power_site.dip" download="PCB_Power.dip">Скачать файл платы (Diptarce)</a> </div>'
    } else {
        pcbBlock.innerHTML = '<div class="LabelBlock"> <label for="Up">Вид сверху</label> <label for="Down">Вид снизу</label> </div> <div class="imgBlock"> <img id = "Up" src="img/pcbUP.png" alt=""> <img id = "Down" src="img/pcbDown.png" alt=""> </div> <div class="linkBlock"> <a class="link" href="files/pcbUp.pdf" download="pcbUp.pdf">Скачать вид сверху</a> <a class="link" href="files/pcbDown.pdf" download="pcbDown.pdf">Скачать вид снизу</a> <a class="link" href="files/PCB_Power_site.dip" download="PCB_Power.dip">Скачать файл платы (Diptarce)</a></div>'
    }
}

printLog(mobileWidthMediaQuery.matches)

mobileWidthMediaQuery.addEventListener('change', function (event) {
  printLog(event.matches)
})
