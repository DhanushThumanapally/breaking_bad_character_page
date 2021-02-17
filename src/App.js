import React,{useState,useEffect} from "react";
import axios from 'axios';
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import Header from "./components/ui/Header";

const  App=()=> {
    const [items,setItems]=new useState([]);
    const [isLoading,setLoading]=new useState(true);
    const [query,setQuery]=new useState('');
    
    useEffect(()=>{
         const fetchItems= async()=>{
             const result= await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
            
             console.log(result.data);
             setItems(result.data);
             setLoading(false); 
         }
         fetchItems();
        
    },[query])
  return (
    <div className="container">
    <Header className='center'/>
    <Search getQuery={(e)=>setQuery(e)} />
    <CharacterGrid 
    items={items}
    isLoading={isLoading}/>
    </div>
  );
}

export default App;
