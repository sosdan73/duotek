<template>
    <footer class="footer page__offset">
        <div class="footer__wrap">
            <div class="footer__group">
                <div class="footer__group-title">Тендеры</div>
                <button class="button footer__button button-blue">Добавить тендер</button>
                <nuxt-link class="link footer__link" to="#">Каталог тендеров</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Работа с клиентами</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Управление проектами</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Маркетинг</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Финансы</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Управление бизнесом</nuxt-link>
            </div>
            <div class="footer__group">
                <div class="footer__group-title">Компании</div>
                <button class="button footer__button button-red">Добавить компанию</button>
                <nuxt-link class="link footer__link" to="#">Рейтинги</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Отраслевая специализация</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Интеграторы</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Решения для бизнеса крепеж</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Разработка сайтов</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Мобильные приложения</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Онлайн-реклама</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Контент</nuxt-link>
            </div>
            <div class="footer__group">
                <div class="footer__group-title">Продукты</div>
                <nuxt-link class="link footer__link" to="#">Рейтинги</nuxt-link>
                <nuxt-link class="link footer__link" to="#">По отраслям</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Работа с клиентами</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Управление проектами</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Маркетинг</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Финансы</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Управление бизнесом</nuxt-link>
            </div>
            <div class="footer__group">
                <div class="footer__group-title">Кейсы</div>
                <nuxt-link class="link footer__link" to="#">Автоматизация сантехников</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Автоматизация клининга</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Автоматизация CTO</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Автоматизация сантехников</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Автоматизация клининга</nuxt-link>
                <nuxt-link class="link footer__link" to="#">Автоматизация CTO</nuxt-link>
            </div>
        </div>
        <div class="footer__wrap footer__wrap-bottom">
            <div class="footer__icons">
                <nuxt-link to="#">
                    <img class="footer__icon" src="@/static/images/facebook.svg" alt="">
                </nuxt-link>
                <nuxt-link to="#">
                    <img class="footer__icon" src="@/static/images/vk.svg" alt="">
                </nuxt-link>
                <nuxt-link to="#">
                    <img class="footer__icon" src="@/static/images/youtube.svg" alt="">
                </nuxt-link>
            </div>
            <div class="footer__links">
                <nuxt-link class="link footer__link-grey" to="#">О проекте</nuxt-link>
                <nuxt-link class="link footer__link-grey" to="#">Пользовательское соглашение</nuxt-link>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        padding-top: 80px;
        padding-bottom: 80px;
        border-top: 1px solid #f2f2f2;

        .footer__wrap {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            .footer__group-title {
                font-size: 16px;
                line-height: 16px;
            }

            .footer__link {
                color: #333333;
            }

            .footer__button {
                color: #ffffff;
                padding: 5px 16px;
                border-radius: 4px;

                &.button-blue {
                    background-color: #030953;
                }
                &.button-red {
                    background-color: #ef3e4a;
                }
            }

            .footer__button, > .footer__link {
                font-size: 14px;
                line-height: 22px;
            }

            .footer__group-title, .footer__button, .footer__link {
                display: block;
                margin-bottom: 20px;
            }

            &.footer__wrap-bottom {
                align-items: center;
            }

            .footer__icons {
                width: 120px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                > .footer__icon {
                    width: 24px;
                }
            }

            .footer__links {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 270px;

                > .footer__link-grey {
                    color: #808080;
                    font-size: 12px;
                }
            }
        }
    }

    @media (max-width: 960px) {
        .footer__wrap {
            flex-direction: column;

            > .footer__group {
                width: fit-content;
                text-align: center;
                margin: auto;
                margin-bottom: 50px;

                > .footer__button {
                    margin: 0 auto 20px;
                }
            }

            > .footer__icons {
                margin-bottom: 20px;
            }
        }
    }
</style>