import React from 'react'
import ReactDOM from 'react-dom'

import BomDia from './componentes/BomDia'
import Multi, {BoaNoite} from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <div>
    <Pai nome="Neto" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="Paulo" />
      <Filho nome="Carla" />
    </Pai>
  </div>
, document.getElementById('root'))

// $('<h1>').html('React')