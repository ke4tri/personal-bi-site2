import axios from 'axios';
import apiKeys from '../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProj = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((result) => {
      const allProjectsObject = result.data;
      const allProjectsArray = [];
      if (allProjectsObject != null) {
        Object.keys(allProjectsObject).forEach((project) => {
          const newProject = allProjectsObject[project];
          newProject.id = project;
          allProjectsArray.push(newProject);
        });
      }
      resolve(allProjectsArray);
      console.log('here', allProjectsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

// const getProj = () => axios.get('http://localhost:3003/projects');

// const getProj2 = () => axios.get('https://website-7ccff.firebaseio.com/');

export default getProj;
// export default { getProj, getProj2 };
