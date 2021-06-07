<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">News</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            class="nav-item"
            v-for="(menu, index) in headerMenuList"
            :key="index"
          >
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="menu.path"
            >
              {{ menu.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "d",
  props: {
    msg: String,
  },
  data() {
    return {
      headerMenuList: [
        { name: "Culture", path: "/Culture" },
        { name: "Economy", path: "/Economy" },
        { name: "Politics", path: "/Politics" },
      ],
    };
  },
};
</script>
