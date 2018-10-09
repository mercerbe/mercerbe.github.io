import React from "react";
import PropTypes from "prop-types";

import introPic from "../images/intro.jpg";
import codingPic from "../images/coding.jpg";
import projectPic from "../images/projects.jpg";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      />
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={introPic} alt="" />
          </span>
          <p>
            Full-Stack Web Developer with an inquisitive mind and a hunger for
            knowledge, I find great enjoyment in expanding my skill sets to stay
            competitive in the web development industry. My experience in audio
            engineering and working closely with clients allows me the unique
            ability to create applications and websites that approach the user
            with both an intuitive experience and refreshing design.
          </p>
          <p>
            I enjoy continuing to expose myself to new challenges and ideas
            refining my ability to perform as developer. I am proficient in
            HTML5, CSS3, Bootstrap, Semantic and other front-end libraries,
            JavaScript, and jQuery. I am always interested in new skills and
            languages to further grow my arsenal. Not settling for status quo
            and challenging myself consistently has accelerated me through each
            new position I have held. I excel in growing my relationships with
            my peers along with my leadership team while encouraging a friendly
            yet competitive environment.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={projectPic} alt="" />
          </span>
          <p>Display Projects here...</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={codingPic} alt="" />
          </span>
          <p>
            I’ve been working in digital and analog audio engineering for 6
            years, but in the last few years I have developed a passion for web
            development. I found I had an interest in the web-based tools that
            are changing the music industry, but also found web development
            itself to be a creative outlet, surprisingly similar to recording or
            mixing audio. I find myself every day wanting to learn, develop, and
            improve web and mobile applications.
          </p>
          <p>
            When I realized how passionate I was about improving my development
            skills, I decided to go back to school at UNC Charlotte to improve
            my skills by participating in Full Stack Web Development continuing
            education program. The bootcamp taught me how to dive into new
            technologies, languages, tools, and documentation; learning how to
            apply those skills to applications I’m working on. I’ve continued to
            build projects that push myself to learn new technologies, improve
            code maintainability, and create better user experiences. I’ve also
            taken on freelance work with remote clients, allowing me to use my
            skills as an audio engineer in the client-centric music industry and
            apply those skills to the web development community and marketplace.
            I really enjoy client-facing roles, working with a team to meet
            deadlines with high quality deliverables that bring a vision to
            life.{" "}
          </p>
          <p>
            My passion and continuing pursuit to improve my skills allows me to
            deliver high quality tested custom applications. I have the
            attention to detail, drive and knowledge to be able to solve complex
            problems, learn new technologies and tools, and offer improvements
            and ideas for modern applications. I feel my expertise lies in
            Node.js, Express, MongoDB, and React. I also enjoy working in
            vanilla Javascript, jQuery, HTML5, CSS3 and other front-end
            technologies and frameworks including Bootstrap, Material-UI,
            Semantic-UI and Bulma.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/ben_codes"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/mercerbe"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ben-mercer/"
                className="icon fa-linkedin"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/mercerbe" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
};

export default Main;
