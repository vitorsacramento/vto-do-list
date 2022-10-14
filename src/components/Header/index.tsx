import { Wrapper } from '../Wrapper';
import logo from '../../assets/img/logo.png';
import './styles.css';

export const Header = () => {

    return (
        <header>
            <Wrapper justifyContent='space-between'>
                <img src={logo} alt="" className="logo"/>
            </Wrapper>
        </header>
    );
}