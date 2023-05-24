import React from "react";
import "../css/Testimonial.css";
function Testimonial(props) {
  return (
    <div>
      <section class="testimonials">
        <div class="container">
          <div class="testimonial">
            <p>
              <h2 className="heading_docs">{props.heading_testimonial}</h2>
              <p>{props.data_testimonial}</p>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
