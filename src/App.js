import './App.css';
import Item from './components/Item/Item.js'
import ItemList from './components/ItemList/ItemList';

const arr = [
<Item img="https://i.imgur.com/5dmBrx6.jpg" nombre="pan" precio="132"/>,
<Item img="https://i.imgur.com/5dmBrx6.jpg" nombre="pan" precio="132"/>,
<Item img="https://i.imgur.com/5dmBrx6.jpg" nombre="pan" precio="132"/>,
<Item img="https://i.imgur.com/5dmBrx6.jpg" nombre="pan" precio="132"/>,
<Item img="https://i.imgur.com/5dmBrx6.jpg" nombre="pan" precio="132"/>,
<Item img="https://i.imgur.com/5dmBrx6.jpg" nombre="pan" precio="132"/>
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemList Items= {arr }/>
      </header>
    </div>
  );
}

export default App;
