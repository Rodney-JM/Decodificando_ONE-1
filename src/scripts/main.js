const womanImg = document.querySelector("#w_img");
const outputTitle = document.querySelector("#title");
const outputDesc = document.querySelector("#desc");

// Buttons
const scriptBtn = document.querySelector("#cpt_btn");
const desScriptBtn = document.querySelector("#dcpt_btn");

const displayOutput = document.querySelector("#displayTexts");

const inputText = document.querySelector("#ipt_area");

scriptBtn.addEventListener('click', () => {
    womanImg.remove();
    outputDesc.remove();
    outputTitle.remove();

    let textChang = inputText.value;

    // Dividir texto em um array de caracteres
    let textArray = textChang.split("");

    let newText = '';

    for (let i = 0; i < textArray.length; i++) {
        switch (textArray[i]) {
            case 'e':
                newText += 'enter';
                break;
            case 'i':
                newText += 'imes';
                break;
            case 'a':
                newText += 'ai';
                break;
            case 'o':
                newText += 'ober';
                break;
            case 'u':
                newText += 'ufat';
                break;
            default:
                newText += textArray[i];
                break;
        }
    }
    let newOutput = document.createElement('p');
    newOutput.textContent = newText;

    displayOutput.appendChild(newOutput);
});

desScriptBtn.addEventListener('click', () => {
    womanImg.remove();
    outputDesc.remove();
    outputTitle.remove();

    let textChang = inputText.value;

    // Dividir texto em um array de caracteres
    let textArray = textChang.split("");

    let newText = '';

    for (let i = 0; i < textArray.length; i++) {
        switch (textArray[i]) {
            case 'enter':
                newText += 'e';
                break;
            case 'imes':
                newText += 'i';
                break;
            case 'ai':
                newText += 'a';
                break;
            case 'ober':
                newText += 'o';
                break;
            case 'ufat':
                newText += 'u';
                break;
            default:
                newText += textArray[i];
                break;
        }
    }
    let newOutput = document.createElement('p');
    newOutput.textContent = newText;

    displayOutput.appendChild(newOutput);
});
