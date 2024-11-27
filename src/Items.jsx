import React from 'react'
import SingleItem from './SingleItem'

const Items = ({menuItems,categories,filterItems}) => {

 return <section>
  <div style={{display:"flex",justifyContent:"center",marginTop:"30px",marginBottom:"70px",gap:"1rem"}}>
  {categories.map((category)=>{
    console.log(category);
    return <button key={category} onClick={()=>filterItems(category)} className='btn' >{category}</button>
  })}
  </div>
  
  {menuItems.map((item)=>{
    return <SingleItem key={item.id} {...item} />
  })}
 </section>
}

export default Items