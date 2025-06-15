// TODO: add the sunset circle§
export default function LowPolyBackground() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="visual"
        width="960"
        height="540"
        version="1.1"
        viewBox="0 0 960 540"
        className="w-full h-full absolute z-[-1]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="blur1" width="120%" height="120%" x="-10%" y="-10%">
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur"
              stdDeviation="163"
            ></feGaussianBlur>
          </filter>
        </defs>
        <path fill="#60F" d="M0 0h960v540H0z"></path>
        <g filter="url(#blur1)">
          <circle cx="676" cy="33" r="363" fill="#F06"></circle>
          <circle cx="701" cy="520" r="363" fill="#60F"></circle>
          <circle cx="117" cy="160" r="363" fill="#F06"></circle>
          <circle cx="922" cy="5" r="363" fill="#F06"></circle>
          <circle cx="29" cy="421" r="363" fill="#60F"></circle>
          <circle cx="491" cy="419" r="363" fill="#F06"></circle>
        </g>
      </svg>
    </div>
  );
}
