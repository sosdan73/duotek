<template>
    <div
        class="navbar page__offset"
        :class="{ dark: !pageIsCompanies }"
    >
        <img
            v-if="pageIsCompanies"
            class="logo navbar__logo"
            src="@/static/images/logo.svg"
            alt=""
        >
        <img
            v-else
            class="logo navbar__logo"
            src="@/static/images/logo-dark.svg"
            alt=""
        >
        <div class="navbar__links">
            <nuxt-link
                class="link navbar__link"
                active-class="active"
                exact
                to="#"
            >
                Тендеры
            </nuxt-link>
            <nuxt-link
                class="link navbar__link"
                active-class="active"
                exact
                to="/companies"
            >
                Компании
            </nuxt-link>
            <nuxt-link
                class="link navbar__link"
                active-class="active"
                exact
                to="#"
            >
                Продукты
            </nuxt-link>
            <nuxt-link
                class="link navbar__link"
                active-class="active"
                exact
                to="#"
            >
                Кейсы
            </nuxt-link>
            <nuxt-link
                class="link navbar__link"
                active-class="active"
                exact
                to="#"
            >
                Блог
            </nuxt-link>
        </div>
        <div class="navbar__login">
            <nuxt-link
                class="link navbar__link"
                active-class="active"
                exact
                to="#"
            >
                Вход и регистрация
            </nuxt-link>
        </div>
        <mobile-menu :dark="!pageIsCompanies" />
    </div>
</template>

<script>
    import mobileMenu from '@/components/elements/MobileMenu.vue'

    export default {
        components: {
            mobileMenu
        },
        computed: {
            pageIsCompanies() {
                return this.$route.name === 'companies'
            }
        }
    }
</script>

<style lang="scss">
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-top: 24px;
        padding-bottom: 24px;
        margin-bottom: 50px;

        background-color: #ffffff;

        > .navbar__logo {
            width: 130px;
        }

        > .navbar__links {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 470px;
        }

        &:not(.dark) {
            border-bottom: 1px solid #f2f2f2;

            .navbar__link.active {
                opacity: 0.3;
            }
        }

        &.dark {
            background-color: #030953;

            .navbar__link {
                color: white;
            }
        }
    }

    @media (max-width: 960px) {
        .navbar > .navbar__links, .navbar > .navbar__login {
            display: none;
        }
    }
</style>