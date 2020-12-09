import {Viewer} from "../node_modules/@xeokit/xeokit-sdk/src/viewer/Viewer.js";
import {GLTFLoaderPlugin} from "../node_modules/@xeokit/xeokit-sdk/src/plugins/GLTFLoaderPlugin/GLTFLoaderPlugin.js";

// Create a Viewer
const viewer = new Viewer({
  canvasId: "myCanvas"
});

// Add a XKTLoaderPlugin
const gltfLoader = new GLTFLoaderPlugin(viewer);

// Load geometry and metadata
const model = gltfLoader.load({
  id: "myModel",
  src: "../models/Duplex.gltf",
});

// Fit camera to model when loaded
model.on("loaded", function() {
    viewer.cameraFlight.jumpTo(model);
});