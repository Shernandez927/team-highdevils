const Manager = require("../lib/Manager");

describe("Manager Subclass", () => {
  it("should create a manager subclass based on the following input", () => {
    const manager = new Manager("Tyrell", 4732, "tyrell32@aol.com", 6789998212);

    expect(manager.name).toBe("Tyrell");
    expect(manager.id).toBe(4732);
    expect(manager.email).toBe("tyrell32@aol.com");
    expect(manager.officeNumber).toBe(6789998212);
  });

  it("should return 'Manager' when getRole() is called", () => {
    const manager = new Manager("Tyrell", 4732, "tyrell32@aol.com", 6789998212);

    expect(manager.getRole()).toBe("Manager");
  });

  it("should return the officenumber parameter when getOfficeNumber() is called", () => {
    const manager = new Manager("Tyrell", 4732, "tyrell32@aol.com", 6789998212);

    expect(manager.getOfficeNumber()).toBe(6789998212);
  });
});
