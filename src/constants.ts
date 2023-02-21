import { project } from "./types";
import python from "./assets/images/python.png"; 
import python2 from "./assets/images/python2.png"; 

import restaurant from './assets/images/restaurant.png';
import dbs from './assets/images/dbs.png';
import netflix from './assets/images/netflix.png';

export const NERecs: project = { 
    title: 'Restaurant Recommendation System',
    description: 'Python program that outputs ranked recommended restaurants with custom user parameters and Google Places API.',
    imageSrc: python2,
    projectUrl: 'https://github.com/samile213/NERecs'
};

export const Restaurant: project = {
    title: '[Tableau] Restaurant Recommendation System',
    description: "Dashboard showcasing common search results, price levels and average ratings of users search history.",
    imageSrc: restaurant,
    projectUrl: 'https://public.tableau.com/app/profile/sam.c4119/viz/NeRecsUserProfileExample/Dashboard1'
};

export const DBS: project = {
    title: '[Tableau] Effects of Deep Brain Stimulation',
    description: 'Dashboard showcasing pre/post stimulation, affected regions, and distribution of brain activity measurements.',
    imageSrc: dbs,
    projectUrl: 'https://public.tableau.com/app/profile/sam.c4119/viz/EffectsofDBSonNVC/Dashboard1'
};

export const Netflix: project = {
    title: '[Tableau] Netflix',
    description: "Dashboard showcasing Netflix's history of uploaded content including country of origin, and ESRB ratings.",
    imageSrc: netflix,
    projectUrl: 'https://public.tableau.com/app/profile/sam.c4119/viz/NetflixHistory_16765759040370/Dashboard1'
};