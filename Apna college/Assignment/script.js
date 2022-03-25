
const names = document.getElementById('name');
const pass = document.getElementById('pass');
const form = document.getElementById('form')
const error = document.getElementById('error')
const output = document.getElementById('Output')

function getSentence() {
    return document.getElementById('name').value;
}
function getChar() {
    return document.getElementById('pass').value;
}


form.addEventListener('submit', (e) => {

    let outputValue = [];
    let outputString = [];

    if (names.value === '') {
        outputValue.push("Sentence is required")
    }
    if (pass.value.length < 1) {
        outputValue.push("Input must be 1 Char")
    }
    if (pass.value.length > 1) {
        outputValue.push("Input must be 1 Char")
    }

    if (outputValue.length > 0) {
        e.preventDefault();
        error.innerText = outputValue.join(',')

    }
    else {
        error.innerText=("");
        let sentence = getSentence();
        let char = getChar();

        let idx = sentence.indexOf(char);

        if (idx==-1) {
            e.preventDefault();
            output.innerText = ("The letter does not exists in the sentence")
        }
        else {
            let s = sentence.slice(idx + 1);

            outputString.push(s);

            e.preventDefault();

            output.innerText = outputString;
        }
    }

})