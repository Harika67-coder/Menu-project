import React from 'react'

const SingleItem = ({title,category,price,img,desc}) => {
  return <article style={{width:"53vw",backgroundColor:"white",margin:"0 auto",maxWidth: "var(--max-width)",display: "flex",marginBottom:"40px"
    ,  gap: "2rem"}}>
    <div>
    <img src={img} alt={title} style={{width:"25.12rem",height:"15rem"
    }}/>
    <div style={{margin:"20px"}}>
    <div style={{display:"grid",gridTemplateColumns:"305px 50px"}}>
      <p style={{textTransform:"capitalize",fontSize:"20px",fontWeight:"600",letterSpacing:"0.9px",marginBottom:"20px"}}>
        {title}
      </p>
      <span style={{backgroundColor:"var(--primary-500)",height:"24px",width:"54px",padding:"2px",borderRadius:"3px",textAlign:"center",color:"white"}}>${price}</span>
    </div>
    <p style={{lineHeight:"30px",color:"grey"}}>{desc}</p>
    </div>
    
    </div>
    
  </article>
}

export default SingleItem