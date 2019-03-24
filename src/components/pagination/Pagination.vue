<template>
    <nav aria-label="...">
        <ul class="pagination">
            <li
                    @click="onPrev()"
                    class="page-item ">
                <button
                        :disabled="this.$store.state.currentPage === 1"
                        class="page-link" tabindex="-1">Previous</button>
            </li>
            <li
                    v-for="page of getpages()"
                    :class="['page-item', {active: page === $store.state.currentPage}]"
                    @click="onPage(page)"
                    class="page-item"><button class="page-link">{{page}}</button></li>
            <li
                    @click="onNext()"
                    class="page-item">
                <button :disabled="isOnLastPage()" class="page-link">Next</button>
            </li>
        </ul>

    </nav>
</template>

<script>
    import * as Types from '../../store/types';
    export default {
        name: "Pagination",
        data() {
            window.console.log(this.$store.getters.currentPage);

            return {
                currentPage: this.$store.state.currentPage,
                totalItemsCount: this.$store.getters.totalItemCountAfterFilter,
                perPage: this.$store.state.perPage,
                pagesToShow: this.$store.state.pagesToShow
            }
        },
        methods: {
            isOnLastPage() {
                return this.$store.state.perPage * this.$store.state.currentPage >= this.$store.getters.totalItemCountAfterFilter;
            },
            totalPages() {
                return Math.ceil(this.$store.getters.totalItemCountAfterFilter / this.$store.state.perPage) || 0;
            },
            getMin() {
                return ((this.perPage * this.currentPage) - this.perPage) + 1;
            },
            getMax() {
                let max = this.perPage * this.currentPage;
                if (max > this.totalItemsCount) {
                    max = this.totalItemsCount;
                }
                return max;
            },
            onPrev() {
                if(this.$store.state.currentPage === 1) return void 0;

                this.$store.commit(Types.PREV_PAGE);
            },
            onNext() {
                if(this.isOnLastPage()) return void 0;

                this.$store.commit(Types.NEXT_PAGE);
            },
            onPage(n) {
                this.$store.commit(Types.GO_PAGE, n);
                window.console.log(this.$store.commit);
            },
            getpages() {
                const c = Math.ceil(this.$store.getters.totalItemCountAfterFilter / this.$store.state.perPage);
                const p = this.$store.state.currentPage || 1;
                const pagesToShow = this.$store.state.pagesToShow || 9;
                const pages = [];
                pages.push(p);
                const times = pagesToShow - 1;
                for (let i = 0; i < times; i++) {
                    if (pages.length < pagesToShow) {
                        if (Math.min.apply(null, pages) > 1) {
                            pages.push(Math.min.apply(null, pages) - 1);
                        }
                    }
                    if (pages.length < pagesToShow) {
                        if (Math.max.apply(null, pages) < c) {
                            pages.push(Math.max.apply(null, pages) + 1);
                        }
                    }
                }
                pages.sort((a, b) => a - b);
                return pages;
            }
        }
    }
</script>

<style scoped>

</style>
