const mathContainer = document.querySelector('.math-container');
const latexInput = document.getElementById('latex-input');
const latexFontSize = document.getElementById('latex-font-size');

function updateMathContainerFontSize() {

    mathContainer.style.fontSize = latexFontSize.value;

}

function updateMathContainer() {

    mathContainer.innerHTML = '$$ ' + latexInput.value + ' $$';

    console.log('$$ ' + latexInput.value + ' $$');

    MathJax.typeset([mathContainer]);

}

function copyLatexHTML() {

    let latexHtml = `
    <div style="font-size: ${latexFontSize.value};" class="math-container">${'$$ ' + latexInput.value + ' $$'}</div>
    `;

    navigator.clipboard.writeText(latexHtml);
}

latexInput.addEventListener('input', updateMathContainer);
latexFontSize.addEventListener('input', updateMathContainerFontSize);