import axios from 'axios';

// Long way if you want to manipulate data first
// const getDogs = () => {
//   return new Promise((resolve, reject) => {
//     axios.get('https://random-dogs-api.herokuapp.com/dogs/23')
//     .then((data) => {
//        const cleanData = data.data.dogs;
//       resolve(cleanData);
//     })
//     .catch((err) => {
//       reject(err);
//     })
//   });
// }

const getProj = () => axios.get('http://localhost:3003/projects');

export default getProj;
