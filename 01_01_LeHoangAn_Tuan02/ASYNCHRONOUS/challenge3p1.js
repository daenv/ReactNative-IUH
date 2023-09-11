// Helper function to create a promise that resolves after a specified delay
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// Function to create an image element and load an image
const createImage = async function (imgPath) {
  try {
    const img = document.createElement("img");
    img.src = imgPath;

    await new Promise((resolve, reject) => {
      img.addEventListener("load", function () {
        document.querySelector(".images").appendChild(img);
        resolve(img);
      });

      img.addEventListener("error", function () {
        reject(new Error("Image not found"));
      });
    });

    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err.message);
  }
};

// Function to load and display images sequentially with delays
const loadNPause = async function () {
  try {
    await createImage("img/img-1.jpg");
    await createImage("img/img-2.jpg");
    await createImage("img/img-3.jpg");
  } catch (err) {
    console.error(err.message);
  }
};

// Call the function to start loading and displaying images
loadNPause();
