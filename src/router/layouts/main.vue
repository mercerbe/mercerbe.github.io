<script>
export default {
  data() {
    return {
      activeItem: "/"
    };
  }
};
</script>

<template>
  <div>
    <!-- nav -->
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Ben Mercer
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="/">
        <a href="/">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="/projects">Projects</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="/skills">Skills</a>
      </vs-navbar-item>
    </vs-navbar>
    <div :class="$style.background">
      <slot />
    </div>
    <!-- hidden link for resume in console -->
    <a href="" v-show="false" id="resumeLink"></a>
    <!-- footer -->
    <div :class="$style.footer" id="footer">
      footer
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
  margin-bottom: 100px;
}
.footer {
  background-color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
