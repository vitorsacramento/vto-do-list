import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './styles.css';

export const Footer = () => {

    return (
        <footer>
            <h2>Desenvolvido por Vitor Sacramento | out 22 | {new Date().getFullYear()}</h2>
            <div className="social">
                <a href="https://github.com/vitorsacramento" target={'_blank'}>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/vitorsacramento/" target={'_blank'}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </footer>
    );
}