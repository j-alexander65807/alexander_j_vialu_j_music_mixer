(() => {
	// set up Constants
	const dropArea = document.querySelector('#dropZoneContainer'),
				birdImages = document.querySelectorAll('.birdIcon div'),
				dropZones = document.querySelectorAll('.dropZone'),
				birds = document.querySelectorAll('.birdImage');
                birds = document.querySelector('.birdIcon'),
                env = document.querySelector('#environment'),
                btn1 = document.querySelector('#cloud1'),
                btn2 = document.querySelector('#light1'),
                btn3 = document.querySelector('#light2');
	// functions

	function placeBirds() {
		const birdName = ["dawn", "billy"];
		
		// set backgrounds for birds
		birdName.forEach((name, index) => {
			birdImages[index].style.background = `transparent center/cover url(images/${name}Dance.png`;
			
		});		


	}
	placeBirds();

    function allowDrag(event) {
		console.log('started dragging a bird');
		event.dataTransfer.setData("text/plain", this.id);

		let birdName = event.dataTransfer.getData("text/plain");
		//creating new image to be dragged
		var dragImage = new Image(); 
		dragImage.src = `images/${birdName}Drag.png`; 
		event.dataTransfer.setDragImage(dragImage, 80, 80);

		
		
		
	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log('dragging over a dropZone');
	}

	function allowDrop(event) {
        // if a drop zone already has a bird, this function will immediately stop
        if (this.children.length >= 1) {
            return;
        }

        
        console.log('dropped a bird');

		// go and get the dragged element's ID from the data transfer
		let currentBird = event.dataTransfer.getData("text/plain");
		
		// add that image to whatever drop zone we're dropping our image on
		event.target.appendChild(document.querySelector(`#${currentBird}`));

		// create the audio tag and add src
		let audio = document.createElement("audio");
		
		if (event.target.querySelector(`#${currentBird}`).children.length < 1) {
			event.target.querySelector(`#${currentBird}`).appendChild(audio);
			audio.src = `audio/${currentBird}.wav`;
			audio.play();
			// loops the audio
			audio.loop = true;
		}
		
		
		
        // go and get the dragged element's ID from the data transfer
        let currentBird = event.dataTransfer.getData("text/plain");
        
        // add that image to whatever drop zone we're dropping our image on
        event.target.appendChild(document.querySelector(`#${currentBird}`));

        // create the audio tag and add src
        let audio = document.createElement("audio");
        
        if (event.target.querySelector(`#${currentBird}`).children.length < 1) {
            event.target.querySelector(`#${currentBird}`).appendChild(audio);
            audio.src = `audio/${currentBird}.wav`;
            audio.play();
            // loops the audio
            audio.loop = true;
        }  
    }

    btn1.addEventListener('click', event => {
        env.style.background = `transparent url(images/env_loop.png) 0 0 no-repeat`;
    });
    
    btn2.addEventListener('click', event => {
        env.style.background = `transparent url(images/env_loop2.png) 0 0 no-repeat`;
    });

    btn3.addEventListener('click', event => {
        env.style.background = `transparent url(images/env_loop3.png) 0 0 no-repeat`;
    });  
    
    //add Event handlers
    birdImages.forEach(bird => bird.addEventListener('dragstart', allowDrag));
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', allowDragOver);
        zone.addEventListener('drop', allowDrop);
     });
    
    
})();