type LogoProps = {
  color: "white" | "blue";
};

function Logo({ color }: LogoProps) {
  const src =
    color === "white" ? "/Logo-text-white.png" : "/Logo-text-blue.png";

  return <img src={src} alt="Gorent Logo" />;
}

export default Logo;
