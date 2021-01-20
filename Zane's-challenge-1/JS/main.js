function weightInKgs() {
    var LBweight = prompt('How much do you weigh in pounds?')
    var weight = (LBweight) / 2.20462262
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode( ' you are ' + weight + ' kilograms ')
    h1.setAttribute('id', 'weightInKgs');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(weight);
}

function reset() {
    document.getElementById('weightInKgs').remove();
}
