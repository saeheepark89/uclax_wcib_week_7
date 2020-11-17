jQuery(function() {


	$('#my_button').click(function () {

		//set var 'src' to point to #image-box element and find attribute for first available src value
		let src = $('#image-box').attr('src');

		if (src == 'images/nyc.jpg') {
			$('.row').hide().fadeIn(1250);
			$('#image-box').attr('src','images/bowbridge.jpg');
			$('#imagetitle').text('Bow Bridge');
			$('p').text('The Bow Bridge is a cast iron bridge located in Central Park, New York City, crossing over the Lake and used as a pedestrian walkway. It is decorated with an interlocking circles banister, with eight planting urns on top of decorative bas-relief panels. ');
			$('#my_button').text('Ride Through Manhattan');

		}else if(src == 'images/bowbridge.jpg') {
			$('.row').hide().fadeIn(1250);
			$('#image-box').attr('src','images/brooklyn.jpg');
			$('#imagetitle').text('West Village');
			$('p').text('The West Village draws fashionable crowds to its designer boutiques and trendy restaurants. Quaint streets, some still cobblestoned, are lined with Federal-style townhouses and dotted with public squares. Fun fact: this is the neighborhood where the apartment from Friends is! Sex & the City was filmed here also.');
			$('#my_button').text('Lets Bike Over the Bridge to Brooklyn');

		}else if(src == 'images/brooklyn.jpg') {
			$('.row').hide().fadeIn(1250);
			$('#image-box').attr('src','images/dumbo.jpg');
			$('#imagetitle').text('Dumbo');
			$('p').text('Trendy cobblestoned streets and converted warehouses buildings are the backdrop for independent boutiques, fun cafes and restaurants. The north end of Brooklyn Bridge Park features historic Jane Carousel as well as picturesque views of the Manhattan Skyline.');
			$('#my_button').text('Lets Bike back to the Park');

		}else if(src == 'images/dumbo.jpg') {
			$('.row').hide().fadeIn(1250);
			$('#image-box').attr('src','images/nyc.jpg');
			$('#imagetitle').text('Central Park');
			$('p').text('Central Park, New York Citys most loved place, is located between the Upper West and Upper East Sides of Manhattan. The park has natural-looking plantings and landforms, having been almost entirely landscaped when built in the 1850s and 1860s. It has eight lakes and ponds that were created artificially by damming natural seeps and flows. There are several wooded sections, lawns, meadows, and grassy areas.');
			$('#my_button').text('Keep Riding Around the Park');
		}
	});

});
