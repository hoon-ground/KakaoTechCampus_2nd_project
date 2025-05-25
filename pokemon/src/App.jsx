import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dex from './pages/Dex.jsx'
import Home from './pages/Home.jsx'
import PokemonDetail from './pages/PokemonDetail.jsx'
import './App.css'

function App() {
  const [selected, setSelected] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('selected')) || []
    } catch {
      return []
    }
  })

  //state가 바뀔때마다 localStorage에 저장.
  useEffect(() => {
    localStorage.setItem('selected', JSON.stringify(selected))
  }, [selected])


  const addPokemon = (poke) => {
    /*
    이미 선택된 포켓몬을 다시 선택하려고 하면
    alert 메시지로 "이미 선택된 포켓몬입니다."라는 안내를 띄우는 것을 없앴습니다.
    제가 시험삼아 했을 때, 이 포켓몬을 추가했었는지 위로가서 확인을 해야해서 불편했습니다. 
    버튼을 아예 block시키고 추가됨이라는 버튼으로 바꾸는 것이 
    사용자 입장에서 혼란을 덜 일으키는 것 같아 바꾸었습니다.
    */
    if (selected.length >= 6) {
      alert("더 이상 선택할 수 없습니다.")
      return
    }
    setSelected(prev => [...prev, poke])
  }

  const removePokemon = (id) => {
    setSelected(prev => prev.filter(p => p.id !== id))
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dex"
          element={
            <Dex
              selected={selected}
              addPokemon={addPokemon}
              removePokemon={removePokemon}
            />
          }
        />
        <Route
          path="/detail"
          element={
            <PokemonDetail
              selected={selected}
              addPokemon={addPokemon}
              removePokemon={removePokemon}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
