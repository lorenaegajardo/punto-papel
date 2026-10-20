import { Container } from 'react-bootstrap';
import BannerPrincipal from '../components/BannerPrincipal';
import Beneficios from '../components/Beneficios';

function Inicio() {
  

  return (
    <div className="bg-light pb-5">
      <BannerPrincipal />
      <Container>
        <Beneficios />
      </Container>
    </div>
  );
}

export default Inicio;