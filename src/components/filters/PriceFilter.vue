<template>
    <div class="card">
        <div class="card-header">
            <h3>Price  </h3>
        </div>
        <ul class="list-group flex-row  flex-wrap" >
            <li class="list-group-item flex-fill">
                <label class="custom-radio-btn"> Low to high
                    <input
                            :value="'asc'"
                            type="radio"
                            @click="onRadioButtonChange($event)"
                            name="orderByPrice" class="custom-radio-btn__input"/>
                    <span class="custom-radio-btn__span"></span>
                </label>
            </li>
            <li class="list-group-item flex-fill">
                <label class="custom-radio-btn"> High to low
                    <input
                            :value="'desc'"
                            @click="onRadioButtonChange($event)"
                            type="radio" name="orderByPrice" class="custom-radio-btn__input"/>
                    <span class="custom-radio-btn__span"></span>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
    import * as Types from '../../store/types';
    export default {
        name: "PriceFilter",
        data() {
            return {
                selectedFilter: ''
            }
        },
        methods: {
            onRadioButtonChange(e) {
                const value = e.target.value;
                if (value === this.selectedFilter) {
                    this.removeFilters();
                    return;
                }

                this.selectedFilter = value;

                if (value === 'asc') {
                    this.$store.commit(Types.ORDER_BY_ASC);
                    this.selectedFilter = 'asc';
                } else {
                    this.$store.commit(Types.ORDER_BY_DESC);
                    this.selectedFilter = 'desc';
                }
            },
            removeFilters() {
                const buttons = document.getElementsByName('orderByPrice');

                buttons.forEach((el) => {
                    el.checked = false;
                });
                this.selectedFilter = '';
                this.$store.commit(Types.CLEAR_ORDER_BY_PRICE);
            }
        }
    }
</script>

<style scoped lang="scss">
    .custom-radio-btn {
        display: block;
        position: relative;
        cursor: pointer;
        padding-left: 2rem;
        user-select: none;
        text-align: left;

    &__input {
         position: absolute;
         opacity: 0;
         cursor: pointer;
     }

    &__span {
         position: absolute;
         top: 50%;
         left: 0;
         height: 1.3rem;
         width: 1.3rem;
         background-color: #eeeeee;
         border-radius: 12px;
         transform: translateY(-50%);

    &::after {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         width: .7rem;
         height: .7rem;
         border-radius: 50%;
         background-color: dodgerblue;
         content: "";
         display: none;
     }
    }

    &__input:checked ~ &__span::after {
         display: block;
     }

    &:hover &__span {
                 background-color: #dfdfdf;
             }


    }

    .text-remove-selected {
        font-size: 1rem;
        font-weight: normal;
        cursor: pointer;
        padding-left: 2rem;
    }

</style>
