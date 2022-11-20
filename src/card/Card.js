import styles from './Card.module.css';
import icon from '../assets/icon-star.svg';
import {useState} from 'react';
import { Buttons } from '../buttons/Buttons';
import {Submit} from '../submit/Submit';



 
export const Card =({rate, setRate, HandleSubmit})=>{
 return(
  
 <div className={styles.card}>
 
<div className={styles.mainCard}>
    <img src={icon} className={styles.star} alt="starIcon"/>
    <h1 className={styles.title}>How did we do?</h1>
    <p className={styles.text}> Please let us know how we did with your support request. All feedback is 
    appreciated to help us improve our offering!</p>
    </div>
  <Buttons rate={rate} setRate={setRate}/>
<Submit HandleSubmit={HandleSubmit}/>

</div>
);
  } 
