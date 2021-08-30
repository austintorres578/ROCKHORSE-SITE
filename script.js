var videoOne = document.getElementById("video-1");
var videoTwo = document.getElementById("video-2");
var videoThree = document.getElementById("video-3");

var videoOneBtns = document.getElementById("video-1-btns");
var videoOneLeft = document.getElementById("video-1-left");
var videoOneRight = document.getElementById("video-1-right");

var videoTwoBtns = document.getElementById("video-2-btns");
var videoTwoLeft = document.getElementById("video-2-left");
var videoTwoRight = document.getElementById("video-2-right");

var videoThreeBtns = document.getElementById("video-3-btns");
var videoThreeLeft = document.getElementById("video-3-left");
var videoThreeRight = document.getElementById("video-3-right");

videoOneLeft.addEventListener("click",changeVideoThreeFromOne);
videoOneRight.addEventListener("click", changeVideoTwoFromOne);

videoTwoLeft.addEventListener("click",changeVideoOneFromTwo);
videoTwoRight.addEventListener("click",changeVideoThreeFromTwo);

videoThreeLeft.addEventListener("click",changeVideoTwoFromThree);
videoThreeRight.addEventListener("click",changeVideoOneFromThree);

function changeVideoThreeFromOne(){
    videoOne.style.display="none";
    videoOneBtns.style.display="none";
    videoThree.style.display="block";
    videoThreeBtns.style.display="flex";
};

function changeVideoTwoFromOne(){
    videoOne.style.display="none";
    videoOneBtns.style.display="none";
    videoTwo.style.display="block";
    videoTwoBtns.style.display="flex";
};

function changeVideoOneFromTwo(){
    videoTwo.style.display="none";
    videoTwoBtns.style.display="none";
    videoOne.style.display="block";
    videoOneBtns.style.display="flex";
};

function changeVideoThreeFromTwo(){
    videoTwo.style.display="none";
    videoTwoBtns.style.display="none";
    videoThree.style.display="block";
    videoThreeBtns.style.display="flex";
};

function changeVideoTwoFromThree(){
    videoThree.style.display="none";
    videoThreeBtns.style.display="none";
    videoTwo.style.display="block";
    videoTwoBtns.style.display="flex";
};

function changeVideoOneFromThree(){
    videoThree.style.display="none";
    videoThreeBtns.style.display="none";
    videoOne.style.display="block";
    videoOneBtns.style.display="flex";
};

var seventiesBtn = document.getElementById("seventies-btn");
var eightiesBtn = document.getElementById("eighties-btn");
var ninetiesBtn = document.getElementById("nineties-btn");

var seventiesSongList = document.getElementById("seventies-song-list");
var eightiesSongList = document.getElementById("eighties-song-list");
var ninetiesSongList = document.getElementById("nineties-song-list");

seventiesBtn.addEventListener("click",changeToSeven);
eightiesBtn.addEventListener("click",changeToeight);
ninetiesBtn.addEventListener("click",changeToNine);

function changeToSeven(){
    seventiesBtn.style.backgroundColor="red";
    seventiesSongList.style.display="block";
    eightiesSongList.style.display="none";
    eightiesBtn.style.backgroundColor="black";
    ninetiesSongList.style.display="none";
    ninetiesBtn.style.backgroundColor="black";
};

function changeToeight(){
    eightiesSongList.style.display="block";
    eightiesBtn.style.backgroundColor="red";
    seventiesBtn.style.backgroundColor="black";
    seventiesSongList.style.display="none";
    ninetiesSongList.style.display="none";
    ninetiesBtn.style.backgroundColor="black";
};

function changeToNine(){
    ninetiesSongList.style.display="block";
    ninetiesBtn.style.backgroundColor="red";
    seventiesBtn.style.backgroundColor="black";
    seventiesSongList.style.display="none";
    eightiesSongList.style.display="none";
    eightiesBtn.style.backgroundColor="black";
};

var imageOneLeft = document.getElementById("image-1-left");
var imageOneRight = document.getElementById("image-1-right");

var imageTwoLeft = document.getElementById("image-2-left");
var imageTwoRight = document.getElementById("image-2-right");

var imageThreeLeft = document.getElementById("image-3-left");
var imageThreeRight = document.getElementById("image-3-right");

var imageFourLeft = document.getElementById("image-4-left");
var imageFourRight = document.getElementById("image-4-right");

var imageFiveLeft = document.getElementById("image-5-left");
var imageFiveRight = document.getElementById("image-5-right");

var sliderImagesOne = document.getElementById("desk-media-images-content-one");
var sliderImagesTwo = document.getElementById("desk-media-images-content-two");
var sliderImagesThree = document.getElementById("desk-media-images-content-three");
var sliderImagesFour = document.getElementById("desk-media-images-content-four");
var sliderImagesFive = document.getElementById("desk-media-images-content-five");

imageOneLeft.addEventListener("click",slideToImageFiveFromOne);
imageOneRight.addEventListener("click",slideToImageTwoFromOne);

imageTwoLeft.addEventListener("click",slideToImageOneFromTwo);
imageTwoRight.addEventListener("click",slideToImageThreeFromTwo);

imageThreeLeft.addEventListener("click",slideToImageTwoFromThree);
imageThreeRight.addEventListener("click",slideToImageFourFromThree);

imageFourLeft.addEventListener("click",slideToImageThreeFromFour);
imageFourRight.addEventListener("click",slideToImageFiveFromFour);

imageFiveLeft.addEventListener("click",slideToImageFourFromFive);
imageFiveRight.addEventListener("click",slidetoImageOneFromFive);

function slideToImageFiveFromOne(){
    sliderImagesOne.style.display="none";
    sliderImagesFive.style.display="flex";
};

function slideToImageTwoFromOne(){
    sliderImagesOne.style.display="none";
    sliderImagesTwo.style.display="flex";
};
function slideToImageOneFromTwo(){
    sliderImagesTwo.style.display="none";
    sliderImagesOne.style.display="flex";
};
function slideToImageThreeFromTwo(){
    sliderImagesTwo.style.display="none";
    sliderImagesThree.style.display="flex";
};
function slideToImageTwoFromThree(){
    sliderImagesThree.style.display="none";
    sliderImagesTwo.style.display="flex";
};
function slideToImageFourFromThree(){
    sliderImagesThree.style.display="none";
    sliderImagesFour.style.display="flex";
};
function slideToImageThreeFromFour(){
    sliderImagesFour.style.display="none";
    sliderImagesThree.style.display="flex";
};
function slideToImageFiveFromFour(){
    sliderImagesFour.style.display="none";
    sliderImagesFive.style.display="flex";
};
function slideToImageFourFromFive(){
    sliderImagesFive.style.display="none";
    sliderImagesFour.style.display="flex";
};
function slidetoImageOneFromFive(){
    sliderImagesFive.style.display="none";
    sliderImagesOne.style.display="flex";
};