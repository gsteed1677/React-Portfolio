
const header = {
    name: "Garrett Steed",
}
const background = {
    // Options: Snow or Particle
    type: "Particle"
}

const section2title = "About Me"
const about = {
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Dapibus ultrices in iaculis nunc. Pretium nibh ipsum consequat nisl vel. Consequat ac felis donec et odio. Orci nulla pellentesque dignissim enim sit amet. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu."
}

const skillsBar = [
    {
        name: "HTML5",
        value: 75
    },{
        name: "CSS3",
        value: 85
    },{
        name: "Javascript",
        value: 80
    },{
        name: "React",
        value: 75
    },{
        name: "Node",
        value: 85
    },{
        name: "Mongoose",
        value: 70
    },{
        name: "Adobe XD",
        value: 75
    },
]
// Edit your projects, its name, your skills used to make it, and the url. 
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects"
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project1",
        name: "Project 1",
        skills: ["HTML, CSS, JS"],
        url: ""
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "Project 2",
        skills: ["HTML, CSS, JS"],
        url: ""
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "Project 3",
        skills: ["HTML, CSS, JS"],
        url: ""
    }
]

const section4Title = "Miscellaneous"
const miscellaneous = [
    {
        // Add image in './styles/images.css' in #misc1
        id: "misc1",
        name: "Miscellaneous 1",
        url: ""
    },
    {
        // Add image in './styles/images.css' in #misc2        
        id: "misc2",
        name: "Miscellaneous 2",
        url: ""
    },
    {
        // Add image in './styles/images.css' in #misc3
        id: "misc3",
        name: "Miscellaneous 3",
        url: ""
    },
]

const section5Title = "Get in Touch"
const contact = {
    pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
    copyright: "Garrett Steed",
    contactUrl: ''
}

const social = {
    github: 'https://github.com/gsteed1677',
    facebook: 'https://facebook.com',
    linkedin: 'https://www.linkedin.com/in/garrett-steed/',
    resume: 'https://novoresume.com/'
}

export { header, background, about, skillsBar, projects, miscellaneous, contact, social, section2title, section3Title, section4Title, section5Title }