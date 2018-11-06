import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import getTec from './techData';

const createTechCards = (techs) => {
  let newString = '';
  techs.forEach((tech) => {
    console.log('this is it');
    newString += `
      <div class="techImg"><img src="${tech.tech}" alt="tech" height="100" width="100"></div>
        `;
  });
  $('#technologies').html(newString);
};

const getTechFirst = () => {
  getTec()
    .then((data) => {
      console.log(`This is the data ${data}`);
      createTechCards(data.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default getTechFirst;
