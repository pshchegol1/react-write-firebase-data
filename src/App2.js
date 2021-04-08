import React, {useState,useEffect} from 'react';
import './App.css';
import firebaseApp from './firebase';

const App2 = () =>{

const [username, setUsername] = useState('');
const [currentItem, setCurrentItem] = useState('');
const [items, setItems] = useState([]);
console.log(username,currentItem)

const handleSubmit = (e) =>{
    e.preventDefault();

    const itemRef = firebaseApp.database().ref('items');

    const item = {
        title:currentItem,
        user:username
    }

    itemRef.push(item)

    

}

const handleRemove =(itemId) =>{
    const itemRef = firebaseApp.database().ref(`/items/${itemId}`);
    itemRef.remove();
}

useEffect(()=>{
    const itemsRef = firebaseApp.database().ref('items');
    itemsRef.on('value', (snapshot) =>{
        let items = snapshot.val();
        let newState = [];
        for(let item in items){
            newState.push({
                id:item,
                title:items[item].title,
                user:items[item].user
            })
        }
        setItems(newState)
    })

        // * Second Option
/*     itemsRef.on('value', (snapshot) => {
        let newState = [];
        snapshot.forEach(data =>{
            const dataVal = data.val()
            newState.push({
                id:data.id,
                title:dataVal.title,
                user:dataVal.user
            })
        })
        setItems(newState)
    }) */
}, [])




    return (
        <div className='app'>
          <header>
              <div className='wrapper'>
                <h1>Hello</h1>
                
              </div>
          </header>
          <div className='container'>
            <section className='add-item'>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="username" placeholder="What's your name?" onChange={(e)=> setUsername(e.target.value)}/>
                  <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={(e)=> setCurrentItem(e.target.value)}/>
                  <button>Add Item</button>
                </form>
            </section>
            <section className='display-item'>
              <div className='wrapper'>
                <ul>
                    {items.map((item)=>{
                        return(
                            <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>brought by: {item.user}</p>
                            <button onClick={()=> handleRemove(item.id)}>Remove</button>
                            </li>
                        )
                    })}
                </ul>
              </div>
            </section>
          </div>
        </div>
      );
}

export default App2