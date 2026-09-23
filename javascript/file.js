let c=100;

function tofahrenheit(c){
    return Math.round((c * 9/5) + 32);
}
function tocelsius(f){
    return Math.round((f - 32) * 5/9);
}
console.log(`${c}°C is ${tofahrenheit(c)}°F`);
