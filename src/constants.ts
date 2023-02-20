import { project } from "./types";
import python from "./assets/images/python.png"; 
import tableau from './assets/images/tableau.png';

export const NERecs: project = { 
    title: 'Restaurant Recommendation System',
    description: 'Using Python to output ranked recommended restaurants with user parameters and Google Places API.',
    imageSrc: python,
    projectUrl: 'https://github.com/samile213/NERecs'
};

export const Tableau: project = {
    title: 'Tableau Dashboards',
    description: 'Tableau dashboards for projects on recommended restaurants, effects of deep brain stimulation, and Netflix watch history.',
    imageSrc: tableau,
    projectUrl: 'https://public.tableau.com/app/profile/sam.c4119'
};