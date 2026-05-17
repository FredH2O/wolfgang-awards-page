function HoverPreview({ image, imageAlt, preview }) {
  if (!image || !preview.isVisible) {
    return null;
  }
  return (
    <img
      src={image}
      alt={imageAlt}
      className="pointer-events-none fixed z-50 hidden h-60 w-48 rounded-xl object-cover shadow-2xl transition-transform duration-75 lg:block"
      style={{
        left: preview.x,
        top: preview.y,
        transform: `translate(-50%, -50%) rotate(${preview.rotate}deg)`,
      }}
    />
  );
}

export default HoverPreview;
