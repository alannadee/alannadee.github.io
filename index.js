document.addEventListener('DOMContentLoaded', function() {
    function updateAge() {
        const ageElement = document.getElementById('age');
        if (!ageElement) return;
        const now = new Date();
        const birthDate = new Date('2005-11-22T00:00:00'); // Replace with your birthdate

        let diff = now - birthDate;

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours   = Math.floor(minutes / 60);
        const days    = Math.floor(hours / 24);
        const months  = Math.floor(days / 30.4375); // Approx avg month length
        const years   = Math.floor(days / 365.25);

        const remMonths = months % 12;
        const remDays   = Math.floor(days - years * 365.25 - remMonths * 30.4375);
        const remHours  = hours % 24;
        const remMinutes= minutes % 60;
        const remSeconds= seconds % 60;

        ageElement.textContent = `I am ${years} years, ${remMonths} months, ${remDays} days, ${remHours} hours, ${remMinutes} minutes and ${remSeconds} seconds old`;
    }

    setInterval(updateAge, 1000);
    updateAge();

    const pinkToggle = document.getElementById('pinkToggle');

    function makePink(){
        const current = localStorage.getItem('theme');
        if(current === 'pink'){
            document.body.classList.add('pink-theme');
        } else {
            document.body.classList.remove('pink-theme');
        }
    }

    if (pinkToggle) {
        pinkToggle.addEventListener('click', () => {
            document.body.classList.toggle('pink-theme');
            const isPink = document.body.classList.contains('pink-theme');
            localStorage.setItem('theme', isPink ? 'pink' : 'light');
        });
    }

    makePink();
});