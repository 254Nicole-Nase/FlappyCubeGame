// Flappy Cube with Three.JS

// scene object variables
var renderer, scene, camera;
var cube;

// gameplay variables
var gameOver = false;
var cubeDied = false; // cube died when it no longer moves
// flag for indicating whether waiting for start or started
var gameStarted = false; 
var cubeSize = 40;
var interspace = 150;
var movingSpeed = 80; // obstacle moving speed per second
var obstacleDistance = 300;
var obstacleWidth = 100;
var obstacleContainer = new Array();
var clock = new THREE.Clock();
var deltaTime;
var g = 600;
var cubeSpeedY = 15;
var cubeFlySpeedY = 270;
var cubeFlyHeight = 50;
var score = 0;

// control the scoring time and avoid score increasing per frame
var scoringTimeInterval = obstacleDistance/movingSpeed;
var scoringTimer = scoringTimeInterval;

// playing field variables
var fieldWidth = 1000, fieldHeight = 500, fieldDepth = 100;

// The start point for the game
function setup(){
	createScene();
	draw();
}

//create the game scene
function draw(){
    renderer.render(scene, camera);
    
    // update the game logic
    update();
    requestAnimationFrame(draw);

}

function createScene(){
	// set the scene size
	var WIDTH = 640;
	var HEIGHT = 360;
	
	// set camera attributes
	var VIEW_ANGLE = 50,
		ASPECT = WIDTH/HEIGHT,
		NEAR = 0.1,
		FAR = 10000;
	
	// create and starts a WebGL renderer, camera and a scene
	renderer = new THREE.WebGLRenderer();
	
	renderer.setSize(WIDTH, HEIGHT);

	camera = new THREE.OrthographicCamera(-500,500,250, -250, 0.1, 1000);
	
	scene = new THREE.Scene();

	// Add the camera to the scene
	scene.add(camera);
	
	// Set a default position for the camera
	camera.position.z = 200;

	// Attach the render-supplied DOM element to the gameCanvas

	var c = document.getElementById("gameCanvas");
	c.appendChild(renderer.domElement);
	
	// Make a cube 
	
	var cubeWidth = cubeSize,
		cubeHeight = cubeSize,
		cubeDepth = cubeSize,
		cubeQuality = 1;

	// create the cube's material
	var cubeMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xb22222
		}
		);

	// create a cube with sphere geometry and the material
	cube = new THREE.Mesh(
		new THREE.BoxGeometry(
			cubeWidth, 
			cubeHeight, 
			cubeDepth,
			cubeQuality,
			cubeQuality,
			cubeQuality
			),
		cubeMaterial);

	// lift the cube to half of the playing space height
	cube.position.z = fieldDepth/2;

	// set the cube x position in the left of the play field
	cube.position.x = -fieldWidth/3;

	// add the cube to the scene
	scene.add(cube);
	
	// Make sky background plane
	var planeWidth = fieldWidth,
		planeHeight = fieldHeight,
		planeQuality = 10;

	// create plane's material
	var planeMaterial = new THREE.MeshLambertMaterial(
	{
		color: 0x87ceeb
	}
	);
	// create the playing surface plane
	
	var plane = new THREE.Mesh(
		// changed PlaneGeometry to PlaneBufferGeometry for lower memory footprint
		new THREE.PlaneBufferGeometry(
			planeWidth,
			planeHeight,
			planeQuality,
			planeQuality
		),
		planeMaterial);

	scene.add(plane);
	
	// Obstacles
	
	initObstacles();

	// Lights
	
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
	directionalLight.position.set( 0, 0, 100 );
	directionalLight.rotation.x = 90*Math.PI/180;
	scene.add( directionalLight );
}