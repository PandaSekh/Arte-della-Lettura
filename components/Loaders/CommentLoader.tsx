import ContentLoader from "react-content-loader";

export default function Comment(): JSX.Element {
  return (
    <ContentLoader
      speed={2}
      width={100}
      height={100}
      viewBox="0 0 100 100"
      style={{ width: "100%" }}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="60" y="15" rx="2" ry="2" width="140" height="10" />
      <rect x="60" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="5" y="64" rx="0" ry="0" width="800" height="165" />
      <circle cx="675" cy="565" r="217" />
      <rect x="6" y="9" rx="0" ry="0" width="47" height="46" />
      <rect x="34" y="19" rx="0" ry="0" width="0" height="6" />
    </ContentLoader>
  );
}
