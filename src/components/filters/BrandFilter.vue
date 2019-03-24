<template>
    <div class="card mb-3" >
        <div class="card-header">
            <h3>Brands</h3>
        </div>
        <ul class="list-group flex-row flex-wrap">
            <li class="list-group-item flex-50" v-for="brand in brands" :key="brand">
                <label class="custom-checkbox text-capitalize"> {{brand}} ({{brandsCount[brand]}})
                    <input type="checkbox"
                           :name="brand"
                           class="custom-checkbox__input" @input="onChangeSelectBox($event)"/>
                    <span class="custom-checkbox__span"></span>
                </label>
            </li>
        </ul>
    </div>

</template>

<script>
    import * as Types from '../../store/types';
    export default {
        name: "BrandFilter",
        data() {
            window.console.log(this.$store.getters.brandsCount, this.$store.brands);
            return {
                brandsCount: this.$store.getters.brandsCount,
                brands: this.$store.state.brands
            }
        },
        methods: {
            onChangeSelectBox(e) {
                const name = e.target.name;
                const value = e.target.checked;

                if (value) {
                    this.$store.commit(Types.ADD_BRAND_TO_FILTER, name);
                } else {
                    this.$store.commit(Types.REMOVE_BRAND_FROM_FILTER, name);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .custom-checkbox {
        display: block;
        position: relative;
        padding-left: 2rem;
        cursor: pointer;
        user-select: none;
        text-align: left;

    &__input {
         position: absolute;
         opacity: 0;
         height: 0;
         width: 0;


     }

    &__span {
         position: absolute;
         top: 50%;
         left: 0;
         transform: translateY(-50%);
         height: 1.2rem;
         width: 1.2rem;
         background-color: white;
         border: 2px solid gray;

    &::after {
         content: "";
         opacity: 0;
         position: absolute;
         top: 50%;
         left: 50%;
         width: .6rem;
         height: .6rem;
         background-color: dodgerblue;
         transform: translate(-50%, -50%);
     }
    }

    &:hover &__span {
                 background-color: #eeeeee;
             }

    &__input:checked + &__span::after {
         opacity: 1;
     }
    }

    .flex-50 {
        flex: 0 0 100%;
    }

    @media only screen and (max-width: 768px) {

        .flex-50 {
            flex: 0 0 50%;
        }
    }

</style>
