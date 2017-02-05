// Work object contains various jobs and function to display the jobs
var work = {
    "jobs": [{
            "employer": "employer",
            "title": "Software Engineer",
            "location": "SantaClara,CA",
            "dates": "September,2016 to Present",
            "description": "The process of writing a job description requires having a clear understanding of the job’s duties and responsibilities. The job posting should also include a concise picture of the skills required for the position to attract qualified job candidates. Organize the job description into five sections"
        },
        {
            "employer": "Nivasoft",
            "title": "Software Engineer Intern",
            "location": "NewJersey,NJ",
            "dates": "September,2015 to may,2016",
            "description": "The process of writing a job description requires having a clear understanding of the job’s duties and responsibilities. The job posting should also include a concise picture of the skills required for the position to attract qualified job candidates. Organize the job description into five sections"

        }
    ],
    //this function will display all details in this object
    "display": function() {
        this.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            workPlaceAndRole = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(workPlaceAndRole);

            formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

//projects object contains project and details and function to display projects
var projects = {
    "projects": [{
        "title": "Exampel Project1",
        "dates": "May,2016 to September,2016",
        "description": "This is the description of the project. The objective is for a bunch of data which is not informative to nice and clean useful data.",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
    }],
    //display() function will show the projects
    "display": function() {
        this.projects.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);

            formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedTitle);
            formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedDates);
            formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedDescription);

            if (project.images.length > 0) {
                for (var image = 0; image < project.images.length; image++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", project.images[image]);
                    $(".project-entry:last").append(formattedImage);
                }

            }
        });
    }
};

//bio object will have the details about candidate.
var bio = {
    "name": "Harish Gujja",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "g.harish247@gmail.com",
        "github": "https://github.com/harish247",
        "linkedin": "https://www.linkedin.com/in/harishgujja",
        "location": "SantaClara"
    },
    "welcomeMessage": "Welcome to my page!!!",
    "skills": ["java", "javascript", "HTML", "CSS"],
    "biopic": "images/fry.jpg",
    //this function will show the details of the candidate
    "display": function() {
        if (this.role) {
            var formattedRole = HTMLheaderRole.replace("%data%", this.role);
            $("#header").prepend(formattedRole);
        }
        if (this.name) {
            var formattedName = HTMLheaderName.replace("%data%", this.name);
            $("#header").prepend(formattedName);
        }
        if (Object.keys(this.contacts).length > 0) {
            formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
            console.log(this.contacts.mobile);
            formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
            formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
            formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
            formattedLinkedin = HTMLlinkedin.replace("%data%", this.contacts.linkedin);

            formatted_contact_details = formattedMobile + formattedEmail + formattedGithub + formattedLocation + formattedLinkedin;
            $("#topContacts").prepend(formatted_contact_details);

            $("#footerContacts").prepend(formatted_contact_details);

            formattedPic = HTMLbioPic.replace("%data%", this.biopic);
            $("#header").append(formattedPic);
            formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
            $("#header").append(formattedWelcomeMsg);
        }
        if (this.skills) {
            $('#header').append(HTMLskillsStart);
            this.skills.forEach(function(skill) {
                formattedSkills = HTMLskills.replace("%data%", skill);
                $("#skills.flex-column:last").append(formattedSkills);
            });
        }
    }
};


//education details
var education = {
    "schools": [{
            "name": "Valparaiso University",
            "location": "Valparaiso,IN",
            "degree": "MS",
            "majors": ["IT"],
            "dates": "2015,January - 2016,August",
            "url": "sample"
        },
        {
            "name": "JNTU",
            "location": "Hyderabad,INDIA",
            "degree": "Bachelors",
            "majors": ["IT"],
            "dates": "2009,September - 2013,May",
        }
    ],
    "onlineCourses": [{
        "title": "Front-end nano degree",
        "school": "Udacity",
        "dates": "2016,October - present",
        "url": "Udacity",
        "urlLink": "https://www.udacity.com/"
    }],
    "display": function() {
        this.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);

            formattedTitle = HTMLschoolName.replace("%data%", school.name);
            formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            schoolAndDegree = formattedTitle + formattedDegree;
            $('.education-entry:last').append(schoolAndDegree);

            formattedStart = HTMLschoolDates.replace("%data%", school.dates);
            $('.education-entry:last').append(formattedStart);

            formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $('.education-entry:last').append(formattedLocation);

            formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $('.education-entry:last').append(formattedMajor);

        });
    },
    "displayOnlineEducation": function() {
        this.onlineCourses.forEach(function(onlineCourse) {
            $('#online-education').append(HTMLonlineStart);
            formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            onlineSchoolAndDegree = formattedOnlineTitle + formattedOnlineSchool;
            $('.online-education-entry:last').append(onlineSchoolAndDegree);
            formattedOnlineStart = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            $('.online-education-entry:last').append(formattedOnlineStart);
            formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            formattedURLLink = formattedOnlineURL.replace("#", onlineCourse.urlLink);
            $('.online-education-entry:last').append(formattedURLLink);
        });
    }
};

bio.display();
education.display();
education.displayOnlineEducation();
work.display();
projects.display();


//this function to change the name format to international format
function inName(name) {

    name = name.trim().split(" ");

    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').prepend(internationalizeButton);
$('#mapDiv').append(googleMap);