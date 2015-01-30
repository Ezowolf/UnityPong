#pragma strict

var ballSpeed : float = 100;


function Start () {
 yield WaitForSeconds (1);
 goBall();
}

function update() {
	var xVel: float = rigidbody2D.velocity.x;
	if (xVel < 18 && xVel > -18 && xVel != 0){
		if(xVel > 0){
			rigidbody2D.velocity.x = 20;
		}
		else{
			rigidbody2D.velocity.x = -20;
		}
	}
}

function OnCollisionEnter2D (collInfo : Collision2D) {
	if(collInfo.collider.tag == "Player"){
		audio.pitch = Random.Range(0.5f,2.0f); 
		audio.Play();
		rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + collInfo.collider.rigidbody2D.velocity.y/2;
	}
}

function ResetBall (){
	rigidbody2D.velocity.y =0;
	rigidbody2D.velocity.x = 0;
	transform.position.x = 0;
	transform.position.y = 0;
	yield WaitForSeconds (1);
 	goBall();	
}

function goBall () {
	var  randomNumber = Random.Range(0, 2);
	if (randomNumber <= 0.5) {
		rigidbody2D.AddForce (Vector2 (ballSpeed, 10));
	}
	else {
		rigidbody2D.AddForce (Vector2 (-ballSpeed, -10));
	}
}