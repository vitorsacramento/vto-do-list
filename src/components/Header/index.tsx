import { Wrapper } from '../Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/img/logo.png';
import './styles.css';

export const Header = () => {

    return (
        <header>
            <Wrapper justifyContent='space-between'>
                <img src={logo} alt="" className="logo"/>
                <div className="social">
                    <a href="https://github.com/vitorsacramento" target={'_blank'}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/vitorsacramento/"target={'_blank'}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </Wrapper>
        </header>
    );
}