<template>
  <div class="card h-100 product">
    <router-link class="product__link" :to="`/products/${product.id}`">
      <img
        @mousemove="onImageChange($event)"
        @touchmove="onImageChange($event)"
        @mouseout="onImageMouseOut()"
        :src="currentImage"
        :alt="product.title"
        ref="productImageContainer"
        class="card-img-top product__img"
      >
      <ProductSliderDots
        :len="product.images.length"
        :active-item="currentImageIndex"
        @changeItem="onChangeImage($event)"
      ></ProductSliderDots>
    </router-link>

    <div class="card-body product__text">
      <h4 class="card-title product__title">
        <a>{{product.title}}</a>
      </h4>
      <h5 class="product__price">${{product.price | priceFormatter}}</h5>
      <p class="card-text product__description">{{product.description}}</p>
      <button @click="onAddProductToCart()" class="btn btn-info product__add-to-cart">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { cumulativeOffset } from "../../utilities/cumulativeOffset";
import ProductSliderDots from "./ProductSliderDots";
import * as Types from "../../store/types";

export default {
  name: "Product",
  components: { ProductSliderDots },
  props: {
    product: Object
  },
  data() {
    return {
      currentImage: this.product.images[0],
      currentImageIndex: 0,
      offsetLeft: null,
      offSetTop: null,
      productImageContainerClientWidth: null
    };
  },
  methods: {
    onImageChange(e) {
      const eventType = e.type;
      let clientX;
      this.calculateOffSetLeftAndTop(eventType);
      if (eventType === "touchmove") {
        clientX = e.touches[0].clientX;
      } else if (eventType === "mousemove") {
        clientX = e.clientX;
      }

      const currentX = clientX - this.offSetLeft;
      const imgArrLength = this.product.images.length;

      const part = this.productImageContainerClientWidth / imgArrLength;

      let imgIndex = Math.ceil(currentX / part) - 1;
      if (imgIndex < 0) {
        imgIndex = 0;
      }

      if (imgIndex >= imgArrLength) {
        imgIndex = imgArrLength - 1;
      }

      this.currentImageIndex = imgIndex;
      this.currentImage = this.product.images[imgIndex];
    },
    onImageMouseOut(e) {
      this.currentImage = this.product.images[0];
    },
    onAddProductToCart() {
      this.$swal({
        title: "Added to cart!",
        icon: "success",
        button: "Done!"
      });
      this.$store.commit(Types.ADD_PRODUCT_TO_CART, this.product);
    },
    calculateOffSetLeftAndTop() {
      const offSetTopAndLeft = cumulativeOffset(
        this.$refs.productImageContainer
      );
      this.offSetLeft = offSetTopAndLeft.left;
      this.offSetTop = offSetTopAndLeft.top;
      this.productImageContainerClientWidth = this.$refs.productImageContainer.clientWidth;
    },
    onChangeImage(n) {
      this.currentImage = this.product.images[n];
      this.currentImageIndex = n;
    }
  }
};
</script>

<style scoped lang="scss">
.product {
  padding-bottom: 2rem;
  &__img {
    width: 100%;
    height: 100%;

    &:focus {
      outline: none;
    }
  }

  &__text {
    flex: 0 0 40%;
  }

  &__link {
    flex: 0 0 60%;
    height: 60%;
    padding: 1rem;
    position: relative;
    cursor: pointer;
  }

  &__title {
    font-size: 0.8rem;
  }

  &__price {
  }

  &__description {
    font-size: 0.7rem;
  }

  &:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &__add-to-cart {
    position: absolute;
    bottom: 0.8rem;
    width: 60%;
    left: 50%;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50%);
    transition: all 0.2s;
    padding: 3px 12px;
  }

  &:hover &__add-to-cart {
    visibility: visible;
    opacity: 1;
  }

  &:hover .owl-dots {
    display: inline-block;
  }
}

@media only screen and (max-width: 768px) {
  .product {
    height: auto !important;
    &__add-to-cart {
      visibility: visible;
      opacity: 1;
    }

    & .owl-dots {
      display: inline-block;
    }
  }
}
</style>
