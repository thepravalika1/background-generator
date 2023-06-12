const color1 = document.getElementById('col1');
const color2 = document.getElementById('col2');
const gradientBtn = document.getElementById('gradientBtn');
const body = document.querySelector('body');

gradientBtn.addEventListener('click', generateGradient);

function generateGradient() {
    body.style.background = `linear-gradient(to right, ${col1.value}, ${col2.value})`;
}
