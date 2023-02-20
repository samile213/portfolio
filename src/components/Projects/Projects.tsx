import './Projects.css';
import { Post } from '../Post/Post';
import { DBS, NERecs, Netflix, Restaurant } from '../../constants';

export const Projects = (): JSX.Element => {
    return (
        <main id='main'>
            <section className='posts'>
                <Post {...NERecs} />
                <Post {...Restaurant} />
                <Post {...DBS} />
                <Post {...Netflix} />
            </section>
        </main>
    );
}