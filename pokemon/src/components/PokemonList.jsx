import styled from 'styled-components'
import PokemonCard from './PokemonCard.jsx'
import { usePokemon } from '../context/PokemonContext.jsx';

const Wrap = styled.div`
  width:100%;
  max-width:1200px;
  margin:0 auto;
  padding: 20px;
  background-color:#e2e2e2;
  border-radius:15px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
`;

function PokemonList({ data }) {
  const { selected, addPokemon } = usePokemon();
  const selectedIds = selected.map(p => p.id);

  return (
    <Wrap>
      <Grid>
        {data.map(p => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            isSelected={selectedIds.includes(p.id)}
            onAdd={() => addPokemon(p)}
          />
        ))}
      </Grid>
    </Wrap>
  );
}

export default PokemonList
