(() => {
	// set up Constants
	const dropArea = document.querySelector('#dropZoneContainer'),
				birdImages = document.querySelectorAll('.birdIcon img'),
				dropZones = document.querySelectorAll('.dropZone'),
				birds = document.querySelector('.birdIcon');

    
    // Set up Functions

    function allowDrag(event) {
		console.log('started dragging a bird');
		event.dataTransfer.setData("text/plain", this.id);
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
		let currentImage = event.dataTransfer.getData("text/plain");

		// add that image to whatever drop zone we're dropping our image on
		event.target.appendChild(document.querySelector(`#${currentImage}`));
    }
    
    //add Event handlers
    birdImages.forEach(piece => piece.addEventListener('dragstart', allowDrag));
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', allowDragOver);
        zone.addEventListener('drop', allowDrop);
     });
    
    
})();