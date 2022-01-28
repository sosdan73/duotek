<template>
    <div class="search">
        <input class="input search__input" placeholder="Поиск продукта или отрасли" v-model="query"/>
        <div class="button search__button" @click="search" @keydown.enter="search">Найти</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                query: ''
            }
        },
        methods: {
            search() {
                this.$store.commit('queries/setQuery', this.query);
                this.$store.commit('queries/setLink');
                this.$store.dispatch('companies/fetch')
            }
        },
    }
</script>

<style lang="scss" scoped>
    .search {
        display: flex;
        align-items: center;
        margin-bottom: 80px;

        border-radius: 4px;
        border: 1px solid #e5e5e5;
        overflow: hidden;

        &::before {
            content: '';
            display: block;
            background: url("@/static/images/search.png") no-repeat;
            width: 20px;
            height: 20px;
            margin: 0 8px;
        }


        .search__input {
            padding: 8px 12px;
            border: none;

            flex-grow: 1;

            font-size: 16px;
            line-height: 20px;
        }

        .search__button {
            padding: 10px;
            font-size: 14px;

            background-color: #030953;
            color: #fff;
            cursor: pointer;
        }
    }
</style>