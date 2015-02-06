var bio = {
	"name": "Alexander Pavlov",
	"role": "Web Developer", 
	"contacts": {
		"mobile": "+79780027528", 
		"email": "pavlov.crimea@mail.ru", 
		"github": "2matepacks", 
		"twitter": "N/A", 
		"location": "Crimea"
},
	"welcomeMessage": "Hello, world!", 
	"skills": [
		"C", "Linux", "HTML", "JavaScript", "Python"
],
	"bioPic": "images/me.jpg"
};


var education = {
	"schools": [
		{
			"name": "Modern University for the Humanities", 
			"location": "Moscow", 
			"degree": "Bachelors", 
			"majors": ["CS"], 
			"dates": 2008, 
			"url": "http://www.muh.ru"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Computer Science and Programming", 
			"school": "edX", 
			"dates": "2013", 
			"url": "https://www.edx.org/"
		},
		{
			"title": "Intro to Computer Science", 
			"school": "Udacity", 
			"dates": "2013", 
			"url": "https://www.udacity.com/course/cs101"
		},
		{
			"title": "Intro to Parallel Programming", 
			"school": "Udacity", 
			"dates": "2013", 
			"url": "https://www.udacity.com/course/cs344"
		},
		{
			"title": "How to Build a Startup", 
			"school": "Udacity", 
			"dates": "2013", 
			"url": "https://www.udacity.com/course/ep245"
		},
		{
			"title": "Web Development", 
			"school": "Udacity", 
			"dates": "2013", 
			"url": "https://www.udacity.com/course/cs253"
		},
		{
			"title": "Intro Algebra Review", 
			"school": "Udacity", 
			"dates": "2014", 
			"url": "https://www.udacity.com/course/ma004"
		},
		{
			"title": "Intro to Statistics", 
			"school": "Udacity", 
			"dates": "2014", 
			"url": "https://www.udacity.com/course/st101"
		} 
	]
};


var work = {
	"jobs": [
		{
			"employer": "OnlineHoster",
			"title": "Linux System Administrator", 
			"location": "Crimea", 
			"dates": "2007-Present",
			"description": "WebHosting software administration and user support"
		},
		{
			"employer": "SlavHost",
			"title": "Linux System Administrator", 
			"location": "Crimea", 
			"dates": "2005-2007",
			"description": "WebHosting software administration and user support"
		},
		{
			"employer": "Ukrtelecom",
			"title": "System Administrator", 
			"location": "Crimea", 
			"dates": "2003-2005",
			"description": "Telecom software administration"
		}
					]
};


var projects = {
	"projects": [
		{
			"title": "Mockup to Website",
			"dates": "Jan 12, 2015",
			"description": "I replicated a design mockup from a PDF-file in HTML and CSS.<br>" +
											"The finale design is responsive and adaptive.",
			"images": ["images/project1.jpg"]
			},
			{
			"title": "Interactive Resume",
			"dates": "Jan 18, 2015",
			"description": "I built my resume using JavaScript programming language.",
			"images": ["images/project2.jpg"]
			}
	]
};
//$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
//$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

function prependToHeader(what, how) {
    $("#header").prepend( how.replace("%data%", what) );
}

function appendToResume(what, how, where) {
    $(where).append( how.replace("%data%", what) );
}

function displayWork(){
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
};

prependToHeader(bio.role, HTMLheaderRole);
prependToHeader(bio.name, HTMLheaderName);

appendToResume(bio.contacts.mobile, HTMLmobile, "#topContacts");
appendToResume(bio.contacts.email, HTMLemail, "#topContacts");
appendToResume(bio.contacts.github, HTMLgithub, "#topContacts");
appendToResume(bio.contacts.twitter, HTMLtwitter, "#topContacts");
appendToResume(bio.contacts.location, HTMLlocation, "#topContacts");
appendToResume(bio.bioPic, HTMLbioPic, "#header");
appendToResume(bio.welcomeMessage, HTMLWelcomeMsg, "#header");

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills.join(" "));
    $("#skills").append(formattedSkill);
}

displayWork();

$('#main').append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		appendToResume(projects.projects[project].title, HTMLprojectTitle, ".project-entry:last");
		appendToResume(projects.projects[project].dates, HTMLprojectDates, ".project-entry:last");
		appendToResume(projects.projects[project].description, HTMLprojectDescription, ".project-entry:last");

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				appendToResume(projects.projects[project].images[image], HTMLprojectImage, ".project-entry:last");
			}

		}

	};
};

projects.display();

// you want to see a map? here's a map.
$("#mapDiv").append(googleMap);


