let results = document.getElementById('results');
let form = document.getElementById('form');
form.onsubmit = function(e) {
    e.preventDefault();

    let data = {}; 

    for (let i = 0, len = form.length; i < len; i++) {
        let input = form[i];
        if (input.name) {
            data[input.name] = input.value;
        }
    }

    let jsonStr = JSON.stringify(data); 
    console.log(data, jsonStr);
    results.innerHTML = jsonStr;
}
