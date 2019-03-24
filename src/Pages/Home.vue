<template>
    <Fragment>
        <div class="container" style="padding-top: 6rem;">
            <div class="row">
                <div class="col-lg-3">
                    <BrandFilter></BrandFilter>
                    <PriceFilter></PriceFilter>
                </div>
                <div class="col-lg-9">
                    <ProductList></ProductList>
                    <div class="d-flex justify-content-end">
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment';
    import BrandFilter from "../components/filters/BrandFilter";
    import PriceFilter from "../components/filters/PriceFilter";
    import ProductList from "../components/products/ProductList";
    import Pagination from "../components/pagination/Pagination";
    export default {
        name: "Home",
        components: {Pagination, ProductList, PriceFilter, BrandFilter, Fragment},
        data() {
            return {
            }
        }
    }
</script>

<style scoped>

</style>
