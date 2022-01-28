<template>
    <div>
        <navbar/>

        <main>
            <div class="page__offset">
                <nuxt/>
            </div>
        </main>
        <app-footer />
    </div>
</template>

<script>
import navbar from '@/components/Navbar'
import appFooter from '@/components/Footer'

export default {
    components: {
        navbar,
        appFooter
    }
}
</script>