function addDefaultMaterial(
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
) {
  //boards materials
  fenceBoards.forEach((elm) => {
    elm.forEach((elmInside) => {
      elmInside.material = woodMaterials[1];
    });
  });
  //top board material
  topBoards.forEach((elm) => {
    elm.material = woodMaterials[1];
  });
  //sturmankers material
  sturmankersVorderseite.forEach((elm) => {
    elm.material = sturmankerMat;
  });
  sturmankersRuckseite.forEach((elm) => {
    elm.material = sturmankerMat;
  });
  //wood top parts
  woodTopParts.forEach((elm) => {
    elm.material = woodMaterials[0];
  });
  //renklaments material
  rankelements.forEach((elm) => {
    elm.material = woodMaterials[0];
  });
  //posts material
  allWoodPosts.forEach((elm) => {
    elm.material = woodMaterials[0];
  });
  rightPosts.forEach((elm) => {
    elm.material = fencePostMat;
  });
  leftPosts.forEach((elm) => {
    elm.material = fencePostMat;
  });
  addFenceSings.forEach((elm) => {
    elm.isVisible = false;
  });
}
