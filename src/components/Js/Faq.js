import "../css/Faq.css";
import React from "react";
import Testimonial from "./Testimonial";
const faq = [
  {
    heading_testimonial: "What is API Documentation?",
    data_testimonial:
      "API documentation is a technical content deliverable, containing instructions about how to effectively use and integrate with an API. It’s a concise reference manual containing all the information required to work with the API, with details about the functions, classes, return types, arguments and more, supported by tutorials and examples. API Documentation has traditionally been done using regular content creation and maintenance tools and text editors.",
  },
  {
    heading_testimonial: "Why Document APIs?",
    data_testimonial:
      "Among all the phases in the API lifecycle, documentation is probably the area showing the most growth. This is especially true with the tooling ecosystem around documentation. It’s interesting to note this trends, since documentation is traditionally something that developers paid little attention to when launching code. In fact, it’s much easier to implement code, than is it to write good documentation. But this is because of its direct impact on adoption and usage. You can have the best, functional product, but no one will use it if they don’t know how to. Documentation is the foundation for good Developer Experience.",
  },
  {
    heading_testimonial: "How to Document Your APIs",
    data_testimonial:
      "There are a number of ways to get started with documenting your APIs. It just really depends on which method of API design you've settled on. Like we said before, if you're building your API from scratch, OpenAPI and Swagger Tools have helped automate the documentation process, which makes it easier for you, or your team, to maintain and update your documentation. If you are following the code first approach to API design, creating API documentation is a breeze with Swagger Inspector.",
  },
];
function Faq() {
  return (
    <div className="faq">
      <h2 className="faq_heading">FAQs By our users</h2>
      <div className="faq_container">
        {faq.map((faq) => (
          <Testimonial
            heading_testimonial={faq.heading_testimonial}
            data_testimonial={faq.data_testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export default Faq;
