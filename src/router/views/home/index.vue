<script>
export default {
  name: "Home"
};
</script>

<template lang="html">
  <div :class="$style.background">
    <img
      alt="Ben"
      src="../../../assets/Ben_Image_1.jpeg"
      :class="$style.image"
    />

    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <vs-card>
          <div slot="header">
            <h3>
              Hey! I'm Ben.
            </h3>
          </div>
          <div>
            <span>
              I'm a web developer with over seven years of digital and analog
              audio engineering experience that is very passionate about my
              work. I love to develop new projects and continue to learn,
              applying my knowledge as a business owner and audio engineer to
              the development of web and mobile applications. My passion and
              continuing quest for knowledge allows me to deliver high quality,
              highly tested custom applications. I have the attention to detail,
              drive and knowledge to be able to solve complex problems and offer
              improvements and ideas for modern applications. My expertise lies
              in full stack development with backend proficiency in Node.js,
              Express, MongoDB, Firebase/Firestore and AWS. On the frontend I
              enjoy working with Vue or React but am proficient in vanilla js,
              jQuery, HTML, CSS and other styling frameworks including
              Bootstrap, Material, Bulma and Tailwind.</span
            >
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button type="gradient" color="success" icon="list"
                >Skills</vs-button
              >
              <vs-button type="gradient" color="danger" icon="work"
                >Projects</vs-button
              >
              <vs-button type="gradient" color="primary" icon="contact_phone"
                >Contact</vs-button
              >
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<style module>
.background {
  height: 100vh;
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.image {
  border-radius: 10px;
}
</style>
