import assert from "power-assert";
import greeter from "../src/greeter";

function loadHtml(fileName) {
  return window.__html__[`test/fixtures/${fileName}.html`];
}

// jsonのキーには拡張子がつかない
function loadJson(fileName) {
  return window.__json__[`test/fixtures/${fileName}`];
}

describe("greets on fixtures", () => {
  before(() => {});
  beforeEach(() => {});
  afterEach(() => {});
  after(() => {});

  it("good bay on html", () => {
    document.body.innerHTML = loadHtml("hi");

    let elem = document.getElementById("hi");
    assert(elem.innerText === "hi!");

    elem.innerText = greeter.bye("Bob");
    assert(elem.innerText === "Good Bye! Bob");
  });

  it("good bay on html", () => {
    let json = loadJson("bye");
    assert(json.text === "bye");
  });
});

