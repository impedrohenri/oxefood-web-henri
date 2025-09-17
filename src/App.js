import './App.css';
import FormCliente from './views/cliente/FormCliente';
import Home from './views/home/Home';
import { Segment } from 'semantic-ui-react';
import Produto from './views/produto/Produto';

function App() {
  return (
    <div className="App">
      <Produto/>

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2025 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;
