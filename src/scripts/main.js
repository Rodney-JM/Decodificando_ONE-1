const womanImg = document.querySelector("#w_img");
const outputTitle = document.querySelector("#title");
const outputDesc = document.querySelector("#desc");

// Buttons
const scriptBtn = document.querySelector("#cpt_btn");
const desScriptBtn = document.querySelector("#dcpt_btn");
const copyBtn = document.querySelector("#copy_btn");
const cleanDisplay = document.querySelector("#clean_btn");

const displayOutput = document.querySelector("#displayTexts");

const inputText = document.querySelector("#ipt_area");

let copyText = '';

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
    copyText = newText;
    let newOutput = document.createElement('p');
    newOutput.textContent = newText;

    displayOutput.appendChild(newOutput);
});

desScriptBtn.addEventListener('click', () => {
    womanImg.remove();
    outputDesc.remove();
    outputTitle.remove();
    

    let textChang = inputText.value;

    let newText = '';

    textChang = textChang.replaceAll('ufat', 'u');
    textChang = textChang.replaceAll('enter', 'e');
    textChang = textChang.replaceAll('imes', 'i');
    textChang = textChang.replaceAll('ai', 'a');
    textChang = textChang.replaceAll('ober', 'o');

    newText = textChang;
    copyText = newText;
    
    let newOutput = document.createElement('p');
    newOutput.textContent = newText;

    displayOutput.appendChild(newOutput);
});

copyBtn.addEventListener('click', ()=>{
    const textoParaCopiar = copyText;

    if (!navigator.clipboard) {
        console.error('A API navigator.clipboard não é suportada neste navegador.');
    } else {
        navigator.clipboard.writeText(textoParaCopiar)
            .then(() => {
                console.log('Texto copiado com sucesso para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar o texto para a área de transferência:', err);
            });
    }

})

cleanDisplay.addEventListener('click', ()=>{
    while(displayOutput.children.length > 0){
        displayOutput.removeChild(displayOutput.firstChild);
    }
})