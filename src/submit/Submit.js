import styles from './Submit.module.css'

const HandleClick=(props)=>{
    props.HandleSubmit();
}

export const Submit=(props)=>{
return(
    
<div className={styles.submitCont}>
<input onClick={props.HandleSubmit}
className={styles.submit} type="submit" value="Submit" />
</div>
)
}