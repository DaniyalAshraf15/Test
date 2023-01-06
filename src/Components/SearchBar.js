import axios from 'axios';
import React, { useState } from 'react'


const SearchBar = () => {
const [searchInput,setSearchInput] = useState('')
const [repo, setRepo] = useState([])
const handleChange = (e)=>{
setSearchInput(e.target.value);
}
const handleClick = async () =>{
    console.log(searchInput)
    try{
        

        const result = await axios.get(
            `https://ghapi.huchen.dev/developers?language=&since=daily`,
            {
                headers: {
                    'Content-Type':'application/json'
                }
            }
            )
        setRepo(result.data);
    }
    catch(err){
        console.log(err,'Error')
    }
   console.log(repo,'Check')
}
// const result = await axios('https://ghapi.huchen.dev/developers?language=&since=daily')
  return (
    <div>
        <input type='text' placeholder='search' value={searchInput} onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchBar