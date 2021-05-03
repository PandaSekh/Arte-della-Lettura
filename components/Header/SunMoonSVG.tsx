export default function SunMoon() {
  return <svg id="sunmoon" viewBox="0 0 100 100" aria-hidden="true" aria-labelledby="sunmoon">
    <title id="sunmoon">Simbolo sole e luna per Dark Mode</title>
    <defs>
      <mask id="hole">
        <rect width="100%" height="100%" fill="white" />
        <circle id="overlay" r="60" cx="185" cy="-75" fill="black" />
      </mask>

      <filter id="blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>
    </defs>

    <g filter="url(#blur)">
      <circle
        fill="gold"
        id="donut"
        r="45"
        cx="50"
        cy="50"
        mask="url(#hole)"
      />
    </g>
    <style jsx>
      {`
        svg .mooned {
          transform: translate(-90px, 90px);
        }
        svg #overlay {
          transition: all 0.3s ease-in-out;
        }
      `}
    </style>
  </svg>
}