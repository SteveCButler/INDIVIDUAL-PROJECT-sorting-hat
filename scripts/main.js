const students = [
  {
    id: 1,
    name: "student 1",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 2,
    name: "student 2",
    house: "Hufflepuff",
    expelled: false,
  },
  {
    id: 3,
    name: "student 3",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 4,
    name: "student 4",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 5,
    name: "student 5",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 6,
    name: "student 6",
    house: "Hufflepuff",
    expelled: false,
  },
  {
    id: 7,
    name: "student 7",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 8,
    name: "student 8",
    house: "Slytherin",
    expelled: true,
  },
];

// ### Utility Function
const renderToDom = (divId, htmlString) => {
  const displayContainer = document.querySelector(divId);
  displayContainer.innerHTML = htmlString;
};

const createCard = (array) => {
  let activeStudent = "";
  let expelledStudent = "";
  let htmlString = "";

  for (const student of array) {
    if (!student.expelled) {
      activeStudent += ` <div class="card w-25 d-flex flex-row ">
      <div class="color--${student.house}1"></div>
      
      <div class="card-body">
         <h5 class="card-title">${student.name}</h5>
         <p class="card-text">${student.house}</p>
         <a id="expelled" class="btn btn-sm btn-danger">Expell</a>
      </div>
     
      
   </div>
   `;
    } else {
      expelledStudent += `<div class="card w-25">
        <div class="card-body">
          <h5 class="card-title">EXPELLED</h5>
          <p class="card-text">${student.name}</p>
        </div>
  </div> `;
    }
  }

  if (activeStudent.length > 0) {
    htmlString = activeStudent;
    renderToDom("#firstYearsContainer", htmlString);
  }
  if (expelledStudent.length > 0) {
    htmlString = expelledStudent;
    renderToDom("#mortysArmyContainer", htmlString);
  }
};

createCard(students);
