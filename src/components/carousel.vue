<template>
  <div>
    <h1>Що нового</h1>
    <div class="wrapper">
      <div
        class="carousel"
        :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
      >
        <carouselItem
          v-for="item in carousel_data"
          :key="item.id"
          :item_data="item"
        />
      </div>
    </div>
    <div class="b">
      <button class="prevSlide" @click="prevSlide">Prev</button>
      <button class="nextSlide" @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script>
import CarouselItem from "@/components/carouselItem.vue";

export default {
  name: "/carousel",
  components: {
    CarouselItem,
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.carousel_data.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    },
  },
};
</script>
<style scoped>
.wrapper {
  max-width: 900px;
  overflow: hidden;
  margin: 0 auto;
}
.carousel {
  display: flex;
}
h1 {
  margin: 10px;
  font-family: Brush Script MT, Brush Script Std, cursive;
}

.prevSlide,
.nextSlide {
  background-color: #ffffff;
  color: #555555;
  display: block;
  width: 60px;
  margin: 5px auto;
  font-size: 16px;
  height: 30px;
}
.prevSlide:hover,
.prevSlide:focus,
.nextSlide:hover,
.nextSlide:focus {
  border-color: rgba(233, 42, 42, 0.8);
  box-shadow: 0 1px 1px rgba(226, 28, 28, 0.075) inset,
    0 0 8px rgba(230, 17, 17, 0.6);
}
</style>