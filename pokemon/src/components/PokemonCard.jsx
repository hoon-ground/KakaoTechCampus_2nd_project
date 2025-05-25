import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled.div`
  width:100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  background: white;

  a{
    text-decoration:none;
    color:inherit;
  }
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

const Number = styled.div`
  font-size: 0.8rem;
  color: #555;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Name = styled.h4`
margin: 8px 0;
`;

const Btn = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background: red;
  color: white;
  cursor: pointer;
  &:disabled { 
    background: #bbb;
    cursor: default; 
  }
`;

function PokemonCard({ pokemon, isSelected, onAdd, onRemove }) {
  const num = String(pokemon.id).padStart(3, '0');
  const checkMode = typeof onRemove === 'function'; //onRemove가 함수인지 아닌지 확인해서 삭제모드인지 아닌지 판단
  const handleClick = checkMode ? onRemove : onAdd;
  const label = checkMode ? '삭제' : isSelected ? '추가됨' : '추가';
  const disabled = !checkMode && isSelected;


  return (
    <Card>
      <Link to={`/detail?id=${pokemon.id}`}>
        <Img src={pokemon.img_url} alt={pokemon.korean_name} />
        <Name>{pokemon.korean_name}</Name>
      </Link>
      <Number>No.{num}</Number>
      <Btn
        onClick={handleClick}
        disabled={disabled}
        variant={checkMode ? 'remove' : 'add'}
      >
        {label}
      </Btn>
    </Card>
  )
}

export default PokemonCard