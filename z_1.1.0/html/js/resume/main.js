var contentDiv = document.getElementById("content");
var pageDiv = document.getElementById("page");
var robbyContainerDiv = document.getElementById("robby-container");
var robbyDiv = document.getElementById("robby");
var robbyFramesDiv = document.getElementById("robby-slides");
var robbyEyesCloseDiv = document.getElementById("robby-eyes-close");
var blinkRobbyEyesTimer;

var bannersContainerDiv = document.getElementById("banners-container");

var isPreloadShiftUpAnimationFinish = false;
var canFinishShiftUpHorizontalLayersAfterEverythingLoaded = true;

var splashContainerDiv = document.getElementById("splash-container");
var balloonDiv = document.getElementById("balloon");
var groundAndGrassContainer1Div = document.getElementById("ground-and-grass-container-1");

var elevation1Div = document.getElementById("elevation-1");
var elevation2Div = document.getElementById("elevation-2");

var layerHorizontalArray = new Array();
var layerVerticalArray = new Array();

var gapBetweenContactCloudAndBannersContainer = 400;

var layerHorizontalSpeedArray = new Array();
var layerVerticalSpeedArray = new Array();

var sea1Div = document.getElementById("sea-1");
var seaFloorDiv = document.getElementById("sea-floor");
var seaFloorFrontObjectArray = new Array();
var seaFloorBackObjectArray = new Array();

var about1ContainerDiv = document.getElementById("plants-container");

var plantLine1Div = document.getElementById("plant-line-1");
var plantLine2Div = document.getElementById("plant-line-2");
var plantArray = new Array();
var plantTargetTopObjectArray = new Array();
plantTargetTopObjectArray.push(plantLine1Div, plantLine1Div, plantLine2Div, plantLine2Div);
var canAnimatePlantInformation;

var about2ContainerDiv = document.getElementById("buildings-container");
var buildingTargetLeft1 = 0;
var buildingTargetLeft2 = 305;
var buildingTargetLeft3 = 710;
var buildingEarlyPosition1 = 795;
var buildingEarlyPosition2 = 1100;
var buildingEarlyPosition3 = 1505;
var buildingArray = new Array();
var buildingTargetLeftArray = new Array();
buildingTargetLeftArray.push(buildingTargetLeft1, buildingTargetLeft2, buildingTargetLeft3);
var buildingEarlyPositionArray = new Array();
buildingEarlyPositionArray.push(buildingEarlyPosition1, buildingEarlyPosition2, buildingEarlyPosition3);
var buildingLegArray = new Array();
var canAnimateBuildingInformation;
var buildingCounter = 0;
var buildingLegsTimer;
var buildingBlinkTimer;
var buildingEnemyFaceEyeArray = new Array();
var buildingLegContainerArray = new Array();
var buildingLegContainer1Div = document.getElementById("building-leg-container-1");
var buildingLegContainer2Div = document.getElementById("building-leg-container-2");
var buildingLegContainer3Div = document.getElementById("building-leg-container-3");
var buildingLegFrameArray = new Array();
var building1LegFrameDiv = document.getElementById("building-1-leg-frame");
var building2LegFrameDiv = document.getElementById("building-2-leg-frame");
var building3LegFrameDiv = document.getElementById("building-3-leg-frame");

var experience1ContainerDiv = document.getElementById("experience-1-container");
var experience2ContainerDiv = document.getElementById("experience-2-container");
var experience3ContainerDiv = document.getElementById("experience-3-container");
var experienceTextContainerArray = new Array();
var chainBlockAndStringContainerArray = new Array();
var experienceTextContainerDistanceFromFloor = 185;

var robotDiv = document.getElementById("robot");
var animateRobotHandsTimer;
var spinRobotHandsTimer;
var changeRobotHandsCounter = 0;
var robotHandLeftDiv = document.getElementById("robot-hand-left");
var robotHandRightDiv = document.getElementById("robot-hand-right");
var robotHandChildrenLength = $(robotHandLeftDiv).children().length;

var squidDiv = document.getElementById("squid");
var squidHandCloseArray = new Array();
var squidHandOpenArray = new Array();
var animateSquidHandsTimer;
var moveSquidHandsTimer;
var openAndCloseSquidHandsCounter = 0;

var alienDiv = document.getElementById("alien");
var animateAlienHandsTimer;
var alienSteerDiv = document.getElementById("alien-steer");
var alienSteerAngle = 0;
var alienSteerPreviousAngle;
var alienSteerAngleLimit = 15;
var alienSteerAngleIncrement = 5;

var canAnimateBossInformation;
var canAnimateRobotInformation;
var canAnimateSquidInformation;
var canAnimateAlienInformation;

var piechartAolTextGraphic1Div = document.getElementById("piechart-aol-text-graphic-1");
var piechartAolTextGraphic2Div = document.getElementById("piechart-aol-text-graphic-2");
var piechartIncognitoFrontDiv = document.getElementById("piechart-incognito-front");
var piechartIncognitoTextGraphic1Div = document.getElementById("piechart-incognito-text-graphic-1");
var piechartIncognitoTextGraphic2Div = document.getElementById("piechart-incognito-text-graphic-2");
var piechartIncognitoTextAnimation1Div = document.getElementById("piechart-incognito-text-animation-1");
var piechartIncognitoTextAnimation2Div = document.getElementById("piechart-incognito-text-animation-2");
var piechartIncognitoTextCode1Div = document.getElementById("piechart-incognito-text-code-1");
var piechartIncognitoTextCode2Div = document.getElementById("piechart-incognito-text-code-2");
var piechartFoxnewsFrontDiv = document.getElementById("piechart-foxnews-front");
var piechartFoxnewsTextGraphic1Div = document.getElementById("piechart-foxnews-text-graphic-1");
var piechartFoxnewsTextGraphic2Div = document.getElementById("piechart-foxnews-text-graphic-2");
var piechartFoxnewsTextAnimation1Div = document.getElementById("piechart-foxnews-text-animation-1");
var piechartFoxnewsTextAnimation2Div = document.getElementById("piechart-foxnews-text-animation-2");
var piechartFoxnewsTextCode1Div = document.getElementById("piechart-foxnews-text-code-1");
var piechartFoxnewsTextCode2Div = document.getElementById("piechart-foxnews-text-code-2");

var bubbleDiv = document.getElementById("bubble");
var bubbleTimer;

var shiftUpLayerHorizontalDistance;
var shiftUpLayerHorizontalTimer;
var shiftDownLayerHorizontalTimer;
var shiftUpDownLayerHorizontalIncrement = 40;
var shiftUpDownLayerHorizontalInterval = 40;

var seaAnimalSwimDistance = 900;
var blinkSeaAnimalsTimer;

var skill1ContainerDiv = document.getElementById("skill-1-container");
var fishArray = new Array();
var fishEyeArray = new Array();
var canAnimateFishInformation;
var isFishStillAnimating = false;
var fishAnimateNumber = 0;
var numberOfFishInEachRowArray = new Array();
numberOfFishInEachRowArray.push(5, 5, 5, 4);

var skill2ContainerDiv = document.getElementById("skill-2-container");
var crabArray = new Array();
var crabEyeArray = new Array();
var canAnimateCrabInformation;
var isCrabStillAnimating = false;
var crabAnimateNumber = 0;
var numberOfCrabInEachRowArray = new Array();
numberOfCrabInEachRowArray.push(5, 5, 4, 3);

var skill3ContainerDiv = document.getElementById("skill-3-container");
var turtleArray = new Array();
var turtleEyeArray = new Array();
var canAnimateTurtleInformation;
var isTurtleStillAnimating = false;
var turtleAnimateNumber = 0;
var numberOfTurtleInEachRowArray = new Array();
numberOfTurtleInEachRowArray.push(5, 4, 3, 3);

var pageVerticalPosition = 0;
var pageVerticalPositionOnTouch = 0;
var previousPageVerticalPosition = 0;
var deltaPageVerticalPosition = 0;

var isRobbySwimming = false;
var isRobbyJumping;
var isRobbyFalling;
var isRobbyBelowSeaLevel = false;
var swimUpHeight;

var layersMovement;

var elevationArray = new Array();
var elevationNumberBelowRobby = null;

var robbyRightEdge;
var robbyLeftEdge;
var distanceBetweenRobbyAndBalloon = 150; //robby center to balloon center
var robbyMaxHorizontalDistance;

var counter = 0;
var switcher = 1; //either 1 or -1
var robbyStaticFrame = 0;
var robbyStartRunFrame = 1;
var robbyStopRunFrame = 2;
var robbyStartSwimFrame = 3;
var robbyStopSwimFrame = 4;
var robbySwimDownFrame = 5
var robbyStartJumpFrame = 6;
var robbyStopJumpFrame = 7;
var robbyOneFrameWidth = 200;
var shiftRobbyFrameTimeInterval = 200;
var canAnimateRobbyRunSwim;
var robbyStartFrame;
var robbyStopFrame;
var shiftRobbyFrameTimer;
var pageVerticalPositionWhenAnimateRobby1;
var pageVerticalPositionWhenAnimateRobby2;
var minimumVerticalDistanceToTriggerRobbySwimDownFrame = 100;

var nbaBoardArray = new Array();
var about3ContainerDiv = document.getElementById("nba-container");
var nbaPlayerDiv = document.getElementById("nba-player");
var nbaPlayerContainerDiv = document.getElementById("nba-player-container");
var nbaPlayerFrameDiv = document.getElementById("nba-player-frame");
var nbaRimContainerDiv = document.getElementById("nba-rim-container");
var nbaBallDiv = document.getElementById("nba-ball");
var canAnimateNbaInformation;
var nbaBoardsCounter;
var nbaBoardsAnimationTimer;
var nbaPlayerCounter;
var nbaPlayerTimer;
var nbaPlayerEyesDiv = document.getElementById("nba-player-eyes");
var blinkNbaPlayerTimer;

var contactContainerDiv = document.getElementById("contact-container");
var socialContainerDiv = document.getElementById("social-container");
var canAnimateSocialContainer;

var happyRobbyTimer;
var isRobbyHappy = false;

var scrollOrSwipeTextContainer1Div = document.getElementById("scroll-or-swipe-text-container-1");
var scrollOrSwipeTextContainer2Div = document.getElementById("scroll-or-swipe-text-container-2");
var canHideScrollOrSwipeTextContainer = true;
var scrollOrSwipeTextContainerTimer;
var canAnimateScrollOrSwipeTextContainer = true;

var contactConfirmationContainerArray = new Array();
var emailAddressDiv = document.getElementById("email-address");
var emailSubjectDiv = document.getElementById("email-subject");
var emailMessageDiv = document.getElementById("email-message");
var isContactConfirmationContainerVisible = true;

var waterfall1Div = document.getElementById("waterfall-1");
var waterfall2Div = document.getElementById("waterfall-2");
var waterfallTimer;

var touchStartX = 0;
var touchCurrentX = 0;
var touchEndX = 0;

var fireworksContainerDiv = document.getElementById("fireworks-container");
var fireworkArray = new Array();
var fireworkSvgArray = new Array();
var cArray = new Array();
var drawFireworkTimer;
var drawFireworkCounter = 0;
var fireworkRowNumber = 8;
var fireworkColumnNumber = 16;
var fireworkLayerNumber = 0;
var fireworkDotRadius = 5;
var fireworkCenterX;
var fireworkCenterY;
var fireworkOneRadiusDistance;
var fireworkOneRotationAngle;
var drawOneLayerOfFireworkTimer;
var canDrawManyFireworks = true;

disableIsRobbyJumpingAndFalling();

var landInformationContainerArray = new Array();
landInformationContainerArray.push(about1ContainerDiv, about2ContainerDiv, about3ContainerDiv, experience1ContainerDiv, experience2ContainerDiv, experience3ContainerDiv);
var seaInformationContainerArray = new Array();
seaInformationContainerArray.push(skill1ContainerDiv, skill2ContainerDiv, skill3ContainerDiv);

setAllNbaCounter();

var canScrollOrSwipe;
disableScrollOrSwipe();

//so browser will not jump to last position when refresh
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

window.onload = function()
{
	if (deviceName != "computer")
	{
		initTouchEvents();
	}

	storeDivs();

	setFrontLayerVerticalHeight();
	setBannersContainerVerticalPosition();

	shiftUpPreloader(); //function in preloader.js
	showContainer();
	initVariablesAfterShowContainer(); //so the div width will be detected
	shiftUpHorizontalLayersAfterEverythingLoaded();
	disableAnimateRobbyRunSwim();
	resetVariables();
	setPageHeight();
	setLayerSpeed();
	positionVerticalLayersHorizontally();
	positionBalloonAndRobbyContainerHorizontally();
	positionBalloonVertically();
	positionContactContainer();
	positionFireworksContainer();
	resetFunctions();
	positionSplashContainer();
	setRobbyLeftAndRightEdge();
	positionContactConfirmationContainer();
	hideContactConfirmationContainer();
	hideRobbyEyesClose();
	animateRobbyEyes();
	animateWaterfall();
	positionSeaFloorObjectsVertically();
	openSquidHands();
	hideBubble();
	setRobotHandsToDefault();
	createFireworkSvg();
	appendFireworkSvgToContainer();
}

window.onscroll = function (e)
{
	if (canScrollOrSwipe == true) //to avoid user swipe when window is still resizing after screen orientation changed on table
	{
		detectPageVerticalPosition();
		runTheseFunctionsAfterScrollOrSwipe();
	}
}

window.onresize = function (e)
{
	setFrontLayerVerticalHeight();
	setBannersContainerVerticalPosition();

	setPageHeight();
	detectPageVerticalPosition();
	orientRobby();
	setLayerSpeed();
	moveLayers(); //before blinkRobbyEyes(), positionBalloonAndRobbyContainerHorizontally(), animateRobbyRunSwim(), shiftRobbyFrame(), positionContactConfirmationContainer()
	setRobbyLeftAndRightEdge();
	shiftUpDownHorizontalLayersOnResize();
	animateInformationAndEnemiesElements();
	positionSplashContainer();
	positionRobbyContainerVertically();
	positionBalloonVertically();
	positionSocialContainer();
	positionPlants();
	hideContactConfirmationContainer();
	positionContactConfirmationContainer();
	positionExperienceTextContainer();
	positionChainBlockAndStringContainer();
	positionSeaFloorObjectsVertically();
	enableScrollOrSwipe();
	printResizeText();
}

//use orientation change function below to handle so orientation screen bug in android
$(window).on('orientationchange', orientationChangeHandler);
function orientationChangeHandler(e)
{
	disableScrollOrSwipe();
    setTimeout(function() {$(window).trigger('resize');}, 500);
}

function enableScrollOrSwipe()
{
	canScrollOrSwipe = true;
}

function disableScrollOrSwipe()
{
	canScrollOrSwipe = false;
}

function initVariablesAfterShowContainer() //give variables value based on width height div etc
{
	fireworkCenterX = 0.5 * fireworkArray[0].offsetWidth;
	fireworkCenterY = 0.5 * fireworkArray[0].offsetHeight;
	fireworkOneRadiusDistance = (fireworkCenterY - fireworkDotRadius) / fireworkRowNumber;
	fireworkOneRotationAngle = 2 * Math.PI / fireworkColumnNumber;
}

function resetVariables()
{
	pageVerticalPosition = 0;
	canAnimatePlantInformation = true;
	canAnimateBuildingInformation = true;

	if (isFishStillAnimating == false)
	{
		canAnimateFishInformation = true;
	}
	if (isCrabStillAnimating == false)
	{
		canAnimateCrabInformation = true;
	}
	if (isTurtleStillAnimating == false)
	{
		canAnimateTurtleInformation = true;
	}

	canAnimateRobotInformation = true;
	canAnimateSquidInformation = true;
	canAnimateAlienInformation = true;
	canAnimateNbaInformation = true;
	canAnimateSocialContainer = true;
	canDrawManyFireworks = true;
}

function resetFunctions()
{
	positionPlants();
	positionBuildings();

	if (isFishStillAnimating == false)
	{
		positionSeaAnimals(fishArray, numberOfFishInEachRowArray, 150, 100);
	}
	if (isCrabStillAnimating == false)
	{
		positionSeaAnimals(crabArray, numberOfCrabInEachRowArray, 150, 100);
	}
	if (isTurtleStillAnimating == false)
	{
		positionSeaAnimals(turtleArray, numberOfTurtleInEachRowArray, 150, 100);
	}

	positionNbaElements();
	positionExperience1Elements();
	positionExperience2Elements();
	positionExperience3Elements();
	positionSocialContainer();
	positionExperienceTextContainer();
	positionChainBlockAndStringContainer();
	resetFireworkSvg();
}

function initTouchEvents()
{
	document.addEventListener("touchstart", handleStart, false);
	document.addEventListener("touchmove", handleMove, false);
	document.addEventListener("touchend", handleEnd, false);
}

function handleStart(e)
{
	//disable preventDefault() on touchstart so url will still be clickable
	//e.preventDefault();

	touchStartX = e.targetTouches[0].pageX;
	pageVerticalPositionOnTouch = pageVerticalPosition;
}

function handleMove(e)
{
	e.preventDefault();
	touchCurrentX = e.targetTouches[0].pageX;

	if (canScrollOrSwipe == true) //to avoid user swipe when window is still resizing after screen orientation changed on table
	{
		detectPageVerticalPosition();
		runTheseFunctionsAfterScrollOrSwipe();
	}
}

function handleEnd(e)
{
	e.preventDefault();
	touchEndX = e.changedTouches[0].pageX;
}

function runTheseFunctionsAfterScrollOrSwipe()
{
	orientRobby();
	checkRobbyJumpFallSwim();
	moveLayers();
	shiftUpDownHorizontalLayers();
	animateInformationAndEnemiesElements();
	animateRobbyRunSwim();
	hideScrollOrSwipeTextContainer();
	hideContactConfirmationContainer();
	deviceFunctionScrollSwipe();

	printScrollSwipeText();
}

function deviceFunctionScrollSwipe()
{
	if (deviceName != "computer")
	{
		if (layersMovement == "vertical")
		{
			positionHorizontalLayersToHaveSameRightPosition();
		}
	}
}

function showContainer()
{
	containerDiv.setAttribute("class", "");
}

function shiftUpHorizontalLayersAfterEverythingLoaded()
{
	for (var i=0; i<layerHorizontalArray.length; i++)
	{
		$(layerHorizontalArray[i]).stop().animate({top: "0px"}, 1000, function() {finishShiftUpHorizontalLayersAfterEverythingLoaded()});
	}
}

function finishShiftUpHorizontalLayersAfterEverythingLoaded()
{
	if (canFinishShiftUpHorizontalLayersAfterEverythingLoaded == true)
	{
		canFinishShiftUpHorizontalLayersAfterEverythingLoaded = false;
		isPreloadShiftUpAnimationFinish = true;

		makePageScrollable();
		shiftDownRobbyContainer();
		animateScrollOrSwipeTextContainer();
	}
}

function shiftDownRobbyContainer()
{
	setRobbyJumpDownAndFallFrame();
	$(robbyContainerDiv).stop().animate({bottom: "20%"}, 500, function() {setRobbyStaticFrame(); enableAnimateRobbyRunSwim()});

	//to make robby run animation work from beginning in internet explorer 8
	if ((browserName == "internet explorer") && (browserVersion <= 8))
	{
		enableAnimateRobbyRunSwim();
	}
}

function makePageScrollable()
{
	contentDiv.setAttribute("class", "");
	enableScrollOrSwipe();
}

function setFrontLayerVerticalHeight()
{
	layerVerticalArray[layerVerticalArray.length - 1].style.height = (2 * containerDiv.offsetHeight) + bannersContainerDiv.offsetHeight + gapBetweenContactCloudAndBannersContainer + "px";
}

function setBannersContainerVerticalPosition()
{
	bannersContainerDiv.style.bottom = containerDiv.offsetHeight + "px";
}

function setPageHeight()
{
	pageDiv.style.height = layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth + layerVerticalArray[layerVerticalArray.length - 1].offsetHeight + distanceBetweenRobbyAndBalloon + "px";
}

function setLayerSpeed()
{
	//empty array first
	while (layerHorizontalSpeedArray.length > 0)
	{
    	layerHorizontalSpeedArray.pop();
  	}

	while (layerVerticalSpeedArray.length > 0)
	{
    	layerVerticalSpeedArray.pop();
  	}

	//fill array
	for (var i=0; i<layerHorizontalArray.length; i++)
	{
		var layerHorizontalSpeed = (layerHorizontalArray[i].offsetWidth - containerDiv.offsetWidth) / (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth);
		layerHorizontalSpeedArray.push(layerHorizontalSpeed);
	}

	for (var i=0; i<layerVerticalArray.length; i++)
	{
		var layerVerticalSpeed = (layerVerticalArray[i].offsetHeight - containerDiv.offsetHeight) / (layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight);
		layerVerticalSpeedArray.push(layerVerticalSpeed);
	}
}

function detectPageVerticalPosition()
{
	previousPageVerticalPosition = pageVerticalPosition;

	if (deviceName == "computer")
	{
		if (browserName == "internet explorer")
		{
			pageVerticalPosition = document.documentElement.scrollTop;
		}
		else
		{
			pageVerticalPosition = pageYOffset;
		}
	}
	else //mobile
	{
		pageVerticalPosition = pageVerticalPositionOnTouch + (touchStartX - touchCurrentX);

		if (pageVerticalPosition < 0)
		{
			pageVerticalPosition = 0;
		}
		if (pageVerticalPosition > pageDiv.offsetHeight - containerDiv.offsetHeight)
		{
			pageVerticalPosition = pageDiv.offsetHeight - containerDiv.offsetHeight;
		}
	}

	deltaPageVerticalPosition = pageVerticalPosition - previousPageVerticalPosition;

	if (pageVerticalPosition <= 0)
	{
		resetVariables();
		resetFunctions();
	}
}

function moveLayers()
{
	setLayersMovement();

	if (layersMovement == "horizontal")
	{
		//move layer horizontal
		for (var i=0; i<layerHorizontalArray.length; i++)
		{
			layerHorizontalArray[i].style.left = (-1 * layerHorizontalSpeedArray[i] * pageVerticalPosition) + "px";
		}

		positionLayerHorizontalToBottom();

		clearHappyRobbyTimer();
		positionVerticalLayersHorizontally(); //move vertical layers to follow horizontal layer movement
	}

	if (layersMovement == "vertical")
	{
		//shift layer vertical position
		for (var i=0; i<layerVerticalArray.length; i++)
		{
			layerVerticalArray[i].style.bottom = (-1 * layerVerticalSpeedArray[i] * (pageVerticalPosition - (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth))) + "px";
		}

		positionVerticalLayersAtLeftMost(); //make layer vertical position has same left position
		positionHorizontalLayersToHaveSameRightPosition(); //make layer horizontal position has same right position
		positionHorizontalLayersVertically();

		clearShiftRobbyFrameTimer(); //make robby stand still when he is inside balloon
		clearHappyRobbyTimer();
	}

	if (layersMovement == "not moving 1")
	{
		positionVerticalLayersAtLeftMost();
		positionVerticalLayersToHaveSameTopPosition();
		positionHorizontalLayersAtBottomMost();
		positionHorizontalLayersToHaveSameRightPosition();

		clearHappyRobbyTimer();
	}

	if (layersMovement == "not moving 2")
	{
		positionVerticalLayersAtLeftMost();
		positionVerticalLayersToHaveSameTopPosition();
		positionHorizontalLayersAtBottomMost();
		positionHorizontalLayersToHaveSameRightPosition();

		animateSocialContainer();
		happyRobby();
		drawManyFireworks();
	}

	positionBalloonAndRobbyContainerHorizontally();
	positionContactContainer();
	positionFireworksContainer();
}

function positionVerticalLayersAtLeftMost()
{
	for (var i=0; i<layerVerticalArray.length; i++)
	{
		layerVerticalArray[i].style.left = "0px";
	}
}

function positionHorizontalLayersToHaveSameRightPosition()
{
	for (var i=0; i<layerHorizontalArray.length; i++)
	{
		layerHorizontalArray[i].style.left = containerDiv.offsetWidth - layerHorizontalArray[i].offsetWidth + "px";
	}
}

function positionHorizontalLayersVertically()
{
	for (var i=0; i<layerHorizontalArray.length; i++)
	{
		//layerHorizontalArray[i].style.top = layerVerticalArray[i].offsetTop + layerVerticalArray[i].offsetHeight - containerDiv.offsetHeight + "px";
		layerHorizontalArray[i].style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight + "px";
	}
}

function positionHorizontalLayersAtBottomMost()
{
	for (var i=0; i<layerHorizontalArray.length; i++)
	{
		layerHorizontalArray[i].style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight + "px";
	}
}

function setRobbyLeftAndRightEdge()
{
	var distanceBetweenRobbyDivEdgeToHisFeet = 65;

	robbyRightEdge = 0.5 * (containerDiv.offsetWidth + robbyDiv.offsetWidth) - distanceBetweenRobbyDivEdgeToHisFeet;
	robbyLeftEdge = 0.5 * (containerDiv.offsetWidth - robbyDiv.offsetWidth) + distanceBetweenRobbyDivEdgeToHisFeet;
}

function positionVerticalLayersToHaveSameTopPosition()
{
	for (var i=0; i<layerVerticalArray.length; i++)
	{
		layerVerticalArray[i].style.bottom = containerDiv.offsetHeight - layerVerticalArray[i].offsetHeight + "px";
	}
}

function positionVerticalLayersBottomToHorizontalLayersBottom()
{
	for (var i=0; i<layerVerticalArray.length; i++)
	{
		layerVerticalArray[i].style.bottom = (-1 * layerHorizontalArray[i].offsetTop) + "px";
	}
}

function shiftUpDownHorizontalLayers()
{
		if (
		((previousPageVerticalPosition < sea1Div.offsetLeft - robbyLeftEdge) || (previousPageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - robbyRightEdge))
		&&
		((pageVerticalPosition >= sea1Div.offsetLeft - robbyLeftEdge) && (pageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - robbyRightEdge))
		)
		{
			isRobbySwimming = true;
			shiftUpLayerHorizontal();
			shiftRobbyToSeaFloor();
			createBubble();
		}
		if (
		((previousPageVerticalPosition >= sea1Div.offsetLeft - robbyLeftEdge) && (previousPageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - robbyRightEdge))
		&&
		((pageVerticalPosition < sea1Div.offsetLeft - robbyLeftEdge) || (pageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - robbyRightEdge))
		)
		{
			isRobbySwimming = false;
			shiftDownLayerHorizontal();
			shiftRobbyToGroundLevel();
			clearInterval(bubbleTimer);
			clearInterval(blinkSeaAnimalsTimer);
		}
}

function shiftUpDownHorizontalLayersOnResize()
{
	if
	(
	((pageVerticalPosition >= sea1Div.offsetLeft - robbyLeftEdge) && (pageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - robbyRightEdge))
	)
	{
		clearInterval(shiftUpLayerHorizontalTimer);
		clearInterval(shiftDownLayerHorizontalTimer);

		isRobbySwimming = true;

		positionLayerHorizontalToTop();

		//need to shift up vertical layers too, so the cloud in vertical layers are not entering the sea
		positionVerticalLayersBottomToHorizontalLayersBottom();

		createBubble();
	}
	if
	(
	((pageVerticalPosition < sea1Div.offsetLeft - robbyLeftEdge) || (pageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - robbyRightEdge))
	)
	{
		clearInterval(shiftUpLayerHorizontalTimer);
		clearInterval(shiftDownLayerHorizontalTimer);

		isRobbySwimming = false;

		if (layersMovement == "horizontal")
		{
			positionLayerHorizontalToBottom();
			positionVerticalLayersBottomToHorizontalLayersBottom();
		}
		else
		{
			positionHorizontalLayersAtBottomMost();
			positionHorizontalLayersToHaveSameRightPosition();
		}

		clearInterval(bubbleTimer);
		clearInterval(blinkSeaAnimalsTimer);
	}
}

function setShiftUpLayerHorizontalDistance()
{
	shiftUpLayerHorizontalDistance = 0.75 * containerDiv.offsetHeight;
}

function shiftUpLayerHorizontal()
{
	setShiftUpLayerHorizontalDistance();

	//shift up horizontal layers
	clearShiftUpDownLayerHorizontalTimer();
	shiftUpLayerHorizontalTimer = setInterval(function(){moveUpLayerHorizontal()}, shiftUpDownLayerHorizontalInterval);

	disableIsRobbyJumpingAndFalling();
}

function moveUpLayerHorizontal() //robby from ground into sea
{
	if (layersMovement == "horizontal")
	{
		for (var i=0; i<layerHorizontalArray.length; i++)
		{
			var layerHorizontalArrayTop = layerHorizontalArray[i].offsetTop - shiftUpDownLayerHorizontalIncrement;

			//shift up horizontal layers
			if (layerHorizontalArrayTop <= -shiftUpLayerHorizontalDistance)
			{
				layerHorizontalArrayTop = -shiftUpLayerHorizontalDistance;
				layerHorizontalArray[i].style.top = layerHorizontalArrayTop + "px";
				clearInterval(shiftUpLayerHorizontalTimer);
			}
			else
			{
				layerHorizontalArray[i].style.top = layerHorizontalArrayTop + "px";
			}

			//check if robby already below sea level or not
			if (robbyContainerDiv.offsetTop > sea1Div.offsetTop + layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop)
			{
				isRobbyBelowSeaLevel = true;
			}
		}

		//need to shift up vertical layers too, so the cloud in vertical layers are not entering the sea
		positionVerticalLayersBottomToHorizontalLayersBottom();
	}
	else
	{
		clearInterval(shiftUpLayerHorizontalTimer);
		positionHorizontalLayersAtBottomMost();
		positionHorizontalLayersToHaveSameRightPosition();

		isRobbyBelowSeaLevel = false;
	}
}

function shiftDownLayerHorizontal()
{
	//shift down horizontal layers
	clearShiftUpDownLayerHorizontalTimer();
	shiftDownLayerHorizontalTimer = setInterval(function(){moveDownLayerHorizontal()}, shiftUpDownLayerHorizontalInterval);
}

function moveDownLayerHorizontal() //robby from sea to ground
{
	if (layersMovement == "horizontal")
	{
		for (var i=0; i<layerHorizontalArray.length; i++)
		{
			var layerHorizontalArrayTop = layerHorizontalArray[i].offsetTop + shiftUpDownLayerHorizontalIncrement;

			//shift down horizontal layers
			if (layerHorizontalArrayTop >= 0)
			{
				layerHorizontalArrayTop = 0;
				layerHorizontalArray[i].style.top = layerHorizontalArrayTop + "px";
				clearInterval(shiftDownLayerHorizontalTimer);
			}
			else
			{
				layerHorizontalArray[i].style.top = layerHorizontalArrayTop + "px";
			}

			//check if robby already above sea level or not
			if (robbyContainerDiv.offsetTop < sea1Div.offsetTop + layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop)
			{
				isRobbyBelowSeaLevel = false;
			}
		}

		//need to shift down vertical layers back
		positionVerticalLayersBottomToHorizontalLayersBottom();
	}
	else
	{
		clearInterval(shiftDownLayerHorizontalTimer);
		positionHorizontalLayersAtBottomMost();
		positionHorizontalLayersToHaveSameRightPosition();

		isRobbyBelowSeaLevel = false;
	}
}

function clearShiftUpDownLayerHorizontalTimer()
{
	clearInterval(shiftUpLayerHorizontalTimer);
	clearInterval(shiftDownLayerHorizontalTimer);
}

function shiftRobbyToGroundLevel()
{
	$(robbyContainerDiv).stop().animate({bottom: containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop + "px"}, 300, function() {});
}

function shiftRobbyToSeaFloor()
{
	$(robbyContainerDiv).stop().animate({bottom: seaFloorDiv.offsetHeight + "px"}, 300, function() {});
}

function positionLayerHorizontalToTop()
{
	if (isRobbySwimming == true)
	{
		setShiftUpLayerHorizontalDistance();

		//shift up horizontal layers
		for (var i=0; i<layerHorizontalArray.length; i++)
		{
			layerHorizontalArray[i].style.top = -shiftUpLayerHorizontalDistance + "px";
		}

		//shift up vertical layers too
		for (var i=0; i<layerVerticalArray.length; i++)
		{
			layerVerticalArray[i].style.bottom = shiftUpLayerHorizontalDistance + "px";
		}
	}
}

function positionLayerHorizontalToBottom()
{
	if (isRobbySwimming == false)
	{
		//make sure horizontal layers have same vertical position after they are moved vertically
		for (var i=0; i<layerHorizontalArray.length; i++)
		{
			layerHorizontalArray[i].style.top = "0px";
		}

		//make layer vertical position has same bottom position
		for (var i=0; i<layerVerticalArray.length; i++)
		{
			layerVerticalArray[i].style.bottom = "0px";
		}
	}
}

function checkRobbyJumpFallSwim()
{
	if (layersMovement == "horizontal")
	{
		if (isRobbySwimming == true)
		{
			if (isRobbyBelowSeaLevel == true) //to avoid robby swims above the water level
			{
				robbySwimUp();
			}
		}
		else
		{
			for (var i=0; i<elevationArray.length; i++)
			{
				robbyJumpUp(i);
				robbyFall(i);
			}
		}
	}
}

function robbyJumpUp(i)
{
		//when character move from left to right
		if (((previousPageVerticalPosition <= elevationArray[i].offsetLeft - robbyRightEdge) && (pageVerticalPosition > elevationArray[i].offsetLeft - robbyRightEdge))
		||
		//when character move from right to left
		((previousPageVerticalPosition >= elevationArray[i].offsetLeft + elevationArray[i].offsetWidth - robbyLeftEdge) && (pageVerticalPosition < elevationArray[i].offsetLeft + elevationArray[i].offsetWidth - robbyLeftEdge)))
		{
			positionRobbyAtGroundLevel();
			$(robbyContainerDiv).stop().animate({bottom: [containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop + 300, 'easeOutCubic']}, 300, function() {robbyJumpDown(i)});
			setRobbyJumpUpFrame();
		}
}

function robbyJumpDown(i)
{
		//when character move from left to right and landing on elevation
		if ((pageVerticalPosition > elevationArray[i].offsetLeft - robbyRightEdge) && (pageVerticalPosition < elevationArray[i].offsetLeft + elevationArray[i].offsetWidth - robbyLeftEdge))
		{
			$(robbyContainerDiv).stop().animate({bottom: [containerDiv.offsetHeight - elevationArray[i].offsetTop, 'easeInCubic']}, 300, function() {disableIsRobbyJumpingAndFalling(); setRobbyStaticFrame()});
			setRobbyJumpDownAndFallFrame();
		}
}

function robbyFall(i)
{
		//when character move from left to right
		if (((previousPageVerticalPosition < elevationArray[i].offsetLeft + elevationArray[i].offsetWidth - robbyLeftEdge) && (pageVerticalPosition >= elevationArray[i].offsetLeft + elevationArray[i].offsetWidth - robbyLeftEdge))
		||
		//when character move from right to left
		((previousPageVerticalPosition > elevationArray[i].offsetLeft - robbyRightEdge) && (pageVerticalPosition <= elevationArray[i].offsetLeft - robbyRightEdge)))
		{
			isRobbyFalling = true;
			setRobbyJumpDownAndFallFrame();
			$(robbyContainerDiv).stop().animate({bottom: [containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop, 'easeInCubic']}, 300, function() {disableIsRobbyJumpingAndFalling(); setRobbyStaticFrame()});
		}
}

function setRobbyJumpUpFrame()
{
	clearShiftRobbyFrameTimer();
	isRobbyJumping = true;
	robbyFramesDiv.style.left = (-1 * robbyStartJumpFrame * robbyOneFrameWidth) + "px";
}

function setRobbyJumpDownAndFallFrame()
{
	robbyFramesDiv.style.left = (-1 * robbyStopJumpFrame * robbyOneFrameWidth) + "px";
}

function setRobbyStaticFrame()
{
	robbyFramesDiv.style.left = "0px";
}

function disableIsRobbyJumpingAndFalling()
{
	isRobbyJumping = false;
	isRobbyFalling = false;
}

function robbySwimUp()
{
	getSwimUpHeight();

	if (swimUpHeight > 0)
	{
		var swimUpDistance = seaFloorDiv.offsetHeight + swimUpHeight + "px";

		var robbySwimUpTime = 3 * swimUpHeight;
		var robbySwimDownTime = 6 * swimUpHeight;

		$(robbyContainerDiv).stop().animate({bottom: swimUpDistance}, robbySwimUpTime, function() {robbySwimDown(robbySwimDownTime)});
	}
}

function robbySwimDown(robbySwimDownTime)
{
	$(robbyContainerDiv).stop().animate({bottom: seaFloorDiv.offsetHeight + "px"}, robbySwimDownTime, function() {setRobbyStaticFrame()});

	if (robbyContainerDiv.offsetTop + robbyContainerDiv.offsetHeight <= containerDiv.offsetHeight - seaFloorDiv.offsetHeight - minimumVerticalDistanceToTriggerRobbySwimDownFrame) //if robby position high enough when swim down
	{
		robbyFramesDiv.style.left = (-1 * robbySwimDownFrame * robbyOneFrameWidth) + "px"; //swim with cape on top
	}
	else
	{
		setRobbyStaticFrame();
	}
}

function animateRobbyEyes()
{
	clearInterval(blinkRobbyEyesTimer);
	blinkRobbyEyesTimer = setInterval(function(){blinkRobbyEyes()}, 4000);
}

function blinkRobbyEyes()
{
	if (layersMovement != "not moving 2")
	{
		$(robbyEyesCloseDiv).fadeTo(0,1);
		$(robbyEyesCloseDiv).stop().delay(300).animate({opacity: 0}, 0, function() {});
	}
}

function hideRobbyEyesClose()
{
	$(robbyEyesCloseDiv).fadeTo(0,0);
}

function getSwimUpHeight()
{
	swimUpHeight = Math.abs(deltaPageVerticalPosition);
	var maxSwimUpHeight = sea1Div.offsetHeight - robbyDiv.offsetHeight;

	if (swimUpHeight > maxSwimUpHeight)
	{
		swimUpHeight = maxSwimUpHeight;
	}
}

function positionVerticalLayersHorizontally()
{
	for (var i=0; i<layerVerticalArray.length; i++)
	{
		layerVerticalArray[i].style.left = layerHorizontalArray[i].offsetLeft + layerHorizontalArray[i].offsetWidth - containerDiv.offsetWidth + "px";
	}
}

function positionBalloonAndRobbyContainerHorizontally()
{
	var layerVerticalMovementDistance = (pageVerticalPosition * layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1]) - (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth);

	var robbyMaxHorizontalDistanceFromCenter = 250;
	var balloonMaxHorizontalDistanceFromCenter = 50;

	//calculate robbyHorizontalDistance
	robbyMaxHorizontalDistance = (0.5 * containerDiv.offsetWidth) + robbyMaxHorizontalDistanceFromCenter;
	var robbyHorizontalDistance = (0.5 * containerDiv.offsetWidth) + layerVerticalMovementDistance;
	if (robbyHorizontalDistance >= robbyMaxHorizontalDistance)
	{
		robbyHorizontalDistance = robbyMaxHorizontalDistance
	}

	//calculate balloonHorizontalDistance
	var balloonMaxHorizontalDistance = (0.5 * containerDiv.offsetWidth) + balloonMaxHorizontalDistanceFromCenter;
	var balloonHorizontalDistance = (0.5 * (containerDiv.offsetWidth - balloonDiv.offsetWidth)) + layerVerticalMovementDistance;
	if (balloonHorizontalDistance >= balloonMaxHorizontalDistance)
	{
		balloonHorizontalDistance = balloonMaxHorizontalDistance;
	}

	if (layersMovement == "vertical")
	{
		//shift balloon to right
		balloonDiv.style.left = balloonHorizontalDistance + "px";

		//shift robby to right
		robbyContainerDiv.style.left = robbyHorizontalDistance + "px";

	}
	else if ((layersMovement == "not moving 1") || (layersMovement == "not moving 2"))
	{
		//robby start walk on the cloud
		robbyContainerDiv.style.left = robbyHorizontalDistance + pageVerticalPosition - (pageDiv.offsetHeight - containerDiv.offsetHeight - distanceBetweenRobbyAndBalloon) + "px";

		//reposition balloon for on resize
		balloonDiv.style.left = balloonHorizontalDistance + "px";
	}
	else
	{
		//balloon and robby still in normal position
		balloonDiv.style.left = layerHorizontalArray[layerHorizontalArray.length - 1].offsetLeft + layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - (0.5 * (containerDiv.offsetWidth + balloonDiv.offsetWidth)) + "px";
		robbyContainerDiv.style.left = "50%";
	}
}

function positionBalloonVertically() //to fix the bug in android change screen orientation
{
	balloonDiv.style.bottom = (0.2 * containerDiv.offsetHeight) + "px";
}

function setLayersMovement()
{
	if (pageVerticalPosition * layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1] <= layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth)
	{
		layersMovement = "horizontal";
	}
	else if ((pageVerticalPosition >= pageDiv.offsetHeight - containerDiv.offsetHeight - distanceBetweenRobbyAndBalloon) && (pageVerticalPosition < pageDiv.offsetHeight - containerDiv.offsetHeight))
	{
		layersMovement = "not moving 1"; //robby walking from balloon to the finish line
	}
	else if (pageVerticalPosition >= pageDiv.offsetHeight - containerDiv.offsetHeight)
	{
		layersMovement = "not moving 2"; //robby at the finish line
	}
	else
	{
		layersMovement = "vertical";
	}
}

function orientRobby()
{
	if (deltaPageVerticalPosition > 0)
	{
		robbyFramesDiv.style.top = "0px";
		robbyEyesCloseDiv.style.left = "90px";
	}
	if (deltaPageVerticalPosition < 0)
	{
		robbyFramesDiv.style.top = "-200px";
		robbyEyesCloseDiv.style.left = "55px";
	}
}

function storeDivs()
{
	var divArray = document.getElementsByTagName("div");

    for (var i=0; i<divArray.length; i++)
	{
        if (divArray[i].getAttribute("class") == "fish")
		{
			fishArray.push(divArray[i]);
        }
		if (divArray[i].getAttribute("class") == "fish-eyes")
		{
			fishEyeArray.push(divArray[i]);
        }
		if (divArray[i].getAttribute("class") == "crab")
		{
			crabArray.push(divArray[i]);
        }
		if (divArray[i].getAttribute("class") == "crab-eyes")
		{
			crabEyeArray.push(divArray[i]);
        }
		if (divArray[i].getAttribute("class") == "turtle")
		{
			turtleArray.push(divArray[i]);
        }
		if (divArray[i].getAttribute("class") == "turtle-eyes")
		{
			turtleEyeArray.push(divArray[i]);
        }
		if ((divArray[i].getAttribute("class") == "nba-board-blue") || (divArray[i].getAttribute("class") == "nba-board-red"))
		{
			nbaBoardArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "elevation")
		{
			elevationArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "plant")
		{
			plantArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "building")
		{
			buildingArray.push(divArray[i]);
		}
		if ((divArray[i].getAttribute("class") == "building-enemy-face-a-eyes") || (divArray[i].getAttribute("class") == "building-enemy-face-b-eyes"))
		{
			buildingEnemyFaceEyeArray.push(divArray[i]);
		}
		if ((divArray[i].getAttribute("class") == "building-leg-frame-a") || (divArray[i].getAttribute("class") == "building-leg-frame-b"))
		{
			buildingLegFrameArray.push(divArray[i]);
		}
		if ((divArray[i].getAttribute("class") == "building-leg-container-a") || (divArray[i].getAttribute("class") == "building-leg-container-b"))
		{
			buildingLegContainerArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "contact-confirmation-container")
		{
			contactConfirmationContainerArray.push(divArray[i]);
		}

		if (divArray[i].getAttribute("class") == "experience-text-container")
		{
			experienceTextContainerArray.push(divArray[i]);
		}

		if (divArray[i].getAttribute("class") == "chain-block-and-string-container")
		{
			chainBlockAndStringContainerArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "layer-horizontal")
		{
			layerHorizontalArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "layer-vertical")
		{
			layerVerticalArray.push(divArray[i]);
		}
		if ((divArray[i].getAttribute("class") == "algae-a") || (divArray[i].getAttribute("class") == "algae-b") || (divArray[i].getAttribute("class") == "title-skills-class"))
		{
			seaFloorFrontObjectArray.push(divArray[i]);
		}
		if ((divArray[i].getAttribute("class") == "coral") || (divArray[i].getAttribute("class") == "coral-big"))
		{
			seaFloorBackObjectArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "squid-hand-close")
		{
			squidHandCloseArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "squid-hand-open")
		{
			squidHandOpenArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "firework")
		{
			fireworkArray.push(divArray[i]);
        }
    }
}

function animatePlants()
{
	for (var i=0; i<plantArray.length; i++)
	{
		$(plantArray[i]).stop().delay(i * 300).animate({top: [plantTargetTopObjectArray[i].offsetTop, 'easeOutElastic']}, 800, function() {});
	}
}

function positionPlants()
{
	for (var i=0; i<plantArray.length; i++)
	{
		if (canAnimatePlantInformation == true)
		{
			plantArray[i].style.top = "100%";
		}
		else
		{
			plantArray[i].style.top = plantTargetTopObjectArray[i].offsetTop + "px";
		}
	}
}

function animateBuildings()
{
	clearInterval(buildingLegsTimer);
	buildingLegsTimer = setInterval(function(){animateBuildingsLegs()}, 200);

	for (var i=0; i<buildingArray.length; i++)
	{
		$(buildingArray[i]).stop().delay(i * 300).animate({left: [buildingTargetLeftArray[i], 'easeOutCubic']}, 1000, function() {});
	}
}

function animateBuildingsLegs()
{
	buildingCounter = buildingCounter + 1;

	for (var i=0; i<buildingArray.length; i++)
	{
		if (buildingArray[buildingArray.length - 1].offsetLeft == buildingTargetLeftArray[buildingTargetLeftArray.length - 1]) //if last building already stop moving
		{
			buildingLegFrameArray[buildingLegFrameArray.length - 1].style.left = "0px";
			clearInterval(buildingLegsTimer);
			buildingCounter = 0;

			return;
		}
		else if ((buildingArray[i].offsetLeft > buildingTargetLeftArray[i]) && (buildingArray[i].offsetLeft < buildingEarlyPositionArray[i])) //if building still running
		{
			buildingLegFrameArray[i].style.left = (-1 * buildingLegContainerArray[i].offsetWidth * (buildingCounter % 2)) + "px";
		}

		else //if building already stop moving
		{
			buildingLegFrameArray[i].style.left = "0px";
		}
	}
}

function animateBuildingsEyes()
{
	clearInterval(buildingBlinkTimer);
	buildingBlinkTimer = setInterval(function(){blinkBuildings()}, 4000); //start to blink building eyes
}

function blinkBuildings()
{
	if ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < about2ContainerDiv.offsetLeft) || (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > about2ContainerDiv.offsetLeft + about2ContainerDiv.offsetWidth))
	{
		clearInterval(buildingBlinkTimer);
	}
	else
	{
		var buildingRandomNumber = Math.floor(Math.random() * buildingArray.length); //generate random number between 0-2

		$(buildingEnemyFaceEyeArray[buildingRandomNumber]).fadeTo(0,1);
		$(buildingEnemyFaceEyeArray[buildingRandomNumber]).stop().delay(300).animate({opacity: 0}, 0, function() {});
	}
}

function positionBuildings()
{
	for (var i=0; i<buildingArray.length; i++)
	{
		buildingArray[i].style.left = buildingEarlyPositionArray[i] + "px";
	}
}

function nbaBoardsJump()
{
	for (var i=0; i<nbaBoardArray.length; i++)
	{
		$(nbaBoardArray[i]).stop().delay(i * 100).animate({bottom: [200, 'easeOutCubic']}, 300, function() {nbaBoardsFall()});
	}
}

function nbaBoardsFall()
{
	$(nbaBoardArray[nbaBoardsCounter]).stop().animate({bottom: [0, 'easeInCubic']}, 300, function() {});

	nbaBoardsCounter = nbaBoardsCounter + 1;

	if (nbaBoardsCounter >= nbaBoardArray.length)
	{
		nbaBoardsCounter = 0; //reset nbaBoardsCounter
	}
}

function positionNbaBoard()
{
	for (var i=0; i<nbaBoardArray.length; i++)
	{
		nbaBoardArray[i].style.bottom = "0px";
	}
}

function animateNbaBoardsContinuously()
{
	clearInterval(nbaBoardsAnimationTimer);
	nbaBoardsAnimationTimer = setInterval(function(){nbaBoardsJump()}, 3000);
}

function animateNbaPlayer()
{
	nbaPlayerRun();
}

function nbaPlayerRun()
{
	clearInterval(nbaPlayerTimer);
	nbaPlayerTimer = setInterval(function(){animateNbaPlayerRun()}, 200);

	$(nbaPlayerContainerDiv).stop().animate({left: "690px"}, 1000, function() {nbaPlayerJump()});
}

function animateNbaPlayerRun()
{
	nbaPlayerCounter = nbaPlayerCounter + 1;
	shiftNbaPlayerFrame(nbaPlayerCounter % 2);
}

function nbaPlayerJump()
{
	clearInterval(nbaPlayerTimer);
	nbaPlayerCounter = 0;

	shiftNbaPlayerFrame(2);
	$(nbaPlayerContainerDiv).stop().animate({left: "570px", bottom:[200, 'easeOutCubic']}, 300, function() {nbaPlayerFall()});
}

function nbaPlayerFall()
{
	shiftNbaPlayerFrame(3);
	shakeRim();
	bounceBall();
	nbaBoardsJump();
	animateNbaBoardsContinuously();
	$(nbaPlayerContainerDiv).stop().animate({left: "450px", bottom:[0, 'easeInCubic']}, 300, function() {});
}

function shiftNbaPlayerFrame(nbaPlayerFrameNumber)
{
	nbaPlayerFrameDiv.style.left = (-300 * nbaPlayerFrameNumber) + "px";
}

function shakeRim()
{
	//rim go down first with this function, then bounce up with the moveRimUp function
	$(nbaRimContainerDiv).stop().animate({bottom:[-50, 'easeOutCubic']}, 100, function() {moveRimUp()});
}

function moveRimUp()
{
	$(nbaRimContainerDiv).stop().animate({bottom:[0, 'easeOutElastic']}, 500, function() {});
}

function bounceBall()
{
	$(nbaBallDiv).fadeTo(0,1);
	$(nbaBallDiv).stop().animate({bottom:[0, 'easeOutBounce']}, 1200, function() {});
}

function positionNbaElements()
{
	stopAllNbaAnimation();
	setAllNbaCounter();
	clearAllNbaTimer();
	positionNbaBoard();
	positionNbaPlayerContainer();
	hideNbaBall();
}

function positionNbaPlayerContainer()
{
	nbaPlayerContainerDiv.style.left = "1400px";
	nbaPlayerContainerDiv.style.bottom = "0px";
}

function hideNbaBall()
{
	$(nbaBallDiv).fadeTo(0,0);

	nbaBallDiv.style.left = "415px";
	nbaBallDiv.style.bottom = "250px";
}

function animateNbaPlayerEyes()
{
	clearInterval(blinkNbaPlayerTimer);
	blinkNbaPlayerTimer = setInterval(function(){blinkNbaPlayer()}, 4000);
}

function blinkNbaPlayer()
{
	if ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < about3ContainerDiv.offsetLeft) || (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > about3ContainerDiv.offsetLeft + about3ContainerDiv.offsetWidth))
	{
		clearInterval(blinkNbaPlayerTimer);
	}
	else
	{
		$(nbaPlayerEyesDiv).fadeTo(0,1);
		$(nbaPlayerEyesDiv).stop().delay(300).animate({opacity: 0}, 0, function() {});
	}
}

function clearAllNbaTimer()
{
	clearInterval(blinkNbaPlayerTimer);
	clearInterval(nbaBoardsAnimationTimer);
	clearInterval(nbaPlayerTimer);
}

function setAllNbaCounter()
{
	nbaBoardsCounter = 0;
	nbaPlayerCounter = 0;
}

function stopAllNbaAnimation()
{
	//stop nba board animation
	for (var i=0; i<nbaBoardArray.length; i++)
	{
		$(nbaBoardArray[i]).stop(true, false);
	}

	//stop nba player animation
	$(nbaPlayerContainerDiv).stop(true, false);
}

function positionSeaAnimals(seaAnimalArray, numberOfSeaAnimalInEachRowArray, horizontalDistanceBetweenAnimals, verticalDistanceBetweenAnimals)
{
	var seaAnimalLocalArray = seaAnimalArray;
	var numberOfSeaAnimalInEachRowLocalArray = numberOfSeaAnimalInEachRowArray;
	var columnDistance = horizontalDistanceBetweenAnimals;
	var rowDistance = verticalDistanceBetweenAnimals;

	var seaAnimalLocalNumber = 0;

	for (var i=0; i<numberOfSeaAnimalInEachRowLocalArray.length; i++)
	{
		for (var j=0; j<numberOfSeaAnimalInEachRowLocalArray[i]; j++)
		{
			seaAnimalLocalArray[seaAnimalLocalNumber].style.left = seaAnimalSwimDistance + (j * columnDistance) + "px";
			seaAnimalLocalArray[seaAnimalLocalNumber].style.top = (i * rowDistance) + "px";
			seaAnimalLocalNumber = seaAnimalLocalNumber + 1;
		}
	}
}

function animateSeaAnimals(seaAnimalArray)
{
	var seaAnimalLocalArray = seaAnimalArray;

	if (seaAnimalLocalArray == fishArray)
	{
		isFishStillAnimating = true;
	}

	if (seaAnimalLocalArray == crabArray)
	{
		isCrabStillAnimating = true;
	}

	if (seaAnimalLocalArray == turtleArray)
	{
		isTurtleStillAnimating = true;
	}

	for (var i=0; i<seaAnimalLocalArray.length; i++)
	{
		$(seaAnimalLocalArray[i]).stop().delay(i * 100).animate({left: [seaAnimalLocalArray[i].offsetLeft - seaAnimalSwimDistance, 'easeOutCubic']}, 600, function() {disableIsSeaAnimalStillAnimating(seaAnimalLocalArray)});
	}
}

function disableIsSeaAnimalStillAnimating(seaAnimalArray)
{
	var seaAnimalLocalArray = seaAnimalArray;

	if (seaAnimalLocalArray == fishArray)
	{
		if (fishAnimateNumber >= seaAnimalLocalArray.length - 1)
		{
			isFishStillAnimating = false;
			fishAnimateNumber = 0;
		}
		else
		{
			fishAnimateNumber = fishAnimateNumber + 1;
		}
	}

	if (seaAnimalLocalArray == crabArray)
	{
		if (crabAnimateNumber >= seaAnimalLocalArray.length - 1)
		{
			isCrabStillAnimating = false;
			crabAnimateNumber = 0;
		}
		else
		{
			crabAnimateNumber = crabAnimateNumber + 1;
		}
	}

	if (seaAnimalLocalArray == turtleArray)
	{
		if (turtleAnimateNumber >= seaAnimalLocalArray.length - 1)
		{
			isTurtleStillAnimating = false;
			turtleAnimateNumber = 0;
		}
		else
		{
			turtleAnimateNumber = turtleAnimateNumber + 1;
		}
	}
}

function animateRobbyRunSwim()
{
	if ((canAnimateRobbyRunSwim == true) && (isRobbyJumping == false) && (isRobbyFalling == false) && (layersMovement != "vertical"))
	{
		disableAnimateRobbyRunSwim();

		clearInterval(shiftRobbyFrameTimer);
		shiftRobbyFrameTimer = setInterval(function(){shiftRobbyFrame()}, shiftRobbyFrameTimeInterval);
	}
}

function shiftRobbyFrame()
{
	if (isRobbyFalling == true)
	{
		clearShiftRobbyFrameTimer();
		setRobbyJumpDownAndFallFrame();
		return; //exit shiftRobbyFrame function now
	}
	else if ((isRobbySwimming == true) && (isRobbyBelowSeaLevel == true))
	{
		robbyStartFrame = robbyStartSwimFrame;
		robbyStopFrame = robbyStopSwimFrame;
	}
	else
	{
		robbyStartFrame = robbyStartRunFrame;
		robbyStopFrame = robbyStopRunFrame;
	}

	robbyFramesDiv.style.left = (-1 * robbyOneFrameWidth * (robbyStartFrame + counter)) + "px"; //(robbyStartFrame + counter) will decide which frame will be shown

	if (robbyStartFrame + counter + switcher > robbyStopFrame) //time to decrease counter by making counter has a negative value
	{
		switcher = -1 * switcher;
	}

	if (robbyStartFrame + counter  + switcher == robbyStartFrame)
	{
		pageVerticalPositionWhenAnimateRobby1 = pageVerticalPosition; //record previous page vertical position when robby animate
	}

	if (robbyStartFrame + counter  + switcher < robbyStartFrame)
	{
		pageVerticalPositionWhenAnimateRobby2 = pageVerticalPosition; //record current page vertical position when robby animate

		if (pageVerticalPositionWhenAnimateRobby1 == pageVerticalPositionWhenAnimateRobby2) //when user is no longer scrolling
		{
			clearShiftRobbyFrameTimer();

			//to make robby hands up right away after pass the finish line (one time animation only)
			if (layersMovement == "not moving 2")
			{
				robbyHandsUp();
			}

			return; //to exit shiftRobbyFrame function now, otherwise counter will be plus one (counter = counter + switcher)
		}
		else //user still scrolling, so increase the counter again by making counter has a positive value
		{
			switcher = -1 * switcher;
		}
	}

	counter = counter + switcher;
}

function clearShiftRobbyFrameTimer()
{
	clearInterval(shiftRobbyFrameTimer);

	if (
	(isRobbySwimming == false)
	||
	((isRobbySwimming == true) && (robbyContainerDiv.offsetTop + robbyContainerDiv.offsetHeight >= containerDiv.offsetHeight - seaFloorDiv.offsetHeight)) //robby at the bottom of the sea
	)
	{
		setRobbyStaticFrame();
	}

	counter = 0;
	switcher = 1;
	enableAnimateRobbyRunSwim();
}

function enableAnimateRobbyRunSwim()
{
	canAnimateRobbyRunSwim = true;
}

function disableAnimateRobbyRunSwim()
{
	canAnimateRobbyRunSwim = false;
}

function positionChainBlockAndStringContainer()
{
	for (var i=0; i<chainBlockAndStringContainerArray.length; i++)
	{
		if (i == 0)
		{
			canAnimateBossInformation = canAnimateRobotInformation;
		}
		if (i == 1)
		{
			canAnimateBossInformation = canAnimateSquidInformation;
		}
		if (i == 2)
		{
			canAnimateBossInformation = canAnimateAlienInformation;
		}

		//position x
		chainBlockAndStringContainerArray[i].style.left = (0.5 * experienceTextContainerArray[i].offsetWidth) - (0.5 * chainBlockAndStringContainerArray[i].offsetWidth) + "px";

		//position y
		if (canAnimateBossInformation == true)
		{
			chainBlockAndStringContainerArray[i].style.bottom = (0.8 * containerDiv.offsetHeight) + experienceTextContainerArray[i].offsetHeight + "px";
		}
		else
		{
			chainBlockAndStringContainerArray[i].style.bottom = experienceTextContainerDistanceFromFloor + experienceTextContainerArray[i].offsetHeight + "px";
		}
	}
}

function animateChainBlockAndStringContainer(chainBlockAndStringContainerNumber)
{
	$(chainBlockAndStringContainerArray[chainBlockAndStringContainerNumber]).stop().animate({bottom: [experienceTextContainerDistanceFromFloor + experienceTextContainerArray[chainBlockAndStringContainerNumber].offsetHeight, 'easeOutCubic']}, 1000, function() {});
}

function positionExperienceTextContainer()
{
	for (var i=0; i<experienceTextContainerArray.length; i++)
	{
		if (i == 0)
		{
			canAnimateBossInformation = canAnimateRobotInformation;
		}
		if (i == 1)
		{
			canAnimateBossInformation = canAnimateSquidInformation;
		}
		if (i == 2)
		{
			canAnimateBossInformation = canAnimateAlienInformation;
		}

		if (canAnimateBossInformation == true)
		{
			experienceTextContainerArray[i].style.bottom = (0.8 * containerDiv.offsetHeight) + "px";
		}
		else
		{
			experienceTextContainerArray[i].style.bottom = experienceTextContainerDistanceFromFloor + "px";
		}
	}
}

function animateExperienceTextContainer(experienceTextContainerNumber)
{
	$(experienceTextContainerArray[experienceTextContainerNumber]).stop().animate({bottom: [experienceTextContainerDistanceFromFloor, 'easeOutCubic']}, 1000, function() {});
}

function positionExperience1Elements()
{
	robotDiv.style.left = experience1ContainerDiv.offsetWidth + "px";

	$(piechartAolTextGraphic1Div).fadeTo(0,0);
	$(piechartAolTextGraphic2Div).fadeTo(0,0);
}

function positionExperience2Elements()
{
	squidDiv.style.left = experience2ContainerDiv.offsetWidth + "px";

	$(piechartIncognitoTextGraphic1Div).fadeTo(0,0);
	$(piechartIncognitoTextGraphic2Div).fadeTo(0,0);
	$(piechartIncognitoTextAnimation1Div).fadeTo(0,0);
	$(piechartIncognitoTextAnimation2Div).fadeTo(0,0);
	$(piechartIncognitoTextCode1Div).fadeTo(0,0);
	$(piechartIncognitoTextCode2Div).fadeTo(0,0);

	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		$(piechartIncognitoFrontDiv).fadeTo(0,0); //hide only if browser is not ie8 or below
	}
}

function positionExperience3Elements()
{
	alienDiv.style.left = experience3ContainerDiv.offsetWidth + "px";

	$(piechartFoxnewsTextGraphic1Div).fadeTo(0,0);
	$(piechartFoxnewsTextGraphic2Div).fadeTo(0,0);
	$(piechartFoxnewsTextAnimation1Div).fadeTo(0,0);
	$(piechartFoxnewsTextAnimation2Div).fadeTo(0,0);
	$(piechartFoxnewsTextCode1Div).fadeTo(0,0);
	$(piechartFoxnewsTextCode2Div).fadeTo(0,0);

	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		$(piechartFoxnewsFrontDiv).fadeTo(0,0); //hide only if browser is not ie8 or below
	}
}

function animateInformationAndEnemiesElements()
{
	if (layersMovement == "horizontal")
	{
		if (isRobbySwimming == false)
		{
			for (var i=0; i<landInformationContainerArray.length; i++)
			{
				if (((previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) < landInformationContainerArray[i].offsetLeft) || (previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) > landInformationContainerArray[i].offsetLeft + landInformationContainerArray[i].offsetWidth))
			&&
			((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > landInformationContainerArray[i].offsetLeft) && (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < landInformationContainerArray[i].offsetLeft + landInformationContainerArray[i].offsetWidth)))
				{
					//plants
					if (landInformationContainerArray[i] == about1ContainerDiv)
					{
						if (canAnimatePlantInformation == true)
						{
							animatePlants();
							canAnimatePlantInformation = false;
						}
					}

					//buildings
					if (landInformationContainerArray[i] == about2ContainerDiv)
					{
						animateBuildingsEyes();

						if (canAnimateBuildingInformation == true)
						{
							animateBuildings();
							canAnimateBuildingInformation = false;
						}
					}

					//nba
					if (landInformationContainerArray[i] == about3ContainerDiv)
					{
						animateNbaPlayerEyes();

						if (canAnimateNbaInformation == true)
						{
							animateNbaPlayer();
							canAnimateNbaInformation = false;
						}
					}

					//robot
					if (landInformationContainerArray[i] == experience1ContainerDiv)
					{
						if (canAnimateRobotInformation == false) //if true, animateRobotHands will be execute after robot finish move from left to right
						{
							animateRobotHands();
						}
						else
						{
							animateRobot();
							animateExperienceTextContainer(0);
							animateChainBlockAndStringContainer(0);
							canAnimateRobotInformation = false;
						}
					}

					//squid
					if (landInformationContainerArray[i] == experience2ContainerDiv)
					{
						if (canAnimateSquidInformation == false) //if true, animateSquidHands will be execute after squid finish move from left to right
						{
							animateSquidHands();
						}
						else
						{
							animateSquid();
							animateExperienceTextContainer(1);
							animateChainBlockAndStringContainer(1);
							canAnimateSquidInformation = false;
						}
					}

					//alien
					if (landInformationContainerArray[i] == experience3ContainerDiv)
					{
						if (canAnimateAlienInformation == false) //if true, animateAlienHand will be execute after alien finish move from left to right
						{
							animateAlienHand();
						}
						else
						{
							animateAlien();
							animateExperienceTextContainer(2);
							animateChainBlockAndStringContainer(2);
							canAnimateAlienInformation = false;
						}
					}
				}
			}
		}

		//sea animals
		if (isRobbySwimming == true)
		{
			for (var i=0; i<seaInformationContainerArray.length; i++)
			{
				if (
				((previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) < sea1Div.offsetLeft + seaInformationContainerArray[i].offsetLeft) || (previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) > sea1Div.offsetLeft +  seaInformationContainerArray[i].offsetLeft + seaInformationContainerArray[i].offsetWidth))
				&&
				((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > sea1Div.offsetLeft + seaInformationContainerArray[i].offsetLeft) && (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < sea1Div.offsetLeft + seaInformationContainerArray[i].offsetLeft + seaInformationContainerArray[i].offsetWidth))
				)
				{
					//fish
					if (seaInformationContainerArray[i] == skill1ContainerDiv)
					{
						makeSeaAnimalsBlinking(fishEyeArray);

						if (canAnimateFishInformation == true)
						{
							animateSeaAnimals(fishArray);
							canAnimateFishInformation = false;
						}
					}

					//crab
					if (seaInformationContainerArray[i] == skill2ContainerDiv)
					{
						makeSeaAnimalsBlinking(crabEyeArray);

						if (canAnimateCrabInformation == true)
						{
							animateSeaAnimals(crabArray);
							canAnimateCrabInformation = false;
						}
					}

					//turtle
					if (seaInformationContainerArray[i] == skill3ContainerDiv)
					{
						makeSeaAnimalsBlinking(turtleEyeArray);

						if (canAnimateTurtleInformation == true)
						{
							animateSeaAnimals(turtleArray);
							canAnimateTurtleInformation = false;
						}
					}
				}
			}
		}
	}
}

function animateRobot()
{
	$(robotDiv).stop().animate({left: "380px"}, 1000, function() {animatePiechartAolText(); animateRobotHands()});
}

function animateRobotHands()
{
	//animate robot hand right away for one time only
	spinRobotHands();

	//animate robot hand continuously
	clearInterval(animateRobotHandsTimer);
	animateRobotHandsTimer = setInterval(function(){spinRobotHands()}, 4000);
}

function spinRobotHands()
{
	clearInterval(spinRobotHandsTimer);
	spinRobotHandsTimer = setInterval(function(){changeRobotHands()}, 100);
}

function changeRobotHands()
{
	if (changeRobotHandsCounter >= robotHandChildrenLength)
	{
		changeRobotHandsCounter = 0;
		clearInterval(spinRobotHandsTimer);
		setRobotHandsToDefault();

		if ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < experience1ContainerDiv.offsetLeft) || (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > experience1ContainerDiv.offsetLeft + experience1ContainerDiv.offsetWidth))
		{
			clearInterval(animateRobotHandsTimer);
		}
	}
	else
	{
		for (var i=0; i<robotHandChildrenLength; i++)
		{
			if (i == changeRobotHandsCounter)
			{
				setRobotHandsToOpaque(i);
			}
			else
			{
				setRobotHandsToTransparent(i);
			}
		}
	}

	changeRobotHandsCounter = changeRobotHandsCounter + 1;
}

function setRobotHandsToDefault()
{
	for (var i=0; i<robotHandChildrenLength; i++)
	{
		if (i == 0)
		{
			setRobotHandsToOpaque(i);
		}
		else
		{
			setRobotHandsToTransparent(i);
		}
	}
}

function setRobotHandsToOpaque(robotHandNumber)
{
	//use javascript instead jquery to avoid opacity glitch since this trigger by a very quick timer

	robotHandLeftDiv.children[robotHandNumber].style.opacity = 1;
	robotHandLeftDiv.children[robotHandNumber].style.filter = "alpha(opacity=" + 100 + ")";

	robotHandRightDiv.children[robotHandNumber].style.opacity = 1;
	robotHandRightDiv.children[robotHandNumber].style.filter = "alpha(opacity=" + 100 + ")";
}

function setRobotHandsToTransparent(robotHandNumber)
{
	//use javascript instead jquery to avoid opacity glitch since this trigger by a very quick timer

	robotHandLeftDiv.children[robotHandNumber].style.opacity = 0;
	robotHandLeftDiv.children[robotHandNumber].style.filter = "alpha(opacity=" + 0 + ")";

	robotHandRightDiv.children[robotHandNumber].style.opacity = 0;
	robotHandRightDiv.children[robotHandNumber].style.filter = "alpha(opacity=" + 0 + ")";
}

function animateSquid()
{
	$(squidDiv).stop().animate({left: "430px"}, 1000, function() {animatePiechartIncognitoFront(); animateSquidHands()});
}

function animateSquidHands()
{
	//animate squid hand right away for one time
	moveSquidHands();

	//animate squid hand continuously
	clearInterval(animateSquidHandsTimer);
	animateSquidHandsTimer = setInterval(function(){moveSquidHands()}, 4000);
}

function moveSquidHands()
{
	clearInterval(moveSquidHandsTimer);
	moveSquidHandsTimer = setInterval(function(){openAndCloseSquidHands()}, 200);
}

function openAndCloseSquidHands()
{
	if (openAndCloseSquidHandsCounter >= 8)
	{
		openAndCloseSquidHandsCounter = 0;
		clearInterval(moveSquidHandsTimer);
		openSquidHands();

		if ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < experience2ContainerDiv.offsetLeft) || (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > experience2ContainerDiv.offsetLeft + experience2ContainerDiv.offsetWidth))
		{
			clearInterval(animateSquidHandsTimer);
		}
	}
	else
	{
		if (openAndCloseSquidHandsCounter % 2 == 0)
		{
			openSquidHands();
		}
		else
		{
			closeSquidHands();
		}
	}

	openAndCloseSquidHandsCounter = openAndCloseSquidHandsCounter + 1;
}

function openSquidHands()
{
	//use javascript instead jquery to avoid opacity glitch since this trigger by a very quick timer
	for (var i=0; i<squidHandOpenArray.length; i++)
	{
		squidHandOpenArray[i].style.opacity = 1;
		squidHandOpenArray[i].style.filter = "alpha(opacity=" + 100 + ")";
	}

	for (var i=0; i<squidHandCloseArray.length; i++)
	{
		squidHandCloseArray[i].style.opacity = 0;
		squidHandCloseArray[i].style.filter = "alpha(opacity=" + 0 + ")";
	}
}

function closeSquidHands()
{
	//use javascript instead jquery to avoid opacity glitch since this trigger by a very quick timer
	for (var i=0; i<squidHandOpenArray.length; i++)
	{
		squidHandOpenArray[i].style.opacity = 0;
		squidHandOpenArray[i].style.filter = "alpha(opacity=" + 0 + ")";
	}

	for (var i=0; i<squidHandCloseArray.length; i++)
	{
		squidHandCloseArray[i].style.opacity = 1;
		squidHandCloseArray[i].style.filter = "alpha(opacity=" + 100 + ")";
	}
}

function animateAlienHand()
{
	clearInterval(animateAlienHandsTimer);
	animateAlienHandsTimer = setInterval(function(){rotateAlienHands()}, 100);
}

function rotateAlienHands()
{
	alienSteerPreviousAngle = alienSteerAngle;
	alienSteerAngle = alienSteerAngle + alienSteerAngleIncrement;

	if (alienSteerAngle > alienSteerPreviousAngle) //steering wheel rotate to right
	{
		if (alienSteerAngle > alienSteerAngleLimit)
		{
			alienSteerAngleIncrement = -1 * alienSteerAngleIncrement;
			alienSteerAngleLimit = -1 * alienSteerAngleLimit;
		}
	}
	else //steering wheel rotate to left
	{
		if (alienSteerAngle < alienSteerAngleLimit)
		{
			alienSteerAngleIncrement = -1 * alienSteerAngleIncrement;
			alienSteerAngleLimit = -1 * alienSteerAngleLimit;
		}
	}

	if ((alienSteerAngle == 0) && ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < experience3ContainerDiv.offsetLeft) || (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > experience3ContainerDiv.offsetLeft + experience3ContainerDiv.offsetWidth))) //check is it time to stop moving steering wheel
	{
		clearInterval(animateAlienHandsTimer);

		alienSteerDiv.style.webkitTransform = 'rotate(0deg)';
		alienSteerDiv.style.MozTransform = 'rotate(0deg)';
		alienSteerDiv.style.OTransform = 'rotate(0deg)';
		alienSteerDiv.style.msTransform = 'rotate(0deg)';
		alienSteerDiv.style.transform = 'rotate(0deg)';
	}
	else
	{
		alienSteerDiv.style.webkitTransform = 'rotate(' +alienSteerAngle + 'deg)';
		alienSteerDiv.style.MozTransform = 'rotate(' +alienSteerAngle + 'deg)';
		alienSteerDiv.style.OTransform = 'rotate(' +alienSteerAngle + 'deg)';
		alienSteerDiv.style.msTransform = 'rotate(' +alienSteerAngle + 'deg)';
		alienSteerDiv.style.transform = 'rotate(' +alienSteerAngle + 'deg)';
	}
}

function animateAlien()
{
	$(alienDiv).stop().animate({left: "500px"}, 1000, function() {animatePiechartFoxnewsFront(); animateAlienHand()});
}

function animatePiechartIncognitoFront()
{
	if ((browserName == "internet explorer") && (browserVersion <= 8))
	{
		animatePiechartIncognitoText(); //no pie chart animation, only text animation
	}
	else
	{
		$(piechartIncognitoFrontDiv).stop().animate({opacity: 1}, 500, function() {animatePiechartIncognitoText()}); //animate piechart
	}
}

function animatePiechartFoxnewsFront()
{
	if ((browserName == "internet explorer") && (browserVersion <= 8))
	{
		animatePiechartFoxnewsText(); //no pie chart animation, only text animation
	}
	else
	{
		$(piechartFoxnewsFrontDiv).stop().animate({opacity: 1}, 500, function() {animatePiechartFoxnewsText()}); //animate piechart
	}
}

function animatePiechartAolText()
{
	animatePiechartAolTextGraphic();
}

function animatePiechartAolTextGraphic()
{
	$(piechartAolTextGraphic1Div).stop().animate({opacity: 1}, 1000, function() {});
	$(piechartAolTextGraphic2Div).stop().animate({opacity: 1}, 1000, function() {});
}

function animatePiechartIncognitoText()
{
    animatePiechartIncognitoTextCode();
	animatePiechartIncognitoTextGraphic();
	animatePiechartIncognitoTextAnimation();
}

function animatePiechartIncognitoTextCode()
{
	$(piechartIncognitoTextCode1Div).stop().animate({opacity: 1}, 1000, function() {});
	$(piechartIncognitoTextCode2Div).stop().animate({opacity: 1}, 1000, function() {});
}

function animatePiechartIncognitoTextGraphic()
{
	$(piechartIncognitoTextGraphic1Div).stop().delay(300).animate({opacity: 1}, 1000, function() {});
	$(piechartIncognitoTextGraphic2Div).stop().delay(300).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartIncognitoTextAnimation()
{
	$(piechartIncognitoTextAnimation1Div).stop().delay(600).animate({opacity: 1}, 1000, function() {});
	$(piechartIncognitoTextAnimation2Div).stop().delay(600).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartFoxnewsText()
{
	animatePiechartFoxnewsTextGraphic();
	animatePiechartFoxnewsTextAnimation();
	animatePiechartFoxnewsTextCode();
}

function animatePiechartFoxnewsTextCode()
{
	$(piechartFoxnewsTextCode1Div).stop().animate({opacity: 1}, 1000, function() {});
	$(piechartFoxnewsTextCode2Div).stop().animate({opacity: 1}, 1000, function() {});
}

function animatePiechartFoxnewsTextAnimation()
{
	$(piechartFoxnewsTextAnimation1Div).stop().delay(300).animate({opacity: 1}, 1000, function() {});
	$(piechartFoxnewsTextAnimation2Div).stop().delay(300).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartFoxnewsTextGraphic()
{
	$(piechartFoxnewsTextGraphic1Div).stop().delay(600).animate({opacity: 1}, 1000, function() {});
	$(piechartFoxnewsTextGraphic2Div).stop().delay(600).animate({opacity: 1}, 1000, function() {});
}

function createBubble()
{
	clearInterval(bubbleTimer);
	bubbleTimer = setInterval(function(){animateBubble()}, 3000);
}

function animateBubble()
{
	var robbyToSeaSurfaceDistance = robbyContainerDiv.offsetTop - (sea1Div.offsetTop - shiftUpLayerHorizontalDistance);

	positionBubble(robbyToSeaSurfaceDistance);
	showBubble();

	$(bubbleDiv).stop().animate({top: "0px"}, 2 * robbyToSeaSurfaceDistance, function() {hideBubble()});
}

function hideBubble()
{
	$(bubbleDiv).fadeTo(0,0);
}

function showBubble()
{
	$(bubbleDiv).fadeTo(0,1);
}

function positionBubble(robbyToSeaSurfaceDistance)
{
	bubbleDiv.style.left = pageVerticalPosition + (0.5 * containerDiv.offsetWidth) - sea1Div.offsetLeft + "px";
	bubbleDiv.style.top = robbyToSeaSurfaceDistance + "px";
}

function blinkSeaAnimals(seaAnimalEyeArray)
{
	var seaAnimalLocalEyeArray = seaAnimalEyeArray;
	var selectedSeaAnimalEyeArray = new Array();

	var seaAnimalBlinkMaxNumber = Math.ceil(Math.random() * 5); //at most there are 5 sea animals blink at the same time

	for (var i=0; i<seaAnimalBlinkMaxNumber; i++) //select the animals that will blink, and put them in array
	{
		var selectedSeaAnimalNumber = Math.floor(Math.random() * seaAnimalEyeArray.length);
		selectedSeaAnimalEyeArray.push(seaAnimalLocalEyeArray[selectedSeaAnimalNumber]);
	}

	for (var i=0; i<selectedSeaAnimalEyeArray.length; i++)
	{
		$(selectedSeaAnimalEyeArray[i]).fadeTo(0,1);
		$(selectedSeaAnimalEyeArray[i]).stop().delay(300).animate({opacity: 0}, 0, function() {});
	}
}

function makeSeaAnimalsBlinking(seaAnimalEyeArray)
{
	clearInterval(blinkSeaAnimalsTimer);
	blinkSeaAnimalsTimer = setInterval(function(){blinkSeaAnimals(seaAnimalEyeArray)}, 3000);
}

function positionContactContainer()
{
	contactContainerDiv.style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + "px";
	contactContainerDiv.style.left = layerVerticalArray[layerVerticalArray.length - 1].offsetLeft + "px";
}

function positionFireworksContainer()
{
	fireworksContainerDiv.style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + "px";
	fireworksContainerDiv.style.left = layerVerticalArray[layerVerticalArray.length - 1].offsetLeft + "px";
}

function positionSocialContainer()
{
	if (canAnimateSocialContainer == true) //social container is still hiding behind cloud
	{
		setSocialContainerOpacity(0);
		socialContainerDiv.style.top = "80%";
	}
	else //social container already on top
	{
		socialContainerDiv.style.top = "0px";
	}
}

function animateSocialContainer()
{
	if (canAnimateSocialContainer == true)
	{
		$(socialContainerDiv).stop().animate({top: [0, 'easeOutCubic']}, 1000, function() {});
		setSocialContainerOpacity(1);
		canAnimateSocialContainer = false;
	}
}

function setSocialContainerOpacity(socialContainerOpacity) //custome social container and icon set opacity for internet explorer 8
{
	if (socialContainerOpacity > 1)
	{
		socialContainerOpacity = 1;
	}
	if (socialContainerOpacity < 0)
	{
		socialContainerOpacity = 0;
	}

	var socialContainerChildrenLength = $(socialContainerDiv).children().length;
	for (var i=0; i<socialContainerChildrenLength; i++)
	{
		$(socialContainerDiv.children[i]).fadeTo(0, socialContainerOpacity);
	}

	var socialMiddleChildren = $(socialContainerDiv.children[1]).children().length;
	for (var i=0; i<socialMiddleChildren; i++)
	{
		$(socialContainerDiv.children[1].children[i]).fadeTo(0, socialContainerOpacity);
	}
}

function happyRobby()
{
	if (isRobbyHappy == false)
	{
		clearInterval(happyRobbyTimer);
		happyRobbyTimer = setInterval(function(){robbyHandsUp()}, 3000); //repeating robby hands up
		isRobbyHappy = true;
	}
}

function clearHappyRobbyTimer()
{
	if (isRobbyHappy == true)
	{
		clearInterval(happyRobbyTimer);
		isRobbyHappy = false;
	}
}

function robbyHandsUp()
{
	robbyFramesDiv.style.left = "-1600px";

	setTimeout(function() {setRobbyStaticFrame()}, 1000); //robby hands down after 1 sec
}

function positionSplashContainer()
{
	splashContainerDiv.style.left = (0.5 * (containerDiv.offsetWidth - splashContainerDiv.offsetWidth)) + "px";
}

function positionRobbyContainerVertically()
{
	if (isPreloadShiftUpAnimationFinish == true)
	{
		$(robbyContainerDiv).stop(true, false); //to stop robby animation, especially when swimming
		setRobbyStaticFrame();

		if (isRobbySwimming == true) //robby in sea
		{
			positionRobbyAtSeaFloorLevel();
		}
		else
		{
			checkElevationNumberBelowRobby();

			if (elevationNumberBelowRobby != null) //robby on top of elevation
			{
				robbyContainerDiv.style.bottom = containerDiv.offsetHeight - elevationArray[elevationNumberBelowRobby].offsetTop + "px";
			}
			else
			{
				positionRobbyAtGroundLevel();
			}
		}
	}
}

function positionRobbyAtGroundLevel()
{
	robbyContainerDiv.style.bottom = (0.2 * containerDiv.offsetHeight) + "px";
}

function positionRobbyAtSeaFloorLevel()
{
	robbyContainerDiv.style.bottom = seaFloorDiv.offsetHeight + "px";
}

function checkElevationNumberBelowRobby()
{
	for (var i=0; i<elevationArray.length; i++)
	{
		if ((pageVerticalPosition < elevationArray[i].offsetLeft + elevationArray[i].offsetWidth - robbyLeftEdge) && (pageVerticalPosition > elevationArray[i].offsetLeft - robbyRightEdge))
		{
			elevationNumberBelowRobby = i;
			break;
		}
		else
		{
			elevationNumberBelowRobby = null;
		}
	}
}

function animateWaterfall()
{
	clearInterval(waterfallTimer);
	waterfallTimer = setInterval(function(){switchWaterfallTexture()}, 1000);
}

function switchWaterfallTexture()
{
	$(waterfall2Div).fadeTo(0,0);
	$(waterfall2Div).stop().delay(500).animate({opacity: 1}, 0, function() {});
}

function positionSeaFloorObjectsVertically()
{
	for (var i=0; i<seaFloorFrontObjectArray.length; i++)
	{
		if (seaFloorFrontObjectArray[i].offsetHeight > sea1Div.offsetHeight)
		{
			seaFloorFrontObjectArray[i].style.bottom = (-1 * (seaFloorFrontObjectArray[i].offsetHeight - sea1Div.offsetHeight)) + "px";
		}
		else
		{
			seaFloorFrontObjectArray[i].style.bottom = "0px";
		}
	}

	for (var i=0; i<seaFloorBackObjectArray.length; i++)
	{
		if (seaFloorBackObjectArray[i].offsetHeight > sea1Div.offsetHeight)
		{
			seaFloorBackObjectArray[i].style.bottom = ((-0.7 * containerDiv.offsetHeight) - (seaFloorBackObjectArray[i].offsetHeight - sea1Div.offsetHeight)) + "px";
		}
		else
		{
			seaFloorBackObjectArray[i].style.bottom = "-70%";
		}
	}
}

function animateScrollOrSwipeTextContainer()
{
	if (canAnimateScrollOrSwipeTextContainer == true)  //to protect so it is not call twice in internet explorer 8
	{
		canAnimateScrollOrSwipeTextContainer = false;
		clearInterval(scrollOrSwipeTextContainerTimer);
		scrollOrSwipeTextContainerTimer = setInterval(function(){turnOnAndOffScrollOrSwipeTextContainer()}, 1000);
	}
}

function turnOnAndOffScrollOrSwipeTextContainer()
{
	if (deviceName == "computer")
	{
		$(scrollOrSwipeTextContainer1Div).fadeTo(0,1);
		$(scrollOrSwipeTextContainer1Div).stop().delay(500).animate({opacity: 0}, 0, function() {});
	}
	else
	{
		$(scrollOrSwipeTextContainer2Div).fadeTo(0,1);
		$(scrollOrSwipeTextContainer2Div).stop().delay(500).animate({opacity: 0}, 0, function() {});
	}
}

function hideScrollOrSwipeTextContainer()
{
	if (canHideScrollOrSwipeTextContainer == true)
	{
		clearInterval(scrollOrSwipeTextContainerTimer);
		fadeOutScrollOrSwipeTextContainer();
		canHideScrollOrSwipeTextContainer = false;
	}
}

function fadeOutScrollOrSwipeTextContainer()
{
	$(scrollOrSwipeTextContainer1Div).fadeTo(0,0);
	$(scrollOrSwipeTextContainer2Div).fadeTo(0,0);
}

function positionContactConfirmationContainer()
{
	for (var i=0; i<contactConfirmationContainerArray.length; i++)
	{
		if ((layersMovement == "not moving 1") || (layersMovement == "not moving 2"))
		{
			contactConfirmationContainerArray[i].style.left = robbyContainerDiv.offsetLeft + "px";
		}
		else
		{
			contactConfirmationContainerArray[i].style.left = robbyMaxHorizontalDistance + "px";
		}

		contactConfirmationContainerArray[i].style.top = 0.8 * containerDiv.offsetHeight - 370 + "px";
	}
}

function hideContactConfirmationContainer()
{
	if (isContactConfirmationContainerVisible == true)
	{
		for (var i=0; i<contactConfirmationContainerArray.length; i++)
		{
			var contactConfirmationChildrenLength = $(contactConfirmationContainerArray[i]).children().children().length;

			for (var j=0; j<contactConfirmationChildrenLength; j++)
			{
				$(contactConfirmationContainerArray[i].children[0].children[j]).fadeTo(0,0);
			}
		}

		isContactConfirmationContainerVisible = false;
	}
}

function showContactConfirmationContainer(contactConfirmationContainerNumber)
{
	var contactConfirmationChildrenLength = $(contactConfirmationContainerArray[contactConfirmationContainerNumber]).children().children().length;

	for (var j=0; j<contactConfirmationChildrenLength; j++)
	{
		$(contactConfirmationContainerArray[contactConfirmationContainerNumber].children[0].children[j]).fadeTo(0,1);
	}

	isContactConfirmationContainerVisible = true;
}

function focusEmail() //called from email.js
{
	emailAddressDiv.focus();
}

function focusSubject() //called from email.js
{
	emailSubjectDiv.focus();
}

function focusMessage() //called from email.js
{
	emailMessageDiv.focus();
}

function clearAllInputField()
{
	emailAddressDiv.value = "";
	emailSubjectDiv.value = "";
	emailMessageDiv.value = "";
}

function createFireworkSvg()
{
	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		for (var i=0; i<fireworkArray.length; i++)
		{
			var fireworkSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			fireworkSvg.setAttribute("version", "1.2");
			fireworkSvg.setAttribute("baseProfile", "tiny");
			fireworkSvg.setAttribute("width", "100%");
			fireworkSvg.setAttribute("height", "100%");
			fireworkSvgArray.push(fireworkSvg);
		}
	}
}

function appendFireworkSvgToContainer()
{
	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		for (var i=0; i<fireworkArray.length; i++)
		{
			fireworkArray[i].appendChild(fireworkSvgArray[i]);
		}
	}
}

function drawManyFireworks()
{
	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		if (canDrawManyFireworks == true)
		{
			clearInterval(drawFireworkTimer);
			drawFireworkTimer = setInterval(function(){drawFirework()},1000);

			canDrawManyFireworks = false;
		}
	}
}

function drawFirework()
{
	if (drawFireworkCounter >= fireworkArray.length) //finish draw firework
	{
		drawFireworkCounter = 0;
		clearInterval(drawFireworkTimer);
	}
	else
	{
		clearInterval(drawOneLayerOfFireworkTimer);
		drawOneLayerOfFireworkTimer = setInterval(function(){drawOneLayerOfFirework()},40);
	}
}

function drawOneLayerOfFirework()
{
	if (fireworkLayerNumber < fireworkRowNumber)
	{
		fireworkLayerNumber = fireworkLayerNumber + 1;

		for (var i=0; i<fireworkColumnNumber; i++)
		{
			var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			c.setAttribute("cx", String(fireworkCenterX + (Math.cos(i * fireworkOneRotationAngle) * (fireworkLayerNumber * fireworkOneRadiusDistance))));
			c.setAttribute("cy", String(fireworkCenterY + (Math.sin(i * fireworkOneRotationAngle) * (fireworkLayerNumber * fireworkOneRadiusDistance))));
			c.setAttribute("r", fireworkDotRadius);
			c.setAttribute("fill", "#ffffff");

			fireworkSvgArray[drawFireworkCounter].appendChild(c);
		}
	}
	else
	{
		fireworkLayerNumber = 0;
		clearInterval(drawOneLayerOfFireworkTimer);
		makeFireworkDisappear(drawFireworkCounter);
		drawFireworkCounter = drawFireworkCounter + 1;
	}
}

function makeFireworkDisappear(fireworkNumber)
{
	$(fireworkArray[fireworkNumber]).fadeTo(1000,0);
}

function resetFireworkSvg()
{
	for (var i=0; i<fireworkArray.length; i++)
	{
		$(fireworkSvgArray[i]).empty(); //delete every childrens (dots) inside firework svg
		$(fireworkArray[i]).fadeTo(0,1);
	}
}

function printResizeText()
{
	//document.getElementById("detect-value-1").innerHTML = containerDiv.offsetHeight;
	//document.getElementById("detect-value-2").innerHTML = layerVerticalArray[layerVerticalArray.length - 1].offsetHeight;
}

function printScrollSwipeText()
{
}
