const buildHTMLTemplate = (teamMembers) => {
  let employeeHtmlContent = "";

  // For loop to loop through array created from Inquirer prompts on Index.js
  for (let i = 0; i < teamMembers.length; i++) {
    if (teamMembers[i].getRole() === "Manager") {
      employeeHtmlContent += managerHtmlElement(teamMembers[i]);
    }
    if (teamMembers[i].getRole() === "Intern") {
      employeeHtmlContent += internHtmlElement(teamMembers[i]);
    }
    if (teamMembers[i].getRole() === "Engineer") {
      employeeHtmlContent += engineerHtmlElement(teamMembers[i]);
    }
  }
  console.log(employeeHtmlContent);
  return employeeHtmlContent;
};

const generateManagerHtml = () => {

};

const generateInternHtml = () => {

};

const generateEngineerHtml = () => {

};

const generateTemplate = data => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
      <!-- Font Awesome CDN -->
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.0/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
      <!-- BootStrap CDN -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      <!-- Style.CSS -->
      <link rel="stylesheet" href="./dist/style.css">
      <title>My team</title>
      </head>
      <body>
        <header class= "container bg-info">
          <div class= "flex box justify-center">
            <h1><i class="fa-solid fa-briefcase"></i> Your Team Profile Generator</h1>
          </div>
        </header>
        <!-- Main Container to display Employee Cards -->
        <main class= "container">
        ${employeeHtmlContent(data)}
        </main>
      </body>
    </html>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    `
}

module.exports = generateTemplate;
