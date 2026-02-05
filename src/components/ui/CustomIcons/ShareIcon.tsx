import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const ShareIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 18 20" {...props}>
      <Path
        fill={props.color || '#fff'}
        d="M15 14.137c-.76 0-1.44.3-1.96.773l-7.13-4.167A3.3 3.3 0 0 0 6 10.04a3.3 3.3 0 0 0-.09-.703l7.05-4.126a2.98 2.98 0 0 0 2.04.813c1.66 0 3-1.345 3-3.012A3 3 0 0 0 15 0c-1.66 0-3 1.345-3 3.012 0 .241.04.472.09.703L5.04 7.84A2.98 2.98 0 0 0 3 7.028c-1.66 0-3 1.345-3 3.012a3 3 0 0 0 3 3.012c.79 0 1.5-.311 2.04-.813l7.12 4.177c-.05.21-.08.431-.08.652A2.93 2.93 0 0 0 15 20a2.93 2.93 0 0 0 2.92-2.932A2.93 2.93 0 0 0 15 14.136"
      ></Path>
    </Svg>
  );
};

export default ShareIcon;
