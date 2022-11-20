import styles from './Thanks.module.css'
import thanksImg from '../assets/illustration-thank-you.svg';


export const Thanks=(props)=>{
    return(
        <div className={styles.thanksCard}>
      <img className={styles.thankImg} src={thanksImg}/>
       <p className={styles.thanksText}>You selected {props.rate} out of 5</p>
       <h1 className={styles.thanksTitle}>Thank you!</h1>
       <p className={styles.thanksPar}>We appreciate you taking the 
        time to give a rating. If you ever 
        need more support, 
        don’t hesitate to get in touch!</p>
    
        </div>
)
}