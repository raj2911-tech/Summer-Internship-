import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Header from './header'
import SkillList from './SkillList'
import Stamina from './Stamina'

function App() {

  return (
    <>
      <Header />
      <SkillList skills={[
        { name: "JS", level: 95 },
        { name: "React", level: 80 },
      ]} />
      <Stamina />
    </>
  )
}

export default App
