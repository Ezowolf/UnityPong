#pragma strict

	function OnTriggerEnter2D(hitInfo: Collider2D)
{
	if(hitInfo.name == "Ball")
		{
			var wallName = transform.name;
			GameManager.Score (wallName);
			audio.pitch = Random.Range(0.5f,2.0f); 
			audio.Play();
			hitInfo.gameObject.SendMessage ("ResetBall");
		}
}