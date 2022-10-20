import Item from './components/Item/Item.js'
import ItemList from './components/ItemList/ItemList';
import NavBar from './components/NavBar/NavBar';

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
    <div className="h-full w-full bg-indigo-50 relative">
        <NavBar/>
        <ItemList Items= {arr }/>
    </div>
  );
}

export default App;
