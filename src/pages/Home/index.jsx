import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Olá, sou <br />
                    <span>Amanda Nogueira</span> <br />
                    
                </p>
                <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                    SAIBA MAIS SOBRE MIM
                </Link>
            </div>
        </section>
        </> 
    )
}

export default Home
