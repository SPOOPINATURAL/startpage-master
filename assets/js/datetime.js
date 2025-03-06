(function () {
    function zeroFill(n) {
        return ('0' + n).slice(-2);
    }

    const interval = setInterval(() => {
        const now = new Date();

        // Formatting options
        const options = { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: false, 
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone 
        };

        const dateTime = new Intl.DateTimeFormat(navigator.language, options).format(now).replace(',', '');

        const dateElement = document.getElementById("Date");
        if (dateElement) {
            dateElement.textContent = dateTime;
        } else {
            clearInterval(interval);
        }
    }, 1000);
})();
