import '../styles/Spinner.css';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  margin-top: 30px;
`;

function Spinner() {
  return (
    <Contenedor className='sk-chase'>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
    </Contenedor>
  );
}

export default Spinner;
