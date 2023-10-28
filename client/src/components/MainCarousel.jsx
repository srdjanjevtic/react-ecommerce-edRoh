import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../theme";
// import { useNavigate } from "react-router-dom";

const images = import.meta.glob("../../assets/*.jpeg");
// console.log(Object.values(images));

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  // const navigate = useNavigate();

  const fadeAnimationHandler = (props, state) => {
    const transitionTime = props.transitionTime + "ms";
    const transitionTimingFunction = "ease-in-out";

    let slideStyle = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
    };

    if (!state.swiping) {
      slideStyle = {
        ...slideStyle,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime,
      };
    }

    return {
      slideStyle,
      selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
      prevStyle: { ...slideStyle },
    };
  };

  return (
    <Carousel
      animationHandler={fadeAnimationHandler}
      autoPlay
      axis={"vertical"}
      infiniteLoop={true}
      // onClickItem={(index, item) => console.log(index)}
      interval={10000}
      transitionTime={3000}
      // selectedItem={2}
      // centerMode={true}
      // centerSlidePercentage={33}
      // verticalSwipe={"natural"}
      // swipeable={true}
      // emulateTouch={true}
      showThumbs={false}
      // thumbWidth={window.innerWidth / 6}
      showIndicators={true}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "#ff2535",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "#ff2535",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {Object.values(images).map((image, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={image.name}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "600px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            color="white"
            padding="50px 200px"
            borderRadius="10px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.3)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            <Typography variant="h3" color={shades.secondary[200]}>
              --- NEW ITEMS ---
            </Typography>
            <Typography variant="h1">Summer Sale</Typography>
            <Typography
              fontWeight="bold"
              color={shades.secondary[300]}
              sx={{ textDecoration: "underline" }}
            >
              Discover More
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
