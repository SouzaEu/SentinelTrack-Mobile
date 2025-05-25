import { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import motosMockadas from '../data/motosMockadas';

export function useMotos() {
  const [motos, setMotos] = useState([]);

  // Carrega os dados apenas uma vez na inicialização
  useEffect(() => {
    const carregarMotos = async () => {
      try {
        const dados = await AsyncStorage.getItem('lista_motos');
        let lista = dados ? JSON.parse(dados) : [];
        
        if (lista.length === 0) {
          console.log('Inicializando com dados mockados:', motosMockadas);
          lista = motosMockadas;
          await AsyncStorage.setItem('lista_motos', JSON.stringify(lista));
        }
        
        console.log('Dados carregados:', lista);
        setMotos(lista);
      } catch (error) {
        console.error('Erro ao carregar motos:', error);
        setMotos(motosMockadas);
      }
    };

    carregarMotos();
  }, []); // Executa apenas uma vez na montagem do componente

  const atualizarMotos = async (novasMotos) => {
    try {
      await AsyncStorage.setItem('lista_motos', JSON.stringify(novasMotos));
      setMotos(novasMotos);
    } catch (error) {
      console.error('Erro ao salvar motos:', error);
    }
  };

  const deletarMotoPorId = async (id) => {
    try {
      const novasMotos = motos.filter(moto => moto.id !== id);
      await atualizarMotos(novasMotos);
    } catch (error) {
      console.error('Erro ao deletar moto:', error);
    }
  };

  return { motos, atualizarMotos, deletarMotoPorId };
}
