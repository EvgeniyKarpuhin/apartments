<template>
    <div class="overlay">
            <h1 class="mrg">Аренда жилья в Израиле — просто и удобно</h1>
            <h2 class="mrg">Мы помогаем найти квартиры и дома для краткосрочной и долгосрочной аренды.<br>
                Все объекты проверены лично — вы будете уверены в качестве жилья.<br>
                Мы работаем с многими отелями от эконом до класса Люкс с видом на море.<br>
                Нужен трансфер? Мы предоставим комфортные условия для передвижения в любую точку страны.
            </h2>
        
            <h2>
                Наши услуги:
            </h2>
            <ul class="size-li">
                <li>Аренда квартир, домов и отелей на разный срок</li>
                <li>Подбор жилья под ваши даты и бюджет</li>
                <li>Помощь с покупкой недвижимости и сопровождение документов</li>
            </ul>
            <h2>
                Почему выбирают нас:
            </h2>
            <ul class="size-li">
                <li>Более 5 лет на рынке</li>
                <li>Сотни довольных клиентов</li>
                <li>Работаем в главных городах Израиля: Тель-Авив, Нетания, Бат-Ям, Герцлия, Хайфа, Эйлат, Иерусалим</li>
                <li>Лично проверяем состояние жилья</li>
                <li>Дешевле чем бронировать на сайтах</li>
            </ul>
        </div>
</template>

<style scoped>
.overlay {
    background: rgba(255, 255, 255, 0.63);
    border-radius: 10px;
    padding: 30px;
    margin-top: 50px;
}

@media (max-width: 768px) {
    .overlay {
        padding: 20px;
        margin-top: 20px;
    }
    .mrg {
        margin-bottom: 20px;
        font-size: 1.1rem;
    }
    .size-li {
        font-size: 16px;
        margin: 15px 0;
    }
}

.mrg {
    margin-bottom: 50px;
}

.size-li {
    font-size: 20px;
    margin: 30px 0;
    list-style-type: disclosure-closed;
}

.size-li:last-child {
    margin: 0;
}
</style>