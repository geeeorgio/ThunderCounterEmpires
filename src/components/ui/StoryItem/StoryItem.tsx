import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { Story } from 'src/types';

interface StoryItemProps {
  story: Story;
  handlePress: () => void;
}
const StoryItem = ({ story, handlePress }: StoryItemProps) => {
  return (
    <CustomButton onPress={handlePress} extraStyle={styles.container}>
      <CustomText extraStyle={styles.title}>{story.title}</CustomText>
      <CustomText
        extraStyle={styles.description}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {story.description}
      </CustomText>
    </CustomButton>
  );
};

export default StoryItem;
