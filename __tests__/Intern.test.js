const Intern = require("../lib/Intern");

describe("Intern Subclass", () => {
  it("should create a new intern subclass based on the following input", () => {
    const intern = new Intern("Isaias", 158943, "isaias943@aol.com", "ACC");

    expect(intern.name).toBe("Isaias");
    expect(intern.id).toBe(158943);
    expect(intern.email).toBe("isaias943@aol.com");
    expect(intern.school).toBe("ACC");
  });

  it("should return 'Intern' when getRole() is called ", () => {
    const intern = new Intern("Isaias", 158943, "isaias943@aol.com", "ACC");

    expect(intern.getRole()).toBe("Intern");
  });

  it("should return the school paramter based on the following input", () => {
    const intern = new Intern("Isaias", 158943, "isaias943@aol.com", "ACC");

    expect(intern.getSchool()).toBe("ACC");
  });
});
