//This is the title for your window tab, and your Radar
document.title = "My Technology Radar (March 2015)";


//This is the concentic circles that want on your radar
var radar_arcs = [
    {'r': 100, 'name': 'Adopt'},
    {'r': 200, 'name': 'Trial'},
    {'r': 300, 'name': 'Assess'},
    {'r': 400, 'name': 'Hold'}
    // ,{'r':500,'name':'Possible Extra if you want it'}
];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    {
        "quadrant": "Techniques", // t [0 ... 90]
        "left": 45,
        "top": 18,
        "color": "#8FA227",
        "items": [
            // Adopt
            {"name": "Sensible defaults", "pc": {"r": 80, "t": 150}, "movement": "c"},
            {"name": "Dependency Injection", "pc": {"r": 80, "t": 130}, "movement": "c"},
            {"name": "Gitflow", "pc": {"r": 90, "t": 170}, "movement": "c"},
            {"name": "Pair Programming", "pc": {"r": 70, "t": 170}, "movement": "c"},
            // Trial
            {"name": "Single Page App", "pc": {"r": 150, "t": 95}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Continuous Deployment", "pc": {"r": 180, "t": 100}, "movement": "c"},
            // Assess
            {"name": "Continuous Experimentation", "pc": {"r": 220, "t": 100}, "movement": "c"},
            // Hold
            {"name": "Monolithic Applications", "pc": {"r": 350, "t": 100}, "movement": "c"}
        ]
    },
    {
        "quadrant": "Tools", // t [90 ... 180]
        "left": w - 200 + 30,
        "top": 18,
        "color": "#587486",
        "items": [
            // Adopt
            {"name": 'Kibana', pc: {r: 80, t: 56}, movement: 'c'},
            {"name": 'Git', pc: {r: 60, t: 76}, movement: 'c'},
            {"name": 'HAProxy', pc: {r: 40, t: 46}, movement: 'c'},
            // Trial
            {"name": 'Liquibase', pc: {r: 130, t: 73}, movement: 'c'},
            // Assess
            {name: 'Docker', pc: {r: 280, t: 74}, movement: 'c'},
            {name: 'Kafka', pc: {r: 210, t: 31}, movement: 'c'},
            // Hold
            {name: 'Subversion', pc: {r: 330, t: 18}, movement: 'c'}
        ]
    },
    {
        "quadrant": "Platforms", // t [180 ... 270]
        "left": 45,
        "top": (h / 2 + 18),
        "color": "#DC6F1D",
        "items": [
            // Adopt
            {"name": 'BigIP v11', pc: {r: 50, t: 257}, movement: 'c'},
            {"name": 'Ubuntu 14.04 LTS', pc: {r: 90, t: 200}, movement: 'c'},
            // Trial
            {"name": "Openstack Swift", "pc": {"r": 190, "t": 190}, "movement": "c"},
            // Assess
            {"name": 'Apache Mesos', pc: {r: 260, t: 265}, movement: 't'},
            {"name": 'Kubernetes', pc: {r: 270, t: 236}, movement: 't'},
            // Hold
            {"name": "Glassfish 3", "pc": {"r": 390, "t": 245}, "movement": "c"}
        ]
    },
    {
        "quadrant": "Languages & Frameworks", // t [270 ... 360]
        "color": "#B70062",
        "left": (w - 200 + 30),
        "top": (h / 2 + 18),
        "items": [
            // Adopt
            {name: 'Java 8', pc: {r: 60, t: 310}, movement: 'c'},
            // Trial
            {"name": "Ruby", "pc": {"r": 130, "t": 355}, "movement": "c"},
            // Assess
            {name: 'Java 9', pc: {r: 260, t: 330}, movement: 'c'},
            // Hold
            {"name": "Java 7 and earlier", "pc": {"r": 390, "t": 350}, "movement": "c"}
        ]
    }
];
