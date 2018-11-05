import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import getProj from './projectData';

const createProjCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    newString += `
      <div class="card u-clearfix">
        <div class="card-body">
          <span class="card-number card-circle subtle">$${project[0]}</span>
          <span class="card-author subtle"></span>
          <h2 class="card-title">${project.name}</h2>
          <span class="card-description subtle">${project.specialSkill}</span>
          <div class="card-read"><span class="subtle">Color</span>${project.color}</div>
        </div>
        <img src="${project.gif}" alt="" class="card-media" />
      </div>`;
  });

  $('#projects').html(newString);
};

const getProjFirst = () => {
  getProj()
    .then((data) => {
      createProjCards(data.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default getProjFirst;
