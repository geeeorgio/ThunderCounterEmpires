import { ScrollView, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import ShareIcon from '../CustomIcons/ShareIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { Story } from 'src/types';
import { handleShare, hp, wp } from 'src/utils';

interface StoryDetailsProps {
  story: Story;
}

const StoryDetails = ({ story }: StoryDetailsProps) => {
  const handleSharePress = () => {
    handleShare();
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.storyInfoContainer}>
        <CustomText extraStyle={styles.storyTitle}>{story.title}</CustomText>
        <CustomText extraStyle={styles.storyDescription}>
          {story.description}
        </CustomText>
      </View>

      <CustomButton
        variant="purple_main"
        onPress={handleSharePress}
        extraStyle={styles.shareButton}
      >
        <CustomText extraStyle={styles.shareButtonText}>
          Share the story
        </CustomText>
        <ShareIcon width={wp(22)} height={hp(22)} />
      </CustomButton>
    </ScrollView>
  );
};

export default StoryDetails;
