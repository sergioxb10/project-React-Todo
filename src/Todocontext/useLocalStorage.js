import React from "react";

const useLocaleStorage = (itemName,initialValue)=>{
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
    const [item,setItem] = React.useState(initialValue);
    
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageItem){
            localStorage.getItem(itemName,JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        }catch(e){
          setError(e);
          console.log(e)
        }
      },3000)
    });
    
    const saveItem = (newItem)=>{
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem)
        setItem(newItem);
      }catch(e){
          setError(e);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
}

export {useLocaleStorage};