import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#9b9e9e', dark: '#5f6668' }}
      headerImage={
        <Image />
      }
    >
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'tarea react listas' },
            { key: 'estadisticas de moda' },
            { key: 'campo electrico' },
          ]}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.key}</Text>
          )}
        />
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'white',
  },
});