import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import getProj from './projectData';
// import getProj2 from './projectData';

const createProjCards = (projects) => {
  let domString = '';
  projects.forEach((project) => {
    domString += `<div id='${project.id}' class='card2 card col-3 p-1 m-5'>
        <img class="card-img-top" src=${project.screenshot}
        <div class="card-body">
            <h5 class="card-title mt-3">${project.title}</h5>
            <h6 class="card-text">${project.description}</h6>
            <p class="technologies-used">${project.technologiesUsed}</p>
            <a href="${project.githubUrl}" id="linkFont" class="btn d-flex justify-content-center">GitHub</a>
        </div>
    </div>`;
  });
  $('#projects').html(domString);
};

// const createProjCards2 = (projects) => {
//   let domString = '';
//   projects.forEach((project) => {
//     domString += `<div id='${project.id}' class='card2 card col-3 p-1 m-5'>
//         <img class="card-img-top" src=${project.screenshot}
//         <div class="card-body">
//            <h5 class="card-title mt-3">${project.title}</h5>
//            <h6 class="card-text">${project.description}</h6>
//            <p class="technologies-used">${project.technologiesUsed}</p>
// eslint-disable-next-line max-len
//            <a href="${project.githubUrl}" id="linkFont" class="btn d-flex justify-content-center">GitHub</a>
//         </div>
//     </div>`;
//   });
//   $('#projects').html(domString);
// };

const getProjFirst = () => {
  getProj()
    .then((data) => {
      console.log(`This is the data ${data}`);
      createProjCards(data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

// const getProjFirst2 = () => {
//   getProj2()
//     .then((data) => {
//       console.log(`This is from data2 ${data}`);
//        createProjCards2(data.data);
//     })
//     .catch((error) => {
//       console.error({ error });
//     });
// };

// export default getProjFirst2;
export default getProjFirst;
