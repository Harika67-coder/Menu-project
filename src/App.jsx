import menu from './data';
import Items from './Items';
import {useState} from 'react'
const App = () => {
  const category=['all',...new Set(menu.map((item)=>item.category))];
  const [menuItems,setMenuItems]=useState(menu);
  const [categories,setCategories]=useState(category);
  const filterItems=(category)=>{
    if(category==='all')
    {
      setMenuItems(menu);
      return;
    }
    const newItems=menu.filter((menuItem)=>menuItem.category===category);
    setMenuItems(newItems);
  }
  return <main>
    <section>
    <h2 style={{textAlign:"center",marginTop:"80px"}}>Our Menu</h2>
  <div style={{width:"110px",height:"5px",backgroundColor:"var(--primary-500)",margin:"0 auto",marginTop:"15px"}}></div>
  
      <Items menuItems={menuItems} categories={categories} filterItems={filterItems}/>
    </section>
  </main>
};
export default App;
