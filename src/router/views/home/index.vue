<script>
import Layout from "../../layouts/main";
export default {
  name: "Home",
  components: { Layout }
};
</script>

<template>
  <div>
    <Layout>
      <div :class="$style.home">
        <img
          alt="Ben"
          src="../../../assets/Ben_Image_1.jpeg"
          :class="$style.image"
        />

        <vs-row vs-justify="center">
          <vs-col
            type="flex"
            vs-justify="center"
            vs-align="center"
            vs-lg="6"
            vs-xs="10"
          >
            <vs-card actionable>
              <div slot="header">
                <h3>
                  Hey! I'm Ben.
                </h3>
              </div>
              <div>
                <span>
                  I'm a web developer with over seven years of digital and
                  analog audio engineering experience that is very passionate
                  about my work. I love to develop new projects and continue to
                  learn, applying my knowledge as a business owner and audio
                  engineer to the development of web and mobile applications. My
                  passion and continuing quest for knowledge allows me to
                  deliver high quality, highly tested custom applications. I
                  have the attention to detail, drive and knowledge to be able
                  to solve complex problems and offer improvements and ideas for
                  modern applications. My expertise lies in full stack
                  development with backend proficiency in Node.js, Express,
                  MongoDB, Firebase/Firestore and AWS. On the frontend I enjoy
                  working with Vue or React but am proficient in vanilla js,
                  jQuery, HTML, CSS and other styling frameworks including
                  Bootstrap, Material, Bulma and Tailwind.</span
                >
              </div>
              <div slot="footer">
                <vs-row vs-justify="flex-end">
                  <vs-button
                    type="gradient"
                    color="success"
                    icon="list"
                    :to="{ name: 'skills' }"
                    >Skills</vs-button
                  >
                  <vs-button
                    type="gradient"
                    color="danger"
                    icon="work"
                    :to="{ name: 'projects' }"
                    >Projects</vs-button
                  >
                  <vs-button
                    type="gradient"
                    color="primary"
                    icon="contact_phone"
                    v-scroll-to="'#footer'"
                    >Contact</vs-button
                  >
                </vs-row>
              </div>
            </vs-card>
          </vs-col>
        </vs-row>
      </div>
    </Layout>
  </div>
</template>

<style module>
.home {
  text-align: center;
}
.image {
  border-radius: 10px;
  margin-top: 1rem;
}
</style>
