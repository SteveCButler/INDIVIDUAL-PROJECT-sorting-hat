const students = [
  {
    id: 1,
    name: "Harry",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 2,
    name: "Ron",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 3,
    name: "Neville",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 4,
    name: "Dean",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 5,
    name: "Seamus",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 6,
    name: "Hermoine",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 7,
    name: "Lavender",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 8,
    name: "Parvati",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 9,
    name: "Ernie",
    house: "Hufflepuff",
    expelled: false,
  },
  {
    id: 10,
    name: "Justin",
    house: "Hufflepuff",
    expelled: false,
  },
  {
    id: 11,
    name: "Hannah",
    house: "Hufflepuff",
    expelled: false,
  },
  {
    id: 12,
    name: "Susan",
    house: "Hufflepuff",
    expelled: false,
  },
  {
    id: 13,
    name: "Terry",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 14,
    name: "Mandy",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 15,
    name: "Michael",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 16,
    name: "Anthony",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 17,
    name: "Padma",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 18,
    name: "Lisa",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 19,
    name: "Draco",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 20,
    name: "Draco",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 21,
    name: "Vincent",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 22,
    name: "Gregory",
    house: "Slytherin",
    expelled: true,
  },
  {
    id: 23,
    name: "Blaise",
    house: "Slytherin",
    expelled: true,
  },
  {
    id: 24,
    name: "Theodore",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 25,
    name: "Pansy",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 26,
    name: "Millicent",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 27,
    name: "Daphne",
    house: "Slytherin",
    expelled: false,
  },
];

// ### Utility Function
const renderToDom = (divId, htmlString) => {
  const displayContainer = document.querySelector(divId);
  displayContainer.innerHTML = htmlString;
};

const headerContent = () => {
  const htmlString = `<h1>Welcome to Hoggy Hoggy Warts, RELOADED!</h1>
  <p>
    Stupefy alohomora totalus orchideous inflamarae locomotor momentum
    serpensortia totalus. Patronum kedavra legiliments petrificus expecto
    banishing expecto patronum arania mobilicorpus petrificus.
  </p>
  <hr />
  <p>
    Think hard, wish hard, but you may be surprised, because I have the
    last say, for I am the sorting hat.
  </p>
  <div>
    <button
      id="newStudentButton"
      type="submit"
      class="btn btn-primary mb-3"
    >
      New Student
    </button>
  </div>
  <div id="formContainer" class="hideForm">
    <h2>Enter First Year's First Name</h2>
    <form class="">
      <div class="mb-3 d-flex justify-content-center">
        <label for="inputStudent" class="col-sm-1 col-form-label"
          >Student:</label
        >
        <div class="col-sm-6">
          <input type="text" class="form-control" id="inputStudent" />
        </div>
        <div id="sortButton">
          <button type="submit" class="btn btn-primary mb-3">Sort</button>
        </div>
      </div>
    </form>
  </div>
  <div id="filterSection">
    <h2>Filter Students</h2>
    <div id="filterButtonContainer">
      <button id="allStudents" class="btn btn-secondary">All</button>
      <button id="gryffindorStudents" class="btn btn-danger">
        Gryffindor
      </button>
      <button id="hufflepuffStudents" class="btn btn-warning">
        Hufflepuff
      </button>
      <button id="ravenclawStudents" class="btn btn-primary">
        Ravenclaw
      </button>
      <button id="slytherinStudents" class="btn btn-success">
        Slytherin
      </button>
    </div>
  </div>`;

  console.log(htmlString);

  renderToDom("#headerContent", htmlString);
};

// ### Create Cards
const createCard = (array) => {
  let activeStudent = "";
  let expelledStudent = "";
  let htmlString = "";

  //for (const student of array) {
  array.forEach((student) => {
    if (!student.expelled) {
      activeStudent += ` <div style="height: 200px; min-width: 200px;" class="card w-25 d-flex flex-row text-center ">
      <div class="color--${student.house}1"></div>
      <div class="color--${student.house}2"></div>
      <div class="card-body">
         <h5 class="card-title">${student.name}</h5>
         <p class="card-text">${student.house}</p>
         <a id="expel--${student.id}" class="btn btn-sm btn-danger">Expel</a>
      </div>
     
   </div>
   `;
    } else {
      expelledStudent += `<div style="height: 200px; min-width: 200px;" class="card w-25 d-flex flex-column text-center ">
  <img src="assets/images/death_eaters_wbst.webp" class="card-img-top" alt="...">
  <div class="card-body">
       <p class="card-text">${student.name} joined <br/> Morty's Army</p>
    
  </div>
</div>`;
    }
  });

  if (activeStudent.length > 0) {
    htmlString = activeStudent;
    renderToDom("#firstYearsContainer", htmlString);
  }
  if (expelledStudent.length > 0) {
    htmlString = expelledStudent;
    renderToDom("#mortysArmyContainer", htmlString);
  }
};

// ### New Student - SORT
const sortStudent = (event) => {
  event.preventDefault();
  const studentName = document.querySelector("#inputStudent");
  const randomSelect = Math.floor(Math.random() * 4);
  let randomHouse = "";
  console.log(event.target.value);
  if (randomSelect === 1) {
    randomHouse = "Gryffindor";
  } else if (randomSelect === 2) {
    randomHouse = "Hufflepuff";
  } else if (randomSelect === 3) {
    randomHouse = "Ravenclaw";
  } else if (randomSelect === 0) {
    randomHouse = "Slytherin";
  }

  const newStudent = {
    id: students.length + 1,
    name: studentName.value,
    house: randomHouse,
  };
  students.push(newStudent);
  createCard(students);
  document.querySelector("form").reset();
};

const eventListenerIntialize = () => {
  const sortButton = document.querySelector("#sortButton");
  sortButton.addEventListener("click", sortStudent);

  // ### SHOW HIDE FORM
  const newStudentButton = document.querySelector("#newStudentButton");
  // *** A way to toggle a class on and off on an element ***
  newStudentButton.addEventListener("click", (event) => {
    const toggleShow = document.querySelector(".hideForm");
    toggleShow.classList.toggle("showForm");
  });

  // ### FILTER BUTTONS
  const all = document.querySelector("#allStudents");
  const gryffindorStudents = document.querySelector("#gryffindorStudents");
  const hufflepuffStudents = document.querySelector("#hufflepuffStudents");
  const ravenclawStudents = document.querySelector("#ravenclawStudents");
  const slytherinStudents = document.querySelector("#slytherinStudents");

  all.addEventListener("click", () => {
    createCard(students);
  });

  gryffindorStudents.addEventListener("click", () => {
    const griff = students.filter((student) => student.house === "Gryffindor");
    createCard(griff);
  });

  hufflepuffStudents.addEventListener("click", () => {
    const huff = students.filter((student) => student.house === "Hufflepuff");
    createCard(huff);
  });

  ravenclawStudents.addEventListener("click", () => {
    const raven = students.filter((student) => student.house === "Ravenclaw");
    createCard(raven);
  });

  slytherinStudents.addEventListener("click", () => {
    const slytherin = students.filter(
      (student) => student.house === "Slytherin"
    );
    createCard(slytherin);
  });

  //#### EXPEL STUDENT
  const expelled = document.querySelector("#firstYearsContainer");

  expelled.addEventListener("click", (event) => {
    if (event.target.id.includes("expel")) {
      const [, studentId] = event.target.id.split("--");

      const expelStudent = students.findIndex(
        (student) => student.id === Number(studentId)
      );
      students[expelStudent].expelled = true;
    }
    createCard(students);
  });
};

const appStart = () => {
  headerContent();
  eventListenerIntialize();
  createCard(students);
};

appStart();
