const Engineer = require("../lib/Engineer");

describe("Engineer Subclass", () => {
  it("should create a new engineer subclass based on the following input", () => {
    const engineer = new Engineer(
      "Hannah",
      153845,
      "hanah845@aol.com",
      "githannah"
    );

    expect(engineer.name).toBe("Hannah");
    expect(engineer.id).toBe(153845);
    expect(engineer.email).toBe("hanah845@aol.com");
    expect(engineer.github).toBe("githannah");
  });

  it("should return 'Engineer' when getRole() is called", () => {
    const engineer = new Engineer(
      "Hannah",
      153845,
      "hanah845@aol.com",
      "githannah"
    );

    expect(engineer.getRole()).toBe("Engineer");
  });

  it("should return github username when getGithub() is called", () => {
    const engineer = new Engineer(
      "Hannah",
      153845,
      "hanah845@aol.com",
      "githannah"
    );

    expect(engineer.getGithub()).toBe("githannah");
  });
});
