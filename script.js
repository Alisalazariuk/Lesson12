const btn = document.querySelector('#btn');
const inputText = document.querySelector('#inputText');
const par = document.querySelector('#par')

btn.addEventListener('click', () => {
    let name = inputText.value;    
    let previousData = localStorage.getItem("firstName");
    name = previousData + " " + name;
    localStorage.setItem("firstName", name);
    inputText.value = "";
    let inputNames = localStorage.getItem("firstName");
    let total = inputNames.split(" ").length;
    // console.log(total);


    if (total > 1) {
        btn.style.display = 'none';
        inputText.style.display = 'none';
        par.style.display = 'block';
    }
})