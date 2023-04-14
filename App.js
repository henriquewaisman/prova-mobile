import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Rpg from './src/components/Teste';

export default function App() {

  const rpg = [
    {
      name: 'Espada',
      desc: 'Formada por uma lâmina e uma empunhadura para uma ou duas mãos.',
      imgUrl: "https://cdn.shopify.com/s/files/1/0641/0895/3847/products/3_6bcaf9b4-5410-445a-ba1b-28d1271d9a9c_1120x.jpg?v=1652655605"
    },
    {
      name: 'Arco e Flecha',
      desc: 'Arma para atingir inimigos de longa distância.',
      imgUrl: "https://media.istockphoto.com/id/1093596430/pt/vetorial/bow-and-arrow-vector-isolated-illustration.jpg?s=612x612&w=0&k=20&c=DE8VASAeTSmwlemC2BZipt4lB-WZaKz4HBa-KS7COQI="
    },
    {
      name: 'Escudo',
      desc: 'Usado para se proteger de ataques tanto de espadas quanto de flechas.',
      imgUrl: 'https://st4.depositphotos.com/1472772/31373/i/600/depositphotos_313734050-stock-photo-steel-medieval-shield-metallic-shield.jpg',
    },
  ]

  return (
    <View style={styles.container}>
      {rpg.map(r => <Rpg rpg={r}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B4513',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
