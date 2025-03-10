/* eslint-disable react/prop-types */
import Masonry from "react-masonry-css";
import "./masonry-layout.css";

function MasonryLayout({ children }) {
  const breakpointColumns = {
    default: 4,
    1800: 3,
    1345: 2,
    900: 1,
  };

  return (
    <Masonry
      className="masonry-grid"
      breakpointCols={breakpointColumns}
      columnClassName="masonry-column"
    >
      {children}
    </Masonry>
  );
}
export default MasonryLayout;
