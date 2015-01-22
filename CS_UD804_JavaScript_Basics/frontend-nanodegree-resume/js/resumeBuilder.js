//var formattedName = HTMLheaderName.replace("%data%", "Alex Pavlov");
//var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
//$("#header").prepend(formattedName);
//$("#header").prepend(formattedRole);


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
		"C", "Linux", "Python", "HTML"
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
			"title": "Project 1",
			"dates": "1984-infinity",
			"description": "blah blah blah",
			"images": ["images/project1.jpg"]
			}
	]
};

// you want to see a map? here's a map.
$("#mapDiv").append(googleMap);