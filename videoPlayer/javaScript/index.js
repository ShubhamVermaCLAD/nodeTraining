


function playPause(btn,vid){
    var vid = document.getElementById(vid);
	if(vid.paused){
		vid.play();
        btn.innerHTML = "Pause";
        
	} else {
        vid.pause();
		btn.innerHTML = "Play";
    }
    
    let p=document.createElement('p');
    p.innerHTML=`Video is ${(vid.paused)?'paused':'paly'} at ${vid.currentTime} `;
    

    document.getElementById('result').append(p);
   
}
