<template>
    <div class="mobile">
        <div
            class="burger"
            :class="{ open }"
            @click="toggleMenu"
        >
            <span
                :key="i"
                v-for="i in 3"
                class="burger__element"
                :style="{ backgroundColor: dark ? '#fff' : '#030953' }"
            ></span>
        </div>
        <div
            class="menu"
            :class="{ open }"
            :style="{ backgroundColor: !dark ? '#fff' : '#030953' }"
        >
            <nuxt-link
                class="link link__menu-mobile"
                to="#"
                exact
                active-class="active"
                :style="{ color: dark ? '#fff' : '#030953' }"
            >
                Тендеры
            </nuxt-link>
            <nuxt-link
                class="link link__menu-mobile"
                to="/companies"
                exact
                active-class="active"
                :style="{ color: dark ? '#fff' : '#030953' }"
            >
                Компании
            </nuxt-link>
            <nuxt-link
                class="link link__menu-mobile"
                to="#"
                exact
                active-class="active"
                :style="{ color: dark ? '#fff' : '#030953' }"
            >
                Продукты
            </nuxt-link>
            <nuxt-link
                class="link link__menu-mobile"
                to="#"
                exact
                active-class="active"
                :style="{ color: dark ? '#fff' : '#030953' }"
            >
                Кейсы
            </nuxt-link>
            <nuxt-link
                class="link link__menu-mobile"
                to="#"
                exact
                active-class="active"
                :style="{ color: dark ? '#fff' : '#030953' }"
            >
                Блог
            </nuxt-link>
            <nuxt-link
                class="link link__menu-mobile"
                to="#"
                exact
                active-class="active"
                :style="{ color: dark ? '#fff' : '#030953' }"
            >
                Вход и регистрация
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            dark: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                open: false,
                clickable: true,
            }
        },
        methods: {
            toggleMenu() {
                if (this.clickable) {
                    this.open = !this.open;
                    this.clickable = false;
                    setTimeout(() => {
                        this.clickable = true
                    }, 300);
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .burger {
        position: relative;
        width: 50px;
        height: 50px;

        z-index: 300;

        > .burger__element {
            position: absolute;
            width: 50px;
            height: 10px;

            transition: transform .3s ease-in-out;
            left: 0;

            &:first-child {
                top: 0;
            }
            &:nth-child(2) {
                top: 20px;
            }
            &:nth-child(3) {
                top: 40px;
            }
        }

        &.open > .burger__element {
            &:first-child {
                transform: rotate(-45deg) translate(-14px, 14px) scaleX(1.25);
            }
            &:nth-child(2) {
                transform: scaleX(0);
            }
            &:nth-child(3) {
                transform: rotate(45deg) translate(-14px, -14px) scaleX(1.25)
            }
        }
    }

    .menu {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        background-color: #ffffff;
        transition: opacity .3s ease-in-out, transform .3s ease-in-out;
        transform: translateY(-100vh);
        opacity: 0;
        z-index: 200;

        > .link__menu-mobile {
            font-size: 32px;
            line-height: 48px;

            &.active {
                opacity: 0.3;
            }
        }

        &.open {

            opacity: 1;
            transform: translateY(0vh);
        }
    }

    @media (min-width: 961px) {
        .mobile {
            display: none;
        }
    }
</style>