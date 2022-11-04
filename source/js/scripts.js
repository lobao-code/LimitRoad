// Script de Tradução

var comboGoogleTradutor = null; //Varialvel global

function googleTranslateElementInit() {
    sTop();
    someTop();
    new google.translate.TranslateElement({
        pageLanguage: 'pt',
        includedLanguages: 'pt,en,es',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
        }, 'google_translate_element');
    
        someTop();
    comboGoogleTradutor = document.getElementById("google_translate_element").querySelector(".goog-te-combo");
    someTop();
}

function changeEvent(el) {
    if (el.fireEvent) {
        el.fireEvent('onchange');
        someTop();
    } else {
        var evObj = document.createEvent("HTMLEvents");
        someTop();
        evObj.initEvent("change", false, true);
        someTop();
        el.dispatchEvent(evObj);
        someTop();
    }
}

function trocarIdioma(sigla) {
    someTop();
    if (comboGoogleTradutor) {
        someTop();
        comboGoogleTradutor.value = sigla;
        changeEvent(comboGoogleTradutor);//Dispara a troca
        someTop();
    }
}