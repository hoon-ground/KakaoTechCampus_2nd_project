import { useSearchParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import MOCK_DATA from '../data/mock.js'

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff6da;
`;


const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
`;


const Img = styled.img`
  width: 150px;
  height: 150px;
`;


const Title = styled.h2`
  margin: 12px 0;
`;


const Types = styled.div`
  margin-bottom: 12px;
`;


const Btn = styled.button`
  padding: 8px 16px;
  margin: 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: ${({ disabled }) => (disabled ? '#ccc' : '#ff0000')};
  color: white;
`;


function PokemonDetail({ selected, addPokemon, removePokemon }) {
  const [params] = useSearchParams();
  const nav = useNavigate();
  const id = Number(params.get('id'));
  const poke = MOCK_DATA.find(p => p.id === id);
  const isSelected = selected.some(p => p.id === id);
  const isFull = !isSelected && (selected.length >= 6);

  const handleClick = () => {
    if (isSelected) {
      removePokemon(id)
    } else if (!isFull) {
      addPokemon(poke)
    }
  };

  return (
    <PageWrapper>
      <Container>
        <Img src={poke.img_url} alt={poke.korean_name} />
        <Title>{poke.korean_name}</Title>
        <Types>타입: {poke.types.join(', ')}</Types>
        <p>{poke.description}</p>

        <div>
          <Btn onClick={handleClick} disabled={isFull}>
            {isSelected ? '삭제' : '추가'}
          </Btn>
          <Btn onClick={() => nav(-1)}>뒤로 가기</Btn>
        </div>
      </Container>
    </PageWrapper>
  )
}

export default PokemonDetail