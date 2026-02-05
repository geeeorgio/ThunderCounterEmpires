import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const PenIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 18 18" {...props}>
      <Path
        fill={props.color || '#fff'}
        d="M0 18v-4.25L13.2.575q.3-.275.663-.425t.762-.15.775.15.65.45L17.425 2q.3.275.438.65a2.14 2.14 0 0 1 0 1.513 1.85 1.85 0 0 1-.438.662L4.25 18zM14.6 4.8 16 3.4 14.6 2l-1.4 1.4z"
      ></Path>
    </Svg>
  );
};

export default PenIcon;
