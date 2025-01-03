![museum-about](https://github.com/user-attachments/assets/8720d8f9-0519-42ff-81d0-3e01ab5efc82)

## Содержание

- [О проекте](#О-проекте)
- [Функционал проекта](#Функционал-проекта)
- [Пример графического представления](#Пример-графического-представления)
- [Используемые технологии](#Используемые-технологии)

## О проекте

_Prod: https://museum-of-art.vladislav-malchevskiy.ru/_

_Читать описание проекта на других языках: [en](README.md), [ru](README.ru.md)_

Приложение для отображения каталога с картинами. Главная страница представляет собой информационную часть приложения, в которой можно выполнить поиск и отсортировать получаемые данные. Так же на главной странице реализована пагинация по трем картинам. При клике на выбранную картину осуществляется переход на страницу с детальной информацией, чтобы изучить произведение подробнее. Понравившиеся произведения можно поместить в избранное, чтобы иметь быстрый доступ к их изучению и просмотру.

## Функционал проекта

- Получение данных о картинах с внешнего API;
- Отображение списка картин с возможностью пагинации;
- Реализация формы поиска с валидацией введенных данных;
- Использование роутинга для разделения страниц приложения;
- Реализация дебаунса для поисковой формы;
- Возможность добавления картины в список избранных с сохранением их в LocalStorage;
- Возможность просмотра более детальной информации о картине;
- Интерфейс для просмотра списка избранных и возможности удаления из списка;
- Реализация возможности сортировки картин по различным критериям.

### Также проект имеет следующие особенности

- При загрузке товаров реализован Loader;
- Оптимизирован дизайн под мобильные устройства (до 390px);
- Реализавано burger-menu;
- Использован TypeScript для типизирования и уменьшения количества потенциальных багов;
- Обработка ошибок осуществляется через паттерн **_Error Boundaries_**;
- Используются алиасы для импортирования файлов;
- Часть функционала покрыта тестами;
- Организована файловая структура react приложения.[Ссылка на структуру](https://github.com/mkrivel/structure);
- Настроены конфигурации eslint, prettier, [husky](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946);
- Использован [GitFlow](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow);
- Использована [Commit Convention](https://www.conventionalcommits.org/en/v1.0.0/)
- Данные приходят с [ART API](https://api.artic.edu/docs/#introduction)

## Пример графического представления

Ссылка на макет: [Макет](https://www.figma.com/file/XSLT4bMToK5tOdbXBBuqhP/Trainee-task-1?type=design&node-id=0-1&mode=design&t=tthepIdFQRlAXlVS-0).

## Используемые технологии

- **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- **_eslint_** - [линтер](https://eslint.org/docs/user-guide/configuring) для JavaScript кода;
- **_prettier_** - [инструмент](https://prettier.io/docs/en/install.html) для автоформатирования кода;
- **_yarn_** - менеджер пакетов;
- **_react_** - [JavaScript-библиотека](https://reactjs.org/docs/getting-started.html) для создания пользовательских интерфейсов;
- **_typescript_** - строго типизированный язык для уменьшения количества потенциальных багов;
- **_styled-components_** - система [стилизации](https://www.styled-components.com/docs) react компонентов;
- **_jest_** - библиотека для unit-тестирования;
- **_react-router-dom_** - библиотека для навигации между разными частями веб-приложения;
- **_yup_** - библиотека для валидации форм;
- **_formik_** - библиотека для обработки элемента ввода формы.
