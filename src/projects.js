import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import getProj from './projectData';

const createProjCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    if (project.available === true) {
      newString += `
      <div class="card u-clearfix card mt-4 d-flex flex-column-reverse" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${project.title}</h2>
          <div class="card-read"><span class="subtle">Discription : </span>${project.description}</div>
        </div>
        <img src="${project.screenshot}" alt="" class="card-media img-thumbnail" />
      </div>`;
    }
  });

  $('#projects').html(newString);
};

const getProjFirst = () => {
  getProj()
    .then((data) => {
      console.log(`This is the data ${data}`);
      createProjCards(data.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default getProjFirst;
