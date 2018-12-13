(function(){
    try {
        var getNavigatorLanguage = function() {
            if (navigator.languages && navigator.languages.length) {
                return navigator.languages[0];
            } else {
                return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
            }
        };
        var locale = getNavigatorLanguage();
        if(locale) {
            var language = locale.split('-')[0];
            if(language) {
                if(language === 'es' && location.pathname !=='/es') {
                    location.pathname = '/es';
                }
            }
        }
    } catch(e) {

    }

})();
