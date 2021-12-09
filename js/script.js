/*
Treehouse Techdegree: Data Pagination and Filtering
*/



/*
Create the `showPage` function
This function creates and inserts the elements needed to display a "page" of nine students
*/
function showPage (list, page) {
   // create two variables which will represent the index for the first and last student on the page
   const startIndex = (page parameter * items per page) - items per page;
   const endIndex = page parameter * items per page;

  // select the element with a class of `student-list` and assign it to a variable
  const studentList = document.getElementsByClassName('student-list');


  // set the innerHTML property of the variable you just created to an empty string
  studentList.innerHTML = '';


  // loop over the length of the `list` parameter
  for (let i=0; list.length; i++) {

      if( i >= startIndex && i < endIndex) {
        const h3 = documnet.createElement(h3);
        const 

        studentItem = ${}

      }

  }
    // inside the loop create a conditional to display the proper students
      // inside the conditional:
        // create the elements needed to display the student information
        // insert the above elements

    

};



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
