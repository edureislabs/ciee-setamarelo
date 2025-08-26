
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    

    const listItems = document.querySelectorAll('ul li');
    listItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'highlight 2s ease-in-out';
        }, index * 500); 
    });
    

    const btn = document.querySelector('.btn');
    btn.addEventListener('mouseover', () => {
        btn.classList.add('pulse');
    });
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('pulse');
    });
});


const pulseEffect = document.createElement('style');
pulseEffect.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }

    .pulse {
        animation: pulse 0.6s infinite;
    }
`;
document.head.appendChild(pulseEffect);
