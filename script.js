document.addEventListener('DOMContentLoaded', () => {

    const typewriterElement = document.getElementById('typewriter');
    const text = 'A CREATIVE DEVELOPER & DESIGNER.';
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); 
        }
    }
    type();

    const glitchElement = document.querySelector('.glitch');
    const originalText = glitchElement.dataset.text;

    glitchElement.addEventListener('mouseover', () => {
        let iterations = 0;
        const interval = setInterval(() => {
            glitchElement.textContent = originalText.split('').map((char, i) => {
                if(i < iterations) {
                    return originalText[i];
                }
                return String.fromCharCode(0x2580 + Math.random() * (0x259F - 0x2580 + 1));
            }).join('');
            
            if(iterations >= originalText.length) clearInterval(interval);
            
            iterations += 1 / 3;
        }, 30);
    });

    glitchElement.addEventListener('mouseleave', () => {
        glitchElement.textContent = originalText;
    });

    const sections = document.querySelectorAll('section');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        revealObserver.observe(section);
    });

    console.log('8-BIT OS LOADED.');
});
