document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('demoButton');
    const message = document.getElementById('message');
    
    const messages = [
        '🎉 Awesome! You clicked the button!',
        '✨ Great job! Keep exploring!',
        '🚀 You\'re doing amazing!',
        '💫 Fantastic! One more time?',
        '🌟 Brilliant! You\'re a natural!',
        '🎨 Beautiful! Keep it up!',
        '⚡ Incredible! You\'re on fire!',
        '🎯 Perfect! You nailed it!'
    ];
    
    let clickCount = 0;
    
    button.addEventListener('click', function() {
        clickCount++;
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.textContent = `${randomMessage} (Click #${clickCount})`;
        
        // Add a little animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
