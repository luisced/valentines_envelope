document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    const heart = document.querySelector('.heart');
    const wrapper = document.querySelector('.envelope-wrapper');

    // Function to add glitter particles
    function addGlitter() {
        const glitterCount = 50;
        for (let i = 0; i < glitterCount; i++) {
            const glitter = document.createElement('div');
            glitter.classList.add('glitter');
            glitter.style.left = `${Math.random() * 100}%`;
            glitter.style.top = `${Math.random() * 100}%`;
            glitter.style.animationDelay = `${Math.random() * 2}s`;
            envelope.appendChild(glitter);
        }
    }

    // Add swirling animation effect
    function addSwirlEffect() {
        envelope.style.transition = 'transform 1s, box-shadow 0.3s';
        envelope.style.boxShadow = '0 0 20px rgba(255, 20, 147, 0.5)';
        
        let angle = 0;
        const swirlInterval = setInterval(() => {
            angle += 5;
            envelope.style.transform = `rotateY(${angle}deg)`;
            if (angle >= 360) {
                clearInterval(swirlInterval);
                envelope.style.transform = '';
                openEnvelope();
            }
        }, 20);
    }

    // Function to open the envelope
    function openEnvelope() {
        envelope.classList.add('flap');
        letter.style.animation = 'float 2s ease-in-out infinite alternate';
        letter.style.zIndex = '1';
        wrapper.classList.add('final');
    }

    // Function to close the envelope
    function closeEnvelope() {
        envelope.classList.remove('flap');
        letter.style.animation = '';
        letter.style.zIndex = '';
        wrapper.classList.remove('final');
    }

    // Event listener for heart click
    heart.addEventListener('click', () => {
        if (!envelope.classList.contains('flap')) {
            addSwirlEffect();
            addGlitter();
        }
    });

    // Event listener for letter click
    letter.addEventListener('click', (e) => {
        // Only close if clicking on the letter itself, not its child elements.
        if (e.target === letter && wrapper.classList.contains('final')) {
            closeEnvelope();
        }
    });

    // Placeholder for future button actions
    const buttons = letter.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent letter from closing when buttons are clicked
            // Add specific button actions here in the future
        });
    });
});
