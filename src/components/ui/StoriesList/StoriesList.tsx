import { FlatList, View } from 'react-native';

import StoryItem from '../StoryItem/StoryItem';

import { styles } from './styles';

import type { Story } from 'src/types';

interface StoriesListProps {
  stories: Story[];
  handlePress: (story: Story) => void;
}

const StoriesList = ({ stories, handlePress }: StoriesListProps) => {
  return (
    <FlatList
      data={stories}
      renderItem={({ item }) => (
        <StoryItem story={item} handlePress={() => handlePress(item)} />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={styles.flatList}
      contentContainerStyle={styles.flatListContentContainer}
      ListFooterComponent={<View style={styles.listFooterContainer} />}
    />
  );
};

export default StoriesList;
