<template>
    <div v-if="items && items.length > 0" class="chips">
        <div
            class="chip"
            :key="item"
            v-for="item in items"
        >
            {{ item }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            items: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    .chips {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;

        > .chip {
            padding: 6px 20px;
            border-radius: 200px;
            background-color: #f7f7f7;
            transition: background-color .2s ease-in-out;

            font-size: 14px;
            line-height: 20px;
        }
    }
</style>