
import './App.scss';
import Header from './components/header';
import { Land } from './pages/land-page';
import { Sobre } from './pages/sobre';

function App() {
  return (
    <div className="App">

         <header className='Header-land'>
            <Header />
         </header>

        <div className="land">
            <Land />
        </div>

        <div className="sobre">
          <Sobre/>
        </div>

    </div>
  );
}

export default App;
