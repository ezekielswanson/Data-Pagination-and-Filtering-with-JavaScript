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
   const studentList = document.querySelector('.student-list');

   studentList.innerHTML = '';


   for (let i=0; i < list.length; i++) {
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
      

      studentList.insertAdjacentHTML('beforeend', studentItem);

    };
  };
};


showPage(data,1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
@param {list} - represents an array of student data
*/

function addPagination (list) {
      let numOfPages = Math.ceil(list.length / itemsPerPage);
      const linkList = document.querySelector('.link-list');
      linkList.innerHTML = '';

      for (let i = 1; i < numOfPages; i++ ) {
            const button = `
            <li>
            <button type="button">${i}</button>
            </li>`;
            
            linkList.insertAdjacentHTML('beforeend', button);
     };

     activeButtonOne = document.querySelector('button:first-child');
     activeButtonOne.className = 'active';

}
addPagination(data);

// Call functions
