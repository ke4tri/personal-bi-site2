import axios from 'axios';
import apiKeys from '../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTec = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/tech.json`)
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

// const getTec = () => axios.get('http://localhost:3002/technologies');

export default getTec;
