import { useState, useEffect } from 'react';
import CadastroForm from './CadastroForm';
import CadastroHeader from './CadastroHeader';
import MessageModal from '../MessageModal';
import { Text, TouchableOpacity, View } from 'react-native';
import { useMotos } from '../../providers/UseMotos';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroMoto() {

  const { motos, atualizarMotos } = useMotos();

  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [zona, setZona] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  function limparFormulario() {
    setModelo('');
    setPlaca('');
    setZona('');
  }

  function salvarMoto() {
    const placaFiltrada = placa.toLowerCase().trim();

    // Valida conflito entre zona e placa
    const zonaSemPlaca = zona === 'Aguardando Vistoria';
    const placaValida = /^[a-zA-Z]{3}[0-9]{4}$/.test(placaFiltrada);
    const SemPlaca = placaFiltrada === 'sem placa';

    if ((zonaSemPlaca && !SemPlaca) || (!zonaSemPlaca && SemPlaca)) {
      setModalMessage('Se a moto não possui placa, insira na zona "Aguardando Vistoria"');
      setIsSuccess(false);
      setModalVisible(true);
      return;
    }

    // Verifica se já existe uma moto com a mesma placa (exceto se for "sem placa")
    if (!SemPlaca) {
      const placaExiste = motos.some(
        (moto) => moto.placa.toLowerCase().trim() === placaFiltrada
      );
      if (placaExiste) {
        setModalMessage('Já existe um registro com essa placa!');
        setIsSuccess(false);
        setModalVisible(true);
        return;
      }
    }

    // Verifica se todos os campos estão corretos
    if (modelo && (SemPlaca || placaValida) && zona) {
      const novaMoto = {
        id: Date.now().toString(),
        modelo,
        placa: SemPlaca ? 'sem placa' : placa.toUpperCase().trim(),
        zona,
      };
      atualizarMotos([...motos, novaMoto]);
      limparFormulario();
      setModalMessage('Moto cadastrada com sucesso!');
      setIsSuccess(true);
      setModalVisible(true);
    } else {
      setModalMessage('Preencha todos os campos corretamente!');
      setIsSuccess(false);
      setModalVisible(true);
    }
  }

  return (
    <View>
        <CadastroHeader motos={motos} />
        <CadastroForm
          modelo={modelo}
          setModelo={setModelo}
          placa={placa}
          setPlaca={setPlaca}
          zona={zona}
          setZona={setZona}
          salvarMoto={salvarMoto}
          limparFormulario={limparFormulario}
        />
        <MessageModal
          visible={modalVisible}
          message={modalMessage}
          isSuccess={isSuccess}
          onClose={() => setModalVisible(false)}
        />
    </View>
  );
}
