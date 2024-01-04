document.getElementById('run-away-btn').addEventListener('mouseover', function() {
    if (!this.classList.contains('running-away')) {
        this.classList.add('running-away');
        this.style.animation = 'runAway 2s forwards';
        
        // Disable the button during the animation
        this.disabled = true;

        // Re-enable the button after the animation is complete
        setTimeout(() => {
            this.classList.remove('running-away');
            this.style.animation = '';
            this.disabled = false;
        }, 2000);
    }
});
