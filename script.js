// Countdown Timer
const countdownDate = new Date("December 31, 2024 23:59:59").getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".countdown").innerText = "Launched!";
    }
}, 1000);

// Email submission to SQLite via JavaScript and fetch API
document.getElementById("emailForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;

    try {
        const response = await fetch('/save-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            document.getElementById("email").value = ""; // Clear input
        } else {
            alert(result.error);
        }
    } catch (error) {
        console.log('error')
    }
});

// Floating Balls Animation
function createBalls() {
    const ballContainer = document.querySelector('.floating-balls');
    
    for (let i = 0; i < 10; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        
        ball.style.top = `${Math.random() * 100}vh`;
        ball.style.left = `${Math.random() * 100}vw`;
        ball.style.animationDuration = `${Math.random() * 20 + 10}s`;
        
        ballContainer.appendChild(ball);
    }
}

createBalls();