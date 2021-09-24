import { Carousel, Image } from "antd";
import React from "react";
import CardContainer from "../components/cardContainer/CardContainer";

const Home = () => {
  const contentStyle = {
    height: "305px",
    color: "#fff",
    lineHeight: "200px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <div style={{ marginTop: 1 }}>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <Image preview={false} src="/assets/1.webp" alt="algo" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image preview={false} src="/assets/2.webp" alt="algo" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image preview={false} src="/assets/3.webp" alt="algo" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image preview={false} src="/assets/4.webp" alt="algo" />
            </h3>
          </div>
        </Carousel>
        <CardContainer />
      </div>
    </>
  );
};

export default Home;
