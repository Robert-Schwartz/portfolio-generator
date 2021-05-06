//require file system built in node.js
const fs = require("fs");
//require the function from the src file
const generatePage = require("./src/page-template.js");
//capture arguments from command line array.  slice after 2
const profileDataArgs = process.argv.slice(2, process.argv.length);
//can assign array indexes as const [0,1] post slice from profileDataArgs
const [name, github] = profileDataArgs;

//write file using fs built in.  page name, content, error capture
fs.writeFile("./index.html", generatePage(name, github), (err) => {
  if (err) throw new Error(err);
  console.log("Portfolio complete! Check out index.html to see the output!");
});
