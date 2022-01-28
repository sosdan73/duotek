<template>
    <div
        class="card"
        @click="openCompany(data.id)"
    >
        <img class="card__image" :src="data.picture" :alt="data.title">
        <div class="card__content">
            <h2 class="card__title">{{ data.title }}</h2>
            <div class="card__description">{{ data.description_short }}</div>
            <chips :items="specializations" />
        </div>
        <img class="card__arrow" src="@/static/images/long-arrow.png" alt="">
    </div>
</template>

<script>
    import chips from '@/components/elements/Chips'

    export default {
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        components: {
            chips
        },
        methods: {
            openCompany(id) {
                this.$router.push('/companies/' + id)
            }
        },
        computed: {
            specializations() {
                return this.data.companySpecializations.map(specialization => specialization.title)
            }
        }
    }
</script>

<style lang="scss" >
    .card {
        width: 100%;
        position: relative;

        padding: 24px;
        box-sizing: border-box;
        border-radius: 8px;

        display: flex;
        align-items: flex-start;
        gap: 22px;

        margin-bottom: 20px;
        cursor: pointer;
        transition: background-color .2s ease-in-out;
        background-color: #ffffff;

        > .card__image {
            width: 140px;
            object-fit: contain;
        }

        > .card__content {
            > .card__title {
                margin: 0;
                margin-bottom: 16px;

                color: #030953;
                font-size: 24px;
                font-weight: 400;
                line-height: 24px;
            }

            > .card__description {
                margin-bottom: 16px;

                font-size: 14px;
                line-height: 21px;
            }
        }

        > .card__arrow {
            width: 16px;
            height: 12px;

            position: absolute;
            bottom: 24px;
            right: 24px;

            opacity: 0;
            transition: opacity 0.2s ease-in-out;
        }

        &:hover {
            background-color: #f7f7f7;

            > .card__arrow {
                opacity: 1;
            }

            .chip {
                background-color: #ffffff;
            }
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
</style>