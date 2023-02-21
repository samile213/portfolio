import './Projects.css';
import { Post } from '../Post/Post';
import { DBS, NERecs, Netflix, Restaurant } from '../../constants';

export const Projects = (): JSX.Element => {
    return (
        <main id='main'>
            <Post {...NERecs} />
            <Post {...Restaurant} />
            <Post {...DBS} />
            <Post {...Netflix} />
        </main>
    );
}