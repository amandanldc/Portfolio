import styles from './Card.module.css'
import { Link } from 'react-router-dom';

function Card({ name, description, html_url }) {
    const handleLinkClick = () => {
        window.open(html_url, '_blank');
    };

    return (
        <section>
            <Link to="#" onClick={handleLinkClick} className={styles.card}>
                <h3>{name}</h3>
                <p>{description}</p>
            </Link>
        </section>
    );
}

export default Card
