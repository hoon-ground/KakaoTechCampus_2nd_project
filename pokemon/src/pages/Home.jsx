import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: white;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.2rem;
  background: red;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover { opacity: 0.8; }
`;

function Home() {
  const nav = useNavigate();
  return (
    <Container>
      <Button onClick={() => nav('/dex')}>
        포켓몬 도감 시작하기
      </Button>
    </Container>
  )
}

export default Home
