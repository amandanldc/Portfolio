import styles from './Sobre.module.css'

import android from './images/icon-android.svg'
import php from './images/icon-php.svg'
import swift from './images/icon-swift.svg'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <div className={styles.textos}>
                    <h1>//SOBRE MIM//</h1>

                    <h2>Sou <span>Amanda Nogueira,</span> <br />
                    <strong>estudante do 3° ano do ensino médio técnico,</strong>
                    </h2>
                    <p>
                        com foco em desenvolvimento de sites e aplicativos. Tenho experiência 
                        prática em React, Typescript, PHP, Kotlin, Swift, HTML, CSS, JavaScript 
                        e Tailwind. Possuo vivência no desenvolvimento Front-end, design responsivo 
                        e integração de APIs, além de habilidades em resolução de problemas técnicos 
                        e otimização de usabilidade. Tenho facilidade em criar designs e desenvolver 
                        soluções Front-end, sendo essas minhas principais competências. Estou motivada 
                        a aprender novas tecnologias e aplicar as habilidades adquiridas em projetos 
                        dinâmicos e desafiadores, contribuindo efetivamente para o sucesso das equipes 
                        de desenvolvimento.
                    </p>

                </div>
            </div>

            <div className={styles.bio}>
                <div className={styles.textos2}>
                    <h1>FORMAÇÃO ACADÊMICA</h1>

                    <h2><span>Fev/2023 a Dez/2024</span><strong> - Técnico em Informática</strong></h2>
                    <p>
                        COTEMIG (cursando o 3º ano do ensino médio - período diurno) 
                    </p>

                </div>
            </div>

            <div className={styles.bio}>
                <div className={styles.textos3}>
                    <h1>CURSOS E TRABALHOS VOLUNTÁRIOS</h1>

                    <h2><span>CURSO</span><strong> - 2023 </strong></h2>
                    <p>
                        Inglês Intermediário Avançado (B2) - EF SET Certificate 
                    </p>

                    <h2><span>CURSO</span><strong> - 2023 </strong></h2>
                    <p>
                        Curso front-end -  Alura
                    </p>

                    <h2><span>TRABALHO VOLUNTÁRIO</span><strong> - 2024 </strong></h2>
                    <p>
                        CODE CLUB - COTEMIG
                    </p>
                </div>
            </div>

            <div className={styles.techs}>
                <h1>TECHS</h1>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={android} alt="Ícone do android" />
                    <img src={swift} alt="Ícone do swift" />
                    <img src={react} alt="Ícone do react" />
                    <img src={php} alt="Ícone do php" />
                </div>
            </div>

        </section>
    )
}

export default Sobre

