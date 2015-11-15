import assert from "power-assert";

import g from "../../src/greeter";

describe("greeter", () => {
  it("greets to bob", () => {
    assert(g.greet("Bob") === "Hello! Bob");
  });
  it("good bye ken", () => {
    assert(g.bye("ken") === "Good Bye! ken");
  });
});

