import $ from 'jquery';
import 'bootstrap';

import './index.scss';

$('#click-button').on('click', () => {
  $('#important-text').append('MAKE ME A SANDBURGER!');
});
