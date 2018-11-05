import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import getTec from './techData';

const createTechCards = (techs) => {
  let newString = '';
  for (let i = 0; i < techs.length; i += 0) {
    newString += `
      <div class="techImg">${techs[i]}</div>
        `;
  }
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
