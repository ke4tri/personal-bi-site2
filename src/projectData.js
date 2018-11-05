import axios from 'axios';


const getProj = () => axios.get('http://localhost:3003/projects');

export default getProj;
