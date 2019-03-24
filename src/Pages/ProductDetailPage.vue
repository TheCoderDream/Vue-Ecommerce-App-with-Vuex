<template>
    <div class="container" style="padding: 6rem 0px;">
        <div class="card">
            <div class="row">
                <ProductSlider :images="product.images" class="col-sm-5 border-right"></ProductSlider>
                <ProductDetail :product="product" class="col-sm-7"></ProductDetail>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductDetail from "../components/products/ProductDetail";
    import ProductSlider from "../components/products/ProductSlider";
    export default {
        name: "ProductDetailPage",
        components: {ProductSlider, ProductDetail},
        computed: {

        },
        data() {
            return {
                product: this.$store.state.products.find(p => p.id === +this.$route.params.id)
            }
        }
    }
</script>

<style scoped>

</style>
