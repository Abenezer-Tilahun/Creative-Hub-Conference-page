const speakersArray = [
  {
    name: 'Paolo Razzini',
    position: 'International Project Coordinator @ UNIDO',
    description: 'Development Expert with a Extensive Experience in Programme Management.',
    imageLink: 'Design/images/Paolo.jpg',
    img1: 'Design/images/speaker-background.jpg',
  },
  {
    name: 'Abenezer Tilahun',
    position: 'Full-Stack Software Developer',
    description: '3 years of Expericence of Full-Stack Software Developer and Remote pair-programming. ',
    imageLink: 'Design/images/Abenezer.jpg',
    img1: 'Design/images/speaker-background.jpg',
  },
  {
    name: 'Temesgen Feseha',
    position: 'Creative Hub Manager',
    description: 'A Business and Tech Consultant with over 10 years Expericence  as a founder and a mentor for  start-up ecosystem .',
    imageLink: 'Design/images/Temesgen.jpg',
    img1: 'Design/images/speaker-background.jpg',
  },
  {
    name: 'yohannes kanko',
    position: 'Software Engineer @CBE',
    description: 'Software Engineer at CBE, chief architect engineer responsible for DLSS algorithms in Nvidia graphics cards',
    imageLink: 'Design/images/Jhon.jpg',
    img1: 'Design/images/speaker-background.jpg',
  },
  {
    name: 'Eden Eshetu',
    position: 'Creative Hub Host',
    description: 'Goal-oriented Events Assistant and part of the admin team with a clairvoyant eye for detail and proper team management with ample experience in working on projects, events, trainings .',
    imageLink: 'Design/images/Eden.jpg',
    img1: 'Design/images/speaker-background.jpg',
  },
  {
    name: 'Bereket Temesgen',
    position: 'Senior System Developer @ ALTA',
    description: 'Over 4 years of well experienced  as System Developer at Spreedly building a PCI compliant API.',
    imageLink: 'Design/images/Bereket.jpg',
    img1: 'Design/images/speaker-background.jpg',
  },
];

const speakersDOMElement = document.querySelector('.speakers');
(() => {
  speakersDOMElement.innerHTML = '';
  let displayProps = '';
  for (let i = 0; i < speakersArray.length; i += 1) {
    speakersDOMElement.innerHTML = `${speakersDOMElement.innerHTML}
    <li class="col-12 col-md-6 ${displayProps}">
    <div class="row mb-5 p-4 bg-white align-items-start justify-content-start">
      <div class="col-3 speaker-block pr-0 pl-0 ">
      <img class="img1" src=${speakersArray[i].img1} alt="">
        <img class="speaker-avatar" src=${speakersArray[i].imageLink} alt="Speaker">
      </div>
      <div class="col-9 speaker-block pr-0 pl-4 align-items-center justify-content-center">
        <h3 class="mb-1 section-title font-weight-bold">${speakersArray[i].name}</h3>
        <p class="orange font-italic">${speakersArray[i].position}</p>
        <hr class="hr-speakers ml-0 mb-3">
        <p>${speakersArray[i].description}</p>
      </div>
      </div>
     </div>
    </li>`;

    if (i === 1) {
      displayProps = 'd-none d-md-block';
      speakersDOMElement.innerHTML = `${speakersDOMElement.innerHTML}
      <li class="more-speakers col-12 text-center mb-5 border d-block d-md-none">
      <a data-toggle="collapse" data-target="#demo" href="#" class="text-uppercase btn rounded-0 ">
        More <i class="fa fa-chevron-down orange"></i>
      </a>
      </li>`;
    }
  }
})();
