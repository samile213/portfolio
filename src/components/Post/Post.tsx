import { project } from "../../types";
import './Post.css';

export const Post = ( {
    title, 
    description, 
    imageSrc, 
    projectUrl
} : project): JSX.Element => {

    return (
        <article>
            <section className='header'>
                <h2><a href={projectUrl}>{title}<br />
                </a></h2>
            </section>
            <a href={projectUrl} className="image"><img src={imageSrc} alt=""/></a>
            <p>{description}</p>
            <ul>
                <li><a href={projectUrl} className="button">View Project</a></li>
            </ul>
        </article>            
    );
}