<template>
  <div class="carouselItem">{{item_data.id}}
    <router-link :to=item_data.path>
      <img :src="require('../assets/smg/' + item_data.img)" />
    </router-link>
  </div>
</template>
<script>
export default {
  name: "carouselItem",
  props: {
    item_data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>
