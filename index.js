const slideTrack = document.querySelector(".slide-track");
let pushplayIcn = document.getElementById("pushplayIcn");

const imagePaths = [
  "./images/img1.jpg",
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
  "./images/img5.jpg",
  "./images/img6.jpg",
  "./images/img7.jpg",
  "./images/img8.jpg",
  "./images/img9.jpg",
];

let imgpathlength = imagePaths.length;
let isScrolling = true; //track the scroll state

for (let i = 0; i < imgpathlength; i++) {
  const slideDiv = document.createElement("div");
  slideDiv.classList.add("slide");

  const img = document.createElement("img");
  img.src = imagePaths[i];
  img.alt = "";

  slideDiv.appendChild(img);

  slideTrack.appendChild(slideDiv);
}

for (let i = 0; i < imgpathlength; i++) {
  const slideDiv = document.createElement("div");
  slideDiv.classList.add("slide");

  const img = document.createElement("img");
  img.src = imagePaths[i];
  img.alt = "";

  slideDiv.appendChild(img);

  slideTrack.appendChild(slideDiv);
}

function PausePlay() {
    if(isScrolling==true)
    {
        isScrolling= false;
        slideTrack.style.animationPlayState="paused";
        pushplayIcn.src="./images/play-button.png";
    }
    else{
        isScrolling=true;
        slideTrack.style.animationPlayState="running";
        pushplayIcn.src="./images/pause.png"; 
    }
    
}
