var bio = {

	"name" : "cat fistori",
	"role" : "front-end web developer",
	"contacts" :
	{
		"linkedin" : 
			{
			"name": "catfistori",
			"url" : "https://www.linkedin.com/pub/cat-fistori/55/222/76a"
			},

		"email" : "cat.fistori@gmail.com",

		"github" : 
			{
			 "name" : "catfishbluefish",
			 "url"	: "https://github.com/catfishbluefish"
			},	 
		"blog" : 
			{
			"name" : "taro.bubbletea",
			"url"	: "http://tarodotblank.com/bubbletea/"
			},	
		"location" : "SF Bay Area"
	},

	"welcomeMessage": "A front-end web developer, photographer, graphic designer, and SEO and marketing analyst, with a specialization in e-commerce. Cat can take you from a simple idea to a functional website complete with custom graphics and logos, product and promotional photography, SEO optimization, social media marketing, content for your blog, and even custom receipts and packing slips. No matter what step in the process you are, Cat will help you nail down your designs, help you plan and execute a plan to launch, provide on-going maintanence and content, or train your existing team to upkeep the site on their own.",

	"skills" : ["HTML", "CSS", "Javascript", "Photoshop", "Lightroom", "Illustrator" , "Shopify", "Order Desk", "Endicia", "Wordpress", "Gulp", "Jekyll", "Search Console", "Analytics", "Adwords", "Tag Manager"]
};
	


var education = {
	"schools": 
	[
		{
			"name" : "Foothill",
			"location" : "Los Gatos, CA, US",
			"major" : "Photography",
			"dates" : "2014 - Current",
			"degree" : ""			
		},
		{
			"name" : "George Mason University",
			"location" : "Fairfax, VA, US",
			"degree" : "",
			"dates" : "2008-2009",
			"major" : "Comp Sci"
		},
		{
			"name" : "Wake Tech",
			"location" : "Raleigh, NC, US",
			"degree" : "A.A.S",
			"dates" : "2009 - 2012",
			"major" : "Baking and Pastry Arts"	
		}
	]	
};

var work = {
	"jobs" :
	[
		{
			"employer"	: "taro.blank",
			"title"		: "Freelance Web-Developer",
			"location"	: "SF Bay Area",
			"dates"		: "July 2015- Present",
			"url"		: "http://tarodotblank.com",
			"description" : "taro.blank is the business name behind Cat's freelance work. While currently underconstruction, the website will offer information on how to contact and discuss client needs for web development, graphic design, photography, content, or SEO consulting. ",
			"images" : ["images/taro-logo-1.jpg"]
		},
		{
			"employer"  : "Beadshop.com",
			"title"     : "Junior Web Designer and Photographer",
			"location"  : "Redwood City, CA, US",
			"dates"		: "Sept 2014 - July 2015",
			"url"		: "http://beadshop.com",
			"description" : "Cat's role at Beadshop.com started out as a simple web production assistant, fixing broken links, adding small amounts of content to the website, and basic product photography. Her position quickly grew to include more robust daily web maintenance, promotional photography for the websites weekly front page, facebook, and newsletters, designing and implementing changes to the website's design as the company migrated to e-commerce platform Shopify, overseeing integration between Shopify, OrderDesk, and Endicia, editing customer receipts and packing slips, creating and editing youtube video tutorials, and page analytics and SEO tracking and implementation.",
			"images" : ["images/beadshop/winter-3.jpg", "images/beadshop/kimono-1.jpg", "images/beadshop/kalahari-1.jpg","images/beadshop/bracelet-1.jpg" ]
		}
	]
};

var projects = {
	"projects" : 
	[
		{
			"title" : "Portfolio Project 1",
			"dates"	: "June 2015",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url" : "http://tarodotblank.github.io/Project-1/",
			"images" : ["images/project1-2.jpg"]
		}
	]
};


header.display = function() {

	var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin.name);
	formattedLinkedIn = formattedLinkedIn.replace("#", bio.contacts.linkedin.url)
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github.name);
	formattedGitHub = formattedGitHub.replace("#", bio.contacts.github.url)
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog.name);
	formattedBlog = formattedBlog.replace("#", bio.contacts.blog.url);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedLinkedIn);
	$("#topContacts").append(formattedGitHub);
	$("#topContacts").append(formattedBlog);
	$("#topContacts").append(formattedLocation);

	
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGitHub);



	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", "images/portrait5.jpg");
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);


	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for(skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
			}	
	}

}

work.display = function() {
	$("#workExperience").append(HTMLworkStart);

		for(job in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

			var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

			var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

			var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


			$(".work-entry:last").append(formattedEmployerTitle);
			
			$(".work-entry:last").append(formattedJobDates);
			$(".work-entry:last").append(formattedJobLocation);
			$(".work-entry:last").append(formattedJobDescription);

			if(work.jobs[job].images.length > 0) {
			for(image in work.jobs[job].images) {
				var formattedJobImage = HTMLworkImages.replace("%data%", work.jobs[job].images[image]);
				$(".work-entry:last").append(formattedJobImage);
			}
			}	
			
		}

}


projects.display = function() {

	$("#projects").append(HTMLprojectStart);


	for(project in projects.projects) {
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].url);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}

	}

}

education.display = function() {
	$("#education").append(HTMLschoolStart);

	for(school in education.schools) {
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		

		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);

		if(education.schools[school].degree.length > 0) {
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
			
	}

	}

}


header.display();
work.display();
projects.display();
education.display();

$("#map-div").append(googleMap);

