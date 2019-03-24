<template>
    <aside >
        <article class="card-body p-5">
            <h3 class="title mb-3">{{product.title}}</h3>
            <p class="price-detail-wrap">
	<span class="price h3 text-warning">
		<span class="currency">$</span><span class="num">{{product.price | priceFormatter}}</span>
	</span>
            </p>
            <dl class="item-property">
                <dt>Description</dt>
                <dd><p class="text-capitalize">{{product.description}}</p></dd>
            </dl>
            <dl class="param param-feature">
                <dt>Brand</dt>
                <dd class="text-capitalize">{{product.brand}}</dd>
            </dl>
            <dl class="param param-feature">
                <dt>Size</dt>
                <dd>{{product.size}}</dd>
            </dl>
            <dl class="param param-feature">
                <dt>Camera</dt>
                <dd>{{product.camera}}</dd>
            </dl>
            <dl class="param param-feature">
                <dt>CPU</dt>
                <dd>{{product.cpu}}</dd>
            </dl>
            <dl class="param param-feature">
                <dt>Memory</dt>
                <dd>{{product.memory}}</dd>
            </dl>
            <dl class="param param-feature">
                <dt>Display</dt>
                <dd>{{product.display}}</dd>
            </dl>
            <dl class="param param-feature">
                <dt>Battery</dt>
                <dd>{{product.battery}}</dd>
            </dl>
            <hr/>
            <button
                    @click="onAddProductToCart()"
                    class="btn btn-lg btn-outline-primary text-uppercase"><i
                    class="fa fa-shopping-cart"></i> Add to cart
            </button>
        </article>
    </aside>
</template>

<script>
    import {ADD_PRODUCT_TO_CART} from "../../store/types";

    export default {
        name: "ProductDetail",
        props: {
            product: Object
        },
        methods: {
            onAddProductToCart() {
                this.$store.commit(ADD_PRODUCT_TO_CART, this.product);
            }
        }
    }
</script>

<style scoped>

</style>
