<template>
  <div id="app">
    <carousel :carousel_data="sliderItems" />
  </div>
</template>
<script>
import Carousel from "@/components/carousel.vue";
export default {
  name: "app",
  components: {
    Carousel,
  },
  data() {
    return {
      sliderItems: [
        { id: 1, path: "Culture", name: "img1", img: "1p.png" },
        { id: 2, path: "Economy", name: "img2", img: "2p.png" },
        { id: 3, path: "Politics", name: "img3", img: "3p.png" },
      ],
    };
  },
};
</script>