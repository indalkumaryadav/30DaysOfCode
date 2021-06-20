import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { IconButton } from "@material-ui/core";
import Card from "./Card";

const Slider = (props) => {
  const { children } = props;
  return (
    <div class="carousel">
      <div class="slides">
        <img
          src="https://picsum.photos/1280/720?random=1"
          alt="slide image"
          class="slide"
        />
      </div>
    </div>
  );
};

export default Slider;
