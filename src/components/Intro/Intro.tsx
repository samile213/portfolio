import './Intro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

export const Home = (): JSX.Element => {
    return (
        <div id='intro'>
            <h1>Samantha Chau <br/> Portfolio</h1>
            <p>Data analyst proficient in Python, SQL, and Tableau.</p>
            <Link activeClass="active" to="main" spy={true} smooth={true} duration={1000}>
                <button id='intro-btn'>
                    <FontAwesomeIcon icon={faArrowDown} />
                </button>
            </Link>
        </div>
    );
}