import { project } from "./types";
import python from "./assets/images/python.png"; 
import python2 from "./assets/images/python2.png"; 

import restaurant from './assets/images/restaurant.png';
import dbs from './assets/images/dbs.png';
import netflix from './assets/images/netflix.png';

export const NERecs: project = { 
    title: 'Restaurant Recommendation System',
    description: 'Using Python to output ranked recommended restaurants with user parameters and Google Places API.',
    imageSrc: python2,
    projectUrl: 'https://github.com/samile213/NERecs'
};

export const Restaurant: project = {
    title: '(Tableau) Restaurant Recommendation',
    description: 'Tableau dashboards for projects on recommended restaurants, effects of deep brain stimulation, and Netflix watch history.',
    imageSrc: restaurant,
    projectUrl: 'https://public.tableau.com/app/profile/sam.c4119'
};

export const DBS: project = {
    title: '(Tableau) Effects of Deep Brain Stimulation',
    description: 'Tableau dashboards for projects on recommended restaurants, effects of deep brain stimulation, and Netflix watch history.',
    imageSrc: dbs,
    projectUrl: 'https://public.tableau.com/app/profile/sam.c4119'
};

export const Netflix: project = {
    title: '(Tableau) Netflix',
    description: 'Tableau dashboards for projects on recommended restaurants, effects of deep brain stimulation, and Netflix watch history.',
    imageSrc: netflix,
    projectUrl: 'https://public.tableau.com/app/profile/sam.c4119'
};