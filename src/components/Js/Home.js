import React from "react";
import "../css/Home.css";
import Blog from "./Blog";

const blogs = [
  {
    image: "blog1.jpg",
    date: "March 16, 2020",
    tag: "Marketing",
    title: "Boost your conversion rate",
    description:
      "To increase your conversion rate is to improve your marketing ROI. The more visitors you convert, the higher is the impact you drive on your top line from your existing traffic. The tactics mentioned above are a great place to start to strategically improve your conversion rates.",
  },
  {
    image: "blog2.jpeg",
    date: "March 10, 2020",
    tag: "Sales",
    title: "How to use search engine optimisation to drive sales",
    description:
      "The survival of every business depends on sales, and in the modern climate, increasing sales requires having a strong digital presence. In 2017, E-commerce accounted for $2.3 trillion in global sales, and that number is expected to increase to $4.88 trillion by 2021..",
  },
  {
    image: "blog3.jpg",
    date: "Feb 12, 2020",
    tag: "Business",
    title: "Improve your customer experience",
    description:
      "What is customer experience? Everything to know in 2023 .Customer experience management is “the practice of designing and reacting to customer interactions to meet or exceed their expectations, leading to greater customer satisfaction, loyalty and advocacy,” according to Gartner.",
  },
];
function Home() {
  return (
    <div>
      <div className="heading">
        <h2>API Blog</h2>
        <h4>Learn how to build applications using Generative AI model APIs</h4>
      </div>
      <div className="Blogs">
        <div className="blogRow">
          {blogs.map((blogs) => (
            <Blog
              image={blogs.image}
              date={blogs.date}
              tag={blogs.tag}
              title={blogs.title}
              description={blogs.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
