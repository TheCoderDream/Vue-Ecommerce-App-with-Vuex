<template>
    <div class="owl-dots">
        <button
                v-for="i in dots"
                :key="i"
                @click="$emit('changeItem', i)"
                :class="['owl-dot', {active: activeItem === i}]"
                role="button">
        </button>
    </div>
</template>

<script>
    export default {
        name: "ProductSliderDots",
        props: {
            len: Number,
            activeItem: Number
        },
        data() {
            return {
                dots: []
            }
        },
        created() {
            for (let i = 0; i < this.len; i++) {
                this.dots.push(i);
            }
        }
    }
</script>

<style scoped>
    .owl-dots {
        display: none;
        position: absolute;
        bottom: -1rem;
        left: 0;

    }

    .owl-dots {
        width: 100%;
        text-align: center;
    }

    .owl-dots .active.owl-dot {
        background-color: #f28b00;
        border-color: #f28b00;
    }

    .owl-dots .owl-dot {
        display: inline-block;
        zoom: 1;
        margin: 8px 4px;
        border-radius: 10px;
        -moz-border-radius: 10px;
        -o-border-radius: 10px;
        -webkit-border-radius: 10px;
        -ms-webkit-radius: 10px;
        zoom: 1;
        background-color: #fff;
        padding: 3px;
        border: solid 1px #e9e9e9;
        cursor: pointer;
    }
</style>
