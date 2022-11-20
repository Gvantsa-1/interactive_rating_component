import styles  from './Button.module.css';
import { v4 as uuidv4 } from 'uuid';


export const Buttons=({rate, setRate})=>{
    
   
     const numbers=[  
       1, 2, 3, 4, 5
        ]  
const handleRate=(item)=>{
   setRate(item)
}

    return(
<div className={styles.buttons}>
  
  {numbers.map((item)=>{
  return <button onClick={()=>handleRate(item)} key={uuidv4()} value={item}
  className ={styles.buttonsStyle} 
 >{item}  
  </button>
 
   })}
</div>
    )
} 