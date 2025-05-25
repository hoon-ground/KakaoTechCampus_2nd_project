import { useState, useEffect, createContext, useContext,  } from 'react'

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [selected, setSelected] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('selected')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('selected', JSON.stringify(selected));
  }, [selected]);

  const addPokemon = (poke) => {
    /*
    이미 선택된 포켓몬을 다시 선택하려고 하면
    alert 메시지로 "이미 선택된 포켓몬입니다."라는 안내를 띄우는 것을 없앴습니다.
    제가 시험삼아 했을 때, 이 포켓몬을 추가했었는지 위로가서 확인을 해야해서 불편했습니다. 
    버튼을 아예 block시키고 추가됨이라는 버튼으로 바꾸는 것이 
    사용자 입장에서 혼란을 덜 일으키는 것 같아 바꾸었습니다.
    */
    if (selected.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    setSelected(prev => [...prev, poke]);
  };

  const removePokemon = (id) => {
    setSelected(prev => prev.filter(p => p.id !== id));
  };

  return (
    <PokemonContext.Provider value={{ selected, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}
