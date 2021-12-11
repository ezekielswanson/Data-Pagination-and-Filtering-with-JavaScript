/*
Treehouse Techdegree: Data Pagination and Filtering
*/

/* Global Variables */
const itemsPerPage = 9;

/*
Create the `showPage` function
This function creates and inserts the elements needed to display a "page" of nine students

List parameter represents array of student data.
Page parameter reprsents the page number to be displayed.
*/
function showPage (list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   const studentList = document.getElementsByClassName('student-list');

   studentList.innerHTML = '';


   for (let i=0; list.length; i++) {
      if ( i >= startIndex && i < endIndex) {

      const studentItem = 
      
      `<li class="student-item cf">
      <div class="student-details">
            <img class="avatar" src=${list[i].picture.thumbnail} alt='Profile Picture'>
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
      </div>
      <div>
      <span class="date">Joined ${list[i].registered.date}</span>
      </div>
      </li>`;

      studentList.insertAdjacentHTML('beforeend', studentDisplay);

      };
  };
  showPage(data,1);
};








/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions


