<template>
    <div class="container__content">
        <div class="stats">
            <div class="stats__group">
                <div class="stats__value">{{ company.age }}</div>
                <div class="stats__text">лет</div>
            </div>
            <div class="stats__group">
                <div class="stats__value">{{ company.staff }}</div>
                <div class="stats__text">человек</div>
            </div>
        </div>
        <div class="company__description-short">{{ company.description_short }}</div>
        <div class="company__description-full">{{ company.description_full }}</div>
        <div class="chips__group">
            <div class="chips__title">Проектная специализация</div>
            <chips :items="companySpecializations" />
        </div>
        <div class="chips__group">
            <div class="chips__title">Отрасли</div>
            <chips :items="industries" />
        </div>
    </div>
</template>

<script>
    import chips from '@/components/elements/chips'

    export default {
        props: {
            company: {
                type: Object,
                required: true
            }
        },
        components: {
            chips
        },
        computed: {
            companySpecializations() {
                return this.company.companySpecializations.map(specialization => specialization.title)
            },
            industries() {
                return this.company.industries.map(industry => industry.title)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .stats {
        display: flex;
        gap: 24px;
        justify-content: start;

        margin-bottom: 30px;

        > .stats__group {
            display: flex;
            align-items: flex-start;

            > .stats__value {
                font-size: 60px;
                font-weight: 300;
                line-height: 60px;
                color: #ef3e4a;

                margin-right: 5px;
            }
            > .stats__text {
                font-size: 16px;
                line-height: 24px;
                color: #333333;
            }
        }
    }

    .company__description-short {
        font-size: 18px;
        line-height: 25px;

        margin-bottom: 30px;
    }
    
    .company__description-full {
        font-size: 14px;
        line-height: 20px;
        
        margin-bottom: 30px;
    }

    .chips__group {
        margin-bottom: 30px;

        .chips__title {
            font-size: 18px;
            margin-bottom: 10px;
        }
    }
</style>