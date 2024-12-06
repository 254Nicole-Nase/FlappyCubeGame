











	// Obstacles
function initObstacles(){


	var columnWidth = obstacleWidth,
		columnHeight = 500,
		columnDepth = 100,
		columnQuality = 1;

	var columnMaterial = new THREE.MeshLambertMaterial(
		{
		  color: 0x228b22
		}
	);
	var columnGeometry = new THREE.BoxGeometry(
			columnWidth,
			columnHeight,
			columnDepth,
			columnQuality,
			columnQuality,
			columnQuality);

	for(var i=0; i<fieldWidth/obstacleDistance+1; i++){

		var obstacle = new THREE.Object3D();
    //upper column
		var column1 = new THREE.Mesh(

			columnGeometry,
			columnMaterial);
		column1.position.y = columnHeight/2 + interspace/2;
	
		var column2 = new THREE.Mesh(
		
			columnGeometry,
			columnMaterial);
		//  lower column
		column2.position.y = -columnHeight/2 - interspace/2;
		obstacle.add(column1);
		obstacle.add(column2);
	
		obstacle.position.z = cube.position.z;
	
		obstacle.position.x = i*obstacleDistance;

		obstacle.position.y = (Math.random()*2 - 1) * 0.9 * (fieldHeight/2 - interspace/2);
		// push obstacle to the container
		obstacleContainer.push(obstacle);

		scene.add(obstacle);
	}
}

function moveObstacles(){

	var translation = (movingSpeed * deltaTime);
	var maxPositionX = -10000;
	for(var i=0; i<obstacleContainer.length; i++){
		var obstacle = obstacleContainer[i];
	
		if(obstacle.position.x > maxPositionX){
			maxPositionX = obstacle.position.x;
		}
	}
	scoringTimer += deltaTime;
	for(var i=0; i<obstacleContainer.length; i++){
		var obstacle = obstacleContainer[i];
		if(obstacle.position.x < fieldWidth/-2 + obstacleWidth/-2){
			obstacle.position.x = maxPositionX + obstacleDistance;
			
			obstacle.position.y = (Math.random()*2 - 1) * 0.9 * (fieldHeight/2 - interspace/2);
		}
		obstacle.position.x -= translation;
		// check if the cube passed the obstacle and scored
		var scoringPositionX = obstacle.position.x + obstacleWidth/2 + cubeSize;
		if(scoringPositionX <= cube.position.x+cubeSize/2
			&& scoringPositionX >= cube.position.x-cubeSize/2){
				if(scoringTimer >= scoringTimeInterval){
					scoringTimer = 0;
					score ++;
					document.getElementById("score").innerHTML = score;	
					if(score >= 10 && score < 20){
						document.getElementById("message").innerHTML = "Not Bad!";	
					}
					else if(score >=20 && score < 50){
						document.getElementById("message").innerHTML = "Very good!";	
					}
					else if(score >=50 && score < 100){
						document.getElementById("message").innerHTML = "Excellent!";	
					}
					else if(score >=100){
						document.getElementById("message").innerHTML = "You are the hero!";	
					}
				}
		}
		// cube collision detection
		if(cube.position.x <= obstacle.position.x + obstacleWidth/2 + cubeSize/2
			&& cube.position.x >= obstacle.position.x - obstacleWidth/2 - cubeSize/2
			&& !(cube.position.y < obstacle.position.y + interspace/2 - cubeSize/2 
				&& cube.position.y > obstacle.position.y - interspace/2 + cubeSize/2)
			){
				gameOverFun();
			}
	}
}
