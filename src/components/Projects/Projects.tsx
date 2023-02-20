import './Projects.css';
import { Post } from '../Post/Post';
import { NERecs, Tableau } from '../../constants';

export const Projects = (): JSX.Element => {
    return (
        <main id='main'>
            <section className='posts'>
                <Post {...NERecs} />
                <Post {...Tableau} />
                <Post {...Tableau} />
                <Post {...Tableau} />
            </section>
        </main>
    );
}