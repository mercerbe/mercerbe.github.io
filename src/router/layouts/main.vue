<script>
export default {
  data() {
    return {
      activeItem: 0
    };
  }
};
</script>

<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Ben Mercer
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">Projects</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Skills</a>
      </vs-navbar-item>
    </vs-navbar>
    <div :class="$style.background">
      <slot />
    </div>
  </div>
</template>

<style module>
.background {
  background-image: url("../../assets/background.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  /* background-size: cover;
  
  overflow: hidden; */
}
</style>
