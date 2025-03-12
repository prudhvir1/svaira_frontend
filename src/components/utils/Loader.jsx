import { forwardRef } from "react";

const Loader = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});

Loader.displayName = "Loader";

export default Loader;
