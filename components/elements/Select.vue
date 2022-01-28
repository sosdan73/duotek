<template>
    <div class="select" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            <span class="selected__text">{{ selected }}</span>
        </div>
        <div class="select__items" :class="{ selectHide: !open }">
            <div
                class="select__item"
                v-for="(option, i) of options"
                :key="i"
                @click="
                    selected = option;
                    open = false;
                    $emit('input', option);
                "
            >
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                required: true,
            },
            placeholder: {
                type: String,
                required: false,
                default: null,
            },
            tabindex: {
                type: Number,
                required: false,
                default: 0,
            },
        },
        data() {
            return {
                selected: this.placeholder
                    ? this.placeholder
                    : this.options.length > 0
                    ? this.options[0]
                    : null,
                open: false,
            };
        },
        mounted() {
            this.$emit("input", this.selected);
        },
    }
</script>

<style lang="scss" scoped>
    .select {
        position: relative;
        width: 100%;
        outline: none;

        > .selected {
            background-color: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            padding: 10px 16px;
            cursor: pointer;

            > .selected__text {
                display: block;
                max-width: 180px;

                font-size: 14px;

                user-select: none;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            &.open {
                border: 1px solid #e5e5e5;
                border-radius: 6px 6px 0px 0px;
            }

            &::after {
                content: "";
                position: absolute;
                top: 18px;
                right: 16px;
                width: 8px;
                height: 12px;

                background-image: url('@/static/images/arrow.png');
                background-repeat: no-repeat;
                background-size: contain;
            }
        }

        > .select__items {
            position: absolute;
            left: 0;
            right: 0;
            z-index: 1;

            border-radius: 0px 0px 4px 4px;
            border: 1px solid #e5e5e5;
            border-top: none;

            overflow: hidden;

            > .select__item {
                padding: 12px 16px;
                padding-right: 0;

                background-color: #fff;
                font-size: 14px;

                cursor: pointer;
                user-select: none;

                &:hover {
                    background-color: #e5e5e5;
                }
            }
        }
    }

    .selectHide {
    display: none;
    }
</style>
