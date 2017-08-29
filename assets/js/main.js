$(document).ready(function(){
	$('#about-me-info').hide();
	
	$('#about-me').click(function(){
		$('#about-me-info').show(1000);
		$('#portfolio-info').hide();
		$('#contact-me-info').hide();
	})

	

	$('.arrow').click(function(){
		$('#about-me-info').hide(1000);
	})
});

$(document).ready(function(){

	$('#portfolio-info').hide();

	$('#portfolio').click(function(){
		$('#portfolio-info').show(1000);
		$('#about-me-info').hide();
		$('#contact-me-info').hide();
	})

	$('.arrow').click(function(){
		$('#portfolio-info').hide(1000);
	})
})

$(document).ready(function(){

	$('#contact-me-info').hide();

	$('#contact-me').click(function(){
		$('#contact-me-info').show(1000);
		$('#about-me-info').hide();
		$('#portfolio-info').hide();
	})

	$('.arrow').click(function(){
		$('#contact-me-info').hide(1000);
	})
})

$(document).ready(function(){

	$('#contact-me-info').hide();

	$('#contact-me').click(function(){
		$('#contact-me-info').show(1000);
		$('#about-me-info').hide();
		$('#portfolio-info').hide();
	})

	$('.arrow').click(function(){
		$('#contact-me-info').hide(1000);
	})
})

$(document).ready(function(){

	$('#info-project0').hide();

	$('#project0').click(function(){
		$('#info-project0').show();
		$('#info-project1').hide();
		$('#info-project2').hide();
		$('#info-project3').hide();
		$('#info-project4').hide();
		$('#info-project5').hide();
	})
})

$(document).ready(function(){

	$('#info-project1').hide();

	$('#project1').click(function(){
		$('#info-project1').show();
		$('#info-project0').hide();
		$('#info-project2').hide();
		$('#info-project3').hide();
		$('#info-project4').hide();
		$('#info-project5').hide();
	})
})

$(document).ready(function(){

	$('#info-project2').hide();

	$('#project2').click(function(){
		$('#info-project2').show();
		$('#info-project1').hide();
		$('#info-project0').hide();
		$('#info-project3').hide();
		$('#info-project4').hide();
		$('#info-project5').hide();
	})
})

$(document).ready(function(){

	$('#info-project3').hide();

	$('#project3').click(function(){
		$('#info-project3').show();
		$('#info-project1').hide();
		$('#info-project2').hide();
		$('#info-project0').hide();
		$('#info-project4').hide();
		$('#info-project5').hide();
	})
})

$(document).ready(function(){

	$('#info-project4').hide();

	$('#project4').click(function(){
		$('#info-project4').show();
		$('#info-project1').hide();
		$('#info-project2').hide();
		$('#info-project3').hide();
		$('#info-project0').hide();
		$('#info-project5').hide();
	})
})

$(document).ready(function(){

	$('#info-project5').hide();

	$('#project5').click(function(){
		$('#info-project5').show();
		$('#info-project1').hide();
		$('#info-project2').hide();
		$('#info-project3').hide();
		$('#info-project4').hide();
		$('#info-project0').hide();
	})
})

//Portfolio//

var images = [
  "assets/img/dribble.png", "assets/img/labcar.png",
  "assets/img/lyft-2.png", "assets/img/paginaenciende.png", "assets/img/bci.png", "assets/img/translab.png"
];

var portfolioimg = document.getElementById("portfolioimg");

for (var i = 0; i < images.length; i++) {
  var thumbnailWrapper = document.createElement("div");
  thumbnailWrapper.className = "thumbnail-wrapper";


  var thumbnail = document.createElement("a");
  thumbnail.className = "thumbnail";
  thumbnail.setAttribute('style', 'background-image:url(\"' + images[i] + '\");');
  thumbnail.setAttribute('id', "project" + [i]);

  console.log(thumbnail);

  thumbnailWrapper.appendChild(thumbnail);
  portfolioimg.appendChild(thumbnailWrapper);
}

console.log(portfolioimg);
