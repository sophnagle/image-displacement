// loop over each section, get image and replace with canvas
const sections = document.querySelectorAll("section")

sections.forEach(section => {
    // select images
    const originalImage = section.querySelector("img")
    // get the image source
    const originalImageSource = originalImage.getAttribute("src")
    // remove contents of section
    section.innerHTML = ""
})