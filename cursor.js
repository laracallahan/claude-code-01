// Custom red heart cursor with smooth lag effect
const cursor = document.createElement('div');
cursor.id = 'heart-cursor';
cursor.innerHTML = '&#10084;';
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  cursorX += (mouseX - cursorX) * 0.12;
  cursorY += (mouseY - cursorY) * 0.12;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  requestAnimationFrame(animate);
}
animate();

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
