var projects = [];
var bio = [];
var education = [];
var work = [];
var onlineClasses = [];

//Displays name, role, profile picture, contact info, welcome message, and skills.
bio.display = function()
{
	//bio data array
	bio =
	{
		name : "cat fistori",
		role : "front-end web developer",
		contacts :
		{
			linkedin :
			{
				name: "catfistori",
				url : "https://www.linkedin.com/pub/cat-fistori/55/222/76a"
			},
			email : "cat.fistori@gmail.com",
			github :
			{
			 	name : "catfishbluefish",
			 	url	: "https://github.com/catfishbluefish"
			},
			blog :
			{
				name : "catfishblogfish",
				url	: "http://catfishbluefish.com/blog"
			},
			location : "SF Bay Area",
			flickr :
			{
				name : "catfistoriphotography",
				url : "https://www.flickr.com/photos/catfistoriphotography"
			}
		},
		welcomeMessage : "A former pastry chef turned front-end web developer, photographer, graphic designer, and SEO and marketing analyst, with a specialization in e-commerce. Cat can take you from a simple idea to a functional website complete with custom graphics and logos, product and promotional photography, SEO optimization, social media marketing, content for your blog, and even custom receipts and packing slips. No matter what step in the process you are, Cat will help you nail down your designs, help you plan and execute a plan to launch, provide on-going maintanence and content, or train your existing team to upkeep the site on their own.",
		skills : ["HTML", "CSS", "Javascript", "Photoshop", "Lightroom", "Illustrator" , "Shopify", "Order Desk", "Endicia", "Wordpress", "Gulp", "Jekyll", "Search Console", "Analytics", "Adwords", "Tag Manager"]
	};//end of bio arry


	//Appends info from bio data to variables in helper.js

	//Linkedin Profile
	var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin.name);
	formattedLinkedIn = formattedLinkedIn.replace("#", bio.contacts.linkedin.url);

	//Email Address (personal)
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

	//GitHub Profile
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github.name);
	formattedGitHub = formattedGitHub.replace("#", bio.contacts.github.url);

	//Flickr Photography Account
	var formattedFlickr = HTMLflickr.replace("%data%", bio.contacts.flickr.name);
	formattedFlickr = formattedFlickr.replace("#", bio.contacts.flickr.url);

	//Blog
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog.name);
	formattedBlog = formattedBlog.replace("#", bio.contacts.blog.url);

	//Location
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	//Appends info to page
	$("#topContacts").append(formattedEmail, formattedLinkedIn, formattedGitHub, formattedBlog, formattedFlickr, formattedLocation);
	$("#footerContacts").append(formattedEmail, formattedLinkedIn, formattedGitHub);


	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", "images/portrait5.jpg");
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);


	if(bio.skills.length > 0)
	{
		$("#header").append(HTMLskillsStart);
		for(var skill=0; skill < bio.skills.length; skill++)
			{
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
	}
	return bio;
};//end bio.display


//Work function displays work history
work.display = function()
{
	//work data array
	work =
	{
		jobs :
		[
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

		]//end job array
	};//end  work array



	$("#workExperience").append(HTMLworkStart);

	if(work.jobs.length >0)
	{
		for(var job=0 ; job<work.jobs.length; job++)
		{
			//Employer names
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);

			//Job Title
			var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

			//Combines Employer Name and Title to appear on the same line
			var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

			//Dates worked at each Job
			var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

			//Location of Job
			var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

			//Job Description
			var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


			//Adds Employer Name, Job Title, Dates, Location, and Description
			$(".work-entry:last").append(formattedEmployerTitle, formattedJobDates, formattedJobLocation, formattedJobDescription);


			//if a job entry includes photographs, this appends them to the page
			if(work.jobs[job].images.length > 0)
			{
				for(var image= 0; image < work.jobs[job].images.length; image++)
				{
					var formattedJobImage = HTMLworkImages.replace("%data%", work.jobs[job].images[image]);
					$(".work-entry:last").append(formattedJobImage);
				}
			}
		}
	}
	return work;

};//end work display function

//Displays Projects information to website
projects.display = function()
{
	projects =
	{
		projects :
		[
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

	if(projects.projects.length > 0)
	{
		for(var project=0; project<projects.projects.length; project++)
		{
			//Project title and url
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].url);

			//Dates of project
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

			//Description
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

			//Adds Project title, dates, and descriptions to the page
			$(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

			//if project entry contains photographs, appends them to the page
			if(projects.projects[project].images.length > 0)
			{
				for(var image=0; image < projects.projects[project].images.length; image++)
				{
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}

	return projects;
};//end of projects function

education.display = function()
{
	education =
	{
		schools:
		[
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
	};//end education array

	$("#education").append(HTMLschoolStart);

	if(education.schools.length > 0)
	{
		for(var school=0; school<education.schools.length; school++)
		{
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

			//Adds School Name, Dates attendned, Location of School, and Major studies
			$(".education-entry:last").append(formattedSchoolName, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);

			//if degree received, add to page
			if(education.schools[school].degree.length > 0)
			{
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree);
			}

			//if school entry has images, display on page
			if(education.schools[school].images.length > 0)
			{
				for(var image=0; image<education.schools[school].images.length; image++)
				{
					var formattedSchoolImage = HTMLschoolImages.replace("%data%", education.schools[school].images[image]);
					$(".education-entry:last").append(formattedSchoolImage);
				}
			}
		}
	}
	return education;
};//end education display array


bio.display();
work.display();
projects.display();
education.display();

$("#map-div").append(googleMap);

