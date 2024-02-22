//Lesson 1

const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);


//Lesson 2

const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';


const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};


const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);


console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//Lesson 3

const Window = function(tabs) {
    this.tabs = tabs; 
  };
   Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push(tab); 
    return this;
  };
  Window.prototype.tabClose = function(index) {
  this.tabs.splice(index, 1); 
  return this;
  };
  
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); 
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); 
  
 const finalTabs = socialWindow
    .tabOpen('new tab') 
    .join(videoWindow.tabClose(2)) 
    .join(workWindow.tabClose(1).tabOpen('new tab')); 
  console.log(finalTabs.tabs);

  //Lesson 4

let fixedValue = 4;
function incrementer(value) {
  return value + 1;
}

//Lesson 5

const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {
  const newList = [...bookList];
  newList.push(bookName);
  return newList;
}

function remove(bookList, bookName) {

  const newList = [...bookList];
  const bookIndex = newList.indexOf(bookName);
  if (bookIndex >= 0) {
    newList.splice(bookIndex, 1);
  }
  return newList;
}

//Lesson 6

const ratings = watchList.map(movie => ({
    title: movie["Title"],
    rating: movie["imdbRating"]
  }));
  
  console.log(JSON.stringify(ratings));

  //Lesson 7

  Array.prototype.myMap = function(callback) {
    const newArray = [];
    
    for (let i = 0; i < this.length; i++) {
     
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  };

  //Lesson 8


const filteredList = watchList.filter(movie => movie.imdbRating >= 8.0)
.map(movie => ({ title: movie.Title, rating: movie.imdbRating }));

console.log(filteredList);

//Lesson 9

Array.prototype.myFilter = function(callback) {
    const newArray = [];
  
    for (let i = 0; i < this.length; i++) {
      
      if (callback(this[i], i, this)) {
       
        newArray.push(this[i]);
      }
    }
    return newArray;
  };

  //Lesson 10

  function sliceArray(anim, beginSlice, endSlice) {
    
    return anim.slice(beginSlice, endSlice);
    
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3));

  //Lesson 11

  function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
  }

  //Lesson 12

  function nonMutatingConcat(original, attach) {  
    return original.concat(attach);
  const first = [1, 2, 3];
  const second = [4, 5];
  console.log(nonMutatingConcat(first, second)); // [1, 2, 3, 4, 5]