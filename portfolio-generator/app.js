const inquirer = require('inquirer')
// const fs = require('fs');
// const generatePage = require('./src/page-template');
// const pageHTML = generatePage(name, gitHub)

const promptUser = () => {
return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'gitHub',
    message: 'Enter your GitHub username'
  },
  {
    type: 'input',
    name: 'about',
    message: 'Provide some info about yourself:'
  }
]);
};


const promptProject = portfolioData => {
  console.log (`
  ==================
  Add a New Project
  ==================
  `);
  if (!portfolioData.projects){
    portfolioData.projects= [];
  }
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (required)'
    },
    {
      type: 'checkbox',
      name:'languages',
      message: 'What did you build this project with? (check all that apply)',
      choices: ['Javascript' , 'HTML', 'CSS', 'ES6', "jQuery", 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false 
    }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    }else {
      return portfolioData;
    }
  });
};
promptUser()
.then(promptProject)
.then(portfolioData => {
  console.log(portfolioData);
});

// fs.writeFile('./index.html', pageHTML , err => {
//   if (err) throw err;
  
//   console.log('Portfolio complete! Checkout index.html to see the output!');

// });


// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs)}
