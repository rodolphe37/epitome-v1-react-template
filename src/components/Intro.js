import React from 'react';

const Intro = () => {
    return (
        <section id="intro" className="s-intro target-section">
        <div className="row intro-content">
          <div className="column large-9 mob-full intro-text">
            <h3>Hello, I'm John Doe</h3>
            <h1>
              Digital Designer <br />
              and Web Developer <br />
              Based In Somewhere.
            </h1>
          </div>
          <div className="intro-scroll">
            <a href="#about" className="intro-scroll-link smoothscroll">
              Scroll For More
            </a>
          </div>
          <div className="intro-grid" />
          <div className="intro-pic" />
        </div> {/* end row */}
      </section>
    )
}

export default Intro;