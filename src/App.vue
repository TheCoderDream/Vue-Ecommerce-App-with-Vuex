<template>
  <Fragment>
    <Header></Header>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </Fragment>
</template>

<script>
import Header from "./components/core/Header";
import Footer from "./components/core/Footer";

export default {
  name: "app",
  components: {
    Footer,
    Header
  },
  data() {
    return {
      product: {
        title: "Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)",
        category: "phone",
        images: [
          "https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1",
          "https://productimages.hepsiburada.net/s/18/280-413/9801258696754.jpg?v1",
          "https://productimages.hepsiburada.net/s/18/280-413/9801258729522.jpg?v1",
          "https://productimages.hepsiburada.net/s/18/280-413/9801258762290.jpg?v1"
        ],
        brand: "apple",
        price: 4241.499828399639,
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB",
        id: 0,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
      }
    };
  }
};
</script>

<style>
.swal-button {
  background-color: #138496;
}

.swal-button:hover {
  background-color: #036979 !important;
}

.page-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}

.page-leave-active {
  animation: slide-out 0.3s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: scale(0.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
}
</style>
