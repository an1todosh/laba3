<template>
  <div class="wrap d-flex flex-column min-vh-100">
    <main class="flex-fill">
      <Header />
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.flex-fill {
  margin: 10px 250px 50px 250px;
}
</style>