import axios from "axios";

export const fetchData  = async () => {
    try{
        const bookData = await  axios.get('http://www.mocky.io/v2/5e1683a23000004d00d56089').then(response => response.data);
        const authorData = await axios.get('http://www.mocky.io/v2/5e1684a93000002c00d5608e').then(response => response.data);;
        
        const data = bookData.map(book => {
            const author = authorData.find(author => author.id == book.authorId)
            return {
                ...book,
                ...author
            }
        })
        return data
    }
    catch(error){
        return error
    }
}

