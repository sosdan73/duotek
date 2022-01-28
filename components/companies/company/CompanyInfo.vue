<template>
    <div class="container__aside company__info-text">
        <img class="company__image" :src="company.picture" alt="">
        <div class="company__info-group">
            <div class="company__info-title">Сайт:</div>
            <a class="link " :href="company.url">{{ company.url }}</a>
        </div>
        <div class="company__info-group">
            <div class="company__info-title">E-mail:</div>
            <a class="link " :href="'mailto:' + company.contact_email">{{ company.contact_email }}</a>
        </div>
        <div class="company__info-group">
            <div class="company__info-title">Телефон:</div>
            <a class="link " :href="'tel:+' + company.contact_phone">{{ company.contact_phone | phone }}</a>
        </div>
        <div lass="company__info-group">
            <div class="company__info-title">Skype:</div>
            <div class="">{{ company.contact_skype }}</div>
        </div>
        <div class="company__info-group">
            <div class="company__info-title">Telegram:</div>
            <div class="">{{ company.contact_telegram }}</div>
        </div>
        <div class="company__info-group">
            <div class="company__info-title">Whatsapp:</div>
            <div class="">{{ company.contact_whatsapp }}</div>
        </div>
        <div class="company__info-group">
            <div class="company__info-title">Город:</div>
            <div class="">{{ company.city.title }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            company: {
                type: Object,
                required: true
            }
        },
        filters: {
            phone(phone) {
                return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
            }
        }
    }
</script>

<style lang="scss" scoped>

    .company__info-text {
        font-size: 14px;
        line-height: 21px;
    }

    .company__image {
        width: 150px;
        height: auto;
    }

    .company__image, .company__info-group {
        margin-bottom: 20px;
    }

    .company__info-title {
        color: #808080;
    }
</style>