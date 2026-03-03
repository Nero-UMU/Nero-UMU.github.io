(function() {
    const initSakana = () => {
        const container = document.querySelector('#sakana-widget');
        if (container && typeof SakanaWidget !== 'undefined') {
            new SakanaWidget({
                autoFit: true, 
                controls: true, 
                character: 'takina'
            }).mount('#sakana-widget');
        } else {
            setTimeout(initSakana, 500);
        }
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initSakana();
    } else {
        document.addEventListener('DOMContentLoaded', initSakana);
    }

    document.addEventListener('pjax:complete', initSakana);
})();