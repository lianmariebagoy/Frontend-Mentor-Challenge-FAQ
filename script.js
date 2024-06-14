document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const answer = item.nextElementSibling;
        const toggleBtn = item.querySelector('img');
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggleBtn.src = '/Frontend-Mentor-Challenge-FAQ/assets/images/icon-plus.svg';
        } else {
            answer.style.display = 'block';
            toggleBtn.src = '/Frontend-Mentor-Challenge-FAQ/assets/images/icon-minus.svg';
        }
    })
});