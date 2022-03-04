// your code here
//select containers, event listeners
const mtnDetails = document.querySelector("#mountain-details");
const mountainList = document.querySelector(`#mountains-list`);
const likeBttn= document.querySelector(`#like-button`); 
const mtnLikes = document.querySelector(`#mountain-likes`)
const imgBox = document.querySelector(`#mountain-image`);
const locationBox = document.querySelector(`#mountain-location`);
const nameBox = document.querySelector(`#mountain-name`);
const baseURL = `http://localhost:3000/mountains`
//fetch data 
fetch(baseURL)
.then(mountains => mountains.json())
.then(mtnArray => renderMountainList(mtnArray));

//SEE A RANDOM MOUNTAIN IN MOUNTAIN-DETAILS DIV

//LIST OF MOUNTAIN NAMES BELOW
function renderMountainList(mtnArray){
    //create element
    for (mtn of mtnArray){
    const mtnLi = document.createElement("li");
    mtnLi.innerText = mtn.name;
    mtnLi.mtnId = mtn.id;
    mtnLi.addEventListener(`click`,(e) => renderDetails(e));
   // debugger;
    mountainList.appendChild(mtnLi);
    }
    console.log(mtnArray);
    console.log("mountain list made");
};

//CLICK ON MOUNTAIN AND SEE DETAILS
function renderDetails(e){
fetch(`${baseURL}/${e.target.mtnId}`)
.then(mtn => mtn.json())
.then(mtnObj => {
    console.log(mtnObj);
   // debugger;
    //update pic
    imgBox.src = mtnObj.image;
    //update mtn name
    nameBox.innerText = mtnObj.name;
    //update mtn location
    locationBox.innerText = mtnObj.location;
    //display likes
    mtnLikes.innerText = mtnObj.likes;
});
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