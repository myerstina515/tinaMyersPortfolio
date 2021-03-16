import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/grangerDanger.jpg';
import pic3 from '../assets/images/TedashiTrainedImage.png';
import pic4 from '../assets/images/PPC-front.jpg';
import pic5 from '../assets/images/socketServer.jpg';
import pic6 from '../assets/images/expressServer.jpg';
import pic7 from '../assets/images/blackjackAPI.jpg';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Tina Myers</strong>
              <br />
              Full-stack Software Developer
            </h2>
            <p>JavaScript is my primary language, but I love learning!</p><p>Take a look at my JavaScript projects, as well as others</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            My projects give a little insight into who I am: problem solver, web developer, fitness enthusiast, history working in casino gaming, and excited by many nerd-doms!
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://github.com/Granger-Danger2021/trivia" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Granger Danger Trivia Game</h3>
                </header>
              </article>
              <article className="item">
                <a href="https://github.com/myerstina515/tedashitrained" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Tedashi Trained React Front-end</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://github.com/parent-pickup-coordinator/react-frontend" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Parent Pickup Coordinator: React-front end</h3>
                </header>
              </article>
              <article className="item">
                <a href="https://github.com/parent-pickup-coordinator/socket.io-server" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Parent Pickup Coordinator: socket.io server</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://github.com/parent-pickup-coordinator/express-server" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Parent Pickup Coordinator: express server</h3>
                </header>
              </article>
              <article className="item">
                <a href="https://github.com/tinamyers-401-advanced-javascript/blackjack" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>BlackJack API</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          {/* <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a> */}

          <p>
            Software Developer, puzzle lover, outdoor enthusiast, hiker, and lover of helping people. Ultimately, helping people is what drives me forward, from previously working with the elderly in Physical Therapy, to my projects (below), I love helping people and am excited to work for a company that gives back to the community!
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            I'd love to connect with you! Get in touch with me via these links:
          </p>
          <div>
            <a href="https://github.com/myerstina515">Tina Myers on GitHub</a>
          </div>
          <div>
            <a href="https://linkedin.com/in/tinalmyers">Tina Myers on LinkedIn</a>
          </div>
          <div>
            <a href="mailto:myers.tina515@gmail.com">Email Tina Myers</a>
          </div>

        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
