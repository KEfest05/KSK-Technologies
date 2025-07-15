const mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)')

function printLog(isMobileSize) {
    const pcbBlock = document.getElementById("main2")
    const linkBlock = `
                        <div class="linkBlock"> 
                            <a class="link link1" href="img/pcbUp.png" download="pcbUp.png">Скачать вид сверху</a> 
                            <a class="link link1" href="img/pcbDown.png" download="pcbDown.png">Скачать вид снизу</a> 
                            <a class="link" href="files/PCB_Power_supply.epro" download="PCB_Power_supply.epro">Скачать файл платы</a>
                            <a class="link" href="files/Power_supply_manufacturing_files.zip" download="Power_supply_manufacturing_files.zip">Скачать файлы для изготовления </a>
                        </div>`
    if(isMobileSize){
        pcbBlock.innerHTML = `
                            <label for="Up">Вид сверху</label> 
                            <img id = "Up" src="img/pcbUP.png" alt=""> 
                            <label for="Down">Вид снизу</label> 
                            <img id = "Down" src="img/pcbDown.png" alt=""></img>`

        pcbBlock.innerHTML += linkBlock
    } else {
        pcbBlock.innerHTML = `<div class="LabelBlock"> 
                                <label for="Up">Вид сверху</label> 
                                <label for="Down">Вид снизу</label> 
                            </div> 
                            <div class="imgBlock"> 
                                <img id = "Up" src="img/pcbUP.png" alt=""> 
                                <img id = "Down" src="img/pcbDown.png" alt=""> 
                            </div>` + linkBlock
                           
    }
}


printLog(mobileWidthMediaQuery.matches)

mobileWidthMediaQuery.addEventListener('change', function (event) {
  printLog(event.matches)
})

const images = document.querySelectorAll(".image");
const labels = document.querySelectorAll(".label");
let imageindex = 0;

function show(index){
    images[imageindex].classList.remove('active');
    images[index].classList.add('active');

    labels[imageindex].classList.remove('active');
    labels[index].classList.add('active');
    imageindex = index;
}

function prev(){
    let index = imageindex - 1;

    if(index < 0){
        index = images.length - 1;
    }

    show(index)
}

function next(){
    let index = imageindex + 1;

    if(index >= images.length){
        index = 0;
    }
    show(index);
}