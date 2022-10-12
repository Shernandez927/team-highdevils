const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  it("should create a new employee class based on the following input", () => {
    const employee = new Employee("Chris", 143827, "chris827@aol.com");

    expect(employee.name).toBe("Chris");
    expect(employee.id).toBe(143827);
    expect(employee.email).toBe("chris827@aol.com");
  });

  it("should return the name paramter with the name when getName() is called", () => {
    const employee = new Employee("Chris", 143827, "chris827@aol.com");

    expect(employee.getName()).toBe("Chris");
  });

  it("should return the id parameter with the id number when getId() is called", () => {
    const employee = new Employee("Chris", 143827, "chris827@aol.com");

    expect(employee.getId()).toBe(143827);
  });

  it("should retun the email paramter with the email when getEmail() is called", () => {
    const employee = new Employee("Chris", 143827, "chris827@aol.com");

    expect(employee.getEmail()).toBe("chris827@aol.com");
  });

  it("should return 'Employee' when getRole() is called", () => {
    const employee = new Employee("Chris", 143827, "chris827@aol.com");

    expect(employee.getRole()).toBe("Employee");
  });
});
