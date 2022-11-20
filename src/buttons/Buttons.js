import styles  from './Button.module.css';



export const Buttons=({rate, setRate})=>{
    
   
     const numbers=[  
       1, 2, 3, 4, 5
        ]  
const handleRate=(item)=>{
   setRate(item)
}
console.log(rate);
    return(
<div className={styles.buttons}>
  
  {numbers.map((item)=>{
  return <button onClick={(item)=>handleRate(item)} value={item}
  className ={styles.buttonsStyle} 
 >{item}  
  </button>
   })}
</div>
    )
}