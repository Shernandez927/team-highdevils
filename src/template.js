const buildHTMLTemplate = (data) => {
  let employeeHtmlContent = [];

  // For loop to loop through array created from Inquirer prompts on Index.js
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    if (role === "Manager") {
      const managerCard = generateManagerHtml(employee);
      employeeHtmlContent.push(managerCard);
      // employeeHtmlContent += managerHtmlElement(employee);
    }
    if (role === "Intern") {
      const internCard = generateInternHtml(employee);
      employeeHtmlContent.push(internCard);
      // employeeHtmlContent += internHtmlElement(data[i]);
    }
    if (role === "Engineer") {
      const engineerCard = generateEngineerHtml(employee);
      employeeHtmlContent.push(engineerCard);
      // employeeHtmlContent += engineerHtmlElement(data[i]);
    }
  }
  const employeeCards = employeeHtmlContent.join("");
  return generateTemplate(employeeCards);
};

const generateManagerHtml = (manager) => {
  return `
  <div class="card col-md-4 m-3 border shadow p-3 mb-5 bg-body rounded">
  <div class="card-title">
    <h1>${manager.name}</h1>
    <h2><i class="fa-solid fa-mug-hot"></i> Manager</h2>
  </div>
  <div class="card-body">
    <h4>ID #: ${manager.id}</h4>
    <h4>Email: <a href="mailto:${manager.email}">${manager.email}</a></h4>
    <h4>Office Number: ${manager.officeNumber}</h4>
  </div>
</div>
  `;
};

const generateInternHtml = (intern) => {
  return `
  <div class="card col-md-4 m-3 border shadow p-3 mb-5 bg-body rounded">
  <div class="card-title">
    <h1>${intern.name}</h1>
    <h2><i class="fa-solid fa-user-graduate"></i> Intern</h2>
  </div>
  <div class="card-body">
    <h4>ID #: ${intern.id}</h4>
    <h4>Email: <a href="mailto:${intern.email}">${intern.email}</a></h4>
    <h4>School: ${intern.school}</h4>
  </div>
  </div>
  `;

};

const generateEngineerHtml = (engineer) => {
  return `
  <div class="card col-md-4 m-3 border shadow p-3 mb-5 bg-body rounded">
    <div class="card-title">
      <h1>${engineer.name}</h1>
      <h2><i class="fa-solid fa-glasses"></i> Engineer</h2>
    </div>
    <div class="card-body">
      <h4>ID #: ${engineer.id}</h4>
      <h4>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></>
      <h4>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
      </div>
    </div>
  `;
};

const generateTemplate = (employeeCards) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <!--Google Fonts-->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
  <!-- BootStrap CDN -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <!-- Font Awesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
  <title>My Generated Team</title>
</head>
<body>
<header class="nav justify-content-center bg-info p-5 border-bottom border-2 border-dark">
<h1><i class="fa-solid fa-briefcase"></i> Your Team Profile Generator <i class="fa-solid fa-building"></i></h1>
</header>
  <!-- Main Container to display Employee Cards -->
    <main class="container d-flex flex-row align-items-center justify-content-evenly text-center pt-5">
      ${employeeCards}
    </main>
</body>
</html> 
    
    `;
};

module.exports = {
  buildHTMLTemplate
};
