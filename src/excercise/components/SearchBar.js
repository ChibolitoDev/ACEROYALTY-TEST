import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { aplyFilter } from '../../redux';

function SearchBar({list}) {
  
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    aplyFilter(searchValue,list);
  }, [searchValue]);



  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
        <div className='flex justify-between items-start m-3'>
            <div className='flex items-start max-w-max max-h-max overflow-hidden justify p-1 '>
            <h1 className='text-red-500 text-5xl font-bold'>Best Sellers all times</h1>  
            </div>
            <div className='flex items-end  max-w-max max-h-max overflow-hidden rounded-xl justify p-2'>  
            <input type="text" className="p-4  border border-gray-300 rounded-l-md" placeholder="Write something to search" value={searchValue} onChange={handleInputChange}/>
            </div>
        </div>          
)
}

const mapStateToProps = state => ({
  list: state.list
});

export default connect(mapStateToProps)(SearchBar)
