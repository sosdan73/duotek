<template>
    <div>
        <h1 class="header">Каталог компаний</h1>
        <div class="container">
            <filters :definitions="definitions" />
            <div class="container__content">
                <search />
                <div v-if="companies">
                    <company
                        :key="company.id"
                        v-for="company in companies"
                        :data="company"
                    />
                </div>
            </div>
        </div>
        <pagination />
    </div>
</template>

<script>
    import search from '@/components/companies/Search'
    import filters from '@/components/companies/Filters'
    import company from '@/components/companies/Company'
    import pagination from '@/components/companies/Pagination'

    export default {
        async asyncData({$axios}) {
            try {
                const definitions = await $axios.get('http://api-test.duotek.ru/definitions');
                return { definitions: definitions.data }
            } catch (error) {
                console.log(error);
            }
        },
        async fetch({ store }) {
            if (store.getters['companies/companies'].length === 0) {
                await store.dispatch('companies/fetch')
            }
        },
        components: {
            search,
            filters,
            company,
            pagination
        },
        computed: {
            companies() {
                return this.$store.getters['companies/companies']
            }
        }
    }
</script>

<style lang="scss">
    .link {
        color: #030953;
        text-decoration: none;
    }

    .input {
        outline: none;
        background-color: #fff;
    }

    .button {
        border: none;
    }
</style>