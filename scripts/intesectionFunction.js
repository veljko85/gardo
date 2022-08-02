function intersectionInsideFunction(
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
) {
  for (let i = 0; i < fakeFronts.length; i++) {
    let checkIntersectionOnBoth = [false, false];
    fakeFences.forEach((elm) => {
      if (elm.name == "fakeFence") {
        if (elm.intersectsMesh(fakeFronts[i], true)) {
          sturmankersVorderseite[i].isVisible = false;
          sturVorderseiteSrafs[i].isVisible = false;
          sturmankersRuckseite[i].isVisible = false;
          sturRuckseiteSrafs[i].isVisible = false;
          if (postType == 0 && allWoodPosts[i].isVisible) {
            metalParts[i][0].isVisible = metalParts[i][1].isVisible = false;
            smallMetalParts[i][0].isVisible = true;
            smallMetalParts[i][1].isVisible = false;
            smallMetalParts[i][2].isVisible = false;
            checkIntersectionOnBoth[0] = true;
          }
          leds[i].isVisible = false;
          singsDel[i].isVisible = false;
          singsWar[i].isVisible = false;
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
            i
          );
        }
        if (elm.intersectsMesh(fakeBacks[i], true)) {
          sturmankersVorderseite[i].isVisible = false;
          sturVorderseiteSrafs[i].isVisible = false;
          sturmankersRuckseite[i].isVisible = false;
          sturRuckseiteSrafs[i].isVisible = false;
          if (postType == 0 && allWoodPosts[i].isVisible) {
            metalParts[i][0].isVisible = metalParts[i][1].isVisible = false;
            smallMetalParts[i][0].isVisible = false;
            smallMetalParts[i][1].isVisible = true;
            smallMetalParts[i][2].isVisible = false;
            checkIntersectionOnBoth[1] = true;
          }
          singsWar[i].isVisible = false;
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
            i
          );
        }
        if (postType == 0 && allWoodPosts[i].isVisible) {
          if (checkIntersectionOnBoth[0] && checkIntersectionOnBoth[1]) {
            smallMetalParts[i][0].isVisible = false;
            smallMetalParts[i][1].isVisible = false;
            smallMetalParts[i][2].isVisible = true;
          } else if (
            !checkIntersectionOnBoth[0] &&
            !checkIntersectionOnBoth[1]
          ) {
            smallMetalParts[i][0].isVisible = false;
            smallMetalParts[i][1].isVisible = false;
            smallMetalParts[i][2].isVisible = false;
            metalParts[i][0].isVisible = metalParts[i][1].isVisible = true;
          }
        }
      }
    });
  }
}

function intersectionFunction(
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
) {
  setTimeout(() => {
    intersectionInsideFunction(
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
  }, 0);
  setTimeout(() => {
    intersectionInsideFunction(
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
  }, 100);
  setTimeout(() => {
    intersectionInsideFunction(
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
  }, 200);
}
