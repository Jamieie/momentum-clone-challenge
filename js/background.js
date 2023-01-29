const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImg = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.id = "bg-img";
bgImage.src = `images/${chosenImg}`;
document.body.appendChild(bgImage);