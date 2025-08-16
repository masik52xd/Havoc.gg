// Цей код чекає, поки вся HTML-сторінка повністю завантажиться
document.addEventListener('DOMContentLoaded', () => {

    // Знаходимо всі кнопки-вкладки
    const tabs = document.querySelectorAll('.event-tabs a');
    // Знаходимо всі блоки з контентом для цих вкладок
    const contents = document.querySelectorAll('.tab-content');

    // Для кожної кнопки-вкладки додаємо слухача подій (реакцію на клік)
    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            // Ця команда забороняє посиланню перезавантажувати сторінку
            event.preventDefault(); 

            // Забираємо клас 'active' з усіх кнопок, щоб вони перестали бути підсвіченими
            tabs.forEach(item => item.classList.remove('active'));
            // Додаємо клас 'active' тільки тій кнопці, на яку ми щойно натиснули
            tab.classList.add('active');

            // Дізнаємося, який контент потрібно показати (напр., 'teams', 'matches' і т.д.)
            const targetId = tab.getAttribute('data-tab');

            // Ховаємо абсолютно всі блоки з контентом
            contents.forEach(content => {
                content.style.display = 'none';
            });

            // Показуємо лише той блок контенту, який відповідає натиснутій кнопці
            document.getElementById(targetId).style.display = 'block';
        });
    });
});