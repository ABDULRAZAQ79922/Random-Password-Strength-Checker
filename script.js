document.addEventListener('DOMContentLoaded', function() {
    const myPasswordInput = document.getElementById('myPasswordInput');
    const myStrengthMeter = document.getElementById('myStrengthMeter');
    const myStrengthText = document.getElementById('myStrengthText');
    const myTogglePassword = document.getElementById('myTogglePassword');

    myPasswordInput.addEventListener('input', updateStrengthMeter);
    myTogglePassword.addEventListener('click', togglePasswordVisibility);

    function updateStrengthMeter() {
        const myStrength = calculatePasswordStrength(myPasswordInput.value);
        updateStrengthDisplay(myStrength);
    }

    function calculatePasswordStrength(password) {
        let myStrengthPoints = 0;

        if (password.length >= 8) myStrengthPoints++;
        if (/[A-Z]/.test(password)) myStrengthPoints++;
        if (/[a-z]/.test(password)) myStrengthPoints++;
        if (/[0-9]/.test(password)) myStrengthPoints++;
        if (/[\W_]/.test(password)) myStrengthPoints++;

        return myStrengthPoints;
    }

    function updateStrengthDisplay(myStrength) {
        const myStrengthColors = ['#ff4b5c', '#ff7f50', '#ffeb3b', '#00e676', '#00c853'];
        const myStrengthLabels = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];

        myStrengthMeter.innerHTML = '';
        const myMeterBar = document.createElement('div');
        myMeterBar.style.width = (myStrength * 20) + '%';
        myMeterBar.style.background = myStrengthColors[myStrength - 1];
        myStrengthMeter.appendChild(myMeterBar);

        myStrengthText.textContent = myStrengthLabels[myStrength - 1];
        myStrengthText.style.color = myStrengthColors[myStrength - 1];
    }

    function togglePasswordVisibility() {
        if (myPasswordInput.type === 'password') {
            myPasswordInput.type = 'text';
            myTogglePassword.textContent = '🙈';
        } else {
            myPasswordInput.type = 'password';
            myTogglePassword.textContent = '👁️';
        }
    }
});
