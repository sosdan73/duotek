<template>
    <div class="company">
        <nuxt-link class="link company__link" to="/companies">Компании</nuxt-link>
        <h2 class="header">{{ company.title }}</h2>
        <div class="container">
            <company-info :company="company" />
            <company-content :company="company" />
        </div>
    </div>
</template>

<script>
    import companyInfo from '@/components/companies/company/CompanyInfo'
    import companyContent from '@/components/companies/company/CompanyContent'

    export default {
        components: {
            companyInfo,
            companyContent
        },
        async asyncData({$axios, params}) {
            try {
                const company = await $axios.get(`http://api-test.duotek.ru/companies/info?id=${params.id}`);
                return { company: company.data.data }
            } catch (error) {
                console.log(error);
            }
        }
    }
</script>

<style lang="scss" >
    .company {
        > .company__link {
            display: block;
            margin-bottom: 20px;

            &::before {
                content: "";
                width: 19px;
                height: 14px;
                display: inline-block;
                margin-right: 5px;
            
                position: relative;
                bottom: 1px;
            
                mask-image: url('@/static/images/long-arrow.png');
                background-color: #030953;
                background-size: contain;
                background-repeat: no-repeat;
            
                transform: rotate(180deg) scale(0.8);
                vertical-align: middle;
            }
        }    
    }
</style>