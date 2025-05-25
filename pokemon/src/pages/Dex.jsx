import styled from 'styled-components'
import Dashboard from '../components/Dashboard.jsx'
import PokemonList from '../components/PokemonList.jsx'
import MOCK_DATA from '../data/mock.js'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function Dex() {
  return (
    <Layout>
      <Dashboard />
      <PokemonList data={MOCK_DATA} />
    </Layout>
  );
}

export default Dex;
