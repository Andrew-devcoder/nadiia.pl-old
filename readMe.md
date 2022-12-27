comments :
add padding in button\_\_card--small на свое усмотрение - в макете не могу посмотреть точное расстояние

---

screen-three in card padding and margin : пока таким способом, нужно найти лучший вариант
card data change padding bottom > 9px (в макете стоит 5.16px но не соотвествует)
card p add padding right : в макете не соотвествует по этому на свое усмотрение поставил 19px

---

header img ( search ) добавил margin , нужно найти лучший способом для отспупа от выбора языка

---

исправить текстуру кода , поработать с названиями классов , улучшить БЭМ

---

можно использовать tab, esc или click по облости вне списка : для отмена выбора списка

---

придумать что нибудь с стрелками в навигации header

---

на будущее создаем и стилизуем кнопку обварачиваем в див и позиционируем уже через него ( если нужно выровнить иконки внитри кнопки - добавляем отдельный класс от кнопки )

---

в карточках news ограничен контент максимальной высотой и максимально 5 строчек , в конце три точки

---

<!-- style for select and option -->

.select-css {
margin: 0;
padding: 5px 8px
font-family: $font-family;
font-size: $text-size;
font-weight: 400;
line-height: 25px;
color: $light-grey;
border: 1px solid $grey;
background-color: $dark-grey;

.select-css:hover {
border-color: $white;
cursor: pointer;
background-color: $grey;
}
.select-css:focus {
border-color: $white;
color: $light-grey;
outline: none;
}
.select-css option:hover {
cursor: pointer;
}

---

сделал ошибку с кнопками нужно исправить : кажду кнопку только стилизовать но не позиционировать , а уже для каждого блока создавать див с кнопкой и позиционировать

---

подвинуть книзу sub menu 
сделать стреки в нав через after 
и сделать анимацию правильную 
