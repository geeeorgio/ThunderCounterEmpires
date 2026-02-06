import { useState } from 'react';

import { styles } from './styles';

import {
  CustomContainer,
  CustomHeader,
  CustomScreenWrapper,
  StoriesList,
  StoryDetails,
} from 'src/components';
import { useGameContext } from 'src/hooks/useGameContext';
import type { Story } from 'src/types/gameplay';

const StoriesScreen = () => {
  const { contextStories } = useGameContext();

  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const handleStoryPress = (story: Story) => {
    setSelectedStory(story);
  };

  const handleBackPress = () => {
    setSelectedStory(null);
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader
        handleBackPress={selectedStory ? handleBackPress : undefined}
      />
      <CustomContainer
        variant="purple_main"
        extraStyle={styles.contentContainer}
      >
        {selectedStory ? (
          <StoryDetails story={selectedStory} />
        ) : (
          <StoriesList
            stories={contextStories}
            handlePress={handleStoryPress}
          />
        )}
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default StoriesScreen;
