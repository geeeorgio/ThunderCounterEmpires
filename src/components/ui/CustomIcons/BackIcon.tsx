import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const BackIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 24 30" {...props}>
      <Path
        fill={props.color || '#fff'}
        d="M1.069 17.065a2.3 2.3 0 0 1-.799-.911A2.66 2.66 0 0 1 0 15q-.005-.608.268-1.154a2.4 2.4 0 0 1 .799-.91L20.383.363q.297-.182.624-.272.326-.09.623-.092.948 0 1.659.7T24 2.43v25.14q0 1.034-.711 1.733-.71.7-1.66.697-.296 0-.62-.092a2.6 2.6 0 0 1-.623-.272z"
      ></Path>
    </Svg>
  );
};

export default BackIcon;
