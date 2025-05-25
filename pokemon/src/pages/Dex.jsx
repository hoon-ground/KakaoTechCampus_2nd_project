import styled from 'styled-components'
import Dashboard from '../components/Dashboard.jsx'
import PokemonList from '../components/PokemonList.jsx'
import MOCK_DATA from '../data/mock.js'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function Dex({ selected, addPokemon, removePokemon }) {
  return (
    <Layout>
      <Dashboard selected={selected} removePokemon={removePokemon} />
      <PokemonList
        data={MOCK_DATA}
        selectedIds={selected.map(p => p.id)}
        addPokemon={addPokemon}
      />
    </Layout>
  )
}

export default Dex
