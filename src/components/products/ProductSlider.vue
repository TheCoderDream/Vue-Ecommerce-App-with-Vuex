<template>
    <aside >
        <article class="gallery-wrap">
            <div class="img-big-wrap">
                <div style="padding: 2rem" ref="imageContainer" ><a href="#"><img
                        :src="currentImage"
                        style="width: 100%; height: 100%"
                /></a></div>
            </div>
            <div class="img-small-wrap">
                <div
                        v-for="(image, i) in images"
                        :key="i"
                        class="item-gallery" @click="changeImage(i)"><img :src="image"/></div>
            </div>
        </article>
    </aside>
</template>

<script>
    export default {
        name: "ProductSlider",
        props: {
            images: Array
        },
        data() {
            return {
                currentImage: this.$props.images[0],
            }
        },

        methods: {
            changeImage(n) {
                this.currentImage = this.$props.images[n];
            }
        }
    }
</script>

<style scoped>
    .gallery-wrap .img-big-wrap img {
        height: 450px;
        width: auto;
        display: inline-block;
    }



    .gallery-wrap .img-small-wrap .item-gallery {
        width: 60px;
        height: 60px;
        border: 1px solid #ddd;
        margin: 7px 2px;
        display: inline-block;
        overflow: hidden;
    }

    .gallery-wrap .img-small-wrap {
        text-align: center;
    }
    .gallery-wrap .img-small-wrap img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 4px;
        cursor: pointer;
    }
</style>
