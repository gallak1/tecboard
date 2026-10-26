
import { useState } from 'react';
import './App.css'
import { Banner } from './components/Banner'
import { CardEvento } from './components/CardEvento';
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Tema } from './components/Tema'

function App() {
  const temas = [
    {
      id: 1, nome: 'front-end'
    },{
      id: 2, nome: 'back-end'
    },{
      id: 3, nome: 'devops'
    },{
      id: 4, nome: 'inteligência artificial'
    },{
      id: 5, nome: 'data science'
    },{
      id: 6, nome: 'cloud'
    }
  ];
  
  const [eventos, setEventos] = useState([
    {
      capa: '/card-covers/Imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ]);

  function adicionaEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src='/logo.png'></img>
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} enviaEvento={adicionaEvento} />
      <section className='container'>
        {temas.map((tema) => {
          if(!eventos.some(evento => {
            return evento.tema.id == tema.id
          })) {
            return null
          }
          return (
          <section key={tema.id}>
            <Tema tema={tema} />
            <div className="eventos">
              {eventos.filter(evento => evento.tema.id == tema.id).map((evento, index) => {
                return (
                  <CardEvento key={index} evento={evento} />
                )
              })}
            </div>
          </section>
          )
        })}
      </section>
    </main>
  )
}

export default App
