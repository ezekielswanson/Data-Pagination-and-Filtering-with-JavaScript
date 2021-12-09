/*
Treehouse Techdegree: Data Pagination and Filtering
*/



/*
Create the `showPage` function
This function creates and inserts the elements needed to display a "page" of nine students

List parameter represents array of student data.
Page parameter reprsents the page number to be displayed.
*/
function showPage (list, page) {
   const startIndex = (page parameter * items per page) - items per page;
   const endIndex = page parameter * items per page;
   const studentList = document.getElementsByClassName('student-list');

   studentList.innerHTML = '';

   for (let i=0; list.length; i++) {
      if ( i >= startIndex && i < endIndex) {
            const studentItem = 
            `<li class="student-item cf">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            
            
            
            `
   

      }

  }


};



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
