<template>
    <div class="filters container__aside">
        <h3 class="filter__title">Отрасль</h3>
        <app-select
            :options="industries"
            placeholder="Все отрасли"
            class="select"
            @input="chooseIndustry($event)"
        />
        <h3 class="filter__title">Специализация</h3>
        <app-select
            :options="specializations"
            placeholder="Все специализации"
            class="select"
            @input="chooseSpecialization($event)"
        />
    </div>
</template>

<script>
import appSelect from "@/components/elements/Select"

export default {
    components: {
        appSelect
    },
    props: {
        definitions: {
            type: Object,
            required: true
        }
    },
    methods: {
        chooseIndustry(payload) {
            const industry = this.definitions['Industry']
                .filter(industry => industry.title === payload)[0];
            if (industry && industry.id) {
                this.$store.commit('queries/setIndustry', industry.id);
                this.$store.commit('queries/setLink');
                this.$store.dispatch('companies/fetch')
            }
        },
        chooseSpecialization(payload) {
            const specialization = this.definitions['CompanySpecialization']
                .filter(specialization => specialization.title === payload)[0];
            if (specialization && specialization.id) {
                this.$store.commit('queries/setSpecialization', specialization.id);
                this.$store.commit('queries/setLink');
                this.$store.dispatch('companies/fetch')
            }
        },
    },
    computed: {
        industries() {
            return this.definitions['Industry'].map(industry => industry.title)
        },
        specializations() {
            return this.definitions['CompanySpecialization'].map(specialization => specialization.title)
        },
    }
}
</script>

<style lang="scss">
    .filters {
        padding: 18px 20px;

        background-color: #f7f7f7;
        border-radius: 4px;

        .filter__title {
            margin: 0 0 16px;
            &:not(:first-child) {
                margin-top: 16px;
            }

            font-size: 16px;
            font-weight: 400;
            line-height: 16px;
        }

        .filter__select {
            padding: 10px 16px;

            &::after {
                padding-right: 16px;
            }
        }
    }
</style>