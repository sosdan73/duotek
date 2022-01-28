<template>
    <div class="pagination">
        <div
            :key="page"
            v-for="page in pagesNumber"
            class="link pagination__link"
            :class="{ active: page === pagesNumber}"
            @click="changePage(page)"
        >
            {{ page }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pagesNumber: 1
            }
        },
        created() {
            this.pagesNumber = Math.ceil(this.meta.total / this.meta.per_page)
        },
        methods: {
            changePage(page) {
                if (page !== this.pagesNumber) {
                    this.$store.commit('queries/setPage', page);
                    this.$store.commit('queries/setLink');
                this.$store.dispatch('companies/fetch')
                }
            }
        },
        computed: {
            meta() {
                return this.$store.getters['companies/meta']
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        margin: 40px 0;

        .pagination__link {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 40px;
            height: 40px;

            font-size: 16px;
            background-color: #ffffff;
            cursor: pointer;

            &.active {
                background-color: #f7f7f7;
                opacity: 0.3;
                cursor: default;
            }

            &:not(.active) {
                transition: background-color .2s ease-in-out;
    
                &:hover {
                    background-color: #f7f7f7;
                }
            }

        }
    }
</style>