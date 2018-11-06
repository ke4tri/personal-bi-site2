import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import getProj from './projectData';

const createProjCards = (projects) => {
  let domString = '';
  projects.forEach((project) => {
    domString += `<div id='${project.id}' class='card2 card col-3 p-3 m-5'>
        <img class="card-img-top" src=${project.screenshot}
        <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <h6 class="card-text">${project.description}</h6>
            <p class="technologies-used">${project.technologiesUsed}</p>
            <a href="${project.githubUrl}" class="btn btn-secondary d-flex justify-content-center">GitHub</a>
        </div>
    </div>`;
  });
  $('#projects').html(domString);
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
