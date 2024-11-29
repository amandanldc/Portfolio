import styles from './Contatos.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>
            <section className={styles.contatos}>
                <h2>//CONTATOS//</h2>
                <h3>ENTRE EM CONTATO</h3>
                <p>Bairro Havaí - Belo Horizonte <br />
                    CEP 30555-190 – MG <br />
                    Cel: (31) 983351455 <br />
                    Solteira, brasileira 
                </p>
                
                <div className={styles.icones}>
                    <a href="mailto:amandanldc@gmail.com?subject=Assunto%20do%20Email&body=Texto%20do%20corpo%20do%20email" target="_blank" rel="noopener noreferrer">
                        <GoMail className={styles.icone} />
                    </a>
                    <a href='https://github.com/amandanlc' target="_blank" rel='noopener noreferrer'>
                        <BsGithub className={styles.icone} />
                    </a>
                    <a href='https://linkedin.com/in/amanda-nogueira-nlc' target="_blank" rel='noopener noreferrer'>
                        <BsLinkedin className={styles.icone} />
                    </a>
                </div>
            </section>
        </>
    )
}

export default Contatos