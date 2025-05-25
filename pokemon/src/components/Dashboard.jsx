import styled from 'styled-components'
import PokemonCard from './PokemonCard.jsx'

const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #e2e2e2;
  border-radius: 15px;
  margin-bottom: 50px;
`;

const Title = styled.h3`
  margin-bottom: 15px;
  color: red;
`;

const Slots = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-bottom: 20px;
  
  & > * {
    min-width: 0;
  }
`;

const EmptySlot = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border: 3px dashed #ddd;
  border-radius: 8px;
  background: white;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%; left: 50%;
    width: 60%; height: 60%;
    transform: translate(-50%, -50%);
    object-fit: contain;
  }
`;

const POKEBALL_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';

function Dashboard({ selected, removePokemon }) {
  const slots = [...selected, ...Array(6 - selected.length).fill()];

  return (
    <Wrap>
      <Title>나만의 포켓몬 ({selected.length}/6)</Title>
      <Slots>
        {slots.map((poke, idx) =>
          poke ? (
            <PokemonCard
              key={`poke-${poke.id}`}
              pokemon={poke}
              onRemove={() => removePokemon(poke.id)}
            />
          ) : (
            <EmptySlot key={`empty-${idx}`}>
              <img src={POKEBALL_URL} alt="Poke Ball" />
            </EmptySlot>
          )
        )}
      </Slots>
    </Wrap>
  );
}

export default Dashboard;