function getPositionStyles([vertical, horizontal], containerWidth, spacing) {
  const styles = {};
  vertical === "top" && (styles.top = spacing);
  vertical === "bottom" && (styles.bottom = spacing);
  horizontal === "left" && (styles.left = spacing);
  horizontal === "right" && (styles.right = spacing);
  horizontal === "center" && (styles.left = `calc(50% - ${containerWidth / 2}px)`);
  return styles;
}

export default getPositionStyles;
//# sourceMappingURL=get-position-styles.js.map
