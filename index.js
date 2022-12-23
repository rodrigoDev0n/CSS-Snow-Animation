const snow = document.getElementById('snow');
const body = document.getElementById('body');

const getRandomPosition = () => {
    let randomPosition = Math.floor(Math.random() * 100);
    const snowBall = document.createElement('div');
    snowBall.className = 'snow-container';
    snowBall.style.cssText = `left: ${randomPosition}%`;
    body.appendChild(snowBall);
}

for (let index = 0; index < 10; index++) {
    setInterval(() => {
        getRandomPosition();
    }, Math.floor(Math.random() * 51000));
}