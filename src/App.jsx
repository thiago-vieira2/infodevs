
import './App.scss';
import Header from './components/header';
import { Contato } from './pages/contato';
import { Land } from './pages/land-page';
import { Projetos } from './pages/projetos';
import { Sobre } from './pages/sobre';

function App() {
  return (
    <div className="App">


        <div className="land">
            <Land />
        </div>

        <div className="sobre">
          <Sobre/>
        </div>

        <div className="projetos">
          <Projetos/>
        </div>

        <div className="contato">
          <Contato/>
        </div>

    </div>
  );
}

export default App;
