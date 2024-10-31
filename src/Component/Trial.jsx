import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Trial = () => (
  <div>
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          width: "40%",
        }}
      >
        <img src="img_avatuar.png" alt="Avatar" style={{ width: "100%" }} />
        <div style={{ padding: "2px 16px" }}>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>

      <div
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          width: "40%",
        }}
      >
        <img src="img_avatuar.png" alt="Avatar" style={{ width: "100%" }} />
        <div style={{ padding: "2px 16px" }}>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>

      <div
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          width: "40%",
        }}
      >
        <img src="img_avatuar.png" alt="Avatar" style={{ width: "100%" }} />
        <div style={{ padding: "2px 16px" }}>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>

      <div
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          width: "40%",
        }}
      >
        <img src="img_avatuar.png" alt="Avatar" style={{ width: "100%" }} />
        <div style={{ padding: "2px 16px" }}>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>

      <div
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          width: "40%",
        }}
      >
        <img src="img_avatuar.png" alt="Avatar" style={{ width: "100%" }} />
        <div style={{ padding: "2px 16px" }}>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>

      <div
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          width: "40%",
        }}
      >
        <img src="img_avatuar.png" alt="Avatar" style={{ width: "100%" }} />
        <div style={{ padding: "2px 16px" }}>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </Carousel>
  </div>
);
export default Trial;
