

function calculate(){
    var width = parseFloat(document.getElementById("width").valueAsNumber);
    var length = parseFloat(document.getElementById("length").valueAsNumber);

    var Square = (width * length) / 100;
    console.log(width, length);

    var perekis = Square;
    var kislota = 0.3 * Square;
    var solt = 0.05 * Square;

    const out = document.getElementById("result");

    out.innerText = `Перекись: ${perekis.toFixed(2)} мл \n Лимонная кислота: ${kislota.toFixed(2)} г \n Соль: ${solt.toFixed(2)} г`
    console.log(`Перекись: ${perekis.toFixed(2)} мл`);
    console.log(`Лимонная кислота: ${kislota.toFixed(2)} г`);
    console.log(`Соль: ${solt.toFixed(2)} г`);
}