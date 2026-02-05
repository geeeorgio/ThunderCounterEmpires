import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SaveIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 12 18" {...props}>
      <Path
        fill={props.color || '#fff'}
        d="M0 3.28C0 2.13 0 1.557.218 1.118c.192-.386.498-.7.874-.896C1.52 0 2.08 0 3.2 0h5.6c1.12 0 1.68 0 2.108.223.376.197.682.51.874.896.218.439.218 1.012.218 2.16v13.634c0 .498 0 .747-.101.884a.5.5 0 0 1-.37.203c-.167.01-.369-.129-.773-.404L6 14.346l-4.756 3.249C.84 17.87.638 18.01.47 18a.5.5 0 0 1-.369-.203C0 17.66 0 17.41 0 16.913z"
      ></Path>
    </Svg>
  );
};

export default SaveIcon;
