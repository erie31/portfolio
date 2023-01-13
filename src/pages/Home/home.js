
import { ReactComponent as QuoteRight } from "./../../assets/images/quote-right.svg";
import { ReactComponent as QuoteLeft } from "./../../assets/images/quote-left.svg";
import foto from "./../../assets/images/fotodino2.png"
import "./home.scss";
import { ReactComponent as ReactImg } from "./../../assets/images/react.svg";
import { ReactComponent as NodeImg } from "./../../assets/images/node.svg";
import { ReactComponent as JavascriptImg } from "./../../assets/images/javascript.svg";
import { ReactComponent as FigmaImg } from "./../../assets/images/figma.svg";
import { ReactComponent as SassImg } from "./../../assets/images/sass.svg";
import { ReactComponent as TypescriptImg } from "./../../assets/images/typescript.svg";
import { FaGithub } from "react-icons/fa";




function Home() {
    return (
    <div className="home">
      <div className="home-intro">
        <div className="content">
          <div className="content-tertiary">
            <h1>
              <h2><span>🖖</span> Live long and prosper. I'am Erié</h2>
            </h1>
          </div>
          <div className="content-primary">
            <h1>
              a <span>Front-end-React developer.</span>
            </h1>
          </div>
          <div className="content-secondary">
            <h2>I'm focused on building responsive front-end web applications.</h2>
          </div>
        </div>

        <div className="hero-icon">
      <img src={foto} alt="foto circunspecto"/>
        </div>
      </div>
    <div className="tooling">
        <div className="tooling-title">
          <h2>...</h2>
        </div>
        <div className="tooling-box">
          <div className="box-content">
            <div className="box-icon">
              <ReactImg className="icon" />
            </div>
            <div className="box-text">
              <p>React</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <FaGithub className="icon" />
            </div>
            <div className="box-text">
              <p>GitHub</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <NodeImg className="icon" />
            </div>
            <div className="box-text">
              <p>Node</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <JavascriptImg className="icon" />
            </div>
            <div className="box-text">
              <p>Javascript</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <FigmaImg className="icon" />
            </div>
            <div className="box-text">
              <p>Figma</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <SassImg className="icon" />
            </div>
            <div className="box-text">
              <p>Sass</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <TypescriptImg className="icon" />
            </div>
            <div className="box-text">
              <p>Typescript</p>
            </div>
          </div>
          
        </div>
    </div>
      
      <div className="quote">
        <div className="quote-body">
          <QuoteLeft className="left" />
          <div className="quote-body-content">
            <p>
            Logic is the beginning of wisdom, not the end.
            </p>
          </div>
          <QuoteRight className="right" />
        </div>
      </div>
    </div>
  );
}

export default Home;
