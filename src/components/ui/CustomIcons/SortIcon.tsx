import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SortIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 18 12" {...props}>
      <Path
        fill={props.color || '#fff'}
        d="M1 12h4c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1M0 1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1m1 6h10c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1"
      ></Path>
    </Svg>
  );
};

export default SortIcon;
