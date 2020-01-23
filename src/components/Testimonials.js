import React from 'react';

const Testimonials = () => {
    return (
        <section className="s-testimonials">
        <div className="row testimonials" data-aos="fade-up">
          <div className="column large-full testimonials__slider">
            <div className="testimonials__slide">
              <p>Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. 
                Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                Laudantium quia consequatur molestias delectus culpa.</p>
              <div className="testimonials__info">
                <img src="images/avatars/user-02.jpg" alt="Author image" className="testimonials__avatar" />
                <cite className="testimonials__cite">
                  <strong>Tim Cook</strong>
                  <span>CEO, Apple</span>
                </cite>
              </div>
            </div> {/* end testimonials__slide */}
            <div className="testimonials__slide">
              <p>Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                Quasi voluptas eius distinctio. Atque eos maxime.</p>
              <div className="testimonials__info">
                <img src="images/avatars/user-01.jpg" alt="Author image" className="testimonials__avatar" />
                <cite className="testimonials__cite">
                  <strong>Sundar Pichai</strong>
                  <span>CEO, Google</span>
                </cite>
              </div>
            </div> {/* end testimonials__slide */}
            <div className="testimonials__slide">
              <p>Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                Voluptatem dignissimos ut.</p>
              <div className="testimonials__info">
                <img src="images/avatars/user-04.jpg" alt="Author image" className="testimonials__avatar" />
                <cite className="testimonials__cite">
                  <strong>Satya Nadella</strong>
                  <span>CEO, Microsoft</span>
                </cite>
              </div>
            </div> {/* end testimonials__slide */}
          </div> {/* end testimonials__slider */}
        </div> {/* end testimonials */}
      </section>
      
    )
}

export default Testimonials;