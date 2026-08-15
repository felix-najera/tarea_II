import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Image } from 'expo-image';
import {StyleSheet, Text, View, FlatList, TextInput, Button,Alert } from 'react-native';
import { useState } from 'react';


export default function HomeScreen() {
  const [mostrarInput, setMostrarInput] = useState(false);
  const [tareaNueva, setTareaNueva] = useState('');

  const [tareas, setTareas] = useState([
    { key: 'tarea react listas' },
    { key: 'estadisticas de moda' },
    { key: 'campo electrico' },
  ]);

  function tarea(e: any) {
    setMostrarInput(true);
  }

  function guardarTarea() {
    setTareas([...tareas, { key: tareaNueva }]);
    setTareaNueva('');
    setMostrarInput(false);
  }

  function eliminarTarea(index: number) {
    Alert.alert(
      'Eliminar tarea',
      'Esta seguro que desea eliminar la tarea ?',
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            setTareas(tareas.filter((_, i) => i !== index));
          },
        },
      ]
    );
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#9b9e9e', dark: '#5f6668' }}
      headerImage={
        <Image />
      }
    >
      <View style={styles.container}>
        <FlatList
          data={tareas}
          renderItem={({ item, index }) => (
            <View>
              <Text style={styles.item}>{item.key}</Text>

              <Button
                title="Eliminar"
                onPress={() => eliminarTarea(index)}
              />
            </View>
          )}
        />
      </View>

      <Button title="nueva tarea" onPress={tarea} />

      {mostrarInput && (
        <View>
          <TextInput style={styles.input} value={tareaNueva} onChangeText={setTareaNueva}/>
          <Button title="Guardar" onPress={guardarTarea}
          />
        </View>
      )}

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
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 20,
    color: 'white',
  },
});