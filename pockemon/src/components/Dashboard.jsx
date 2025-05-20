import styled from 'styled-components';
import { usePokemon } from '../contexts/PokemonContext';

const DashboardWrapper = styled.div`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
`;

const SelectedPokemon = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
`;

export const Dashboard = () => {
  const { selectedPokemons, removePokemon } = usePokemon();

  return (
    <DashboardWrapper>
      <h2>선택된 포켓몬 ({selectedPokemons.length}/6)</h2>
      {selectedPokemons.map(pokemon => (
        <SelectedPokemon key={pokemon.id}>
          <img 
            src={pokemon.image} 
            alt={pokemon.name} 
            width="50" 
            height="50" 
          />
          <span>{pokemon.name}</span>
          <button onClick={() => removePokemon(pokemon.id)}>
            삭제
          </button>
        </SelectedPokemon>
      ))}
    </DashboardWrapper>
  );
};
