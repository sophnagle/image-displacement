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

    // make a new image
    let image = null
    let displacementImage = null

    // make a new loader
    const loader = new PIXI.loaders.Loader()

    // load in our image 
    loader.add("image", originalImageSource)
    loader.add("displacement", "assets/images/displacement1.jpg")
    loader.load((loader, resources) => {
        // once the image had loaded now do things
        image = new PIXI.Sprite(resources.image.texture)
        displacementImage = new PIXI.Sprite(resources.displacement.texture)

        image.x = 100
        image.y = 100
        image.width = 900
        image.height = 600
        // this makes the image interactive
        image.interactive = true

        image.filters = [
            // new PIXI.filters.BlurFilter(3,5),
            // new PIXI.filters.NoiseFilter(0.1)
            new PIXI.filters.DisplacementFilter(displacementImage, 100)
        ]

        // add the image to the app
        app.stage.addChild(image)
    })

})