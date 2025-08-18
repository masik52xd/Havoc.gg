// =======================================================
// НАША ЄДИНА БАЗА ДАНИХ НОВИН (ФІНАЛЬНА ВЕРСІЯ З ПРАВИЛЬНОЮ ХРОНОЛОГІЄЮ)
// =======================================================
const newsData = [
    // 1. НАЙНОВІША (ГОЛОВНА) - 18 СЕРПНЯ
    {
        id: 1,
        title: "ТЕРМІНОВО: Турнір BSUL перенесено, трансфер NinetyEight скасовано!",
        date: "18 серпня 2025",
        author: "Havoc Insider",
        image: "images/bsul-banner.jpg",
        summary: "Через технічні проблеми старт турніру переноситься на 19 серпня. Одночасно Outsiders спростували чутки про перехід NinetyEight.",
        content: `
            <p>Щойно стало відомо про кардинальні зміни, які сколихнули спільноту Havoc. Організатори турніру BSUL Havoc Summer 2025 виступили з офіційною заявою.</p>
            <h3>Турнір перенесено на 19 серпня</h3>
            <p>Через непередбачені технічні проблеми на сервері, старт турніру <strong>переноситься на 19 серпня</strong>.</p>
            <h3>Трансфер NinetyEight в true. ESports не відбудеться</h3>
            <p>Менеджмент команди Outsiders спростував чутки про можливий перехід їхнього зіркового гравця. "<strong>NinetyEight залишається в Outsiders</strong>," - йдеться в офіційному прес-релізі.</p>
            <a href="bsul-summer-2025.html" class="cta-button">Переглянути оновлену сторінку турніру</a>
        `
    },
    // 2. АНОНС ТУРНІРУ - 17 СЕРПНЯ
    {
        id: 2,
        title: "Анонс BSUL Havoc Summer 2025!",
        date: "17 серпня 2025",
        author: "Admin",
        image: "images/bsul-banner.jpg",
        summary: "Головна подія літа вже на порозі! Чотири найкращі команди зійдуться в битві за звання чемпіона та призовий фонд у 10 гривень.",
        content: `<p>Головна подія цього літа вже на порозі! 19 серпня найкращі команди сцени зійдуться в битві за звання чемпіона <strong>BSUL Havoc Summer 2025</strong> та призовий фонд у розмірі 10 гривень.</p><a href="bsul-summer-2025.html" class="cta-button">Перейти на сторінку турніру</a>`
    },
    // 3. ПІДТВЕРДЖЕННЯ СКЛАДУ OUTSIDERS - 17 СЕРПНЯ
    {
        id: 3,
        title: "yarema29 залишається в Outsiders напередодні BSUL",
        date: "17 серпня 2025",
        author: "Admin",
        image: "images/outsiders.png",
        summary: "Після періоду невизначеності, організація Outsiders підтвердила, що @yarema29 гратиме на майбутньому турнірі.",
        content: `<p>Кінець трансферним чуткам! Організація Outsiders офіційно підтвердила, що @yarema29 залишається в команді та візьме участь у BSUL Havoc Summer 2025. Це ставить крапку в спекуляціях щодо його можливого відходу.</p>`
    },
    // 4. АНАЛІЗ ОНОВЛЕННЯ - 16 СЕРПНЯ
    {
        id: 4,
        title: "Аналіз оновлення 16361846: що нового в геймплеї?",
        date: "16 серпня 2025",
        author: "Admin",
        image: "images/main-news-photo.jpg",
        summary: "Розбираємо ключові зміни в балансі зброї, новий артефакт 'Призма Хаосу' та оновлення карти 'Покинуті Руїни'.",
        content: `<p>Нещодавнє оновлення гри під номером 16361846 принесло чимало змін, які суттєво вплинули на ігрову мету. Ми розібрали ключові моменти, щоб ви були готові до нових викликів.</p>`
    },
    // 5. ПІДПИСАННЯ В SUPER PRO MAX - 15 СЕРПНЯ
    {
        id: 5,
        title: "SUPER PRO MAX MAC NUGGETS... підписує двох вільних агентів!",
        date: "15 серпня 2025",
        author: "Admin",
        image: "images/arsen.png",
        summary: "Організація SUPER PRO MAX... підписала досвідчених гравців, @nemo_11 та @revan_10, які нещодавно покинули Goli Fallasi.",
        content: `<p>Після несподіваного розпаду команди Goli Fallasi, майбутнє двох талановитих гравців, @nemo_11 та @revan_10, було невизначеним. Проте, сьогодні організація SUPER PRO MAX MAC NUGGETS PRO CORN оголосила про їхнє підписання.</p>`
    },
    // 6. ЧУТКИ ПРО PIVO20 - 15 СЕРПНЯ
    {
        id: 6,
        title: "ЧУТКИ: Pivo20 тестували нового гравця?",
        date: "15 серпня 2025",
        author: "Havoc Insider",
        image: "images/pivo20.png",
        summary: "За нашою інформацією, Pivo20 розглядали заміну @trigger_sound, але в останній момент вирішили зберегти поточний склад.",
        content: `<p>Джерела, близькі до команди Pivo20, повідомляють, що колектив проводив закриті тести з молодим талантом 'Spectre'. Проте, після кількох тренувань було прийнято рішення продовжити виступи з поточним складом: @sashaplay та @trigger_sound.</p>`
    },
    // 7. ДІЗБАНД GOLI FALLASI - 14 СЕРПНЯ
    {
        id: 7,
        title: "Сумні новини: Команда Goli Fallasi розпадається",
        date: "14 серпня 2025",
        author: "Admin",
        image: "images/main-news-photo.jpg",
        summary: "Колектив Goli Fallasi оголосив про припинення існування. Гравці @nemo_11 та @revan_10 стали вільними агентами.",
        content: `<p>Один з найперспективніших колективів молодої сцени, Goli Fallasi, сьогодні офіційно оголосив про свій розпад. Гравці @nemo_11 та @revan_10 отримали статус вільних агентів.</p>`
    },
    // 8. ІНТЕРВ'Ю З THESEGUE - 13 СЕРПНЯ
    {
        id: 8,
        title: "Інтерв'ю з TheSeuge: 'Ми з masik швидко знайшли спільну мову'",
        date: "13 серпня 2025",
        author: "Admin",
        image: "images/true.png",
        summary: "Ми поспілкувалися з капітаном true. ESports про підписання нового гравця та плани на майбутнє.",
        content: `<p>Напередодні нового сезону ми поспілкувалися з капітаном true. ESports, TheSeuge, про нещодавнє підписання @masik. 'Ми з masik швидко знайшли спільну мову, у нас схожий погляд на гру. Я впевнений, що ми зможемо показати гідний результат', - заявив TheSeuge.</p>`
    },
    // 9. НАЙСТАРІША НОВИНА (ПІДПИСАННЯ MASIK) - 12 СЕРПНЯ
    {
        id: 9,
        title: "Офіційно: masik приєднується до true. ESports!",
        date: "12 серпня 2025",
        author: "Admin",
        image: "images/true.png",
        summary: "Талановитий гравець @masik офіційно став частиною команди true. ESports, де він гратиме разом з капітаном @theseuge.",
        content: `<p>Після кількох тижнів чуток, true. ESports нарешті зробили офіційний анонс: <strong>@masik</strong> стає другим гравцем їхнього складу по Havoc. Він гратиме в парі з незмінним капітаном команди <strong>@theseuge</strong> (також відомим як Клюсік).</p>`
    }
];

// ===================================================================
// ГОЛОВНА ФУНКЦІЯ, ЯКА ЗАПУСКАЄТЬСЯ ПІСЛЯ ЗАВАНТАЖЕННЯ ВСІЄЇ СТОРІНКИ
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- Логіка для головної сторінки (index.html) ---
    const featuredContainer = document.getElementById('featured-news-container');
    const latestList = document.getElementById('latest-news-list');
    
    if (featuredContainer && latestList) {
        const featuredNews = newsData[0];
        const latestNews = newsData.slice(1);

        if (featuredNews) {
            featuredContainer.innerHTML = `
                <img src="${featuredNews.image}" alt="${featuredNews.title}">
                <h3><a href="article.html?id=${featuredNews.id}">${featuredNews.title}</a></h3>
                <p>${featuredNews.summary}</p>
            `;
        }

        latestList.innerHTML = '';
        latestNews.forEach(news => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="article.html?id=${news.id}">${news.title}</a>`;
            latestList.appendChild(listItem);
        });
    }

    // --- Логіка для сторінки новини (article.html) ---
    const articleContainer = document.getElementById('article-dynamic-content');
    if (articleContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = parseInt(urlParams.get('id'));
        const article = newsData.find(item => item.id === articleId);
        
        if (article) {
            document.title = `Havoc.gg - ${article.title}`;
            articleContainer.innerHTML = `
                <h1 id="article-title">${article.title}</h1>
                <p id="article-meta" class="article-meta">Опубліковано: ${article.date} | Автор: ${article.author}</p>
                <img id="article-image" src="${article.image}" alt="Зображення новини">
                <div id="article-content-body">${article.content}</div>
            `;
        } else {
            articleContainer.innerHTML = `
                <h1 id="article-title">Новину не знайдено</h1>
                <p>На жаль, новини з таким ID не існує. Можливо, посилання застаріло.</p>
            `;
        }
    }

    // --- Логіка для вкладок на сторінці турніру ---
    const tabs = document.querySelectorAll('.event-tabs a');
    const contents = document.querySelectorAll('.tab-content');
    if (tabs.length > 0 && contents.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', (event) => {
                event.preventDefault();
                tabs.forEach(item => item.classList.remove('active'));
                tab.classList.add('active');
                const targetId = tab.getAttribute('data-tab');
                contents.forEach(content => {
                    content.style.display = 'none';
                });
                document.getElementById(targetId).style.display = 'block';
            });
        });
    }
});