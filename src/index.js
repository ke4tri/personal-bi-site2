import 'bootstrap';
import './index.scss';

import getProjFirst from './projects';
import getTechFirst from './tech';


const startUp = () => {
  getProjFirst();
  getTechFirst();
};

startUp();
