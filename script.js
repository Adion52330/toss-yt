let num_array = [1, 2, 3, 4, 5, 6];
let display = document.getElementById("num");

// get random digit from the array
let num;
function getRandomDigit() {
    return num = Math.floor(Math.random() * num_array.length);
}

document.getElementById('btn').addEventListener('click', () => {
    getRandomDigit();
    display.innerHTML = num_array[num];
})