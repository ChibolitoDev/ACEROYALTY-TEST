import { connect } from 'react-redux';
import Book from './components/Book';
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';


const Excersice = ({showedList, loading, state}) => {
  return (
  <div className="  bg-indigo-50 h-screen">
      <SearchBar/>
    <div>
        {
          loading == true ? <Loading/> : 
          showedList.map( item => ( <Book item={item}/>)
          )              
        }
      
    </div>
  </div>
 )
}

const mapStateToProps = state => ({
  state:state,
  showedList: state.list.showedList,
  list: state.list,
  loading: state.list.loading
});

export default connect(mapStateToProps)(Excersice)