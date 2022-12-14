const ArrowDown = (props: {
  fillColor: string;
  hoverColor?: string;
  toggleHover: boolean;
}) => {
  return (
    <svg
      style={{ marginTop: '0.3rem' }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 32 35"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.6066 24.2047L17.0607 33.7507C16.4749 34.3364 15.5251 34.3364 14.9394 33.7507L1.39341 24.2047C0.807628 23.6189 0.807628 22.6692 1.39341 22.0834C1.9792 21.4976 2.92895 21.4976 3.51474 22.0834L14.5 29.5619L14.5 1.5C14.5 0.671572 15.1716 -6.93891e-07 16 -6.57679e-07C16.8284 -6.21467e-07 17.5 0.671572 17.5 1.5L17.5 29.5619L28.4853 22.0834C29.0711 21.4976 30.0208 21.4976 30.6066 22.0834C31.1924 22.6692 31.1924 23.6189 30.6066 24.2047Z"
        fill={props.toggleHover ? props.hoverColor : props.fillColor}
      />
    </svg>
  );
};

export default ArrowDown;
