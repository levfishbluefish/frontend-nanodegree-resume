'Use Strict';


var projects = [];
var bio = [];
var education = [];
var work = [];

var header = {};
var workHistory = {};
var projectsCompleted = {};
var educationHistory = {};


var data = "%data%";
var $header= $("#header");
var $topContacts = $("#topContacts");
var $footerContacts = $("#footerContacts");
var $workExperience = $("#workExperience");
var $projects = $("#projects");
var $education = $("#education");


//Uses jQuery plugin "Sticky" to stick the top navigation to the top of the page when scrolling down, and unsticks when scroll up
 $(document).ready(function() {
    $("#topNav").sticky({topSpacing:0});
 });


//Automatically scrolls to element when clicked on the top navigation
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

//helper functions designed to reduce code repeition as suggested by first project reviewer
function replaceAndAppend(rawHTML, target, insertion, destination, insertionURL, urltarget) {

    var formattedHTML = rawHTML.replace(target, insertion);

    //if the information contains a link
    if(insertionURL) {
    	formattedHTML = formattedHTML.replace(urltarget, insertionURL);
    }
	destination.append(formattedHTML);
}

function replaceAndPrepend(rawHTML, target, insertion, destination) {
	var formattedHTML = rawHTML.replace(target, insertion);
	destination.prepend(formattedHTML);
}

function appendArray(rawHTML, target, insertion, destination) {
	for(var item=0; item < insertion.length; item++) {
		console.log(insertion[item]);
		var formattedItem = rawHTML.replace(target, insertion[item]);
		destination.append(formattedItem);
	}

}

//Displays name, role, profile picture, contact info, welcome message, and skills.
header.display = function() {
	//bio data
	bio = {
		name : "cat fistori",
		role : "front-end web developer",
		contacts : {
			linkedin : {
				name: "catfistori",
				url : "https://www.linkedin.com/pub/cat-fistori/55/222/76a"
			},
			email : "cat.fistori@gmail.com",
			github : {
			 	name : "catfishbluefish",
			 	url	: "https://github.com/catfishbluefish"
			},
			blog : {
				name : "catfishblogfish",
				url	: "http://catfishbluefish.com/blog"
			},
			location : "SF Bay Area",
			flickr : {
				name : "catfistoriphotography",
				url : "https://www.flickr.com/photos/catfistoriphotography"
			}
		},
		image : "images/portrait5.jpg",
		welcomeMessage : "A former pastry chef turned front-end web developer, photographer, graphic designer, and SEO and marketing analyst, with a specialization in e-commerce. Cat can take you from a simple idea to a functional website complete with custom graphics and logos, product and promotional photography, SEO optimization, social media marketing, content for your blog, and even custom receipts and packing slips. No matter what step in the process you are, Cat will help you nail down your designs, help you plan and execute a plan to launch, provide on-going maintanence and content, or train your existing team to upkeep the site on their own.",
		skills : ["HTML", "CSS", "Javascript", "Photoshop", "Lightroom", "Illustrator" , "Shopify", "Order Desk", "Endicia", "Wordpress", "Gulp", "Jekyll", "Search Console", "Analytics", "Adwords", "Tag Manager"]
	};//end of bio data

	//Appends info from bio data to variables in helper.js
	replaceAndAppend(HTMLemail, data, bio.contacts.email, $topContacts);
	replaceAndAppend(HTMLlinkedin, data, bio.contacts.linkedin.name, $topContacts, bio.contacts.linkedin.url, "#");
	replaceAndAppend(HTMLgithub, data, bio.contacts.github.name, $topContacts, bio.contacts.github.url, "#");
	replaceAndAppend(HTMLflickr, data, bio.contacts.flickr.name, $topContacts, bio.contacts.flickr.url, "#");
	replaceAndAppend(HTMLblog, data, bio.contacts.blog.name, $topContacts, bio.contacts.blog.url, "#");
	replaceAndAppend(HTMLlocation, data, bio.contacts.location, $topContacts);

	//Appends info to header
	replaceAndPrepend(HTMLheaderRole, data, bio.role, $header);
	replaceAndPrepend(HTMLheaderName, data, bio.name, $header);
	replaceAndAppend(HTMLbioPic, data, bio.image, $header);
	replaceAndAppend(HTMLwelcomeMsg, data, bio.welcomeMessage, $header);

	//Appends info to footer Contacts
	replaceAndAppend(HTMLemail, data, bio.contacts.email, $footerContacts);
	replaceAndAppend(HTMLlinkedin, data, bio.contacts.linkedin.name, $footerContacts, bio.contacts.linkedin.url, "#");
	replaceAndAppend(HTMLgithub, data, bio.contacts.github.name, $footerContacts, bio.contacts.github.url, "#");

	$header.append(HTMLskillsStart);
	appendArray(HTMLskills, data, bio.skills, $("#skills"));

	return bio;
};//end header.display


//Work function displays work history
workHistory.display = function() {
	//work data object
	work = {
		jobs : [
			{
				employer	: "catfishbluefish",
				title 	: "Freelance Web-Developer",
				location	: "San Jose, CA, US",
				dates		: "July 2015- Present",
				url		: "http://catfishbluefish.com",
				description : "catfishbluefish is the business name behind Cat's freelance work. While currently underconstruction, the website will offer information on how to contact and discuss client needs for web development, graphic design, photography, content, or SEO consulting. ",
				images : ["images/catfish-1.jpg"]
			},
			{
				employer  : "Beadshop.com",
				title     : "Junior Web Designer and Photographer",
				location  : "Redwood City, CA, US",
				dates	: "Sept 2014 - July 2015",
				url		: "http://beadshop.com",
				description : "Cat's role at Beadshop.com started out as a simple web production assistant, fixing broken links, adding small amounts of content to the website, and basic product photography. Her position quickly grew to include more robust daily web maintenance, promotional photography for the websites weekly front page, facebook, and newsletters, designing and implementing changes to the website's design as the company migrated to e-commerce platform Shopify, overseeing integration between Shopify, OrderDesk, and Endicia, editing customer receipts and packing slips, creating and editing youtube video tutorials, and page analytics and SEO tracking and implementation.",
				images : ["images/beadshop/winter-3.jpg", "images/beadshop/kimono-1.jpg", "images/beadshop/kalahari-1.jpg","images/beadshop/bracelet-1.jpg" ]
			},
			{
				employer : "Kara's Cupcakes",
				title : "Baker",
				location : "Palo Alto, CA, US",
				dates : "Sept 2013- June 2014",
				url : "https://karascupcakes.com/",
				description : "Closing shift baker at the Palo Alto Kara's Cupcakes retail location. Responsible for baking and decorating cakes and cupcakes for retail sale and special orders. ",
				images : ""
			},
			{
				employer : "Foxwoods Resort Casino",
				title : "Specialty Pastry Cook II",
				location : "Mashantucket, CT, US",
				dates : "March 2013 - Sept 2013",
				url : "https://www.flickr.com/photos/catfistori",
				description : "The highest rank below managment in the Foxwoods Bakery that supplied desserts for all of the casino's private events, buffets, and restaurants. Responsible for the mass production of various desserts for casino events.",
				images : ["images/pastry/foxwoods-swans-1.jpg", "images/pastry/foxwoods-cupcakes-1.jpg", "images/pastry/foxwoods-cake-1.jpg", "images/pastry/foxwoods-desserts-1.jpg"]
			},
			{
				employer : "The Fearrington House Restaurant",
				title : "Pastry Cook",
				location : "Pittsboro, NC, US",
				dates : "Sept 2012 - Feb 2013",
				url : "https://www.flickr.com/photos/catfistori",
				description : "A Relais & Châteaux property and one of the top wedding destinations in the South. Morning buffet pastry cook responsible for stocking the Fearrington House cafe, production of desserts for weddings, production of after dinner chocolates, and assisting in wedding cake production.",
				images : ["images/pastry/fearrington-macs-1.jpg", "images/pastry/fearrington-cake-1.jpg", "images/pastry/fearrington-cake-2.jpg", "images/pastry/fearrington-chocolates-1.jpg"]
			}

		]
	};
	$("#workExperience").append(HTMLworkStart);

	if(work.jobs.length) {
		for(var job=0 ; job<work.jobs.length; job++) {
			//appends work information
			var workNameAndTitle = work.jobs[job].employer + ": " + work.jobs[job].title;
			replaceAndAppend(HTMLworkEmployer, data, workNameAndTitle, $(".work-entry:last"), work.jobs[job].url, "#");
			replaceAndAppend(HTMLworkDates, data, work.jobs[job].dates, $(".work-entry:last"));
			replaceAndAppend(HTMLworkLocation, data, work.jobs[job].location, $(".work-entry:last"));
			replaceAndAppend(HTMLworkDescription, data, work.jobs[job].description, $(".work-entry:last"));

			//if there are images for this job entry, itterate through array
			if(work.jobs[job].images.length) {
				appendArray(HTMLworkImages, data, work.jobs[job].images,$(".work-entry:last"));
			}
		}
	}
	return work;

};//end work display function

//Displays Projects information to website
projectsCompleted.display = function() {
	projects = {
		projects : [
			{
				title : "Portfolio Project 1",
				dates	: "June 2015",
				description : "The first project in the Udacity Front-End Nanodegree program. The assignment serves as an introduction into making a single page portfolio using well formatted HTML, and CSS with the beginning building blocks of a CSS framework. The structure for the site focuses on a grid system of rows and columns to help students visualize how websites are set up. This is then appilied into a simple, responsive webpage. Source code available for view as 'Project-1' on Github.",
				url : "http://tarodotblank.github.io/Project-1/",
				images : ["images/project1-2.jpg"]
			},
			{
				title :"Etsy Store: allyrias",
				dates : "2015",
				description : "A small collection of jewelry for sale on Etsy. This was designed as a source of creative outlet while working at Beadshop.com and remains an on-going side hobby, though the store may not always remain open. The photos will be available on flickr.",
				url : "https://www.etsy.com/shop/allyrias?ref=hdr_shop_menu",
				images : ["images/allyrias/journey-1.jpg", "images/allyrias/bracelet-1.jpg", "images/allyrias/necklace-1.jpg", "images/allyrias/swar-necklace-1.jpg"]
			},
			{
				title : "Black and White Landscape Study",
				dates : "Spring 2015",
				description : "An assignment as part of FootHill's Intro to Photography class. The assignment was to draw inspiration from a photographer and shoot similar subject matter or in the same style. The chosen photographer was Ansel Adams. While the work cannot be compared, the majority of the shoot took place during a single afternoon driving down the coast from San Gregorio Beach to Pebble Beach, Santa Cruz.",
				url : "https://www.flickr.com/photos/catfistoriphotography/sets/72157654243741413",
				images : ["images/blackandwhite/black-01.jpg", "images/blackandwhite/black-02.jpg", "images/blackandwhite/black-03.jpg", "images/blackandwhite/black-04.jpg"]
			},
			{
				title : "Chocolate Production and Photography",
				dates :"Summer 2014",
				description : "Worked with entrepreneur Christine Moretti to help her develop and produce a new rocky road based chocolate for sale. The several month contract included taking her home-style recipe and altering and scaling it for mass production and public consumption while meeting all FDA food regulations. Additional duties included producing promotional photographs of the chocolates Cat created.",
				url : "https://www.flickr.com/photos/catfistoriphotography/sets/72157656576667275",
				images : ["images/oyr/strawberry-1.jpg", "images/oyr/orange-1.jpg", "images/oyr/banana-1.jpg", "images/oyr/lemon-1.jpg"]
			}
		]
	};


	$("#projects").append(HTMLprojectStart);

	if(projects.projects.length) {
		for(var project=0; project<projects.projects.length; project++) {
			//adds project info
			replaceAndAppend(HTMLprojectTitle, data, projects.projects[project].title, $(".project-entry:last"), projects.projects[project].url, "#");
			replaceAndAppend(HTMLprojectDates, data, projects.projects[project].dates, $(".project-entry:last"));
			replaceAndAppend(HTMLprojectDescription, data, projects.projects[project].description, $(".project-entry:last"));

			//if there are images for this project, itterate through the array
			if(projects.projects[project].images.length) {
				appendArray(HTMLprojectImage, data, projects.projects[project].images, $(".project-entry:last"));
			}
		}
	}

	return projects;
};//end of projectsCompleted function

educationHistory.display = function() {
	education = {
		schools: [
			{
				name : "Udacity Online University",
				location : "Mountain View, CA, US",
				major : "Front-End Web Development",
				dates : "May 2014- Current",
				degree : "",
				images : ""
			},
			{
				name : "Foothill Community College",
				location : "Los Gatos, CA, US",
				major : "Photography",
				dates : "2014 - Current",
				degree : "",
				images : ""
			},
			{
				name : "Wake Technical Community College",
				location : "Raleigh, NC, US",
				degree : "A.A.S",
				dates : "2009 - 2012",
				major : "Baking and Pastry Arts",
				images : ["images/pastry/school-chocolate-1.jpg", "images/pastry/school-cake-1.jpg", "images/pastry/school-sugar-1.jpg", "images/pastry/school-flower-1.jpg"]
			},
			{
				name : "George Mason University",
				location : "Fairfax, VA, US",
				degree : "",
				dates : "2008-2009",
				major : "Computer Science",
				images : ""
			}
		]
	};//end of education data

	$("#education").append(HTMLschoolStart);

	if(education.schools.length) {
		for(var school=0; school<education.schools.length; school++) {
			replaceAndAppend(HTMLschoolName, data, education.schools[school].name, $(".education-entry:last"));
			replaceAndAppend(HTMLschoolDates, data, education.schools[school].dates, $(".education-entry:last"));
			replaceAndAppend(HTMLschoolLocation, data, education.schools[school].location, $(".education-entry:last"));
			replaceAndAppend(HTMLschoolMajor, data, education.schools[school].major, $(".education-entry:last"));

			//if degree received, add to page
			if(education.schools[school].degree.length) {
				replaceAndAppend(HTMLschoolDegree, data, education.schools[school].degree, $(".education-entry:last"));
			}

			//if school entry has images, display on page
			if(education.schools[school].images.length) {
				appendArray(HTMLschoolImages, data, education.schools[school].images, $(".education-entry:last"));
			}
		}
	}
	return education;
};


header.display();
workHistory.display();
projectsCompleted.display();
educationHistory.display();

$("#map-div").append(googleMap);

