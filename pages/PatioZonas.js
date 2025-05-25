import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ZonasDoPatio from '../components/PatioMoto/ZonasDoPatio';
import MenuSuperior from '../components/MenuSuperior';

export default function PatioZonas() {

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <MenuSuperior/>
          <ZonasDoPatio/>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: { 
    flex: 1, 
  }
});