const Icon = ({
  name,
  width,
  height,
  className,
  basePath = "/img/sprite.svg"
}) => {
  const href = `${basePath}#${name}`;

  return (
    <svg
      className={className}
      width={width}
      height={height}
    >
      <use xlinkHref={href}></use>
    </svg>
  );
};

export default Icon;