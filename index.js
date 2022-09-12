//HEADING MENU
//videos
var videosBut = document.getElementById("videos-but");
var modalVideos = document.getElementById("modal-videos");
videosBut.onclick = () => {
  modalFade.style.display = "block";
  modalVideos.style.display = "block";
};
var modalVideosParts = document.getElementsByClassName("modal-videos-part");
var modalVideo = document.getElementById("modal-video");
var modalVideoVideo = document.getElementById("modal-video-video");
for (let i = 0; i < modalVideosParts.length; i++) {
  modalVideosParts[i].addEventListener("click", () => {
    modalVideos.style.display = "none";
    modalVideo.style.display = "block";
    modalVideoVideo.setAttribute("src", `videos/${i}.webm`);
  });
}

// Add active class to the current button (highlight it)
// var hedingBtns = document.getElementsByClassName("heading-menu-buttons");
// for (var i = 0; i < hedingBtns.length; i++) {
//   hedingBtns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active-menu-buttons");
//     current[0].className = current[0].className.replace(
//       " active-menu-buttons",
//       ""
//     );
//     this.className += " active-menu-buttons";
//   });
// }

//MODAL SECTION FADE
let modalFade = document.getElementById("modal-fade");
let modalContent = document.getElementsByClassName("modal-content");
let onSturmanker = document.getElementById("on-sturmanker");
let modalCloseBtn = document.getElementsByClassName("modal-close-btn");
let modalVerSchBtn = document.getElementsByClassName("modal-ver-sch-btn");
let onLedSturmanker = document.getElementById("on-led-sturmanker");
let ledSturBtn = document.getElementById("ledStur-btn");
let sturLedBtn = document.getElementById("sturLed-btn");

for (let i = 0; i < modalCloseBtn.length; i++) {
  modalCloseBtn[i].addEventListener("click", () => {
    modalFade.style.display = "none";
    for (let i = 0; i < modalContent.length; i++) {
      modalContent[i].style.display = "none";
    }
  });
}
for (let i = 0; i < modalVerSchBtn.length; i++) {
  modalVerSchBtn[i].addEventListener("click", () => {
    modalFade.style.display = "none";
    for (let i = 0; i < modalContent.length; i++) {
      modalContent[i].style.display = "none";
    }
  });
}

//viero img modal fade settings
// let onInlayInfo = document.getElementById("on-inlay-info");
// let vieroImg = document.getElementById("viero-img");
// vieroImg.onclick = () => {
//   modalFade.style.display = "block";
//   onInlayInfo.style.display = "block";
// };

// // ACCESORIES SECTION*****************************************************************************************
let sideAccesories = document.getElementById("side-accesories");
let deleteImgAccesories = document.getElementsByClassName(
  "delete-img-accesories"
);
let deleteAccesorie = document.getElementsByClassName("del-acc");
let sideAccCloseBtn = document.getElementsByClassName(
  "side-accesories-close-btn"
);
let addFenceAcc = document.getElementById("add-fence-acc");
let addNewFenceToSide = document.getElementById("addNewFenceToSide");
let openFenceSlider = document.getElementById("open-fence-slider");
let fenceSliderSection = document.getElementById("fence-slider");
let fenceSliderOpen = false;
function closeSliderContainer() {
  openFenceSlider.style.color = "#333333";
  openFenceSlider.children[2].innerHTML = "+";
  fenceSliderSection.style.height = 0;
  fenceSliderOpen = false;
}
openFenceSlider.onclick = () => {
  if (!fenceSliderOpen) {
    openFenceSlider.style.color = "#faa41a";
    openFenceSlider.children[2].innerHTML = "-";
    fenceSliderSection.style.height = "auto";
    fenceSliderOpen = true;
  } else {
    closeSliderContainer();
  }
};
// fence size slider

var pipsSlider = document.getElementById("slider-pips");
var sliderMin = document.getElementById("slider-min");
var sliderPlus = document.getElementById("slider-plus");
var confirmSliderSize = document.getElementById("confirm-slider-size");

noUiSlider.create(pipsSlider, {
  connect: [true, false],
  tooltips: [wNumb({ decimals: 0, postfix: " cm" })],
  range: {
    min: 0,
    max: 180,
  },
  start: [180],

  pips: { mode: "values", values: [0, 90, 180], density: 100 },
});
var pips = pipsSlider.querySelectorAll(".noUi-value");
function clickOnPip() {
  let value = Number(pipsSlider.getAttribute("data-value"));

  pipsSlider.noUiSlider.set(value);
}

for (var i = 0; i < pips.length; i++) {
  pips[i].addEventListener("click", clickOnPip);
}
var valueOfSlider;
pipsSlider.noUiSlider.on("update", function () {
  valueOfSlider = Math.round(Number(pipsSlider.noUiSlider.get()));
  sliderMin.onclick = () => {
    pipsSlider.noUiSlider.set(valueOfSlider - 1);
  };
  sliderPlus.onclick = () => {
    pipsSlider.noUiSlider.set(valueOfSlider + 1);
  };
  if (valueOfSlider < 10) {
    pipsSlider.noUiSlider.set(10);
  }
});

let easyFenceSliderOpt = {
  range: {
    min: 0,
    max: 180,
  },

  pips: { mode: "values", values: [0, 90, 180], density: 100 },
};

let smallRomSliderOpt = {
  range: {
    min: 0,
    max: 60,
  },
  pips: { mode: "values", values: [0, 30, 60], density: 100 },
};

let bigRomSliderOpt = {
  range: {
    min: 61,
    max: 180,
  },
  pips: { mode: "values", values: [61, 120, 180], density: 100 },
};

//ADD FENCE
//add fence activnes

// //CANVAS********************************************************************************************************************
var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
  engine.runRenderLoop(function () {
    if (sceneToRender && sceneToRender.activeCamera) {
      sceneToRender.render();
    }
  });
};

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function () {
  return new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false,
  });
};

//FOR LOADING
BABYLON.DefaultLoadingScreen.prototype.displayLoadingUI = function () {
  if (document.getElementById("customLoadingScreenDiv")) {
    // Do not add a loading screen if there is already one
    document.getElementById("customLoadingScreenDiv").style.display = "initial";
    return;
  }
};
//lottie
let animItem = bodymovin.loadAnimation({
  wrapper: document.getElementById("lottieWraper"),
  animType: "svg",
  loop: true,
  // rendererSettings: {
  //   progressiveLoad: false,
  //   preserveAspectRatio: "xMidYMid meet",
  //   viewBoxSize: "10 10 10 10",
  // },
  path: "https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/loading.json",
});
animItem.resize();
animItem.addEventListener("DOMLoaded", function () {
  animItem.playSegments(
    [
      [0, 100],
      [32, 100],
    ],
    true
  );
});

BABYLON.DefaultLoadingScreen.prototype.hideLoadingUI = function () {
  document.getElementById("customLoadingScreenDiv").style.display = "none";
  // console.log("scene is now loaded");
};
//end of loading

//CREATE SCENE ///////////////////////////////////////////////////
var createScene = function () {
  // for loading
  engine.displayLoadingUI();

  // SCENE
  var scene = new BABYLON.Scene(engine);

  //CAMERA
  var cameraTarget = new BABYLON.MeshBuilder.CreateBox(
    "cameraTarget",
    { width: 0.2, height: 0.2, depth: 0.2 },
    scene
  );
  cameraTarget.position = new BABYLON.Vector3(0.9, 1, 0);
  var camera = new BABYLON.ArcRotateCamera(
    "Camera",
    0,
    0,
    0,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  cameraTarget.isVisible = false;
  // var camera = new BABYLON.FreeCamera(
  //   "camera1",
  //   new BABYLON.Vector3(0, 5, -10),
  //   scene
  // );
  camera.attachControl(canvas, true);
  camera.setPosition(new BABYLON.Vector3(0.9, 1.5, -4.1));
  // camera.setTarget(new BABYLON.Vector3(0.9, 1, 0));
  camera.wheelPrecision = 300;
  camera.target = cameraTarget;

  camera.lowerRadiusLimit = 2;
  // camera.upperRadiusLimit = 50;

  // camera.lowerBetaLimit = 0;
  camera.upperBetaLimit = 1.9;

  //ENVIROMENT
  scene.environmentTexture = new BABYLON.CubeTexture(
    "enviorment/env.env",
    scene
  );
  scene.environmentIntensity = 0.8;

  //LIGHTS
  let lights = [];
  let lightsLite = [];
  let lightsHavy = [];
  // let lightsLed = [];
  let lightColors = [
    "#ff0000",
    "#198754",
    "#ffc107",
    "#0d6efd",
    "#ffffff",
    "#0dcaf0",
    "#f70767",
    "#ff7400",
    "#7B00F7",
    "#7C7C02",
  ];
  lightsBabylon(lightsLite, lightsHavy, lights);
  //set lights color
  lights.forEach((elm) => {
    elm.diffuse = elm.specular = BABYLON.Color3.FromHexString(lightColors[4]);
  });

  //SKY
  var skyBoxes = [];
  addSkyBox(skyBoxes);

  // GROUND
  // createGround();
  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { width: 1, height: 1 },
    scene
  );
  ground.scaling.x = 2.3;
  ground.scaling.z = 0.5;
  ground.position = new BABYLON.Vector3(0.9, 0, 0);
  var grassMaterial = new BABYLON.StandardMaterial("grassMaterial", scene);
  grassMaterial.diffuseTexture = new BABYLON.Texture("img/grass.jpg", scene);
  grassMaterial.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);
  grassMaterial.diffuseTexture.uScale = 4.6; // width / height
  grassMaterial.diffuseTexture.vScale = 1;
  ground.material = grassMaterial;
  ////////////////////////////////////////////////
  function groundChange(x, z) {
    ground.scaling.x = x;
    ground.scaling.z = z;

    // ground.position = new BABYLON.Vector3(0.9, 0, -0.9);
  }

  //SET TEXTURE FOR SHOWING SIZE
  //gound text X
  var groundTextX = BABYLON.MeshBuilder.CreateGround(
    "groundTextX",
    { width: 1, height: 0.5, subdivisions: 25 },
    scene
  );
  var groundTextX2 = BABYLON.MeshBuilder.CreateGround(
    "groundTextX",
    { width: 1, height: 0.5, subdivisions: 25 },
    scene
  );
  groundTextX2.rotation.y = Math.PI;
  //Create dynamic texture
  // var textureResolution = 512;
  var textureGroundX = new BABYLON.DynamicTexture(
    "dynamic texture",
    { width: 512, height: 256 },
    scene
  );
  var textureContextX = textureGroundX.getContext();

  var materialGroundX = new BABYLON.StandardMaterial("Mat", scene);
  materialGroundX.diffuseTexture = textureGroundX;
  materialGroundX.diffuseTexture.hasAlpha = true;
  groundTextX.material = materialGroundX;
  groundTextX2.material = materialGroundX;
  textX = 191;
  //Add text to dynamic texture
  var font = "120px Arial";
  textureGroundX.drawText(
    textX + "cm",
    null,
    null,
    font,
    "black",
    "transparent",
    true,
    true
  );

  //gound text Z
  var groundTextZ = BABYLON.MeshBuilder.CreateGround(
    "groundTextZ",
    { width: 1, height: 0.5, subdivisions: 25 },
    scene
  );
  groundTextZ.rotation.y = Math.PI / 2;
  var groundTextZ2 = BABYLON.MeshBuilder.CreateGround(
    "groundTextZ",
    { width: 1, height: 0.5, subdivisions: 25 },
    scene
  );
  groundTextZ2.rotation.y = -Math.PI / 2;
  //Create dynamic texture

  var textureGroundZ = new BABYLON.DynamicTexture(
    "dynamic texture",
    { width: 512, height: 256 },
    scene
  );
  var textureContextZ = textureGroundZ.getContext();

  var materialGroundZ = new BABYLON.StandardMaterial("Mat", scene);
  materialGroundZ.diffuseTexture = textureGroundZ;
  materialGroundZ.diffuseTexture.hasAlpha = true;
  groundTextZ.material = materialGroundZ;
  groundTextZ2.material = materialGroundZ;
  textZ = 7;
  //Add text to dynamic texture
  // var font = "120px Arial";
  textureGroundZ.drawText(
    textZ + "cm",
    null,
    null,
    font,
    "black",
    "transparent",
    true,
    true
  );

  //   /////////////////////////////////////////////////////////////////////////////////////////

  //FENCE COLORS
  fenceBoardsColors = ["#8c8c8c", "#474747", "#836953", "#ece6d6"];
  fencePartsColors = ["#e6e6e6", "#474747"];

  //   //ALL MATERIALS COLORS
  //   var grauMat = new BABYLON.StandardMaterial("grauMat", scene);
  //   grauMat.diffuseColor = BABYLON.Color3.FromHexString(fenceBoardsColors[0]);

  //   var anthrazitMat = new BABYLON.StandardMaterial("anthrazitMat", scene);
  //   anthrazitMat.diffuseColor = BABYLON.Color3.FromHexString(
  //     fenceBoardsColors[1]
  //   );

  //   var braunMat = new BABYLON.StandardMaterial("braunMat", scene);
  //   braunMat.diffuseColor = BABYLON.Color3.FromHexString(fenceBoardsColors[2]);

  //   var sandMat = new BABYLON.StandardMaterial("sandMat", scene);
  //   sandMat.diffuseColor = BABYLON.Color3.FromHexString(fenceBoardsColors[3]);

  //   var silberMat = new BABYLON.StandardMaterial("silberMat", scene);
  //   silberMat.diffuseColor = BABYLON.Color3.FromHexString(fencePartsColors[0]);

  //   grauMat.specularColor =
  //     anthrazitMat.specularColor =
  //     braunMat.specularColor =
  //     sandMat.specularColor =
  //       // silberMat.specularColor =
  //       new BABYLON.Color3(0.1, 0.1, 0.1);

  //   //FENCE BORDS MATERIAL
  //   var fenceBoardMat = new BABYLON.StandardMaterial("fenceBoardMat", scene);
  //   fenceBoardMat.diffuseColor = BABYLON.Color3.FromHexString(
  //     fenceBoardsColors[0]
  //   );
  //   fenceBoardMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

  //   //SMALL BOARDS MATERIAL
  //   // var smallBoardsMat = new BABYLON.StandardMaterial("smallBoardsMat", scene);
  //   // smallBoardsMat.diffuseColor = BABYLON.Color3.FromHexString(
  //   //   fencePartsColors[0]
  //   // );
  //   // smallBoardsMat.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);

  //   // var smallBoardsMatDark = new BABYLON.StandardMaterial(
  //   //   "smallBoardsMatDark",
  //   //   scene
  //   // );
  //   // smallBoardsMatDark.diffuseColor = BABYLON.Color3.FromHexString(
  //   //   fencePartsColors[1]
  //   // );
  //   // smallBoardsMatDark.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);

  // //FENCE POSTS MATERIAL
  var fencePostMat = new BABYLON.StandardMaterial("fencePostMat", scene);
  fencePostMat.diffuseColor = BABYLON.Color3.FromHexString(fencePartsColors[1]);

  // //FENCE POSTS MATERIAL
  var sturmankerMat = new BABYLON.StandardMaterial("sturmankerMat", scene);
  sturmankerMat.diffuseColor = BABYLON.Color3.FromHexString(
    fencePartsColors[1]
  );

  //   //FENCE START AND END MATERIALS
  //   var fenceStartEndMat = new BABYLON.StandardMaterial(
  //     "fenceStartEndMat",
  //     scene
  //   );
  //   fenceStartEndMat.diffuseColor = BABYLON.Color3.FromHexString(
  //     fencePartsColors[1]
  //   );
  //   fenceStartEndMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

  //   var inlaysMat = new BABYLON.StandardMaterial("inlaysMat", scene);
  //   inlaysMat.diffuseColor = BABYLON.Color3.FromHexString(fencePartsColors[1]);
  //   inlaysMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

  //   //FENCE LAISNE MATERIALS
  //   var laisneMat = new BABYLON.StandardMaterial("laisneMat", scene);
  //   laisneMat.diffuseColor = BABYLON.Color3.FromHexString(fencePartsColors[0]);
  //   laisneMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

  //FENCE POST CAP MATERIALS
  var capMat = new BABYLON.StandardMaterial("capMat", scene);
  capMat.diffuseColor = BABYLON.Color3.FromHexString("#202020");
  capMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

  //LED MATERIALS
  var glow = new BABYLON.GlowLayer("glow", scene);
  glow.intensity = 0.8;
  var ledMat = new BABYLON.StandardMaterial("ledMat", scene);
  ledMat.diffuseColor = ledMat.emissiveColor = BABYLON.Color3.FromHexString(
    lightColors[4]
  );

  //ROOT SRAF MATERIAL
  var rootMat = new BABYLON.StandardMaterial("rootMat", scene);
  rootMat.diffuseColor = BABYLON.Color3.FromHexString("#b4b4b4");
  // rootMat.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);

  //CONCRETE MATERIAL
  let concreteMat = new BABYLON.StandardMaterial("concreteMat", scene);
  concreteMat.diffuseTexture = new BABYLON.Texture("img/concrete.jpg", scene);
  concreteMat.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);
  concreteMat.backFaceCulling = false;

  //FOUNDATION MATERIAL
  var foundationMat = new BABYLON.StandardMaterial("foundationMat", scene);
  foundationMat.diffuseColor = BABYLON.Color3.FromHexString("#ffffff");
  foundationMat.alpha = 0.5;

  //SINGS MATEIALS AD TEXTURES
  //delete sign
  var signmatDel = new BABYLON.StandardMaterial("signmatDel", scene);
  var signTexDel = new BABYLON.Texture("img/deleteOn64.png", scene);
  signTexDel.hasAlpha = true;
  signmatDel.useAlphaFromDiffuseTexture = true;
  signmatDel.backFaceCulling = false;
  signmatDel.diffuseTexture = signTexDel;
  //warnin sign
  var signmatWar = new BABYLON.StandardMaterial("signmatWar", scene);
  var signTexWar = new BABYLON.Texture("img/warning.png", scene);
  signTexWar.hasAlpha = true;
  signTexWar.useAlphaFromDiffuseTexture = true;
  signmatWar.backFaceCulling = false;
  signmatWar.diffuseTexture = signTexWar;

  //ADD NEW FENCE SING MATERIAL
  const addNewFenceMeshMat = new BABYLON.StandardMaterial("addNewFenceMeshMat");
  addNewFenceMeshMat.diffuseTexture = new BABYLON.Texture("img/arrow.png");
  addNewFenceMeshMat.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);
  // addNewFenceMeshMat.diffuseColor = new BABYLON.Vector4(1,0,0,1);
  addNewFenceMeshMat.backFaceCulling = false;

  const addNewFenceMeshMatAct = new BABYLON.StandardMaterial(
    "addNewFenceMeshMatAct"
  );
  addNewFenceMeshMatAct.diffuseTexture = new BABYLON.Texture(
    "img/arrowActive.png"
  );
  addNewFenceMeshMatAct.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);
  // addNewFenceMeshMat.diffuseColor = new BABYLON.Vector4(1,0,0,1);
  addNewFenceMeshMatAct.backFaceCulling = false;

  //MATERIAL FOR SELECTION
  var selectedMat = new BABYLON.StandardMaterial("selectedMat", scene);
  selectedMat.diffuseColor = BABYLON.Color3.FromHexString("#C10000");
  // selectedMat.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);

  //   //FENCE VARIABLES
  var leftPostCaps = [];
  var rightPostCaps = [];
  var rightPostCapClones = [];
  var leftPostCapClones = [];
  var fenceBoards = [];
  var topBoards = [];
  var metalParts = [];
  var rightMetalParts = [];
  var smallMetalParts = [];
  var rightSmallMetalParts = [];
  var rankelements = [];
  var allWoodPosts = [];
  var rightWoodPosts = [];
  var woodMaterials = [];
  var woodTopParts = [];
  var leftPosts = [];
  var rightPosts = [];
  var allPosts = [];
  var fakePosts = [];
  var intersectedPosts = [];
  var intersectedPostsMain = [];
  var roots = [];
  var rightRoots = [];
  var singsDel = [];
  var singsDelRight = [];
  var singsWar = [];
  var singsWarRight = [];
  var leds = [];
  var ledsRight = [];
  //   var ledsOn = 0;
  var foundationStarts = [];
  var foundationStartsRight = [];
  var foundations = [];
  var foundationsRight = [];
  var sturmankersRuckseite = [];
  var sturRuckseiteSrafs = [];
  var sturmankersRuckseiteRight = [];
  var sturmankersVorderseite = [];
  var sturVorderseiteSrafs = [];
  var sturmankersVorderseiteRight = [];
  var foundationStartsVord = [];
  var foundationsVord = [];
  var foundationStartsRuck = [];
  var foundationsRuck = [];
  //   var directeHauswandMeshes = [];
  //   var directeHauswandMeshesRight = [];
  var newFenceForwardSigns = [];
  var newFenceRightSigns = [];
  var newFenceLeftSigns = [];
  var newFenceBackSigns = [];
  var addFenceSings = [];
  var fencesArr = [];
  var fakeFronts = [];
  var fakeBacks = [];
  var fakeLefts = [];
  var fakeRights = [];
  var fakeFences = [];
  var wholeFences = [];

  //FUNCTONS TO GET AND SET ABSOLUTE POSTIOIONS
  var getAbsPosX = (mesh) => {
    mesh.computeWorldMatrix(true);
    return mesh.getAbsolutePosition().x;
  };
  var getAbsPosZ = (mesh) => {
    mesh.computeWorldMatrix(true);
    return mesh.getAbsolutePosition().z;
  };
  var getAbsPosY = (mesh) => {
    mesh.computeWorldMatrix(true);
    return mesh.getAbsolutePosition().y;
  };

  //CHANCHING SIZE ON SLIDER
  //function to change position and scale of fence
  function changePosAndScaleFence(valueToCount, activeFence) {
    // if (valueToCount > 15) {
    fenceScale = valueToCount / 180;
    // } else {
    //   fenceScale = 0.08;
    // }
    fenceSize = 1.8 * fenceScale;

    firstX = getAbsPosX(rightPosts[activeFence]);
    firstZ = getAbsPosZ(rightPosts[activeFence]);

    fenceBoards[activeFence].forEach((elm) => {
      elm.scaling.x = fenceScale;
      elm.position.x = -0.9 + fenceSize / 2 - 0.01;
    });

    topBoards[activeFence].scaling.x = fenceScale;
    topBoards[activeFence].position.x = -0.9 + fenceSize / 2;

    rankelements[activeFence].scaling.x = fenceScale;
    rankelements[activeFence].position.x = -0.9 + fenceSize / 2;

    woodTopParts[activeFence].scaling.x = 0.843 * fenceScale;
    woodTopParts[activeFence].position.x = -0.9 + fenceSize / 2;

    rightPosts[activeFence].position.x = -0.9 + fenceSize;
    rightPostCaps[activeFence].position.x = rightPosts[activeFence].position.x;

    rightWoodPosts[activeFence].position.x = -0.9 + fenceSize;

    // foundationsRight[activeFence].setAbsolutePosition(
    //   new BABYLON.Vector3(
    //     getAbsPosX(rightPosts[activeFence]),
    //     foundationsRight[activeFence].position.y,
    //     getAbsPosZ(rightPosts[activeFence])
    //   )
    // );

    newFenceForwardSigns[activeFence].setAbsolutePosition(
      new BABYLON.Vector3(
        getAbsPosX(rightPosts[activeFence]) + 0.3,
        newFenceForwardSigns[activeFence].position.y,
        getAbsPosZ(rightPosts[activeFence])
      )
    );

    newFenceRightSigns[activeFence].setAbsolutePosition(
      new BABYLON.Vector3(
        getAbsPosX(rightPosts[activeFence]),
        newFenceRightSigns[activeFence].position.y,
        getAbsPosZ(rightPosts[activeFence]) - 0.3
      )
    );

    newFenceLeftSigns[activeFence].setAbsolutePosition(
      new BABYLON.Vector3(
        getAbsPosX(rightPosts[activeFence]),
        newFenceLeftSigns[activeFence].position.y,
        getAbsPosZ(rightPosts[activeFence]) + 0.3
      )
    );

    newFenceBackSigns[activeFence].setAbsolutePosition(
      new BABYLON.Vector3(
        getAbsPosX(rightPosts[activeFence]) - 0.3,
        newFenceBackSigns[activeFence].position.y,
        getAbsPosZ(rightPosts[activeFence])
      )
    );

    secondX = getAbsPosX(rightPosts[activeFence]);
    secondZ = getAbsPosZ(rightPosts[activeFence]);

    //set this fence obj size
    fencesArr[activeFence].size = valueToCount;
  }

  //confirm change on slider
  confirmSliderSize.onclick = () => {
    changePosAndScaleFence(valueOfSlider, activeFence);
    positionChildrenOnParentSizeChange(activeFence);
    checkPostIntersecting(
      fakePosts,
      allPosts,
      allWoodPosts,
      rightRoots,
      rightMetalParts,
      intersectedPosts,
      intersectedPostsMain,
      fencesArr,
      postType,
      smallMetalParts
    );
    intersectionFunction(
      fakeFronts,
      fakeFences,
      sturmankersVorderseite,
      sturVorderseiteSrafs,
      leds,
      singsDel,
      singsWar,
      fakeBacks,
      sturmankersRuckseite,
      sturRuckseiteSrafs,
      foundationStarts,
      foundations,
      foundationStartsVord,
      foundationsVord,
      foundationStartsRuck,
      foundationsRuck,
      metalParts,
      smallMetalParts,
      postType,
      allWoodPosts
    );
    setGround();
  };

  function scaleToOtherFencesToDo(i) {
    // foundationsRight[i].position.x =
    //   foundationsRight[i].position.x - (firstX - secondX);
    // foundationsRight[i].position.z =
    //   foundationsRight[i].position.z - (firstZ - secondZ);

    wholeFences[i].position.x = wholeFences[i].position.x - (firstX - secondX);
    wholeFences[i].position.z = wholeFences[i].position.z - (firstZ - secondZ);

    newFenceForwardSigns[i].position.x =
      newFenceForwardSigns[i].position.x - (firstX - secondX);
    newFenceForwardSigns[i].position.z =
      newFenceForwardSigns[i].position.z - (firstZ - secondZ);

    newFenceRightSigns[i].position.x =
      newFenceRightSigns[i].position.x - (firstX - secondX);
    newFenceRightSigns[i].position.z =
      newFenceRightSigns[i].position.z - (firstZ - secondZ);

    newFenceLeftSigns[i].position.x =
      newFenceLeftSigns[i].position.x - (firstX - secondX);
    newFenceLeftSigns[i].position.z =
      newFenceLeftSigns[i].position.z - (firstZ - secondZ);

    newFenceBackSigns[i].position.x =
      newFenceBackSigns[i].position.x - (firstX - secondX);
    newFenceBackSigns[i].position.z =
      newFenceBackSigns[i].position.z - (firstZ - secondZ);
  }

  function positionChildrenOnParentSizeChange(activeFence) {
    for (let i = 0; i < fencesArr[activeFence].children.length; i++) {
      a = fencesArr[activeFence].children[i];
      scaleToOtherFencesToDo(a);
      recursiveToChildrenPositionChange(a);
    }
  }
  function recursiveToChildrenPositionChange(a) {
    if (fencesArr[a].children.length > 0) {
      fencesArr[a].children.forEach((elm) => {
        scaleToOtherFencesToDo(elm);
        recursiveToChildrenPositionChange(elm);
      });
    }
  }

  //MAIN POST MESH //////////////////////////////////////////////////////////////////////////
  BABYLON.SceneLoader.ImportMeshAsync("", "mesh/", "mainPostGardo7.glb").then(
    (result) => {
      var mainPost = result.meshes[0];
      mainPost.rotationQuaternion = null;
      mainPost.scaling = new BABYLON.Vector3(1.01, 1, 1.01);
      mainPost.addRotation(0, Math.PI, 0);

      // for (let i = 0; i < result.meshes.length; i++) {
      //   console.log(i, result.meshes[i].name);
      // }
      //SET POSITION
      scene.getNodeByName("post-root-left").position.x =
        scene.getNodeByName("sturmanker-left-front").position.x =
        scene.getNodeByName("sturmanker-left-rear").position.x =
        scene.getNodeByName("Plane.001_primitive0").position.x =
        scene.getNodeByName("Plane.001_primitive1").position.x =
          0;
      for (let i = 0; i < result.meshes.length; i++) {
        result.meshes[i].position.x = 0;
      }

      // //METAL PART TO HOLD WOOD POST

      let leftMetalPart0 = scene.getNodeByName("Plane.001_primitive0");
      let leftMetalPart1 = scene.getNodeByName("Plane.001_primitive1");
      leftMetalPart0.material = leftMetalPart1.material = rootMat;
      var newMetPartsArr = new Array(leftMetalPart0, leftMetalPart1);
      metalParts.push(newMetPartsArr);
      // metalParts.push(leftMetalPart0, leftMetalPart1);

      // scene.getNodeByName("Plane.001").position.x = 0.008;

      //SMALL METAL PART TO HOLD WOOD POST
      let leftSmallMetalPartFront = result.meshes[14];
      let leftSmallMetalPartBack = result.meshes[12];
      let leftSmallMetalPartBoth = result.meshes[13];
      leftSmallMetalPartFront.material =
        leftSmallMetalPartBack.material =
        leftSmallMetalPartBoth.material =
          rootMat;
      var newSmallMetPartsArr = new Array(
        leftSmallMetalPartFront,
        leftSmallMetalPartBack,
        leftSmallMetalPartBoth
      );
      newSmallMetPartsArr.forEach((elm) => {
        elm.isVisible = false;
      });
      smallMetalParts.push(newSmallMetPartsArr);

      // //WOOD POST
      let leftWoodPost = scene.getMeshByName("Wooden post.001");
      leftWoodPost.addRotation(0, 0, Math.PI);
      allWoodPosts.push(leftWoodPost);
      // leftWoodPost.isVisible = false;
      woodMaterials.push(scene.getMaterialByID("Wood-Velja"));
      //POST CAP
      let leftPostCap = scene.getMeshByName("post-cap-left");
      leftPostCap.material = capMat;
      leftPostCaps.push(leftPostCap);
      leftPostCap.isVisible = false;

      let leftPostCapClone = leftPostCap.clone("leftPostCapClone");
      leftPostCapClone.position.y = 1.1;
      leftPostCapClone.isVisible = false;
      leftPostCapClones.push(leftPostCapClone);

      //POSTS
      let leftPost = scene.getMeshByName("post-left");
      leftPost.addRotation(0, Math.PI, 0);
      leftPosts.push(leftPost);
      allPosts.push(leftPost);
      leftPost.material = fencePostMat;
      leftPost.isVisible = false;

      //cerate fake rigth post
      let fakePost = new BABYLON.MeshBuilder.CreateBox(
        "fakePost",
        { width: 0.05, height: 2.1, depth: 0.05 },
        scene
      );
      fakePost.position.y = 1.05;
      // fakePost.parent = leftPost;
      fakePosts.push(fakePost);
      fakePost.isVisible = false;

      createMainPostSigns();
      //add selected to mesh
      leftWoodPost.actionManager = new BABYLON.ActionManager(scene);
      leftPost.actionManager = new BABYLON.ActionManager(scene);

      function setActivnesLeftPosts(post) {
        post.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
              if (post.material.id != "selectedMat" && post.scaling.x == 1) {
                removeSideAccesories(
                  sideAccesories,
                  deleteAccesorie,
                  addFenceAcc,
                  editPost,
                  addNewFenceToSide
                );
                // closeSliderContainer();
                addDefaultMaterial(
                  fenceBoards,
                  sturmankersVorderseite,
                  rightPosts,
                  leftPosts,
                  woodMaterials,
                  fencePostMat,
                  rankelements,
                  addFenceSings,
                  allWoodPosts,
                  woodTopParts,
                  topBoards,
                  sturmankerMat,
                  sturmankersRuckseite
                );
                activeFence = false;
                post.material = selectedMat;
                addFenceSings[0].isVisible = true;
                addFenceSings[1].isVisible = true;
                intersectArrowSignsFence(
                  fakeFences,
                  newFenceForwardSigns,
                  newFenceRightSigns,
                  newFenceLeftSigns,
                  newFenceBackSigns,
                  activeFence,
                  addFenceSings
                );
                //set day when select sturmanker
                // setDayNight(0.6, 0, 0.7);
                // setLightColor(4);
                // glow.intensity = 0;
                // singsWar.forEach((elm) => {
                //   elm.isVisible = false;
                // });
                // singsDel.forEach((elm) => {
                //   elm.isVisible = false;
                // });
                if (leftPosts[0].isVisible) {
                  sideAccesories.style.display = "block";
                  editPost.style.display = "block";
                  if (
                    (leftPost.scaling.z > 0.999 && leftPost.scaling.z < 1.1) ||
                    leftPost.scaling.z < 0.55
                  ) {
                    setActivnesStyle(
                      pfostensSingle,
                      0,
                      0,
                      "active-text-color-single-pfosten"
                    );
                  } else if (
                    (leftPost.scaling.z > 1.1 && leftPost.scaling.z < 1.4) ||
                    (leftPost.scaling.z > 0.7 && leftPost.scaling.z < 0.8)
                  ) {
                    setActivnesStyle(
                      pfostensSingle,
                      0,
                      1,
                      "active-text-color-single-pfosten"
                    );
                  } else if (
                    leftPost.scaling.z > 1.4 ||
                    (leftPost.scaling.z < 1 && leftPost.scaling.z > 0.9)
                  ) {
                    setActivnesStyle(
                      pfostensSingle,
                      0,
                      2,
                      "active-text-color-single-pfosten"
                    );
                  }
                  document.getElementsByClassName("accTitle")[0].innerHTML =
                    "Pfosten bearbeiten";
                }
              } else {
                post.material = scene.getMaterialByID("Wood-Velja");
                addFenceSings[0].isVisible = false;
                addFenceSings[1].isVisible = false;
                if (leftPosts[0].isVisible) {
                  post.material = fencePostMat;
                  document.getElementsByClassName("accTitle")[0].innerHTML =
                    "ausgewählter Zaun";
                  sideAccesories.style.display = "none";
                  editPost.style.display = "none";
                }
              }
            }
          )
        );
      }
      setActivnesLeftPosts(leftWoodPost);
      setActivnesLeftPosts(leftPost);

      //post roots
      let leftRoot0 = scene.getMeshByName("post-root-left_primitive0");
      leftRoot0.isVisible = false;
      let leftRoot1 = scene.getMeshByName("post-root-left_primitive1");
      leftRoot1.isVisible = false;
      roots.push(leftRoot0, leftRoot1);

      roots.forEach((elm) => {
        elm.material = rootMat;
      });

      //create foundation start
      let foundationLeftStart = new BABYLON.MeshBuilder.CreateGround(
        "foundationLeftStart",
        { width: 0.4, height: 0.4 },
        scene
      );
      foundationLeftStart.position = new BABYLON.Vector3(
        leftPost.position.x,
        0.0001,
        0
      );
      foundationLeftStart.material = concreteMat;
      foundationStarts.push(foundationLeftStart);

      //create foundation
      let foundationLeft = new BABYLON.MeshBuilder.CreateBox(
        "foundationLeft",
        { width: 0.4, height: 0.5, depth: 0.4 },
        scene
      );
      foundationLeft.position.x = foundationLeftStart.position.x;
      foundationLeft.position.y = -0.5 / 2;
      foundationLeft.material = foundationMat;

      foundations.push(foundationLeft);

      //PLANE TO HOLD DELETE SIGN
      var signPlaneDelLeft = BABYLON.MeshBuilder.CreatePlane(
        "signPlaneDelLeft",
        {
          height: 0.4,
          width: 0.4,
        }
      );
      signPlaneDelLeft.position = new BABYLON.Vector3(
        leftPost.position.x,
        2.2,
        0
      );
      signPlaneDelLeft.isVisible = false;
      signPlaneDelLeft.material = signmatDel;
      singsDel.push(signPlaneDelLeft);

      //PLANE TO HOLD WARNING SIGN
      var signPlaneWarLeft = BABYLON.MeshBuilder.CreatePlane(
        "signPlaneWarLeft",
        {
          height: 0.4,
          width: 0.4,
        }
      );
      signPlaneWarLeft.position = new BABYLON.Vector3(
        leftPost.position.x,
        2.2,
        0
      );
      signPlaneWarLeft.isVisible = false;
      signPlaneWarLeft.material = signmatWar;
      singsWar.push(signPlaneWarLeft);

      //LEDS
      let leftLed = scene.getMeshByName("led-left");

      leds.push(leftLed);

      leftLed.material = ledMat;

      leftLed.isVisible = false;

      //spot light for led
      // var light5 = new BABYLON.SpotLight(
      //   "spotLight5",
      //   new BABYLON.Vector3(
      //     leftPost.getAbsolutePosition().x,
      //     1,
      //     leftPost.getAbsolutePosition().z
      //   ),
      //   new BABYLON.Vector3(0, -1, 0),
      //   Math.PI,
      //   1,
      //   scene
      // );

      // lights.push(light5);
      // lightsLed.push(light5);

      //STRUMANKER
      //VORD ***************
      let leftStrVord = scene.getMeshByName("sturmanker-left-front_primitive0");
      leftStrVord.isVisible = false;

      let leftStrVordSraf = scene.getMeshByName(
        "sturmanker-left-front_primitive1"
      );
      leftStrVordSraf.isVisible = false;

      sturmankersVorderseite.push(leftStrVord);
      sturVorderseiteSrafs.push(leftStrVordSraf);
      sturmankersVorderseite[0].position.y =
        sturVorderseiteSrafs[0].position.y += 0.011;
      //create foundation start for front stunmankwer
      let foundationVordStart = new BABYLON.MeshBuilder.CreateGround(
        "foundationVordStart",
        { width: 0.4, height: 0.7 },
        scene
      );

      foundationVordStart.position = new BABYLON.Vector3(0, 0.13, 0);
      foundationVordStart.rotation.x = -Math.PI / 2;
      foundationVordStart.material = concreteMat;
      foundationVordStart.parent = leftRoot0;
      foundationStartsVord.push(foundationVordStart);
      foundationVordStart.isVisible = false;
      //create foundation for front stunmankwer
      let foundationVord = new BABYLON.MeshBuilder.CreateBox(
        "foundationVord",
        { width: 0.4, height: 0.7, depth: 0.5 },
        scene
      );
      foundationVord.material = foundationMat;
      foundationVord.position = new BABYLON.Vector3(0, 0.13, 0.251);
      foundationVord.parent = leftRoot0;
      foundationsVord.push(foundationVord);
      foundationVord.isVisible = false;

      // RUCK **********
      let leftStrRuck = scene.getMeshByName("sturmanker-left-rear_primitive0");
      leftStrRuck.isVisible = false;

      let leftStrRuckSraf = scene.getMeshByName(
        "sturmanker-left-rear_primitive1"
      );
      leftStrRuckSraf.isVisible = false;

      sturmankersRuckseite.push(leftStrRuck);
      sturRuckseiteSrafs.push(leftStrRuckSraf);
      sturmankersRuckseite[0].position.y =
        sturRuckseiteSrafs[0].position.y -= 0.01;
      //create foundation start for back stunmankwer
      let foundationRuckStart = new BABYLON.MeshBuilder.CreateGround(
        "foundationRuckStart",
        { width: 0.4, height: 0.7 },
        scene
      );
      foundationRuckStart.position = new BABYLON.Vector3(0, -0.13, 0);
      foundationRuckStart.rotation.x = -Math.PI / 2;
      foundationRuckStart.material = concreteMat;
      foundationRuckStart.parent = leftRoot0;
      foundationStartsRuck.push(foundationRuckStart);
      foundationRuckStart.isVisible = false;

      //create foundation for back stunmankwer
      let foundationRuck = new BABYLON.MeshBuilder.CreateBox(
        "foundationRuck",
        { width: 0.4, height: 0.7, depth: 0.5 },
        scene
      );
      foundationRuck.material = foundationMat;
      foundationRuck.position = new BABYLON.Vector3(0, -0.13, 0.251);
      foundationRuck.parent = leftRoot0;
      foundationsRuck.push(foundationRuck);
      foundationRuck.isVisible = false;

      //set material
      leftStrVord.material = leftStrRuck.material = sturmankerMat;
      //set sraf material
      leftStrVordSraf.material = leftStrRuckSraf.material = rootMat;

      //cerate fake strumanker
      let fakeFront = new BABYLON.MeshBuilder.CreateBox(
        "fakeFront",
        { width: 0.01, height: 0.3, depth: 0.3 },
        scene
      );
      fakeFront.parent = leftStrVord;
      fakeFronts.push(fakeFront);
      fakeFront.isVisible = false;

      let fakeBack = new BABYLON.MeshBuilder.CreateBox(
        "fakeBack",
        { width: 0.01, height: 0.3, depth: 0.3 },
        scene
      );
      fakeBack.parent = leftStrRuck;
      fakeBacks.push(fakeBack);
      fakeBack.isVisible = false;

      let fakeLeft = new BABYLON.MeshBuilder.CreateBox(
        "fakeLeft",
        { width: 0.01, height: 0.3, depth: 0.3 },
        scene
      );
      fakeLeft.parent = leftStrRuck;
      fakeLeft.addRotation(0, 0, Math.PI / 2);
      fakeLeft.position = new BABYLON.Vector3(0.2, 0.19, 0);
      fakeLefts.push(fakeLeft);

      fakeLeft.isVisible = false;

      let fakeRight = new BABYLON.MeshBuilder.CreateBox(
        "fakeRight",
        { width: 0.01, height: 0.3, depth: 0.3 },
        scene
      );
      fakeRight.parent = leftStrVord;
      fakeRight.addRotation(0, 0, Math.PI / 2);
      fakeRight.position = new BABYLON.Vector3(-0.2, -0.19, 0);
      fakeRights.push(fakeRight);
      fakeRight.isVisible = false;

      //SET CHILDREN
      leftPostCap.addChild(signPlaneWarLeft);
      leftPostCap.addChild(signPlaneDelLeft);
      leftPostCap.addChild(foundationLeft);
      leftPostCap.addChild(leftLed);
      leftPostCap.addChild(leftStrVord);
      leftPostCap.addChild(leftStrVordSraf);
      leftPostCap.addChild(leftStrRuck);
      leftPostCap.addChild(leftStrRuckSraf);
      leftPostCap.addChild(leftRoot0);
      leftPostCap.addChild(leftRoot1);

      leftPostCap.addChild(foundationVordStart);
      leftPostCap.addChild(foundationVord);
      leftPostCap.addChild(foundationRuckStart);
      leftPostCap.addChild(foundationRuck);
    }

    //END OF MAIN POST
  );

  function NewFence(id, type, size, children) {
    this.id = id;
    this.type = type;
    this.size = size;
    this.children = children;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //LOAD FENCE MESH
  var fenceIdCount = -1;
  var activeFence = false;
  // var createRightFence = (posX, posZ, rotY, type, smCol, inlaysOnOff) =>
  var createRightFence = (posX, posZ, rotY, type) =>
    BABYLON.SceneLoader.ImportMeshAsync("", "mesh/", "gardoRight12.glb").then(
      (result) => {
        var fence = result.meshes[0];
        fence.rotationQuaternion = null;

        fence.position.x = posX;
        fence.position.z = posZ;
        fence.rotation.y = rotY;

        wholeFences.push(fence);

        // for (let i = 0; i < result.meshes.length; i++) {
        //   console.log(i, result.meshes[i].name);
        // }

        //function to active fence
        function toActiveFence() {
          //set this active fence
          for (let j = 0; j < rightPosts.length; j++) {
            if (rightPosts[j].material.id == "selectedMat") {
              activeFence = j;
            }
          }
          sideAccesories.style.display = "block";
          addFenceAcc.style.display = "block";
          //set changnig size to none when rankelement is on
          if (fencesArr[activeFence].type == "gardoRank") {
            addFenceAcc.children[0].style.display = "none";
          } else {
            addFenceAcc.children[0].style.display = "block";
          }
          //set delete fence image and text
          deleteFenceOn(activeFence);
          //delete fence
          deleteFencePart.onclick = () => {
            if (activeFence > 0) {
              delFenFun(activeFence);
              deleteFence(activeFence);
              checkPostIntersecting(
                fakePosts,
                allPosts,
                allWoodPosts,
                rightRoots,
                rightMetalParts,
                intersectedPosts,
                intersectedPostsMain,
                fencesArr,
                postType,
                smallMetalParts
              );

              //set activnes of led when deleted led
              // ledsOn = 0;
              // leds.forEach((elm) => {
              //   if (elm.isVisible) {
              //     ledsOn += 1;
              //   }
              // });
              // if (ledsOn == 0) {
              //   //set to ohne on led lights
              //   //set html
              //   lightSettings.style.display = "none";
              //   lightColorSet.style.display = "none";
              //   //set babylon
              //   leds.forEach((elm) => {
              //     elm.isVisible = false;
              //   });
              //   setDayNight(0.6, 0, 0.7);
              //   ledColNum = 4;
              //   setLightColor(ledColNum);
              //   setLedColor(ledColNum);
              //   setActivnesStyle(ledParts, 6, 0, "active-text-color");
              // }

              //set activnes of sturmanker parts
              sturNum = 0;
              for (let i = 0; i < sturmankersVorderseite.length; i++) {
                if (sturmankersVorderseite[i].isVisible) {
                  sturNum += 1;
                } else if (sturmankersRuckseite[i].isVisible) {
                  sturNum += 1;
                }
              }
              if (sturNum < 1) {
                setActivnesStyle(sturmankerCon, 6, 1, "active-text-color");
                strurmOn = false;
              } else {
                strurmOn = true;
              }
            }
          };

          //set value of slider and slider to this fence
          if (
            fencesArr[activeFence].type == "gardoFence" ||
            fencesArr[activeFence].type == "gardoHalf"
          )
            pipsSlider.noUiSlider.updateOptions(easyFenceSliderOpt);
          pipsSlider.noUiSlider.set(fencesArr[activeFence].size);
          closeSliderContainer();
          //set signs visibility baste on intesection with fances
          if (fencesArr[activeFence].children.length < 2) {
            newFenceForwardSigns[activeFence].isVisible = true;
            newFenceRightSigns[activeFence].isVisible = true;
            newFenceLeftSigns[activeFence].isVisible = true;
            newFenceBackSigns[activeFence].isVisible = true;
          }
          intersectArrowSignsFence(
            fakeFences,
            newFenceForwardSigns,
            newFenceRightSigns,
            newFenceLeftSigns,
            newFenceBackSigns,
            activeFence,
            addFenceSings
          );

          //set activnes of active fence settings
          if (fencesArr[activeFence].type == "gardoFence")
            setActivnesStyle(changeFence, 0, 0, "active-text-color");
          if (fencesArr[activeFence].type == "gardoHalf")
            setActivnesStyle(changeFence, 0, 1, "active-text-color");
          if (fencesArr[activeFence].type == "gardoRank")
            setActivnesStyle(changeFence, 0, 2, "active-text-color");

          //deactivate arrows
          activeArrow = false;
          activeArrowSide = false;
          addFenceSings.forEach((elm) => {
            elm.material = addNewFenceMeshMat;
          });
          addNewFenceToSide.style.display = "none";
          //set day night
          // setDayNight(0.6, 0, 0.7);
          // setLightColor(4);
          // glow.intensity = 0;
          // singsWar.forEach((elm) => {
          //   elm.isVisible = false;
          // });
          // for (let i = 0; i < allPosts.length; i++) {
          //   if (leds[i].isVisible) {
          //     singsDel[i].isVisible = true;
          //   }
          // }
          //single edits exit options on all
          // for (let i = 0; i < clickablePartSingleFence.length; i++) {
          //   if (
          //     clickablePartSingleFence[i].className ==
          //     "set-part-click-title-single clicked"
          //   ) {
          //     clickablePartSingleFence[i].className = clickablePartSingleFence[
          //       i
          //     ].className.replace(" clicked", " not-clicked");
          //     clickablePartSingleFence[i].children[1].innerHTML = "+";
          //     clickablePartSingleFence[i].nextElementSibling.style.height = 0;
          //   }
          // }
          cameraTargetMesh(cameraTarget, wholeFences[activeFence]);
          console.log(fencesArr[activeFence]);
        }

        //BOARDS
        var newBoarsdArr = new Array(
          result.meshes[12],
          result.meshes[13],
          result.meshes[14],
          result.meshes[15],
          result.meshes[16],
          result.meshes[17],
          result.meshes[18],
          result.meshes[19],
          result.meshes[20],
          result.meshes[21],
          result.meshes[22],
          result.meshes[23],
          result.meshes[24],
          result.meshes[25],
          result.meshes[26],
          result.meshes[27]
        );

        fenceBoards.push(newBoarsdArr);
        woodMaterials.push(scene.getMaterialByID("Wood-Velja"));

        let topBoard = newBoarsdArr[15].clone("newBoard");
        topBoard.position.y = newBoarsdArr[15].position.y + 0.102;
        topBoard.isVisible = false;
        topBoards.push(topBoard);
        //fake fence for intersection
        let fakeFence = new BABYLON.MeshBuilder.CreateBox(
          "fakeFence",
          { width: 1.7, height: 1.8, depth: 0.05 },
          scene
        );
        fakeFence.position = new BABYLON.Vector3(
          getAbsPosX(result.meshes[12]) - 0.01,
          0.9,
          getAbsPosZ(result.meshes[12])
        );
        fakeFence.addRotation(0, rotY, 0);
        fakeFences.push(fakeFence);

        fakeFence.isVisible = false;
        result.meshes[12].addChild(fakeFence);

        //add selected to mesh
        for (let i = 0; i < result.meshes.length; i++) {
          result.meshes[i].actionManager = new BABYLON.ActionManager(scene);
          result.meshes[i].actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPickTrigger,
              function () {
                if (result.meshes[i].material.id != "selectedMat") {
                  removeSideAccesories(
                    sideAccesories,
                    deleteAccesorie,
                    addFenceAcc,
                    editPost,
                    addNewFenceToSide
                  );
                  addDefaultMaterial(
                    fenceBoards,
                    sturmankersVorderseite,
                    rightPosts,
                    leftPosts,
                    woodMaterials,
                    fencePostMat,
                    rankelements,
                    addFenceSings,
                    allWoodPosts,
                    woodTopParts,
                    topBoards,
                    sturmankerMat,
                    sturmankersRuckseite
                  );
                  result.meshes[1].material =
                    result.meshes[10].material =
                    result.meshes[12].material =
                    result.meshes[13].material =
                    result.meshes[14].material =
                    result.meshes[15].material =
                    result.meshes[16].material =
                    result.meshes[17].material =
                    result.meshes[18].material =
                    result.meshes[19].material =
                    result.meshes[20].material =
                    result.meshes[21].material =
                    result.meshes[22].material =
                    result.meshes[23].material =
                    result.meshes[24].material =
                    result.meshes[25].material =
                    result.meshes[26].material =
                    result.meshes[27].material =
                    result.meshes[28].material =
                    result.meshes[11].material =
                    topBoard.material =
                      selectedMat;
                  //function for fence activnes
                  toActiveFence();
                } else {
                  // closeSliderContainer();
                  sideAccesories.style.display = "none";
                  addFenceAcc.style.display = "none";
                  addDefaultMaterial(
                    fenceBoards,
                    sturmankersVorderseite,
                    rightPosts,
                    leftPosts,
                    woodMaterials,
                    fencePostMat,
                    rankelements,
                    addFenceSings,
                    allWoodPosts,
                    woodTopParts,
                    topBoards,
                    sturmankerMat,
                    sturmankersRuckseite
                  );

                  // singsDel.forEach((elm) => {
                  //   elm.isVisible = false;
                  // });
                  //turn off add new sings
                  newFenceForwardSigns[activeFence].isVisible = false;
                  newFenceRightSigns[activeFence].isVisible = false;
                  newFenceLeftSigns[activeFence].isVisible = false;
                  newFenceBackSigns[activeFence].isVisible = false;
                  cameraTargetMesh(cameraTarget, ground);
                  //turn of active fence
                  setTimeout(() => {
                    activeFence = false;
                  }, 100);
                }
              }
            )
          );
        }
        //POST CAP
        let rightPostCap = result.meshes[4];
        // rightPostCap.position.x -= 0.01;
        rightPostCap.material = capMat;
        rightPostCaps.push(rightPostCap);
        if (postType == 0) {
          rightPostCap.isVisible = false;
        }

        let rightPostCapClone = rightPostCap.clone("rightPostCapClone");
        rightPostCapClone.position.y = 1.1;
        rightPostCapClone.isVisible = false;
        rightPostCapClones.push(rightPostCapClone);

        //INLAYS
        let rankelement = result.meshes[11];
        rankelement.position.y -= 0.09;
        rankelement.isVisible = false;
        rankelements.push(rankelement);

        if (type == "gardoRank") {
          newBoarsdArr[13].isVisible = false;
          newBoarsdArr[14].isVisible = false;
          rankelement.isVisible = true;
        }

        // var editPost = document.getElementById("editPost");
        //POSTS
        let rightPost = result.meshes[1];
        // rightPost.position.x -= 0.01;
        rightPosts.push(rightPost);
        allPosts.push(rightPost);
        if (postType == 0) {
          rightPost.isVisible = false;
        }
        //cerate fake rigth post
        let fakePost = new BABYLON.MeshBuilder.CreateBox(
          "fakePost",
          { width: 0.05, height: 0.05, depth: 2.1 },
          scene
        );
        fakePost.parent = rightPost;
        fakePosts.push(fakePost);
        fakePost.isVisible = false;

        checkPostIntersecting(
          fakePosts,
          allPosts,
          allWoodPosts,
          rightRoots,
          rightMetalParts,
          intersectedPosts,
          intersectedPostsMain,
          fencesArr,
          postType,
          smallMetalParts
        );

        rightPost.material = fencePostMat;

        rightPost.actionManager = new BABYLON.ActionManager(scene);
        rightPost.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
              if (
                rightPost.material.id != "selectedMat" &&
                rightPost.scaling.x == 1
              ) {
                removeSideAccesories(
                  sideAccesories,
                  deleteAccesorie,
                  addFenceAcc,
                  editPost,
                  addNewFenceToSide
                );
                addDefaultMaterial(
                  fenceBoards,
                  sturmankersVorderseite,
                  rightPosts,
                  leftPosts,
                  woodMaterials,
                  fencePostMat,
                  rankelements,
                  addFenceSings,
                  allWoodPosts,
                  woodTopParts,
                  topBoards,
                  sturmankerMat,
                  sturmankersRuckseite
                );
                rightPost.material = selectedMat;
                sideAccesories.style.display = "block";
                editPost.style.display = "block";
                if (
                  (rightPost.scaling.z > 0.999 && rightPost.scaling.z < 1.1) ||
                  rightPost.scaling.z < 0.55
                ) {
                  setActivnesStyle(
                    pfostensSingle,
                    0,
                    0,
                    "active-text-color-single-pfosten"
                  );
                } else if (
                  (rightPost.scaling.z > 1.1 && rightPost.scaling.z < 1.4) ||
                  (rightPost.scaling.z > 0.7 && rightPost.scaling.z < 0.8)
                ) {
                  setActivnesStyle(
                    pfostensSingle,
                    0,
                    1,
                    "active-text-color-single-pfosten"
                  );
                } else if (
                  rightPost.scaling.z > 1.4 ||
                  (rightPost.scaling.z < 1 && rightPost.scaling.z > 0.9)
                ) {
                  setActivnesStyle(
                    pfostensSingle,
                    0,
                    2,
                    "active-text-color-single-pfosten"
                  );
                }
                document.getElementsByClassName("accTitle")[0].innerHTML =
                  "Pfosten bearbeiten";
              } else {
                removeSideAccesories(
                  sideAccesories,
                  deleteAccesorie,
                  addFenceAcc,
                  editPost,
                  addNewFenceToSide
                );
                addDefaultMaterial(
                  fenceBoards,
                  sturmankersVorderseite,
                  rightPosts,
                  leftPosts,
                  woodMaterials,
                  fencePostMat,
                  rankelements,
                  addFenceSings,
                  allWoodPosts,
                  woodTopParts,
                  topBoards,
                  sturmankerMat,
                  sturmankersRuckseite
                );
              }
            }
          )
        );

        //METAL PART TO HOLD WOOD POST
        let rightMetalPart0 = result.meshes[29];
        let rightMetalPart1 = result.meshes[30];
        rightMetalPart0.position.z = rightMetalPart1.position.z += 0.19;
        // rightMetalPart0.position.y = rightMetalPart1.position.y -= 0.45;
        rightMetalPart0.material = rightMetalPart1.material = rootMat;
        var newMetPartsArr = new Array(rightMetalPart0, rightMetalPart1);
        metalParts.push(newMetPartsArr);
        rightMetalParts.push(newMetPartsArr);

        //SMALL METAL PART TO HOLD WOOD POST
        let rightSmallMetalPartFront = result.meshes[33];
        let rightSmallMetalPartBack = result.meshes[31];
        let rightSmallMetalPartBoth = result.meshes[32];
        rightSmallMetalPartFront.material =
          rightSmallMetalPartBack.material =
          rightSmallMetalPartBoth.material =
            rootMat;
        var newSmallMetPartsArr = new Array(
          rightSmallMetalPartFront,
          rightSmallMetalPartBack,
          rightSmallMetalPartBoth
        );
        newSmallMetPartsArr.forEach((elm) => {
          elm.isVisible = false;
        });
        smallMetalParts.push(newSmallMetPartsArr);
        rightSmallMetalParts.push(newSmallMetPartsArr);
        //WOOD POST
        let rightWoodPost = result.meshes[28];
        rightWoodPost.position.z = 0;
        // rightWoodPost.position.x += 0.01;
        allWoodPosts.push(rightWoodPost);
        rightWoodPosts.push(rightWoodPost);

        if (postType == 1) {
          rightWoodPost.isVisible = false;
          newMetPartsArr.forEach((elm) => {
            elm.isVisible = false;
          });
        }
        //WOOD TOP PART
        let woodTopPart = result.meshes[10];
        // woodTopPart.position.x += 0.01;
        woodTopParts.push(woodTopPart);

        //post roots
        let rightRoot0 = result.meshes[2];
        let rightRoot1 = result.meshes[3];
        // rightRoot0.position.x = rightRoot1.position.x -= 0.01;
        if (postType == 0) {
          rightRoot0.isVisible = rightRoot1.isVisible = false;
        }
        roots.push(rightRoot0, rightRoot1);
        var newRootsArr = new Array(rightRoot0, rightRoot1);
        rightRoots.push(newRootsArr);

        roots.forEach((elm) => {
          elm.material = rootMat;
        });

        if (type == "gardoHalf") {
          newBoarsdArr[8].isVisible = false;
          newBoarsdArr[9].isVisible = false;
          newBoarsdArr[10].isVisible = false;
          newBoarsdArr[11].isVisible = false;
          newBoarsdArr[12].isVisible = false;
          newBoarsdArr[13].isVisible = false;
          newBoarsdArr[14].isVisible = false;
          newBoarsdArr[15].isVisible = false;
          woodTopPart.position.y = 0.98;
          rightWoodPost.scaling.y = 0.524;
          rightWoodPost.position.y = 0.504;
          rightPost.scaling.z = 0.574;
          rightPost.position.y = 0.554;
          rightPostCap.isVisible = false;
          if (postType == 1) {
            rightPostCapClone.isVisible = true;
          }

          // //children
          // let childType = 0;
          // for (let i = 0; i < fencesArr[h].children.length; i++) {
          //   if (fencesArr[fencesArr[h].children[i]].type != "easyFenceHalf") {
          //     childType += 1;
          //   }
          // }
          // if (childType == 0) {
          //   if (rightPosts[h].scaling.z < 1.1) {
          //     rightPosts[h].scaling.z = 0.524;
          //     rightPosts[h].position.y = 0.504;
          //   }
          //   if (rightPosts[h].scaling.z > 1 && rightPosts[h].scaling.z < 1.4) {
          //     rightPosts[h].scaling.z = 0.724;
          //     rightPosts[h].position.y = 0.3119;
          //   }
          //   if (rightPosts[h].scaling.z > 1.4) {
          //     rightPosts[h].scaling.z = 0.999;
          //     rightPosts[h].position.y = 0.053;
          //   }
          //   rightPostCaps[h].isVisible = false;
          //   rightPostCapClones[h].isVisible = true;
          //   ledsRight[h].scaling.z = 0.524;
          //   ledsRight[h].position.z = 0.46;
          //   ledsRight[h].position.y = 0.001;
          // }
        }

        //create foundation start
        let foundationRightStart = new BABYLON.MeshBuilder.CreateGround(
          "foundationRightStart",
          { width: 0.4, height: 0.4 },
          scene
        );

        foundationRightStart.position = new BABYLON.Vector3(
          getAbsPosX(result.meshes[3]),
          0.0001,
          getAbsPosZ(result.meshes[3])
        );
        foundationRightStart.material = concreteMat;

        foundationStarts.push(foundationRightStart);
        foundationStartsRight.push(foundationRightStart);

        //create foundation
        let foundationRight = new BABYLON.MeshBuilder.CreateBox(
          "foundationRight",
          { width: 0.4, height: 0.5, depth: 0.4 },
          scene
        );

        foundationRight.position = new BABYLON.Vector3(
          getAbsPosX(result.meshes[3]),
          -0.5 / 2,
          getAbsPosZ(result.meshes[3])
        );
        foundationRight.material = foundationMat;

        foundations.push(foundationRight);
        foundationsRight.push(foundationRight);

        //PLANE TO HOLD DELETE SIGN
        var signPlaneDelRight = BABYLON.MeshBuilder.CreatePlane(
          "signPlaneDelRight",
          {
            height: 0.4,
            width: 0.4,
          }
        );

        signPlaneDelRight.position = new BABYLON.Vector3(
          getAbsPosX(rightPost),
          2.2,
          getAbsPosZ(rightPost)
        );
        signPlaneDelRight.addRotation(0, rotY, 0);
        signPlaneDelRight.material = signmatDel;
        signPlaneDelRight.isVisible = false;
        singsDel.push(signPlaneDelRight);
        singsDelRight.push(signPlaneDelRight);

        for (let i = 0; i < singsDel.length; i++) {
          singsDel[i].actionManager = new BABYLON.ActionManager(scene);
          singsDel[i].actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPickTrigger,
              function () {
                onDelete(i);
              }
            )
          );
        }

        //PLANE TO HOLD WARNING SIGN
        var signPlaneWarRight = BABYLON.MeshBuilder.CreatePlane(
          "signPlaneWarRight",
          {
            height: 0.4,
            width: 0.4,
          }
        );

        signPlaneWarRight.position = new BABYLON.Vector3(
          getAbsPosX(rightPost),
          2.2,
          getAbsPosZ(rightPost)
        );
        signPlaneWarRight.addRotation(0, rotY, 0);
        signPlaneWarRight.material = signmatWar;
        signPlaneWarRight.isVisible = false;
        singsWar.push(signPlaneWarRight);
        singsWarRight.push(signPlaneWarRight);

        //       for (let i = 0; i < singsWar.length; i++) {
        //         singsWar[i].actionManager = new BABYLON.ActionManager(scene);
        //         singsWar[i].actionManager.registerAction(
        //           new BABYLON.ExecuteCodeAction(
        //             BABYLON.ActionManager.OnPickTrigger,
        //             function () {
        //               modalFade.style.display = "block";
        //               onLedSturmanker.style.display = "block";
        //               if (leds[i].isVisible) {
        //                 ledSturBtn.style.display = "block";
        //                 sturLedBtn.style.display = "none";
        //               } else {
        //                 sturLedBtn.style.display = "block";
        //                 ledSturBtn.style.display = "none";
        //               }
        //               ledSturBtn.onclick = () => {
        //                 ledSturOnClick(ledSturBtn, i, false);
        //                 strurmOn = true;
        //                 ledsOn -= 1;
        //                 sturmankerOnOff(true, i);
        //                 if (ledsOn < 1) {
        //                   setActivnesStyle(ledParts, 6, 0, "active-text-color");
        //                 }
        //               };

        //               sturLedBtn.onclick = () => {
        //                 ledSturOnClick(sturLedBtn, i, true);
        //                 ledsOn += 1;
        //                 // lightsLed[i].intensity = 0.5;
        //                 sturmankerOnOff(false, i);
        //                 foundationVisibilty(
        //                   foundationStarts,
        //                   foundations,
        //                   true,
        //                   foundationStartsVord,
        //                   foundationsVord,
        //                   false,
        //                   foundationStartsRuck,
        //                   foundationsRuck,
        //                   false,
        //                   i
        //                 );
        //                 //set activnes of sturmanker parts
        //                 var sturNum = 0;
        //                 for (let i = 0; i < sturmankersVorderseite.length; i++) {
        //                   if (sturmankersVorderseite[i].isVisible) {
        //                     sturNum += 1;
        //                   } else if (sturmankersRuckseite[i].isVisible) {
        //                     sturNum += 1;
        //                   }
        //                 }
        //                 if (sturNum < 1) {
        //                   setActivnesStyle(sturmankerCon, 10, 1, "active-text-color");
        //                   strurmOn = false;
        //                 } else {
        //                   strurmOn = true;
        //                 }
        //               };
        //               var warSingsOn;
        //               modalVerSchBtn[4].onclick = () => {
        //                 singsWar[i].isVisible = false;
        //                 singsWar.forEach((elm) => {
        //                   if (elm.isVisible) warSingsOn = true;
        //                 });
        //                 if (!strurmOn && !warSingsOn) {
        //                   setActivnesStyle(sturmankerCon, 10, 1, "active-text-color");
        //                   strurmOn = false;
        //                 }
        //                 if (ledsOn < 1 && !warSingsOn) {
        //                   setActivnesStyle(ledParts, 6, 0, "active-text-color");
        //                 }
        //               };
        //             }
        //           )
        //         );
        //       }

        //LEDS
        let rightLed = result.meshes[9];
        leds.push(rightLed);
        ledsRight.push(rightLed);

        rightLed.material = ledMat;

        rightLed.isVisible = false;

        //STRUMANKER
        let rightStrVord = result.meshes[7];
        // rightStrVord.position.x = -0.01;

        rightStrVord.isVisible = false;
        let rightStrVordSraf = result.meshes[8];

        // rightStrVordSraf.position.x = -0.01;
        rightStrVordSraf.isVisible = false;

        sturmankersVorderseite.push(rightStrVord);
        sturVorderseiteSrafs.push(rightStrVordSraf);

        let rightVords = new Array(rightStrVord, rightStrVordSraf);
        sturmankersVorderseiteRight.push(rightVords);
        if (postType == 0) {
          rightVords.forEach((elm) => {
            elm.position.y += 0.011;
          });
        }

        //create foundation start for front stunmankwer
        let foundationVordStart = new BABYLON.MeshBuilder.CreateGround(
          "foundationVordStart",
          { width: 0.4, height: 0.7 },
          scene
        );

        foundationVordStart.position = new BABYLON.Vector3(0, 0.13, 0);
        foundationVordStart.rotation.x = -Math.PI / 2;
        foundationVordStart.material = concreteMat;
        foundationVordStart.parent = rightRoot0;
        foundationStartsVord.push(foundationVordStart);
        foundationVordStart.isVisible = false;
        //create foundation for front stunmankwer
        let foundationVord = new BABYLON.MeshBuilder.CreateBox(
          "foundationVord",
          { width: 0.4, height: 0.7, depth: 0.5 },
          scene
        );

        foundationVord.material = foundationMat;
        foundationVord.position = new BABYLON.Vector3(0, 0.13, 0.251);
        foundationVord.parent = rightRoot0;
        foundationsVord.push(foundationVord);
        foundationVord.isVisible = false;

        ///sturmanker Ruck
        let rightStrRuck = result.meshes[5];
        rightStrRuck.isVisible = false;

        let rightStrRuckSraf = result.meshes[6];
        rightStrRuckSraf.isVisible = false;

        sturmankersRuckseite.push(rightStrRuck);
        sturRuckseiteSrafs.push(rightStrRuckSraf);

        let rightRucks = new Array(rightStrRuck, rightStrRuckSraf);
        sturmankersRuckseiteRight.push(rightRucks);
        if (postType == 0) {
          rightRucks.forEach((elm) => {
            elm.position.y -= 0.01;
          });
        }

        //create foundation start for back stunmankwer
        let foundationRuckStart = new BABYLON.MeshBuilder.CreateGround(
          "foundationRuckStart",
          { width: 0.4, height: 0.7 },
          scene
        );

        foundationRuckStart.position = new BABYLON.Vector3(0, -0.13, 0);
        foundationRuckStart.rotation.x = -Math.PI / 2;
        foundationRuckStart.material = concreteMat;
        foundationRuckStart.parent = rightRoot0;
        foundationStartsRuck.push(foundationRuckStart);
        foundationRuckStart.isVisible = false;

        //create foundation for back stunmankwer
        let foundationRuck = new BABYLON.MeshBuilder.CreateBox(
          "foundationRuck",
          { width: 0.4, height: 0.7, depth: 0.5 },
          scene
        );

        foundationRuck.material = foundationMat;
        foundationRuck.position = new BABYLON.Vector3(0, -0.13, 0.251);
        foundationRuck.parent = rightRoot0;
        foundationsRuck.push(foundationRuck);
        foundationRuck.isVisible = false;

        //set material
        rightStrVord.material = rightStrRuck.material = sturmankerMat;
        //set sraf material
        rightStrVordSraf.material = rightStrRuckSraf.material = rootMat;

        //cerate fake strumanker
        let fakeFront = new BABYLON.MeshBuilder.CreateBox(
          "fakeFront",
          { width: 0.01, height: 0.3, depth: 0.3 },
          scene
        );
        fakeFront.parent = rightStrVord;
        fakeFronts.push(fakeFront);
        fakeFront.isVisible = false;

        let fakeBack = new BABYLON.MeshBuilder.CreateBox(
          "fakeBack",
          { width: 0.01, height: 0.3, depth: 0.3 },
          scene
        );
        fakeBack.parent = rightStrRuck;
        fakeBacks.push(fakeBack);
        fakeBack.isVisible = false;

        let fakeLeft = new BABYLON.MeshBuilder.CreateBox(
          "fakeLeft",
          { width: 0.01, height: 0.3, depth: 0.3 },
          scene
        );
        fakeLeft.parent = rightStrRuck;
        fakeLeft.addRotation(0, 0, Math.PI / 2);
        fakeLeft.position = new BABYLON.Vector3(-0.2, 0.19, 0);
        fakeLefts.push(fakeLeft);

        fakeLeft.isVisible = false;

        let fakeRight = new BABYLON.MeshBuilder.CreateBox(
          "fakeRight",
          { width: 0.01, height: 0.3, depth: 0.3 },
          scene
        );
        fakeRight.parent = rightStrVord;
        fakeRight.addRotation(0, 0, Math.PI / 2);
        fakeRight.position = new BABYLON.Vector3(0.2, -0.19, 0);
        fakeRights.push(fakeRight);
        fakeRight.isVisible = false;

        //SET CHILDREN
        rightPostCap.addChild(rightPostCapClone);
        rightPostCap.addChild(signPlaneWarRight);
        rightPostCap.addChild(signPlaneDelRight);
        rightPostCap.addChild(foundationRightStart);
        rightPostCap.addChild(rightLed);
        rightPostCap.addChild(rightStrVord);
        rightPostCap.addChild(rightStrVordSraf);
        rightPostCap.addChild(rightStrRuck);
        rightPostCap.addChild(rightStrRuckSraf);
        rightPostCap.addChild(rightRoot0);
        rightPostCap.addChild(rightRoot1);

        rightPostCap.addChild(rightMetalPart0);
        rightPostCap.addChild(rightMetalPart1);

        rightPostCap.addChild(foundationRight);
        rightPostCap.addChild(foundationVordStart);
        rightPostCap.addChild(foundationVord);
        rightPostCap.addChild(foundationRuckStart);
        rightPostCap.addChild(foundationRuck);

        //SET NEW FENCE SAME POST SIZE AS THE OTHER
        if (befePfostenSize == 1) {
          if (type != "gardoHalf") {
            rightPost.scaling.z = 1.2;
            rightPost.position.y = 0.7717;
          } else {
            rightPost.scaling.z = 0.724;
            rightPost.position.y = 0.41;
          }
          rightRoot0.isVisible = false;
          rightRoot1.isVisible = false;

          foundationRight.scaling.y = 1;
          foundationVord.scaling.z = 1;
          foundationRuck.scaling.z = 1;

          foundationRight.position.z = 2.165;
          foundationVord.position.z = 2.165;
          foundationRuck.position.z = 2.165;
        }
        // setbefePfosten(1.2, 0.7717, false, 1, -0.5 / 2);
        if (befePfostenSize == 2) {
          if (type != "gardoHalf") {
            rightPost.scaling.z = 1.475;
            rightPost.position.y = 0.511;
          } else {
            rightPost.scaling.z = 0.999;
            rightPost.position.y = 0.15;
          }
          rightRoot0.isVisible = false;
          rightRoot1.isVisible = false;

          foundationRight.scaling.y = 1.8;
          foundationVord.scaling.z = 1.8;
          foundationRuck.scaling.z = 1.8;

          foundationRight.position.z = 2.365;
          foundationVord.position.z = 2.365;
          foundationRuck.position.z = 2.365;
        }
        // setbefePfosten(1.475, 0.511, false, 1.8, -0.9 / 2);

        //INTERSECTION FUNCTION
        intersectionFunction(
          fakeFronts,
          fakeFences,
          sturmankersVorderseite,
          sturVorderseiteSrafs,
          leds,
          singsDel,
          singsWar,
          fakeBacks,
          sturmankersRuckseite,
          sturRuckseiteSrafs,
          foundationStarts,
          foundations,
          foundationStartsVord,
          foundationsVord,
          foundationStartsRuck,
          foundationsRuck,
          metalParts,
          smallMetalParts,
          postType,
          allWoodPosts
        );

        //CREATE SINGS FUNCTION
        createNewFenceSign();

        //CREATE OBJ FOR FENCE
        fenceIdCount += 1;
        fenceId = fenceIdCount;

        fenceType = type;

        fenceSizeObj = 180;

        childrenThis = [];

        fencesArr.push(
          new NewFence(fenceId, fenceType, fenceSizeObj, childrenThis)
        );

        fencesArr[fenceId].status = "activeFence";

        if (fenceId > 0 && typeof activeFence != "boolean") {
          fencesArr[activeFence].children.push(fenceId);
          fencesArr[fenceId].parent = fencesArr[activeFence].id;

          //set parent right post
          if (
            (rightPosts[fencesArr[fenceId].parent].isVisible ||
              rightWoodPosts[fencesArr[fenceId].parent].isVisible) &&
            type != "gardoHalf"
          ) {
            // ledsRight[fencesArr[fenceId].parent].scaling.z = 1;
            // ledsRight[fencesArr[fenceId].parent].position.z = 0;
            // ledsRight[fencesArr[fenceId].parent].position.y = 0.001;
            if (rightPosts[fencesArr[fenceId].parent].scaling.z < 0.6) {
              rightWoodPosts[fencesArr[fenceId].parent].scaling.y = 1;
              rightWoodPosts[fencesArr[fenceId].parent].position.y = 0.935;
              rightPosts[fencesArr[fenceId].parent].scaling.z = 1;
              rightPosts[fencesArr[fenceId].parent].position.y = 0.962;
            }
            if (
              rightPosts[fencesArr[fenceId].parent].scaling.z > 0.7 &&
              rightPosts[fencesArr[fenceId].parent].scaling.z < 0.8
            ) {
              rightWoodPosts[fencesArr[fenceId].parent].scaling.y = 1.2;
              rightWoodPosts[fencesArr[fenceId].parent].position.y = 0.7717;
              rightPosts[fencesArr[fenceId].parent].scaling.z = 1.2;
              rightPosts[fencesArr[fenceId].parent].position.y = 0.7717;
            }
            if (
              rightPosts[fencesArr[fenceId].parent].scaling.z > 0.9 &&
              rightPosts[fencesArr[fenceId].parent].scaling.z < 1
            ) {
              rightWoodPosts[fencesArr[fenceId].parent].scaling.y = 1.475;
              rightWoodPosts[fencesArr[fenceId].parent].position.y = 0.511;
              rightPosts[fencesArr[fenceId].parent].scaling.z = 1.475;
              rightPosts[fencesArr[fenceId].parent].position.y = 0.511;
            }
            if (rightPosts[fencesArr[fenceId].parent].isVisible) {
              rightPostCaps[fencesArr[fenceId].parent].isVisible = true;
              rightPostCapClones[fencesArr[fenceId].parent].isVisible = false;
            }
          }
        }
        //for main post
        if (fenceId > 0 && typeof activeFence == "boolean") {
          if (type != "gardoHalf") {
            if (leftPosts[0].scaling.z < 0.6) {
              allWoodPosts[0].scaling.y = 1;
              allWoodPosts[0].position.y = 0.935;
              leftPosts[0].scaling.z = 1;
              leftPosts[0].position.y = 0.962;
            }
            if (leftPosts[0].scaling.z > 0.6 && leftPosts[0].scaling.z < 0.9) {
              allWoodPosts[0].scaling.y = 1.2;
              allWoodPosts[0].position.y = 0.7717;
              leftPosts[0].scaling.z = 1.2;
              leftPosts[0].position.y = 0.7717;
            }
            if (leftPosts[0].scaling.z > 0.9 && leftPosts[0].scaling.z < 1) {
              allWoodPosts[0].scaling.y = 1.475;
              allWoodPosts[0].position.y = 0.511;
              leftPosts[0].scaling.z = 1.475;
              leftPosts[0].position.y = 0.511;
            }
            if (allPosts[0].isVisible) {
              leftPostCaps[0].isVisible = false;
              leftPostCapClones[0].isVisible = true;
            }
          }
        }

        //set Ground
        setGround();
        // //
        //for loading
        setTimeout(() => {
          engine.hideLoadingUI();
        }, 3000);
        //       //END OF MESH
        //       /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      }
    );

  //SET GROUND
  var groundSizeX = 0;
  var groundSizeZ = 0;

  function setGround() {
    arrX = [];
    arrZ = [];
    for (let i = 0; i < allPosts.length; i++) {
      if (allPosts[i].isVisible) {
        arrX.push(Math.round(getAbsPosX(allPosts[i]) * 100) / 100);
        arrZ.push(Math.round(getAbsPosZ(allPosts[i]) * 100) / 100);
      }
      if (allWoodPosts[i].isVisible) {
        arrX.push(Math.round(getAbsPosX(allWoodPosts[i]) * 100) / 100);
        arrZ.push(Math.round(getAbsPosZ(allWoodPosts[i]) * 100) / 100);
      }
    }
    arrX.sort(function (a, b) {
      return a - b;
    });
    arrZ.sort(function (a, b) {
      return a - b;
    });
    arrXFirst = Math.abs(arrX[0]);
    arrXSecond = arrX[arrX.length - 1];
    arrZFirst = Math.abs(arrZ[0]);
    arrZSecond = arrZ[arrZ.length - 1];
    groundSizeX = arrXFirst + arrXSecond + 1.1;
    groundSizeZ = arrZFirst + arrZSecond + 1.1;
    groundChange(groundSizeX, groundSizeZ);
    ground.position = new BABYLON.Vector3(
      (arrX[0] + arrX[arrX.length - 1]) / 2,
      0,
      (arrZ[0] + arrZ[arrZ.length - 1]) / 2
    );
    //aniamtion to change camera target position
    var animationCameraTarget = new BABYLON.Animation(
      "myAnimationcamera",
      "position",
      60,
      BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    const keyFrames = [];
    keyFrames.push({
      frame: 0,
      value: cameraTarget.position.clone(),
    });
    //change camera target position
    cameraTarget.position.x = ground.position.x;
    cameraTarget.position.z = ground.position.z;
    keyFrames.push({
      frame: 120,
      value: cameraTarget.position.clone(),
    });
    animationCameraTarget.setKeys(keyFrames);
    const easingFun2 = new BABYLON.CubicEase();
    easingFun2.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);
    animationCameraTarget.setEasingFunction(easingFun2);
    cameraTarget.animations.push(animationCameraTarget);
    //call animation
    scene.beginAnimation(cameraTarget, 0, 120, false);
    //set camera radius
    var cameraRadius;
    if (ground.scaling.x > ground.scaling.z) {
      if (ground.scaling.x < 2.7) {
        cameraRadius = 4;
      } else {
        cameraRadius = ground.scaling.x * 1.5;
      }
    } else {
      cameraRadius = ground.scaling.z * 1.5;
    }
    //radius  animation
    let radiusAnimation = new BABYLON.Animation(
      "radiusAnimation",
      "radius",
      60,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    let radiusKeyFrames = [];
    radiusKeyFrames.push({
      frame: 0,
      value: camera.radius,
    });
    radiusKeyFrames.push({
      frame: 120,
      value: cameraRadius,
    });
    radiusAnimation.setKeys(radiusKeyFrames);
    const easingFun = new BABYLON.CubicEase();
    easingFun.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);
    radiusAnimation.setEasingFunction(easingFun);
    camera.animations.push(radiusAnimation);
    //call radius animation
    scene.beginAnimation(camera, 0, 120, false);

    if (allPosts[0].isVisible) {
      displayGroundSizeX = Math.round((arrXFirst + arrXSecond) * 100 + 7);
      displayGroundSizeZ = Math.round((arrZFirst + arrZSecond) * 100 + 7);
    } else {
      displayGroundSizeX = Math.round((arrXFirst + arrXSecond) * 100 + 9);
      displayGroundSizeZ = Math.round((arrZFirst + arrZSecond) * 100 + 9);
    }
    //set ground text position and value
    //x
    groundTextX.position.x = groundTextX2.position.x = ground.position.x;
    groundTextX.position.z = ground.position.z + -ground.scaling.z / 2 - 0.2;
    groundTextX2.position.z = ground.position.z + ground.scaling.z / 2 + 0.2;
    textX = displayGroundSizeX + "cm";
    textureContextX.clearRect(0, 0, 512, 256);
    textureContextX.textAlign = "center";
    textureContextX.fillText(textX, 256, 140);
    textureGroundX.update();
    //z
    groundTextZ.position.x = ground.position.x + -ground.scaling.x / 2 - 0.2;
    groundTextZ2.position.x = ground.position.x + ground.scaling.x / 2 + 0.2;
    groundTextZ.position.z = groundTextZ2.position.z = ground.position.z;
    textZ = displayGroundSizeZ + "cm";
    textureContextZ.clearRect(0, 0, 512, 256);
    textureContextZ.textAlign = "center";
    textureContextZ.fillText(textZ, 256, 140);
    textureGroundZ.update();
  } ////////////////////////////////////////////////////////////////////////////////////

  //CREATE DEFAULT FENCE
  function handleTabActivnes() {
    if (!document.hidden) {
      createRightFence(0.95, 0, 0, "gardoFence");
      clearInterval(refreshIntervalId);
    }
  }
  if (document.hidden) {
    var refreshIntervalId = setInterval(handleTabActivnes, 100);
  } else {
    createRightFence(0.95, 0, 0, "gardoFence");
  }
  //ADD NEW FENCES
  let addNewFenceNormal = document.getElementById("new-fence-normal");
  addNewFenceNormal.onclick = () => {
    createNewFence(
      createRightFence,
      activeArrowSide,
      rightPosts,
      rightWoodPosts,
      leftPosts,
      allWoodPosts,
      activeArrow,
      fencePostMat,
      addFenceSings,
      addNewFenceMeshMat,
      sideAccesories,
      addNewFenceToSide,
      unselect,
      "gardoFence",
      getAbsPosX,
      getAbsPosZ
    );
  };
  let addNewFenceHalf = document.getElementById("new-fence-half");
  addNewFenceHalf.onclick = () => {
    createNewFence(
      createRightFence,
      activeArrowSide,
      rightPosts,
      rightWoodPosts,
      leftPosts,
      allWoodPosts,
      activeArrow,
      fencePostMat,
      addFenceSings,
      addNewFenceMeshMat,
      sideAccesories,
      addNewFenceToSide,
      unselect,
      "gardoHalf",
      getAbsPosX,
      getAbsPosZ
    );
  };
  let addNewFenceRank = document.getElementById("new-fence-rank");
  addNewFenceRank.onclick = () => {
    createNewFence(
      createRightFence,
      activeArrowSide,
      rightPosts,
      rightWoodPosts,
      leftPosts,
      allWoodPosts,
      activeArrow,
      fencePostMat,
      addFenceSings,
      addNewFenceMeshMat,
      sideAccesories,
      addNewFenceToSide,
      unselect,
      "gardoRank",
      getAbsPosX,
      getAbsPosZ
    );
  };

  function toAddSingleStur(sturType, a, b) {
    sturType[activeFence].forEach((elm) => {
      elm.isVisible = true;
    });
    foundationVisibilty(
      foundationStarts,
      foundations,
      false,
      foundationStartsVord,
      foundationsVord,
      a,
      foundationStartsRuck,
      foundationsRuck,
      b,
      activeFence + 1
    );
  }
  let addSturmanker = document.getElementById("add-sturmanker");
  addSturmanker.onclick = () => {
    sideAccesories.style.display = "none";
    addNewFenceToSide.style.display = "none";
    unselect(false);
    if (activeArrowSide == 2) {
      if (wholeFences[activeFence].rotation.y == 0) {
        toAddSingleStur(sturmankersVorderseiteRight, true, false);
      } else {
        toAddSingleStur(sturmankersRuckseiteRight, false, true);
      }
    }
    if (activeArrowSide == 3) {
      if (wholeFences[activeFence].rotation.y == 0) {
        toAddSingleStur(sturmankersRuckseiteRight, false, true);
      } else {
        toAddSingleStur(sturmankersVorderseiteRight, true, false);
      }
    }
    if (activeArrowSide == 1) {
      if (wholeFences[activeFence].rotation.y < 0) {
        toAddSingleStur(sturmankersVorderseiteRight, true, false);
      } else {
        toAddSingleStur(sturmankersRuckseiteRight, false, true);
      }
    }
    if (activeArrowSide == 4) {
      if (wholeFences[activeFence].rotation.y < 0) {
        toAddSingleStur(sturmankersRuckseiteRight, false, true);
      } else {
        toAddSingleStur(sturmankersVorderseiteRight, true, false);
      }
    }
    if (activeArrowSide == 5) {
      sturmankersVorderseite[0].isVisible = true;
      foundationVisibilty(
        foundationStarts,
        foundations,
        false,
        foundationStartsVord,
        foundationsVord,
        true,
        foundationStartsRuck,
        foundationsRuck,
        false,
        0
      );
    }
    if (activeArrowSide == 6) {
      sturmankersRuckseite[0].isVisible = true;
      foundationVisibilty(
        foundationStarts,
        foundations,
        false,
        foundationStartsVord,
        foundationsVord,
        false,
        foundationStartsRuck,
        foundationsRuck,
        true,
        0
      );
    }
    sturSelectionFun(
      sturmankersVorderseite,
      sturVorderseiteSrafs,
      foundationStarts,
      foundations
    );
    sturSelectionFun(
      sturmankersRuckseite,
      sturRuckseiteSrafs,
      foundationStarts,
      foundations
    );
  };
  //ADD NEW FENCE SIDE BAR SETTINGS
  function addNewFenceSideBar() {
    removeSideAccesories(
      sideAccesories,
      deleteAccesorie,
      addFenceAcc,
      editPost,
      addNewFenceToSide
    );
    sideAccesories.style.display = "block";
    addNewFenceToSide.style.display = "block";

    if (activeArrowSide == 1) {
      // if (!newFenceBackSigns[activeFence].isVisible) {
      if (
        (!newFenceLeftSigns[activeFence].isVisible ||
          !newFenceRightSigns[activeFence].isVisible) &&
        !sturmankersVorderseiteRight[activeFence][0].isVisible &&
        !sturmankersRuckseiteRight[activeFence][0].isVisible
      ) {
        addSturmanker.style.display = "flex";
      } else {
        addSturmanker.style.display = "none";
      }
    }
    if (activeArrowSide == 4) {
      // if (!newFenceForwardSigns[activeFence].isVisible) {
      if (
        (!newFenceLeftSigns[activeFence].isVisible ||
          !newFenceRightSigns[activeFence].isVisible) &&
        !sturmankersVorderseiteRight[activeFence][0].isVisible &&
        !sturmankersRuckseiteRight[activeFence][0].isVisible
      ) {
        addSturmanker.style.display = "flex";
      } else {
        addSturmanker.style.display = "none";
      }
    }
    if (activeArrowSide == 2) {
      // if (!newFenceLeftSigns[activeFence].isVisible) {
      if (
        (!newFenceForwardSigns[activeFence].isVisible ||
          !newFenceBackSigns[activeFence].isVisible) &&
        !sturmankersVorderseiteRight[activeFence][0].isVisible &&
        !sturmankersRuckseiteRight[activeFence][0].isVisible
      ) {
        addSturmanker.style.display = "flex";
      } else {
        addSturmanker.style.display = "none";
      }
    }
    if (activeArrowSide == 3) {
      // if (!newFenceRightSigns[activeFence].isVisible) {
      if (
        (!newFenceForwardSigns[activeFence].isVisible ||
          !newFenceBackSigns[activeFence].isVisible) &&
        !sturmankersVorderseiteRight[activeFence][0].isVisible &&
        !sturmankersRuckseiteRight[activeFence][0].isVisible
      ) {
        addSturmanker.style.display = "flex";
      } else {
        addSturmanker.style.display = "none";
      }
    }
    if (activeArrowSide == 5) {
      if (
        !sturmankersVorderseite[0].isVisible &&
        !sturmankersRuckseite[0].isVisible
      ) {
        addSturmanker.style.display = "flex";
      } else {
        addSturmanker.style.display = "none";
      }
    }
    if (activeArrowSide == 6) {
      if (
        !sturmankersVorderseite[0].isVisible &&
        !sturmankersRuckseite[0].isVisible
      ) {
        addSturmanker.style.display = "flex";
      } else {
        addSturmanker.style.display = "none";
      }
    }
  }
  //CREATE SINGS FUNCTION
  var activeArrow = false;
  var activeArrowSide = false;
  function createNewFenceSign() {
    //FRONT SIGN
    const addNewFenceMesh = BABYLON.MeshBuilder.CreateCylinder(
      "addNewFenceMesh",
      {
        height: 0.01,
        diameter: 0.3,
        tessellation: 50,
      }
    );
    addNewFenceMesh.material = addNewFenceMeshMat;
    addNewFenceMesh.position = new BABYLON.Vector3(
      getAbsPosX(rightPosts[rightPosts.length - 1]) + 0.3,
      1,
      getAbsPosZ(rightPosts[rightPosts.length - 1])
    );
    addNewFenceMesh.addRotation(Math.PI / 2, 0, 0);

    newFenceForwardSigns.push(addNewFenceMesh);
    //CREATE FENCE FORWARD
    for (let i = 0; i < newFenceForwardSigns.length; i++) {
      newFenceForwardSigns[i].actionManager = new BABYLON.ActionManager(scene);
      newFenceForwardSigns[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            activeArrow = i;
            activeArrowSide = 1;
            addNewFenceSideBar();
            addFenceSings.forEach((elm) => {
              elm.material = addNewFenceMeshMat;
            });
            newFenceForwardSigns[i].material = addNewFenceMeshMatAct;
            addDefaultMaterial(
              fenceBoards,
              sturmankersVorderseite,
              rightPosts,
              leftPosts,
              woodMaterials,
              fencePostMat,
              rankelements,
              addFenceSings,
              allWoodPosts,
              woodTopParts,
              topBoards,
              sturmankerMat,
              sturmankersRuckseite
            );
            newFenceForwardSigns[i].isVisible = true;
            newFenceRightSigns[i].isVisible = true;
            newFenceLeftSigns[i].isVisible = true;
            newFenceBackSigns[i].isVisible = true;
            intersectArrowSignsFence(
              fakeFences,
              newFenceForwardSigns,
              newFenceRightSigns,
              newFenceLeftSigns,
              newFenceBackSigns,
              activeFence,
              addFenceSings
            );
            rightPosts[i].material = selectedMat;
            document.getElementsByClassName("accTitle")[0].innerHTML =
              "einen Artikel hinzufügen";
          }
        )
      );
    }

    //RIGHT SIGHN
    var addNewFenceMeshRight = addNewFenceMesh.clone("addNewFenceMeshRight");
    addNewFenceMeshRight.position = new BABYLON.Vector3(
      getAbsPosX(rightPosts[rightPosts.length - 1]),
      1,
      getAbsPosZ(rightPosts[rightPosts.length - 1]) - 0.3
    );
    addNewFenceMeshRight.addRotation(0, 0, -Math.PI / 2);
    newFenceRightSigns.push(addNewFenceMeshRight);
    //CREATE FENCE RIGHT
    for (let i = 0; i < newFenceRightSigns.length; i++) {
      newFenceRightSigns[i].actionManager = new BABYLON.ActionManager(scene);
      newFenceRightSigns[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            activeArrow = i;
            activeArrowSide = 2;
            addNewFenceSideBar();
            addFenceSings.forEach((elm) => {
              elm.material = addNewFenceMeshMat;
            });
            newFenceRightSigns[i].material = addNewFenceMeshMatAct;
            addDefaultMaterial(
              fenceBoards,
              sturmankersVorderseite,
              rightPosts,
              leftPosts,
              woodMaterials,
              fencePostMat,
              rankelements,
              addFenceSings,
              allWoodPosts,
              woodTopParts,
              topBoards,
              sturmankerMat,
              sturmankersRuckseite
            );
            newFenceForwardSigns[i].isVisible = true;
            newFenceRightSigns[i].isVisible = true;
            newFenceLeftSigns[i].isVisible = true;
            newFenceBackSigns[i].isVisible = true;
            intersectArrowSignsFence(
              fakeFences,
              newFenceForwardSigns,
              newFenceRightSigns,
              newFenceLeftSigns,
              newFenceBackSigns,
              activeFence,
              addFenceSings
            );
            rightPosts[i].material = selectedMat;
            document.getElementsByClassName("accTitle")[0].innerHTML =
              "einen Artikel hinzufügen";
          }
        )
      );
    }

    //LEFT SIGHN
    var addNewFenceMeshLeft = addNewFenceMesh.clone("addNewFenceMeshLeft");
    addNewFenceMeshLeft.position = new BABYLON.Vector3(
      getAbsPosX(rightPosts[rightPosts.length - 1]),
      1,
      getAbsPosZ(rightPosts[rightPosts.length - 1]) + 0.3
    );
    addNewFenceMeshLeft.addRotation(0, 0, Math.PI / 2);
    newFenceLeftSigns.push(addNewFenceMeshLeft);
    //CREATE FENCE RIGHT
    for (let i = 0; i < newFenceLeftSigns.length; i++) {
      newFenceLeftSigns[i].actionManager = new BABYLON.ActionManager(scene);
      newFenceLeftSigns[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            activeArrow = i;
            activeArrowSide = 3;
            addNewFenceSideBar();
            addFenceSings.forEach((elm) => {
              elm.material = addNewFenceMeshMat;
            });
            newFenceLeftSigns[i].material = addNewFenceMeshMatAct;
            addDefaultMaterial(
              fenceBoards,
              sturmankersVorderseite,
              rightPosts,
              leftPosts,
              woodMaterials,
              fencePostMat,
              rankelements,
              addFenceSings,
              allWoodPosts,
              woodTopParts,
              topBoards,
              sturmankerMat,
              sturmankersRuckseite
            );
            newFenceForwardSigns[i].isVisible = true;
            newFenceRightSigns[i].isVisible = true;
            newFenceLeftSigns[i].isVisible = true;
            newFenceBackSigns[i].isVisible = true;
            intersectArrowSignsFence(
              fakeFences,
              newFenceForwardSigns,
              newFenceRightSigns,
              newFenceLeftSigns,
              newFenceBackSigns,
              activeFence,
              addFenceSings
            );
            rightPosts[i].material = selectedMat;
            document.getElementsByClassName("accTitle")[0].innerHTML =
              "einen Artikel hinzufügen";
          }
        )
      );
    }

    //BACK SIGHN
    var addNewFenceMeshBack = addNewFenceMesh.clone("addNewFenceMeshBack");
    addNewFenceMeshBack.position = new BABYLON.Vector3(
      getAbsPosX(rightPosts[rightPosts.length - 1]) - 0.3,
      1,
      getAbsPosZ(rightPosts[rightPosts.length - 1])
    );
    addNewFenceMeshBack.addRotation(0, Math.PI, 0);
    newFenceBackSigns.push(addNewFenceMeshBack);
    //CREATE FENCE BACK
    for (let i = 0; i < newFenceBackSigns.length; i++) {
      newFenceBackSigns[i].actionManager = new BABYLON.ActionManager(scene);
      newFenceBackSigns[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            activeArrow = i;
            activeArrowSide = 4;
            addNewFenceSideBar();
            addFenceSings.forEach((elm) => {
              elm.material = addNewFenceMeshMat;
            });
            newFenceBackSigns[i].material = addNewFenceMeshMatAct;
            addDefaultMaterial(
              fenceBoards,
              sturmankersVorderseite,
              rightPosts,
              leftPosts,
              woodMaterials,
              fencePostMat,
              rankelements,
              addFenceSings,
              allWoodPosts,
              woodTopParts,
              topBoards,
              sturmankerMat,
              sturmankersRuckseite
            );
            newFenceForwardSigns[i].isVisible = true;
            newFenceRightSigns[i].isVisible = true;
            newFenceLeftSigns[i].isVisible = true;
            newFenceBackSigns[i].isVisible = true;
            intersectArrowSignsFence(
              fakeFences,
              newFenceForwardSigns,
              newFenceRightSigns,
              newFenceLeftSigns,
              newFenceBackSigns,
              activeFence,
              addFenceSings
            );
            rightPosts[i].material = selectedMat;
            document.getElementsByClassName("accTitle")[0].innerHTML =
              "einen Artikel hinzufügen";
          }
        )
      );
    }

    addFenceSings.push(
      addNewFenceMesh,
      addNewFenceMeshRight,
      addNewFenceMeshLeft,
      addNewFenceMeshBack
    );
    addFenceSings.forEach((elm) => {
      elm.isVisible = false;
    });
    //////////////////
  }

  function createMainPostSigns() {
    //RIGHT SIGHN MAIN POST
    const addNewFenceMeshRightMain = BABYLON.MeshBuilder.CreateCylinder(
      "addNewFenceMeshRightMain",
      {
        height: 0.01,
        diameter: 0.3,
        tessellation: 50,
      }
    );
    addNewFenceMeshRightMain.material = addNewFenceMeshMat;
    addNewFenceMeshRightMain.position = new BABYLON.Vector3(
      getAbsPosX(leftPosts[0]),
      1,
      getAbsPosZ(leftPosts[0]) - 0.3
    );
    addNewFenceMeshRightMain.addRotation(Math.PI / 2, 0, -Math.PI / 2);
    // newFenceRightSigns.push(addNewFenceMeshRightMain);
    addNewFenceMeshRightMain.actionManager = new BABYLON.ActionManager(scene);
    addNewFenceMeshRightMain.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        function () {
          activeArrow = false;
          activeArrowSide = 5;
          addNewFenceSideBar();
          addFenceSings.forEach((elm) => {
            elm.material = addNewFenceMeshMat;
          });
          addNewFenceMeshRightMain.material = addNewFenceMeshMatAct;
          addDefaultMaterial(
            fenceBoards,
            sturmankersVorderseite,
            rightPosts,
            leftPosts,
            woodMaterials,
            fencePostMat,
            rankelements,
            addFenceSings,
            allWoodPosts,
            woodTopParts,
            topBoards,
            sturmankerMat,
            sturmankersRuckseite
          );
          addNewFenceMeshRightMain.isVisible = true;
          addNewFenceMeshLeftMain.isVisible = true;

          leftPosts[0].material = selectedMat;
          document.getElementsByClassName("accTitle")[0].innerHTML =
            "einen Artikel hinzufügen";
        }
      )
    );

    //LEFT SIGHN MAIN POST
    const addNewFenceMeshLeftMain = BABYLON.MeshBuilder.CreateCylinder(
      "addNewFenceMeshLeftMain",
      {
        height: 0.01,
        diameter: 0.3,
        tessellation: 50,
      }
    );
    addNewFenceMeshLeftMain.material = addNewFenceMeshMat;
    addNewFenceMeshLeftMain.position = new BABYLON.Vector3(
      getAbsPosX(leftPosts[0]),
      1,
      getAbsPosZ(leftPosts[0]) + 0.3
    );
    addNewFenceMeshLeftMain.addRotation(Math.PI / 2, 0, Math.PI / 2);
    // newFenceRightSigns.push(addNewFenceMeshLeftMain);
    addNewFenceMeshLeftMain.actionManager = new BABYLON.ActionManager(scene);
    addNewFenceMeshLeftMain.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        function () {
          activeArrow = false;
          activeArrowSide = 6;
          addNewFenceSideBar();
          addFenceSings.forEach((elm) => {
            elm.material = addNewFenceMeshMat;
          });
          addNewFenceMeshLeftMain.material = addNewFenceMeshMatAct;
          addDefaultMaterial(
            fenceBoards,
            sturmankersVorderseite,
            rightPosts,
            leftPosts,
            woodMaterials,
            fencePostMat,
            rankelements,
            addFenceSings,
            allWoodPosts,
            woodTopParts,
            topBoards,
            sturmankerMat,
            sturmankersRuckseite
          );
          addNewFenceMeshRightMain.isVisible = true;
          addNewFenceMeshLeftMain.isVisible = true;

          leftPosts[0].material = selectedMat;
          document.getElementsByClassName("accTitle")[0].innerHTML =
            "einen Artikel hinzufügen";
        }
      )
    );

    addFenceSings.push(addNewFenceMeshRightMain, addNewFenceMeshLeftMain);
  }

  //   //TO DELETE FUNCTION for sturmanker led
  //   function onDelete(i) {
  //     leds[i].isVisible = false;
  //     singsDel[i].isVisible = false;

  //     //set activnes of led when deleted led
  //     ledsOn = 0;
  //     leds.forEach((elm) => {
  //       if (elm.isVisible) {
  //         ledsOn += 1;
  //       }
  //     });
  //     if (ledsOn == 0) {
  //       //set to ohne on led lights
  //       //set html
  //       lightSettings.style.display = "none";
  //       lightColorSet.style.display = "none";
  //       //set babylon
  //       leds.forEach((elm) => {
  //         elm.isVisible = false;
  //       });
  //       setDayNight(0.6, 0, 0.7);
  //       ledColNum = 4;
  //       setLightColor(ledColNum);
  //       setLedColor(ledColNum);
  //       setActivnesStyle(ledParts, 6, 0, "active-text-color");
  //     }
  //   }
  //   //LED STURMANKER FUNCTION
  //   function ledSturOnClick(a, i, b) {
  //     modalFade.style.display = "none";
  //     onLedSturmanker.style.display = "none";
  //     a.style.display = "none";
  //     leds[i].isVisible = b;
  //     singsWar[i].isVisible = false;
  //   }

  //   //LED STURMANKER FUNCTION
  //   function sturmankerOnOff(a, i) {
  //     if (vorderseiteOn) {
  //       sturmankersVorderseite[i].isVisible = a;
  //       sturVorderseiteSrafs[i].isVisible = a;
  //       foundationVisibilty(
  //         foundationStarts,
  //         foundations,
  //         false,
  //         foundationStartsVord,
  //         foundationsVord,
  //         true,
  //         foundationStartsRuck,
  //         foundationsRuck,
  //         false,
  //         i
  //       );
  //     }
  //     if (ruckseiteOn) {
  //       sturmankersRuckseite[i].isVisible = a;
  //       sturRuckseiteSrafs[i].isVisible = a;
  //       foundationVisibilty(
  //         foundationStarts,
  //         foundations,
  //         false,
  //         foundationStartsVord,
  //         foundationsVord,
  //         false,
  //         foundationStartsRuck,
  //         foundationsRuck,
  //         true,
  //         i
  //       );
  //     }
  //   }

  //SET NUMBER ON BEGINING
  let setNum = document.getElementsByClassName("set-num");
  for (let i = 0; i < setNum.length; i++) {
    setNum[i].innerHTML = i + 1;
  }

  //SET TITLE ACTIVNESS
  let clickableMainSec = document.getElementsByClassName(
    "set-part-click-title"
  );
  for (let i = 0; i < clickableMainSec.length; i++) {
    clickableMainSec[i].onclick = () => {
      // for (let j = 0; j < clickableMainSec.length; j++) {
      //   if (clickableMainSec[j].className == "set-part-click-title clicked") {
      //     clickableMainSec[j].className = clickableMainSec[i].className.replace(
      //       " clicked",
      //       " not-clicked"
      //     );
      //     clickableMainSec[j].className == "set-part-click-title not-clicked";
      //     clickableMainSec[j].children[2].innerHTML = "+";
      //     clickableMainSec[j].nextElementSibling.style.height = 0;
      //   }
      // }
      if (clickableMainSec[i].className != "set-part-click-title clicked") {
        clickableMainSec[i].className = clickableMainSec[i].className.replace(
          " not-clicked",
          " clicked"
        );
        clickableMainSec[i].children[2].innerHTML = "-";
        clickableMainSec[i].nextElementSibling.style.height = "auto";
      } else if (
        clickableMainSec[i].className == "set-part-click-title clicked"
      ) {
        clickableMainSec[i].className = clickableMainSec[i].className.replace(
          " clicked",
          " not-clicked"
        );
        clickableMainSec[i].children[2].innerHTML = "+";
        clickableMainSec[i].nextElementSibling.style.height = 0;
      }

      //set activnes on leds parts to turn of led
      // if (i != 5) {
      //   setActivnesStyle(ledDayNight, 8, 0, "active-text-color");
      //   for (let i = 0; i < leds.length; i++) {
      //     setDayNight(0.6, 0, 0.7);
      //     setLightColor(4);
      //     setLedColor(ledColNum);
      //     glow.intensity = 0;
      //     singsDel[i].isVisible = false;
      //   }
      // }
    };
  }

  //FUNCTION TO SET COLOR AND MATERIAL - 1, 2, 3, 5
  function setPartsAndconf(parts, changable, matCol) {
    for (let i = 0; i < parts.length; i++) {
      //set colors in badge
      parts[i].children[0].children[0].style.backgroundColor = matCol[i];
      parts[i].addEventListener("click", () => {
        //change fence color
        if (changable != false) {
          changable.diffuseColor = BABYLON.Color3.FromHexString(matCol[i]);
        }
      });
    }
  }

  //SET ACTIVNES
  //ACTIVE CHECKMARK
  // "active-text-color"
  let checkMark = "&#10003";
  //set activness style
  function setActivnesStyle(parts, partNum, i, actClass) {
    //change active singhts
    var currentActCol = document.getElementsByClassName(actClass);
    //add remove active chackmark
    currentActCol[partNum].children[2].innerHTML = "";
    parts[i].children[2].innerHTML = checkMark;
    //change active color
    currentActCol[partNum].className = currentActCol[partNum].className.replace(
      " " + actClass,
      ""
    );
    parts[i].className += " " + actClass;
  }

  function setActivnes(parts, partNum, actClass) {
    for (let i = 0; i < parts.length; i++) {
      parts[i].addEventListener("click", () => {
        setActivnesStyle(parts, partNum, i, actClass);
      });
    }
  }

  //   //1 SET MAIN FARBE FUNCIONALITY
  //   let mainFarbeParts = document.getElementsByClassName("set-part-main-farbe");
  //   setPartsAndconf(mainFarbeParts, false, fenceBoardsColors);
  //   setActivnes(mainFarbeParts, 1, "active-text-color");

  //   //2 SET START UND AVBSCH
  //   let startUndAbschParts = document.getElementsByClassName(
  //     "set-part-start-und-absch"
  //   );
  //   setPartsAndconf(startUndAbschParts, false, fencePartsColors);
  //   setActivnes(startUndAbschParts, 2, "active-text-color");

  //   //3 SET DESIGN - INLAYS RANKELEMNT
  //   //set activnes
  let rankelementPart = document.getElementsByClassName("set-part-rankelement");
  setActivnes(rankelementPart, 3, "active-text-color");
  rankelementPart[0].addEventListener("click", () => {
    for (let i = 0; i < rankelements.length; i++) {
      if (fencesArr[i].type != "gardoHalf") {
        fencesArr[i].type = "gardoFence";
        rankelements[i].isVisible = false;
        fenceBoards[i][13].isVisible = true;
        fenceBoards[i][14].isVisible = true;
      }
    }
  });
  rankelementPart[1].addEventListener("click", () => {
    for (let i = 0; i < rankelements.length; i++) {
      if (fencesArr[i].type != "gardoHalf") {
        fencesArr[i].type = "gardoRank";
        rankelements[i].isVisible = true;
        fenceBoards[i][13].isVisible = false;
        fenceBoards[i][14].isVisible = false;
      }
    }
  });

  //4 SET PFOSTEN
  let h76 = document.getElementById("h76");
  h76.style.color = "#faa41a";
  let h85 = document.getElementById("h85");
  let holzType = document.getElementById("holzType");
  holzType.style.color = "#faa41a";
  let aluType = document.getElementById("aluType");
  let pfostenSecPart = document.getElementById("pfostenSecPart");
  let postType = 0;

  function setPhostenAct(a, b) {
    a.style.color = "#faa41a";
    b.style.color = "#000000";
    a.children[1].innerHTML = checkMark;
    b.children[1].innerHTML = "";
  }

  function setWholeFencePos(post) {
    if (post == rightPosts) {
      wholeFences[0].position.x -= 0.02;
    } else {
      wholeFences[0].position.x += 0.02;
    }

    for (let i = 1; i < wholeFences.length; i++) {
      if (fencesArr[i].status == "activeFence") {
        if (wholeFences[i].rotation.y == 0) {
          if (post == rightPosts) {
            //set whole fence position x
            wholeFences[i].position.x =
              getAbsPosX(post[fencesArr[i].parent]) + 0.93;
          } else {
            //set whole fence position x
            wholeFences[i].position.x =
              getAbsPosX(post[fencesArr[i].parent]) + 0.95;
          }
          //set whole fence position z
          wholeFences[i].position.z = getAbsPosZ(post[fencesArr[i].parent]);
        }
        if (wholeFences[i].rotation.y > 3) {
          if (post == rightPosts) {
            //set whole fence position x
            wholeFences[i].position.x =
              getAbsPosX(post[fencesArr[i].parent]) - 0.93;
          } else {
            //set whole fence position x
            wholeFences[i].position.x =
              getAbsPosX(post[fencesArr[i].parent]) - 0.95;
          }
          //set whole fence position z
          wholeFences[i].position.z = getAbsPosZ(post[fencesArr[i].parent]);
        }
        if (wholeFences[i].rotation.y < 0) {
          if (typeof fencesArr[i].parent != "undefined") {
            //set whole fence position x
            wholeFences[i].position.x = getAbsPosX(post[fencesArr[i].parent]);
            if (post == rightPosts) {
              //set whole fence position z
              wholeFences[i].position.z =
                getAbsPosZ(post[fencesArr[i].parent]) + 0.93;
            } else {
              //set whole fence position z
              wholeFences[i].position.z =
                getAbsPosZ(post[fencesArr[i].parent]) + 0.95;
            }
          }
        }
        if (wholeFences[i].rotation.y > 1 && wholeFences[i].rotation.y < 2) {
          if (typeof fencesArr[i].parent != "undefined") {
            //set whole fence position x
            wholeFences[i].position.x = getAbsPosX(post[fencesArr[i].parent]);
            if (post == rightPosts) {
              //set whole fence position z
              wholeFences[i].position.z =
                getAbsPosZ(post[fencesArr[i].parent]) - 0.93;
            } else {
              //set whole fence position z
              wholeFences[i].position.z =
                getAbsPosZ(post[fencesArr[i].parent]) - 0.95;
            }
          }
        }
        if (wholeFences[i].rotation.y < 0) {
          if (typeof fencesArr[i].parent == "undefined") {
            //set whole fence position x
            // wholeFences[i].position.x = getAbsPosX(post[0]);
            if (post == rightPosts) {
              //set whole fence position z
              wholeFences[i].position.z = getAbsPosZ(post[0]) + 0.93;
            } else {
              //set whole fence position z
              wholeFences[i].position.z = getAbsPosZ(post[0]) + 0.95;
            }
          }
        }
        if (wholeFences[i].rotation.y > 1 && wholeFences[i].rotation.y < 2) {
          if (typeof fencesArr[i].parent == "undefined") {
            //set whole fence position x
            // wholeFences[i].position.x = getAbsPosX(post[0]);
            if (post == rightPosts) {
              //set whole fence position z
              wholeFences[i].position.z = getAbsPosZ(post[0]) - 0.93;
            } else {
              //set whole fence position z
              wholeFences[i].position.z = getAbsPosZ(post[0]) - 0.95;
            }
          }
        }
      }
    }
    setSturmankerPosition(post);
  }

  function setPhostenType(a, b) {
    roots.forEach((elm) => {
      elm.isVisible = a;
    });
    metalParts.forEach((elm) => {
      elm.forEach((element) => {
        element.isVisible = b;
      });
    });
    smallMetalParts.forEach((elm) => {
      elm.forEach((element) => {
        element.isVisible = b;
      });
    });
    for (let i = 0; i < allPosts.length; i++) {
      allPosts[i].isVisible = a;
      allWoodPosts[i].isVisible = b;
    }

    leftPostCaps[0].isVisible = a;
    leftPostCapClones[0].isVisible = a;
    rightPostCaps.forEach((elm) => {
      elm.isVisible = a;
    });
    rightPostCapClones.forEach((elm) => {
      elm.isVisible = a;
    });
    if (!a) {
      setWholeFencePos(rightWoodPosts);
    } else {
      setWholeFencePos(rightPosts);
    }
    checkPostIntersecting(
      fakePosts,
      allPosts,
      allWoodPosts,
      rightRoots,
      rightMetalParts,
      intersectedPosts,
      intersectedPostsMain,
      fencesArr,
      postType,
      smallMetalParts
    );
    if (b) {
      intersectionFunction(
        fakeFronts,
        fakeFences,
        sturmankersVorderseite,
        sturVorderseiteSrafs,
        leds,
        singsDel,
        singsWar,
        fakeBacks,
        sturmankersRuckseite,
        sturRuckseiteSrafs,
        foundationStarts,
        foundations,
        foundationStartsVord,
        foundationsVord,
        foundationStartsRuck,
        foundationsRuck,
        metalParts,
        smallMetalParts,
        postType,
        allWoodPosts
      );
    }
    setGround();
  }

  function setSturmankerPosition(post) {
    //set sturmankers position by post
    if (post == rightPosts) {
      for (let i = 0; i < sturmankersVorderseite.length; i++) {
        sturmankersVorderseite[i].position.y = sturVorderseiteSrafs[
          i
        ].position.y -= 0.011;
        sturmankersRuckseite[i].position.y = sturRuckseiteSrafs[
          i
        ].position.y += 0.01;
      }
    } else {
      for (let i = 0; i < sturmankersVorderseite.length; i++) {
        sturmankersVorderseite[i].position.y = sturVorderseiteSrafs[
          i
        ].position.y += 0.011;
        sturmankersRuckseite[i].position.y = sturRuckseiteSrafs[
          i
        ].position.y -= 0.01;
      }
    }
  }

  h76.onclick = () => {
    setPhostenAct(h76, h85);
    for (let i = 0; i < topBoards.length; i++) {
      topBoards[i].isVisible = false;
      if (fencesArr[i].type != "gardoHalf") {
        woodTopParts[i].position.y = fenceBoards[i][15].position.y + 0.102;
      } else {
        fenceBoards[i][8].isVisible = false;
        woodTopParts[i].position.y = fenceBoards[i][7].position.y + 0.102;
      }
    }
  };

  h85.onclick = () => {
    setPhostenAct(h85, h76);

    for (let i = 0; i < topBoards.length; i++) {
      if (fencesArr[i].type != "gardoHalf") {
        topBoards[i].isVisible = true;
        woodTopParts[i].position.y = topBoards[i].position.y + 0.102;
      } else {
        fenceBoards[i][8].isVisible = true;
        woodTopParts[i].position.y = fenceBoards[i][8].position.y + 0.102;
      }
    }

    if (postType == 0) {
      setPhostenAct(aluType, holzType);

      pfostenSecPart.style.display = "block";
      postType = 1;
      setPhostenType(true, false);
      if (leftPosts[0].scaling.z < 1) {
        leftPostCaps[0].isVisible = false;
        leftPostCapClones[0].isVisible = true;
      } else {
        leftPostCaps[0].isVisible = true;
        leftPostCapClones[0].isVisible = false;
      }

      for (let i = 0; i < rightPosts.length; i++) {
        if (rightPosts[i].scaling.z < 1) {
          rightPostCaps[i].isVisible = false;
          rightPostCapClones[i].isVisible = true;
        } else {
          rightPostCaps[i].isVisible = true;
          rightPostCapClones[i].isVisible = false;
        }
      }
    }
  };

  holzType.onclick = () => {
    if (postType == 1) {
      setbefePfosten(1, 0.962, true, 1, 2.165, 0.574, 0.554);
      befePfostenSize = 0;
      setPhostenAct(h76, h85);
      setPhostenAct(holzType, aluType);

      pfostenSecPart.style.display = "none";
      postType = 0;
      setPhostenType(false, true);
      for (let i = 0; i < topBoards.length; i++) {
        if (fencesArr[i].type != "gardoHalf") {
          topBoards[i].isVisible = false;
          woodTopParts[i].position.y = fenceBoards[i][15].position.y + 0.102;
        } else {
          fenceBoards[i][8].isVisible = false;
          woodTopParts[i].position.y = fenceBoards[i][7].position.y + 0.102;
        }
      }

      setActivnesStyle(befePfostenParts, 5, 0, "active-text-color");
    }
  };

  aluType.onclick = () => {
    if (postType == 0) {
      setPhostenAct(aluType, holzType);

      pfostenSecPart.style.display = "block";
      postType = 1;
      setPhostenType(true, false);

      if (leftPosts[0].scaling.z < 1) {
        leftPostCaps[0].isVisible = false;
        leftPostCapClones[0].isVisible = true;
      } else {
        leftPostCaps[0].isVisible = true;
        leftPostCapClones[0].isVisible = false;
      }

      for (let i = 0; i < rightPosts.length; i++) {
        if (rightPosts[i].scaling.z < 1) {
          rightPostCaps[i].isVisible = false;
          rightPostCapClones[i].isVisible = true;
        } else {
          rightPostCaps[i].isVisible = true;
          rightPostCapClones[i].isVisible = false;
        }
      }
    }
  };
  //set alu post color
  let fencePostsParts = document.getElementsByClassName(
    "set-part-farbe-pfosten"
  );
  setPartsAndconf(fencePostsParts, fencePostMat, fencePartsColors);
  setActivnes(fencePostsParts, 4, "active-text-color");

  //set alu post size
  let befePfostenParts = document.getElementsByClassName(
    "set-part-befe-pfosten"
  );
  setActivnes(befePfostenParts, 5, "active-text-color");

  function setbefePfosten(a, b, c, d, e, f, g) {
    //post roots
    for (let i = 0; i < allPosts.length; i++) {
      if (allPosts[i].isVisible) {
        roots[i * 2].isVisible = roots[i * 2 + 1].isVisible = c;
      }
    }
    if (fencesArr[0].type == "gardoHalf") {
      leftPosts[0].scaling.z = f;
      leftPosts[0].position.y = g;
    } else {
      leftPosts[0].scaling.z = a;
      leftPosts[0].position.y = b;
    }
    for (let i = 0; i < fencesArr.length; i++) {
      if (fencesArr[i].type == "gardoHalf") {
        //////////////
        let childTypeSetPhosten = 0;
        for (let j = 0; j < fencesArr[i].children.length; j++) {
          if (fencesArr[fencesArr[i].children[j]].type != "gardoHalf") {
            childTypeSetPhosten += 1;
          }
        }
        ////////////
        if (childTypeSetPhosten == 0) {
          rightPosts[i].scaling.z = f;
          rightPosts[i].position.y = g;
        } else {
          rightPosts[i].scaling.z = a;
          rightPosts[i].position.y = b;
        }
      } else {
        rightPosts[i].scaling.z = a;
        rightPosts[i].position.y = b;
      }
    }
    // rightPosts.forEach((elm) => {
    //   elm.scaling.z = a;
    //   elm.position.y = b;
    // });
    if (sturmankersVorderseite[0].isVisible) {
      foundationVisibilty(
        foundationStarts,
        foundations,
        false,
        foundationStartsVord,
        foundationsVord,
        true,
        foundationStartsRuck,
        foundationsRuck,
        false,
        0
      );
    } else if (sturmankersRuckseite[0].isVisible) {
      foundationVisibilty(
        foundationStarts,
        foundations,
        false,
        foundationStartsVord,
        foundationsVord,
        false,
        foundationStartsRuck,
        foundationsRuck,
        true,
        0
      );
    } else {
      foundationVisibilty(
        foundationStarts,
        foundations,
        true,
        foundationStartsVord,
        foundationsVord,
        false,
        foundationStartsRuck,
        foundationsRuck,
        false,
        0
      );
    }

    //foundation
    for (let i = 0; i < foundations.length; i++) {
      foundations[i].scaling.y = d;
      foundationsVord[i].scaling.z = d;
      foundationsRuck[i].scaling.z = d;

      foundations[i].position.z = e;
      foundationsVord[i].position.z = e;
      foundationsRuck[i].position.z = e;
    }
  }
  var befePfostenSize = 0;
  if (befePfostenParts.length > 0) {
    befePfostenParts[0].addEventListener("click", () => {
      setbefePfosten(1, 0.962, true, 1, 2.165, 0.574, 0.554);
      befePfostenSize = 0;
    });
    befePfostenParts[1].addEventListener("click", () => {
      setbefePfosten(1.2, 0.7717, false, 1, 2.165, 0.724, 0.41);
      befePfostenSize = 1;
    });
    befePfostenParts[2].addEventListener("click", () => {
      setbefePfosten(1.475, 0.511, false, 1.8, 2.365, 0.999, 0.15);
      befePfostenSize = 2;
    });
  }
  //single post size change
  let pfostensSingle = document.getElementsByClassName(
    "set-part-befe-pfosten-single"
  );
  function changeSinglePostSize(a, b, c, d, e, f, g) {
    for (let i = 0; i < rightPosts.length; i++) {
      if (rightPosts[i].material.id == "selectedMat") {
        if (fencesArr[i].type == "gardoHalf") {
          //////////////
          let childTypeSetPhosten = 0;
          for (let j = 0; j < fencesArr[i].children.length; j++) {
            if (fencesArr[fencesArr[i].children[j]].type != "gardoHalf") {
              childTypeSetPhosten += 1;
            }
          }
          ////////////
          if (childTypeSetPhosten == 0) {
            rightPosts[i].scaling.z = f;
            rightPosts[i].position.y = g;
          } else {
            rightPosts[i].scaling.z = a;
            rightPosts[i].position.y = b;
          }
        } else {
          rightPosts[i].scaling.z = a;
          rightPosts[i].position.y = b;
        }

        rightRoots[i].forEach((elm) => {
          elm.isVisible = c;
        });

        foundations[i + 1].scaling.y = d;
        foundationsVord[i + 1].scaling.z = d;
        foundationsRuck[i + 1].scaling.z = d;

        foundations[i + 1].position.z = e;
        foundationsVord[i + 1].position.z = e;
        foundationsRuck[i + 1].position.z = e;
      }
    }
    if (leftPosts[0].material.id == "selectedMat") {
      if (fencesArr[0].type == "gardoHalf") {
        leftPosts[0].scaling.z = f;
        leftPosts[0].position.y = g;
      } else {
        leftPosts[0].scaling.z = a;
        leftPosts[0].position.y = b;
      }
      roots[0].isVisible = roots[1].isVisible = c;

      foundations[0].scaling.y = d;
      foundationsVord[0].scaling.z = d;
      foundationsRuck[0].scaling.z = d;

      foundations[0].position.z = e;
      foundationsVord[0].position.z = e;
      foundationsRuck[0].position.z = e;
    }
  }
  pfostensSingle[0].addEventListener("click", () => {
    changeSinglePostSize(1, 0.962, true, 1, 2.165, 0.574, 0.554);
    setActivnesStyle(pfostensSingle, 0, 0, "active-text-color-single-pfosten");
  });
  pfostensSingle[1].addEventListener("click", () => {
    changeSinglePostSize(1.2, 0.7717, false, 1, 2.165, 0.724, 0.41);
    setActivnesStyle(pfostensSingle, 0, 1, "active-text-color-single-pfosten");
  });
  pfostensSingle[2].addEventListener("click", () => {
    changeSinglePostSize(1.475, 0.511, false, 1.8, 2.365, 0.999, 0.15);
    setActivnesStyle(pfostensSingle, 0, 2, "active-text-color-single-pfosten");
  });

  //5 STURMANKER//////////////////
  let sturmankerCon = document.getElementsByClassName("sturmanker-con");
  setActivnes(sturmankerCon, 6, "active-text-color");
  function setSturmanker(a, b, c, d, e) {
    for (let i = 0; i < allPosts.length; i++) {
      // if (allPosts[i].isVisible) {
      sturmankersRuckseite[i].isVisible = a;
      sturRuckseiteSrafs[i].isVisible = a;
      sturmankersVorderseite[i].isVisible = b;
      sturVorderseiteSrafs[i].isVisible = b;

      foundationVisibilty(
        foundationStarts,
        foundations,
        c,
        foundationStartsVord,
        foundationsVord,
        d,
        foundationStartsRuck,
        foundationsRuck,
        e,
        i
      );
      // }
    }
  }
  if (sturmankerCon.length > 0) {
    var vorderseiteOn = false;
    var ruckseiteOn = false;
    var strurmOn = false;

    function sturmankerFunction(a, b, c, d, e, f, g) {
      //display onstrumanker if led is not on
      // if (ledsOn < 1) {
      modalFade.style.display = "block";
      onSturmanker.style.display = "block";
      setSturmanker(a, b, c, d, e);
      strurmOn = true;
      // setDayNight(0.6, 0, 0.7);
      // } else {
      //   singsWar.forEach((elm) => {
      //     elm.isVisible = false;
      //   });
      //   for (let i = 0; i < leds.length; i++) {
      //     setDayNight(0.6, 0, 0.7);
      //     setLightColor(4);
      //     // setLedColor(ledColNum);
      //     glow.intensity = 0;
      //     //set sings
      //     if (leds[i].isVisible) {
      //       singsWar[i].isVisible = true;
      //     } else {
      //       setSturmanker(a, b, c, d, e);
      //     }
      //     singsDel[i].isVisible = false;
      //   }
      //   //set activnes on leds parts to turn of led
      //   setActivnesStyle(ledDayNight, 8, 0, "active-text-color");
      // }
      //set wich one is activ
      vorderseiteOn = f;
      ruckseiteOn = g;
      // for (let i = 0; i < directeHauswandMeshesRight.length; i++) {
      //   if (directeHauswandMeshesRight[i].isVisible) {
      //     sturmankersVorderseiteRight[i].forEach((elm) => {
      //       elm.isVisible = false;
      //     });
      //     sturmankersRuckseiteRight[i].forEach((elm) => {
      //       elm.isVisible = false;
      //     });
      //     foundationVisibilty(
      //       foundationStarts,
      //       foundations,
      //       false,
      //       foundationStartsVord,
      //       foundationsVord,
      //       false,
      //       foundationStartsRuck,
      //       foundationsRuck,
      //       false,
      //       i + 1
      //     );
      //   }
      // }
    }
    sturmankerCon[0].addEventListener("click", () => {
      intersectionFunction(
        fakeFronts,
        fakeFences,
        sturmankersVorderseite,
        sturVorderseiteSrafs,
        leds,
        singsDel,
        singsWar,
        fakeBacks,
        sturmankersRuckseite,
        sturRuckseiteSrafs,
        foundationStarts,
        foundations,
        foundationStartsVord,
        foundationsVord,
        foundationStartsRuck,
        foundationsRuck,
        metalParts,
        smallMetalParts,
        postType,
        allWoodPosts
      );
      // singsWar.forEach((elm) => {
      //   elm.isVisible = false;
      // });
      sturmankerFunction(true, false, false, false, true, false, true);
      //select stur
      sturSelectionFun(
        sturmankersRuckseite,
        sturRuckseiteSrafs,
        foundationStarts,
        foundations
      );
    });
    sturmankerCon[1].addEventListener("click", () => {
      setSturmanker(false, false, true, false, false);
      //turn off warnig sings
      // singsWar.forEach((elm) => {
      //   elm.isVisible = false;
      // });
      //set wich one is active
      vorderseiteOn = false;
      ruckseiteOn = false;
      strurmOn = false;
      // for (let i = 0; i < directeHauswandMeshesRight.length; i++) {
      //   if (directeHauswandMeshesRight[i].isVisible) {
      //     foundationVisibilty(
      //       foundationStarts,
      //       foundations,
      //       false,
      //       foundationStartsVord,
      //       foundationsVord,
      //       false,
      //       foundationStartsRuck,
      //       foundationsRuck,
      //       false,
      //       i + 1
      //     );
      //   }
      // }
    });
    sturmankerCon[2].addEventListener("click", () => {
      intersectionFunction(
        fakeFronts,
        fakeFences,
        sturmankersVorderseite,
        sturVorderseiteSrafs,
        leds,
        singsDel,
        singsWar,
        fakeBacks,
        sturmankersRuckseite,
        sturRuckseiteSrafs,
        foundationStarts,
        foundations,
        foundationStartsVord,
        foundationsVord,
        foundationStartsRuck,
        foundationsRuck,
        metalParts,
        smallMetalParts,
        postType,
        allWoodPosts
      );
      // singsWar.forEach((elm) => {
      //   elm.isVisible = false;
      // });
      sturmankerFunction(false, true, false, true, false, true, false);
      //select stur
      sturSelectionFun(
        sturmankersVorderseite,
        sturVorderseiteSrafs,
        foundationStarts,
        foundations
      );
    });
  }
  // to select sturmanker
  let selectedStur;
  let selectedSraf;
  let selectedFoundStart;
  let selectedFound;
  function sturSelectionFun(a, b, c, d) {
    for (let i = 0; i < a.length; i++) {
      a[i].actionManager = new BABYLON.ActionManager(scene);
      a[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            if (a[i].material.id != "selectedMat") {
              removeSideAccesories(
                sideAccesories,
                deleteAccesorie,
                addFenceAcc,
                editPost,
                addNewFenceToSide
              );
              addDefaultMaterial(
                fenceBoards,
                sturmankersVorderseite,
                rightPosts,
                leftPosts,
                woodMaterials,
                fencePostMat,
                rankelements,
                addFenceSings,
                allWoodPosts,
                woodTopParts,
                topBoards,
                sturmankerMat,
                sturmankersRuckseite
              );
              a.forEach((elm) => {
                elm.material = sturmankerMat;
              });
              a[i].material = selectedMat;
              selectedStur = a[i];
              selectedSraf = b[i];
              selectedFoundStart = c[i];
              selectedFound = d[i];
              sideAccesories.style.display = "block";
              deleteAccesorie[1].style.display = "block";
              addNewFenceToSide.style.display = "none";
              //set day when select sturmanker
              // setDayNight(0.6, 0, 0.7);
              // setLightColor(4);
              // glow.intensity = 0;
              // singsWar.forEach((elm) => {
              //   elm.isVisible = false;
              // });
              // singsDel.forEach((elm) => {
              //   elm.isVisible = false;
              // });
              //set activnes of led when sturamnker is selected
              // aaa = 0;
              // leds.forEach((elm) => {
              //   if (elm.isVisible) {
              //     aaa += 1;
              //   }
              // });
              // aaa > 0
              //   ? setActivnesStyle(ledParts, 6, 1, "active-text-color")
              //   : setActivnesStyle(ledParts, 6, 0, "active-text-color");
            } else {
              a.forEach((elm) => {
                elm.material = sturmankerMat;
              });
              sideAccesories.style.display = "none";
              deleteAccesorie[1].style.display = "none";
            }
          }
        )
      );
    }
  }

  //to delete sturmanker
  deleteImgAccesories[1].addEventListener("click", () => {
    sideAccesories.style.display = "none";
    deleteAccesorie[1].style.display = "none";
    addFenceAcc.style.display = "none";
    selectedStur.isVisible = false;
    selectedSraf.isVisible = false;
    if (sturmankersVorderseite.includes(selectedStur)) {
      foundationVisibilty(
        foundationStarts,
        foundations,
        true,
        foundationStartsVord,
        foundationsVord,
        false,
        foundationStartsRuck,
        foundationsRuck,
        false,
        sturmankersVorderseite.indexOf(selectedStur)
      );
    } else {
      foundationVisibilty(
        foundationStarts,
        foundations,
        true,
        foundationStartsVord,
        foundationsVord,
        false,
        foundationStartsRuck,
        foundationsRuck,
        false,
        sturmankersRuckseite.indexOf(selectedStur)
      );
    }

    selectedStur.material = sturmankerMat;
    //set activnes of sturmanker parts
    var sturNum2 = 0;
    for (let i = 0; i < sturmankersVorderseite.length; i++) {
      if (sturmankersVorderseite[i].isVisible) {
        sturNum2 += 1;
      } else if (sturmankersRuckseite[i].isVisible) {
        sturNum2 += 1;
      }
    }
    if (sturNum2 < 1) {
      setActivnesStyle(sturmankerCon, 6, 1, "active-text-color");
      strurmOn = false;
    }
  });
  //change sturmanker color
  //set alu post color
  let fenceSturmankerParts = document.getElementsByClassName(
    "set-part-farbe-sturmanker"
  );
  setPartsAndconf(fenceSturmankerParts, sturmankerMat, fencePartsColors);
  setActivnes(fenceSturmankerParts, 7, "active-text-color");

  // ACCESORIES SECTION FUNCTIONS*****************************************************************************************
  function unselect(activnesToFalse) {
    // sideAccesories.style.width = 0;
    sideAccesories.style.display = "none";
    for (let j = 0; j < deleteAccesorie.length; j++) {
      deleteAccesorie[j].style.display = "none";
    }
    addFenceAcc.style.display = "none";
    // closeSliderContainer();
    addDefaultMaterial(
      fenceBoards,
      sturmankersVorderseite,
      rightPosts,
      leftPosts,
      woodMaterials,
      fencePostMat,
      rankelements,
      addFenceSings,
      allWoodPosts,
      woodTopParts,
      topBoards,
      sturmankerMat,
      sturmankersRuckseite
    );
    addFenceSings;
    if (activnesToFalse) {
      setTimeout(() => {
        activeFence = false;
      }, 100);
    }
  }
  function accCloseButFun(clickable) {
    if (typeof clickable.length == "number") {
      for (let i = 0; i < clickable.length; i++) {
        clickable[i].addEventListener("click", () => {
          unselect(true);
        });
      }
    } else {
      clickable.addEventListener("click", () => {
        unselect(true);
      });
    }
  }

  //set activnes for add fence
  let changeFence = document.getElementsByClassName(
    "set-activnes-change-fence"
  );
  setActivnes(changeFence, 0, "active-text-color");

  //close add new fence accesoire when close button
  accCloseButFun(sideAccCloseBtn);

  //FUNCTION  TO CHANGE FENCES
  function changeFenceFunction(c, d, h) {
    fencesArr[h].type = d;
    fencesArr[h].size = c;
    changePosAndScaleFence(c, h);
    positionChildrenOnParentSizeChange(h);

    //set fence height///////////////////////////
    if (d == "gardoHalf") {
      for (let i = 8; i < fenceBoards[h].length; i++) {
        fenceBoards[h][i].isVisible = false;
      }
      rankelements[h].isVisible = false;
      // woodTopParts[h].position.y = 0.98;
      woodTopParts[h].position.y = fenceBoards[h][7].position.y + 0.102;
      topBoards[h].isVisible = false;
      //children
      let childType = 0;
      for (let i = 0; i < fencesArr[h].children.length; i++) {
        if (fencesArr[fencesArr[h].children[i]].type != "gardoHalf") {
          childType += 1;
        }
      }
      if (childType == 0) {
        if (rightPosts[h].scaling.z < 1.1) {
          rightWoodPosts[h].scaling.y = 0.524;
          rightWoodPosts[h].position.y = 0.504;
          rightPosts[h].scaling.z = 0.574;
          rightPosts[h].position.y = 0.554;
        }
        if (rightPosts[h].scaling.z > 1 && rightPosts[h].scaling.z < 1.4) {
          rightWoodPosts[h].scaling.y = 0.724;
          rightWoodPosts[h].position.y = 0.41;
          rightPosts[h].scaling.z = 0.724;
          rightPosts[h].position.y = 0.41;
        }
        if (rightPosts[h].scaling.z > 1.4) {
          rightWoodPosts[h].scaling.y = 0.999;
          rightWoodPosts[h].position.y = 0.15;
          rightPosts[h].scaling.z = 0.999;
          rightPosts[h].position.y = 0.15;
        }
        if (rightPosts[h].isVisible) {
          rightPostCaps[h].isVisible = false;
          rightPostCapClones[h].isVisible = true;
          // ledsRight[h].scaling.z = 0.524;
          // ledsRight[h].position.z = 0.46;
          // ledsRight[h].position.y = 0.001;
        }
      }

      //parent
      if (h > 0 && fencesArr[h].parent != undefined) {
        if (fencesArr[fencesArr[h].parent].type == "gardoHalf") {
          let fenceSibling = 0;
          for (
            let i = 0;
            i < fencesArr[fencesArr[h].parent].children.length;
            i++
          ) {
            if (
              fencesArr[fencesArr[fencesArr[h].parent].children[i]].type !=
              "gardoHalf"
            ) {
              fenceSibling += 1;
            }
          }
          if (fenceSibling < 1) {
            if (rightPosts[fencesArr[h].parent].scaling.z < 1.1) {
              rightWoodPosts[fencesArr[h].parent].scaling.y = 0.524;
              rightWoodPosts[fencesArr[h].parent].position.y = 0.504;
              rightPosts[fencesArr[h].parent].scaling.z = 0.574;
              rightPosts[fencesArr[h].parent].position.y = 0.554;
            }
            if (
              rightPosts[fencesArr[h].parent].scaling.z > 1 &&
              rightPosts[fencesArr[h].parent].scaling.z < 1.4
            ) {
              rightWoodPosts[fencesArr[h].parent].scaling.y = 0.724;
              rightWoodPosts[fencesArr[h].parent].position.y = 0.41;
              rightPosts[fencesArr[h].parent].scaling.z = 0.724;
              rightPosts[fencesArr[h].parent].position.y = 0.41;
            }
            if (rightPosts[fencesArr[h].parent].scaling.z > 1.4) {
              rightWoodPosts[fencesArr[h].parent].scaling.y = 0.999;
              rightWoodPosts[fencesArr[h].parent].position.y = 0.15;
              rightPosts[fencesArr[h].parent].scaling.z = 0.999;
              rightPosts[fencesArr[h].parent].position.y = 0.15;
            }
            if (rightPosts[fencesArr[h].parent].isVisible) {
              rightPostCaps[fencesArr[h].parent].isVisible = false;
              rightPostCapClones[fencesArr[h].parent].isVisible = true;
              // ledsRight[fencesArr[h].parent].scaling.z = 0.524;
              // ledsRight[fencesArr[h].parent].position.z = 0.46;
              // ledsRight[fencesArr[h].parent].position.y = 0.001;
            }
          }
        }
      }

      //for main post
      let mainPostChildType = 0;
      for (let i = 0; i < fencesArr.length; i++) {
        if (
          fencesArr[i].status == "activeFence" &&
          fencesArr[i].parent == undefined &&
          // fencesArr[i].type != "easyFenceHalf" &&
          fencesArr[i].type != "gardoHalf"
        ) {
          mainPostChildType += 1;
        }
      }
      if (mainPostChildType == 0) {
        if (leftPosts[0].scaling.z < 1.1) {
          allWoodPosts[0].scaling.y = 0.524;
          allWoodPosts[0].position.y = 0.504;
          leftPosts[0].scaling.z = 0.574;
          leftPosts[0].position.y = 0.554;
        }
        if (leftPosts[0].scaling.z > 1 && leftPosts[0].scaling.z < 1.4) {
          allWoodPosts[0].scaling.y = 0.724;
          allWoodPosts[0].position.y = 0.41;
          leftPosts[0].scaling.z = 0.724;
          leftPosts[0].position.y = 0.41;
        }
        if (leftPosts[0].scaling.z > 1.4) {
          allWoodPosts[0].scaling.y = 0.999;
          allWoodPosts[0].position.y = 0.15;
          leftPosts[0].scaling.z = 0.999;
          leftPosts[0].position.y = 0.15;
        }
        if (leftPosts[0].isVisible) {
          leftPostCaps[0].isVisible = false;
          leftPostCapClones[0].isVisible = true;
        }
      }
    } else {
      for (let i = 8; i < fenceBoards[h].length; i++) {
        fenceBoards[h][i].isVisible = true;
      }
      // woodTopParts[h].position.y = 1.805;
      woodTopParts[h].position.y = fenceBoards[h][15].position.y + 0.102;
      //   ledsRight[h].scaling.z = 1;
      //   ledsRight[h].position.z = 0;
      //   ledsRight[h].position.y = 0.001;
      if (fencesArr[h].type == "gardoRank") {
        fenceBoards[h][13].isVisible = false;
        fenceBoards[h][14].isVisible = false;
        rankelements[h].isVisible = true;
      } else {
        rankelements[h].isVisible = false;
      }

      if (rightPosts[h].scaling.z < 0.6) {
        rightWoodPosts[h].scaling.y = 1;
        rightWoodPosts[h].position.y = 0.935;
        rightPosts[h].scaling.z = 1;
        rightPosts[h].position.y = 0.962;
      }
      if (rightPosts[h].scaling.z > 0.6 && rightPosts[h].scaling.z < 0.9) {
        rightWoodPosts[h].scaling.y = 1.2;
        rightWoodPosts[h].position.y = 0.7717;
        rightPosts[h].scaling.z = 1.2;
        rightPosts[h].position.y = 0.7717;
      }
      if (rightPosts[h].scaling.z > 0.9 && rightPosts[h].scaling.z < 1) {
        rightWoodPosts[h].scaling.y = 1.475;
        rightWoodPosts[h].position.y = 0.511;
        rightPosts[h].scaling.z = 1.475;
        rightPosts[h].position.y = 0.511;
      }
      if (rightPosts[h].isVisible) {
        rightPostCaps[h].isVisible = true;
        rightPostCapClones[h].isVisible = false;
      }

      if (h == 0) {
        if (leftPosts[0].scaling.z < 0.6) {
          allWoodPosts[0].scaling.y = 1;
          allWoodPosts[0].position.y = 0.935;
          leftPosts[0].scaling.z = 1;
          leftPosts[0].position.y = 0.962;
        }
        if (leftPosts[0].scaling.z > 0.6 && leftPosts[0].scaling.z < 0.9) {
          allWoodPosts[0].scaling.y = 1.2;
          allWoodPosts[0].position.y = 0.7717;
          leftPosts[0].scaling.z = 1.2;
          leftPosts[0].position.y = 0.7717;
        }
        if (leftPosts[0].scaling.z > 0.9 && leftPosts[0].scaling.z < 1) {
          allWoodPosts[0].scaling.y = 1.475;
          allWoodPosts[0].position.y = 0.5117;
          leftPosts[0].scaling.z = 1.475;
          leftPosts[0].position.y = 0.511;
        }
        if (leftPosts[0].isVisible) {
          leftPostCaps[0].isVisible = true;
          leftPostCapClones[0].isVisible = false;
        }
        // leftPostCaps[0].position.y = 0.962;
        // leds[h].scaling.y = 1;
        // leds[h].position.y = 0.962;
        // leds[h].position.z = 0.001;
      }
      //set parent right post
      if (h > 0 && fencesArr[h].parent != undefined) {
        if (rightPosts[fencesArr[h].parent].scaling.z < 0.6) {
          rightWoodPosts[fencesArr[h].parent].scaling.y = 1;
          rightWoodPosts[fencesArr[h].parent].position.y = 0.935;
          rightPosts[fencesArr[h].parent].scaling.z = 1;
          rightPosts[fencesArr[h].parent].position.y = 0.962;
        }
        if (
          rightPosts[fencesArr[h].parent].scaling.z > 0.6 &&
          rightPosts[fencesArr[h].parent].scaling.z < 0.9
        ) {
          rightWoodPosts[fencesArr[h].parent].scaling.y = 1.2;
          rightWoodPosts[fencesArr[h].parent].position.y = 0.7717;
          rightPosts[fencesArr[h].parent].scaling.z = 1.2;
          rightPosts[fencesArr[h].parent].position.y = 0.7717;
        }
        if (
          rightPosts[fencesArr[h].parent].scaling.z > 0.9 &&
          rightPosts[fencesArr[h].parent].scaling.z < 1
        ) {
          rightWoodPosts[fencesArr[h].parent].scaling.y = 1.475;
          rightWoodPosts[fencesArr[h].parent].position.y = 0.511;
          rightPosts[fencesArr[h].parent].scaling.z = 1.475;
          rightPosts[fencesArr[h].parent].position.y = 0.511;
        }
        if (rightPosts[fencesArr[h].parent].isVisible) {
          rightPostCaps[fencesArr[h].parent].isVisible = true;
          rightPostCapClones[fencesArr[h].parent].isVisible = false;
        }
      }
      //for main post
      if (
        h > 0 &&
        fencesArr[h].parent == undefined &&
        fencesArr[h].status == "activeFence"
      ) {
        if (leftPosts[0].scaling.z < 0.6) {
          allWoodPosts[0].scaling.y = 1;
          allWoodPosts[0].position.y = 0.935;
          leftPosts[0].scaling.z = 1;
          leftPosts[0].position.y = 0.962;
        }
        if (leftPosts[0].scaling.z > 0.6 && leftPosts[0].scaling.z < 0.9) {
          allWoodPosts[0].scaling.y = 1.2;
          allWoodPosts[0].position.y = 0.7717;
          leftPosts[0].scaling.z = 1.2;
          leftPosts[0].position.y = 0.7717;
        }
        if (leftPosts[0].scaling.z > 0.9 && leftPosts[0].scaling.z < 1) {
          allWoodPosts[0].scaling.y = 1.475;
          allWoodPosts[0].position.y = 0.5117;
          leftPosts[0].scaling.z = 1.475;
          leftPosts[0].position.y = 0.511;
        }
        if (leftPosts[0].isVisible) {
          leftPostCaps[0].isVisible = true;
          leftPostCapClones[0].isVisible = false;
        }
      }
    }
    //set rank to ohne
    aaa = 0;
    rankelements.forEach((elm) => {
      if (elm.isVisible) {
        aaa += 1;
      }
    });
    if (aaa < 1) {
      setActivnesStyle(rankelementPart, 3, 0, "active-text-color");
    }
    //set ground size
    setGround();
  }

  changeFence[0].addEventListener("click", () => {
    changeFenceFunction(180, "gardoFence", activeFence);
  });
  changeFence[1].addEventListener("click", () => {
    changeFenceFunction(180, "gardoHalf", activeFence);
  });
  changeFence[2].addEventListener("click", () => {
    changeFenceFunction(180, "gardoRank", activeFence);
  });

  //CHANGE ALL FENCES TO BE SAME AS ACTIVE
  //change all fences same as this
  let changeAllFences = document.getElementById("changeAllFences");
  changeAllFences.onclick = () => {
    if (fencesArr[activeFence].type == "gardoFence") {
      for (let i = 0; i < fencesArr.length; i++) {
        if (activeFence != i && fencesArr[i].status != "disposedFence") {
          changeFenceFunction(180, "gardoFence", i);
        }
      }
    }
    if (fencesArr[activeFence].type == "gardoHalf") {
      for (let i = 0; i < fencesArr.length; i++) {
        if (activeFence != i && fencesArr[i].status != "disposedFence") {
          changeFenceFunction(180, "gardoHalf", i);
        }
      }
    }
    if (fencesArr[activeFence].type == "gardoRank") {
      for (let i = 0; i < fencesArr.length; i++) {
        if (activeFence != i && fencesArr[i].status != "disposedFence") {
          changeFenceFunction(180, "gardoRank", i);
        }
      }
    }

    /////
  };
  //close when change all fences
  accCloseButFun(changeAllFences);
  //close side
  accCloseButFun(changeFence);
  //   ////////////////////////////////////////////////////////////////////////
  //DELETE FENCE
  let deleteFencePart = document.getElementById("set-part-fence-acc-del");

  function deleteFenceOn(a) {
    if (a > 0) {
      deleteFencePart.children[0].children[0].style.backgroundImage =
        "url('img/deleteRound.png')";
      deleteFencePart.children[1].innerHTML = "Löschen";
    } else {
      deleteFencePart.children[0].children[0].style.backgroundImage =
        "url('img/deleteRoundNo.png')";
      deleteFencePart.children[1].innerHTML = "Der erste Zaun";
    }
  }
  function deleteFence(a) {
    wholeFences[a].dispose();
    foundationsRight[a].dispose();
    fakeFences[a].name = "disposedFakeFence";
    fencesArr[a].status = "disposedFence";
    newFenceForwardSigns[a].dispose();
    newFenceRightSigns[a].dispose();
    newFenceLeftSigns[a].dispose();
    newFenceBackSigns[a].dispose();
    allPosts[a + 1].isVisible = false;
    allWoodPosts[a + 1].isVisible = false;
    fencesArr[a].children.forEach((elm) => {
      fencesArr[elm].parent = fencesArr[a].parent;

      fencesArr[fencesArr[a].parent].children.push(elm);
    });
    if (fencesArr[fencesArr[a].parent] != undefined) {
      fencesArr[fencesArr[a].parent].children.splice(
        fencesArr[fencesArr[a].parent].children.indexOf(a),
        1
      );
    }

    setGround();
    //visibility because of cart counting
    rightPosts[a].isVisible = false;
    rightWoodPosts[a].isVisible = false;
    fenceBoards[a].forEach((elm) => {
      elm.isVisible = false;
    });
    roots[a * 2 + 2].isVisible = roots[a * 2 + 3].isVisible = false;
    sturmankersRuckseite[a + 1].isVisible = sturmankersVorderseite[
      a + 1
    ].isVisible = false;

    rankelements[a].isVisible = false;
    rightMetalParts[a].forEach((elm) => {
      elm.isVisible = false;
    });
    woodTopParts[a].isVisible = false;
    // ledsRight[a].isVisible = false;

    //set post size for small parent post
    if (
      fencesArr[a].parent != undefined &&
      fencesArr[fencesArr[a].parent].type == "gardoHalf"
    ) {
      let childTypee = 0;
      for (let i = 0; i < fencesArr[fencesArr[a].parent].children.length; i++) {
        if (
          fencesArr[fencesArr[fencesArr[a].parent].children[i]].type !=
          "gardoHalf"
        ) {
          childTypee += 1;
        }
      }
      if (childTypee == 0) {
        if (rightPosts[fencesArr[a].parent].scaling.z < 1.1) {
          rightWoodPosts[fencesArr[a].parent].scaling.y = 0.524;
          rightWoodPosts[fencesArr[a].parent].position.y = 0.504;
          rightPosts[fencesArr[a].parent].scaling.z = 0.574;
          rightPosts[fencesArr[a].parent].position.y = 0.554;
        }
        if (
          rightPosts[fencesArr[a].parent].scaling.z > 1 &&
          rightPosts[fencesArr[a].parent].scaling.z < 1.4
        ) {
          rightWoodPosts[fencesArr[a].parent].scaling.y = 0.724;
          rightWoodPosts[fencesArr[a].parent].position.y = 0.41;
          rightPosts[fencesArr[a].parent].scaling.z = 0.724;
          rightPosts[fencesArr[a].parent].position.y = 0.41;
        }
        if (rightPosts[fencesArr[a].parent].scaling.z > 1.4) {
          rightWoodPosts[fencesArr[a].parent].scaling.y = 0.999;
          rightWoodPosts[fencesArr[a].parent].position.y = 0.15;
          rightPosts[fencesArr[a].parent].scaling.z = 0.999;
          rightPosts[fencesArr[a].parent].position.y = 0.15;
        }
        if (rightPosts[fencesArr[a].parent].isVisible) {
          rightPostCaps[fencesArr[a].parent].isVisible = false;
          rightPostCapClones[fencesArr[a].parent].isVisible = true;
        }
        // ledsRight[fencesArr[a].parent].scaling.z = 0.524;
        // ledsRight[fencesArr[a].parent].position.z = 0.46;
        // ledsRight[fencesArr[a].parent].position.y = 0.001;
      }
    }
    //for main post
    let mainPostChildType = 0;
    for (let i = 0; i < fencesArr.length; i++) {
      if (
        fencesArr[i].status == "activeFence" &&
        fencesArr[i].parent == undefined &&
        // fencesArr[i].type != "easyFenceHalf" &&
        fencesArr[i].type != "gardoHalf"
      ) {
        mainPostChildType += 1;
      }
    }
    if (mainPostChildType == 0) {
      if (leftPosts[0].scaling.z < 1.1) {
        allWoodPosts[0].scaling.y = 0.524;
        allWoodPosts[0].position.y = 0.504;
        leftPosts[0].scaling.z = 0.574;
        leftPosts[0].position.y = 0.554;
      }
      if (leftPosts[0].scaling.z > 1 && leftPosts[0].scaling.z < 1.4) {
        allWoodPosts[0].scaling.y = 0.724;
        allWoodPosts[0].position.y = 0.41;
        leftPosts[0].scaling.z = 0.724;
        leftPosts[0].position.y = 0.41;
      }
      if (leftPosts[0].scaling.z > 1.4) {
        allWoodPosts[0].scaling.y = 0.999;
        allWoodPosts[0].position.y = 0.15;
        leftPosts[0].scaling.z = 0.999;
        leftPosts[0].position.y = 0.15;
      }
      if (leftPosts[0].isVisible) {
        leftPostCaps[0].isVisible = false;
        leftPostCapClones[0].isVisible = true;
      }
    }
    //
    fencesArr[a].parent = undefined;

    intersectionFunction(
      fakeFronts,
      fakeFences,
      sturmankersVorderseite,
      sturVorderseiteSrafs,
      leds,
      singsDel,
      singsWar,
      fakeBacks,
      sturmankersRuckseite,
      sturRuckseiteSrafs,
      foundationStarts,
      foundations,
      foundationStartsVord,
      foundationsVord,
      foundationStartsRuck,
      foundationsRuck,
      metalParts,
      smallMetalParts,
      postType,
      allWoodPosts
    );
  }
  function recursiveToChildrenDelete(b) {
    if (fencesArr[b].children.length > 0) {
      fencesArr[b].children.forEach((elm) => {
        scaleToOtherFencesToDo(elm);
        recursiveToChildrenDelete(elm);
      });
    }
  }

  function recursiveToChildrenDelete2(c) {
    while (fencesArr[c].children.length > 0) {
      deleteFence(fencesArr[c].children[0]);
    }
  }

  function delFenFun(a) {
    if (fencesArr[a].children.length > 0) {
      firstX = getAbsPosX(rightPosts[a]);
      firstZ = getAbsPosZ(rightPosts[a]);
      if (fencesArr[a].parent != undefined) {
        secondX = getAbsPosX(rightPosts[fencesArr[a].parent]);
        secondZ = getAbsPosZ(rightPosts[fencesArr[a].parent]);
      } else {
        secondX = 0;
        secondZ = 0;
      }
      for (let i = 0; i < fencesArr[a].children.length; i++) {
        if (fencesArr[a].parent != undefined) {
          if (
            wholeFences[a].rotation.y !=
              wholeFences[fencesArr[a].parent].rotation.y ||
            wholeFences[a].rotation.y !=
              wholeFences[fencesArr[a].children[i]].rotation.y
          ) {
            recursiveToChildrenDelete2(a);
          } else {
            b = fencesArr[a].children[i];
            scaleToOtherFencesToDo(b);
            recursiveToChildrenDelete(b);
          }
        } else {
          recursiveToChildrenDelete2(a);
        }
      }
    }
  }
  accCloseButFun(deleteFencePart);
  //////////////////////////////////////////////////////////////
  //TAKE SCREENSHOT
  var screenshotBtn = document.getElementById("screenshot-but");
  screenshotBtn.onclick = () => {
    BABYLON.Tools.CreateScreenshot(engine, camera, 1024);
  };

  ////////////////////////////
  //LINK FOR CART
  var link = document.getElementById("link");
  link.onclick = () => {
    var a = document.getElementsByClassName("scCartList")[0].children;
    var prodIds = [];
    var prodValues = [];
    var linkParts = [];
    for (let i = 0; i < a.length; i++) {
      prodIds.push(
        a[i].children[0].children[1].children[0].innerHTML.split("/ ")[2]
      );
      prodValues.push(a[i].children[2].children[1].value);

      linkParts.push(prodIds[i] + ":" + prodValues[i] + ",");
    }
    linkParts = linkParts.join("");
    linkParts = linkParts.slice(0, -1);
    link.href += "?add-to-cart=" + linkParts;
  };
  //parent.imgPDF();

  /////////////////////////////////////SMART CART//////////////////////////////

  loadCart(
    fenceBoards,
    sturmankersVorderseite,
    rightPosts,
    leftPosts,
    woodMaterials,
    fencePostMat,
    rankelements,
    addFenceSings,
    allWoodPosts,
    woodTopParts,
    topBoards,
    fencesArr,
    rightWoodPosts,
    allPosts,
    roots,
    sturmankersRuckseite,
    metalParts,
    wholeFences,
    fakeFronts,
    fakeBacks,
    fakeLefts,
    fakeRights,
    fakeFences,
    sturmankerMat
  );

  ///////////////////////////////////////////////////////////////CANVAS PLAN///////////////////////////////////////////////////////////////////

  draw2dPlan(
    allPosts,
    fencesArr,
    getAbsPosX,
    getAbsPosZ,
    rightPosts,
    rightWoodPosts,
    foundationsVord,
    foundationsRuck,
    foundations,
    foundationsRight,
    wholeFences
  );

  //   //end of scene
  return scene;
};
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //END OF SCENE
