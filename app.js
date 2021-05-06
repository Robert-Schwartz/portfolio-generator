const profileDataArgs = process.argv.slice(2, process.argv.length);

//function that takes in the array of command-line arguments
const printProfileData = (profileDataArr) => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log("================");

  // Is the same as this...
  profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);
