const ArrowRight = (props: {
  strokeColor: string;
  hoverColor?: string;
  toggleHover: boolean;
}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
      >
        <path d="M0.999994 9L14.4714 9L0.999994 9Z" fill="#0D534F" />
        <path
          id="test"
          d="M0.999994 9L14.4714 9"
          stroke={props.toggleHover ? props.hoverColor : props.strokeColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 9.00004L8.61142 1.14731L16 9.00004ZM16 9.00004L8.61142 16.8528L16 9.00004Z"
          fill="#0D534F"
        />
        <path
          d="M16 9.00004L8.61142 1.14731M16 9.00004L8.61142 16.8528"
          stroke={props.toggleHover ? props.hoverColor : props.strokeColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowRight;
