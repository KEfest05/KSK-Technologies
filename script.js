const width = parseFloat(prompt("Ширина платы (мм): "));
const length = parseFloat(prompt("Длина платы (мм): "));

const Square = (width * length) / 100;

const perekis = Square;
const kislota = 0.3 * Square;
const solt = 0.05 * Square;

console.log(`Перекись: ${perekis.toFixed(2)} мл`);
console.log(`Лимонная кислота: ${kislota.toFixed(2)} г`);
console.log(`Соль: ${solt.toFixed(2)} г`);