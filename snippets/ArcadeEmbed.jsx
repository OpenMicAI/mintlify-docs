export const ArcadeEmbed = ({url, title}) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "calc(47.46527777777778% + 41px)",
        height: "0",
        width: "100%",
      }}
    >
      <iframe
        src={url}
        title={title}
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          colorScheme: "light",
        }}
      />
    </div>
  );
};
