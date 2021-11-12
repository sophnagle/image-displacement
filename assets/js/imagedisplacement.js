// loop over each section, get image and replace with canvas
const sections = document.querySelectorAll("section")

sections.forEach(section => {
    // select images
    const originalImage = section.querySelector("img")
    // get the image source
    const originalImageSource = originalImage.getAttribute("src")
    // remove contents of section
    section.innerHTML = ""

    // set up a pixi application 
    const app = new PIXI.Application({
        // these can be editied depending on the size of the images selected
        width: 1100,
        height: 800,
        transparent: true
    })

    // add the pixi application to the section tag
    section.appendChild(app.view)

})