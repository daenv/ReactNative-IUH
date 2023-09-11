// Function to load all images in parallel
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (imgPath) => await createImage(imgPath));

    const allImages = await Promise.all(imgs);

    allImages.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err.message);
  }
};

// Test data for Part 2
const imagePaths = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];

// Call the function to load all images in parallel
loadAll(imagePaths);
