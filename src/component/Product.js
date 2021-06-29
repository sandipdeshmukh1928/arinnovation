import React, { useState } from "react";

const Product = ({ src, title }) => {
  console.log(src);
  console.log(title);
  const [state, setState] = useState({
    diffX: 0,
    diffY: 0,
    dragging: false,
    styles: {},
  });
  const _dragStart = (e) => {
    setState({
      ...state,
      diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      dragging: true,
    });
  };

  const _dragging = (e) => {
    if (state.dragging) {
      var left = e.screenX - state.diffX;
      var top = e.screenY - state.diffY;

      setState({
        ...state,
        styles: {
          left: left,
          top: top,
        },
      });
    }
  };

  const _dragEnd = () => {
    setState({ ...state, dragging: false });
  };
  return (
    <div
      id="products"
      className="DragComponent"
      style={state.styles}
      onMouseDown={_dragStart}
      onMouseMove={_dragging}
      onMouseUp={_dragEnd}
    >
      <iframe style={{ width: 200, height: 200 }} src={src} frameBorder={0} />
    </div>
  );
};

export default Product;
