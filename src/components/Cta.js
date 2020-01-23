import React from 'react';

const Cta = () => {
    return (
        <section className="s-cta ss-dark">
        <div className="row heading-block heading-block--center" data-aos="fade-up">
          <div className="column large-full">
            <h2 className="section-desc">
              Need a great reliable web hosting?
            </h2>
          </div>
        </div> {/* end heading-block */}
        <div className="row cta-content" data-aos="fade-up">
          <div className="column large-full">
            <p>
              We highly recommend <a href="https://www.dreamhost.com/r.cgi?287326">DreamHost</a>.
              Powerful web and Wordpress hosting. Guaranteed.
              Starting at $2.95 per month.
            </p>
            <a href="https://www.dreamhost.com/r.cgi?287326" className="btn full-width">Get Started</a>
          </div>
        </div> {/* end ad-content */}
      </section>
      
    )
}

export default Cta;