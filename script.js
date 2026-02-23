// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Typing Effect for Hero Section
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Cybersecurity Analyst", "WordPress Developer", "Ethical Hacker", "CSE Student"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000);
});

// Counter Animation for Stats
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
};

// Intersection Observer to trigger counter when visible
const statsSection = document.querySelector('.hero-stats');
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCounters();
    }
}, { threshold: 0.5 });

observer.observe(statsSection);

// Dynamic Skills Loading Example
const skills = [
    { name: 'Penetration Testing', icon: 'fas fa-user-secret' },
    { name: 'WordPress', icon: 'fab fa-wordpress' },
    { name: 'Network Security', icon: 'fas fa-shield-alt' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Malware Analysis', icon: 'fas fa-virus-slash' },
    { name: 'Web Security', icon: 'fas fa-code-branch' }
];

const skillsContainer = document.getElementById('skillsContainer');
skills.forEach(skill => {
    const skillHTML = `
        <div class="skill-item" data-aos="zoom-in">
            <i class="${skill.icon}"></i>
            <h4>${skill.name}</h4>
        </div>
    `;
    skillsContainer.innerHTML += skillHTML;
});

