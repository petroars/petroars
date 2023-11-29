const EllipseDescription = () => (
  // <div className="absolute flex-shrink-0 w-[724px] h-[462px] bg-[#efceff]/[.4]" />
  <div
    style={{
      width: "724px",
      height: "462px",
      flexShrink: "0",
      borderRadius: "462px",
      background: "rgba(239, 206, 255, 0.04)",
      filter: "blur(100px)",
    }}
    className="absolute -z-20 top-[50vh] max-w-[100vw]"
  ></div>
);

export default EllipseDescription;
