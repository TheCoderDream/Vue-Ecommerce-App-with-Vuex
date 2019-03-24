<template>
    <div class="layout-mode" @click="$emit('changeLayout',len)">
        <div
                :class="['layout-mode__item', {'layout-mode__item--active': isActive}]"
                v-for="i in len"
                class="layout-mode__item"></div>
    </div>

</template>

<script>
    export default {
        name: "LayoutMode",
        props: {
            isActive: Boolean,
            len: Number
        }
    }
</script>

<style scoped lang="scss">
    .layout-mode {

        display: flex;
        flex-direction: row;
        padding: .3rem;
        border: 2px solid gray;
        cursor: pointer;

    &__item {
         width: .7rem;
         height: .7rem;
         background-color: gray;

    &--active {
         background-color: dodgerblue;
     }

    }

    &__item:not(:last-child) {
         margin-right: .3rem;
     }


    &:hover {
         border: 2px solid #646464;
     }

    &--active {
         border: 2px solid dodgerblue;
     }
    }

</style>
