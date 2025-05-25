import CadastroForm from './CadastroForm';
import CadastroHeader from './CadastroHeader';

export default function CadastroMoto() {
  return (
    <>
      <CadastroHeader motos={motos} />
      <CadastroForm />
    </>
  );
} 