import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub,  } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


export const Footer = (): JSX.Element => {
    return (
        <footer>
            <section className='linkedIn'>
                <a href='https://www.linkedin.com/in/sam-wchau'>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <p>in/sam-wchau</p>
                </a>
            </section>
            <section className='email'>
                <a>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>sam.chau@alum.utoronto.ca</p>
                </a>
            </section>
            <section className='github'>
                <a href='https://github.com/samile213'>
                    <FontAwesomeIcon icon={faGithub} />
                    <p>samile213</p>
                </a>
            </section>
            <section>
                <a href='https://public.tableau.com/app/profile/sam.c4119'>
                <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                <p>sam.c4119</p>
                </a>
            </section>
        </footer>
    );
}