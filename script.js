//Open pop-up
const dialog = document.querySelector("dialog");

document.getElementById("newBook").addEventListener("click",()=>{
  dialog.showModal();
});


//Close pop-up

document.getElementById("close").addEventListener("click", () => {
  dialog.close();

});


//My library...
let myLibrary = [];
  // the constructor...
function Book(title, author, pages, year, read) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.read = read;
  this.cardId="";

}


//Create cards and adds to library
function addBookToLibrary() {

  const container = document.getElementById("container");
  const wrapper = document.getElementById("wrapper");
  container.appendChild(wrapper);

  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const year = document.getElementById("year");
  const read = document.getElementById("status");

  const card = document.getElementById("wrapper").lastChild;
  const cardId = card.id;


  const book = new Book(title.value, author.value, pages.value, year.value, read);
  book.cardId = cardId;
  myLibrary.push(book);
  console.log(myLibrary);
  resetInputFields();
  dialog.close();
  }

  



  function createCard(){
    const wrapper = document.getElementById("wrapper");

    const card = document.createElement("div");
    const cardId = "card_" + Date.now();
    const cardIndex = myLibrary.length;
    card.classList.add("card");
    card.id = cardId;
    wrapper.appendChild(card);

      const title = document.createElement("h1");
      title.id = "title";
      card.appendChild(title);
      title.textContent = document.getElementById("title").value;

      const author = document.createElement("h2");
      author.id = "author";
      card.appendChild(author);
      author.textContent = document.getElementById("author").value;

      const pages = document.createElement("h3");
      pages.id = "pages";
      card.appendChild(pages);
      pages.textContent =document.getElementById("pages").value +" Pages";

      const year = document.createElement("h3");
      year.id = "year";
      card.appendChild(year);
      year.textContent = "Year: "+document.getElementById("year").value;

      const toggle = document.createElement("label");
      toggle.classList.add("switch");
      card.appendChild(toggle);

      const read = document.createElement("h3");
      read.textContent="Read?";
      toggle.appendChild(read);

      const input = document.createElement("input");
      input.id="status_" + cardId;
      input.type="checkbox";
      input.checked = false;
      toggle.appendChild(input);

      const span=document.createElement("span");
      span.classList.add("slider", "round");
      toggle.appendChild(span);


      input.addEventListener("change", function() {
        const cardId = card.id;
        const book = myLibrary.find((book) => book.cardId === cardId);
      
        if (book) {
          book.read = this.checked; // Update read status
          console.log(myLibrary);
        }
      });
      






      //Delete button of each card
      const deleteButton = document.createElement("button");
      deleteButton.textContent="X";
      deleteButton.id ="deleteButton";
      card.appendChild(deleteButton);


      deleteButton.addEventListener("click", function(){
       
        const cardId = card.id;

        wrapper.removeChild(card); 

        // Retrieve the index from the data attribute
           const bookIndex = myLibrary.findIndex((book) => book.cardId === cardId);

          


        // Remove the corresponding book from myLibrary
        if (bookIndex !== -1) {
          myLibrary.splice(bookIndex, 1);
          console.log(myLibrary);
        }
      });
      
      };

      function resetInputFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
        document.getElementById("year").value = "";
      }