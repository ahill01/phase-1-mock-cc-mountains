// your code here
//select containers, event listeners
const mtnDetails = document.querySelector("#mountain-details");
const mountainList = document.querySelector(`#mountains-list`);
const likeBttn= document.querySelector(`#like-button`); 
const mtnLikes = document.querySelector(`#mountain-likes`)


//fetch data 
fetch(`http://localhost:3000/mountains`)
.then(mountains => mountains.json())
.then(mtnArray => renderMountainList(mtnArray));

//SEE A RANDOM MOUNTAIN IN MOUNTAIN-DETAILS DIV

//LIST OF MOUNTAIN NAMES BELOW
function renderMountainList(mtnArray){
    //create element
    for (mtn of mtnArray){
    //debugger;
    const mtnLi = document.createElement("li");
    mtnLi.innerText = mtn.name;
    mtnLi.addEventListener(`click`,() => renderDetails(mtn))
    mountainList.appendChild(mtnLi);
    }
    console.log(mtnArray);
    console.log("mountain list made");
};

//CLICK ON MOUNTAIN AND SEE DETAILS
function renderDetails(mtnObj){
    console.log(mtnObj);

}

//LIKE BUTTON INCREMENTS BY ONE
likeBttn.addEventListener(`click`,(e)=> addLikes(e));
function addLikes(e){
    let likes = parseInt(mtnLikes.innerText);
    likes +=1;
   // debugger;
    mtnLikes.innerText = likes;
   // debugger;
    console.log(`liked`);
};