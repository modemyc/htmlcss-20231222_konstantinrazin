(function() {
    const tabHtml = document.getElementById('HTML-control');
    const tabCss = document.getElementById('CSS-control');
    const htmlOpen = document.getElementById('code-html');
    const cssOpen = document.getElementById('code-css');

    if (!tabHtml || !tabCss || !htmlOpen || !cssOpen) {
        return;
    }

    tabCss.addEventListener('change', () => {
        cssOpen.style.display = 'initial';
        htmlOpen.style.display = 'none';
    })

    tabHtml.addEventListener('change', () => {
        cssOpen.style.display = 'none';
        htmlOpen.style.display = 'initial';
    })
})();