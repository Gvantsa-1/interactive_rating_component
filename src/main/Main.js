import styles from './Main.module.css';
import {icon} from '../assets/icon-star.svg';


export const Main =()=> {
return(
<img className={styles.star} src={icon} alt="icon"/>

);
}