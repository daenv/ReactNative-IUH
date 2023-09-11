// Helper function to create a promise that resolves after a specified delay
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// Function to create an image element and load an image
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      document.querySelector(".images").appendChild(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

// Function to load and display images sequentially with delays
const loadImages = async function () {
  try {
    // Load and display first image
    let img = await createImage("img/img-1.jpg");
    await wait(2);
    img.style.display = "none";

    // Load and display second image
    img = await createImage("img/img-2.jpg");
    await wait(2);
    img.style.display = "none";

    // Load and display third image
    img = await createImage("img/img-3.jpg");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err.message);
  }
};

// Call the function to start loading and displaying images
loadImages();
