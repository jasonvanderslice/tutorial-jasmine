let indexController = require("../lib/index.js");

// A spec is one test file
describe("Index", ()=>{
  // This is where all of my "assumptions" go.
  //  I have to "setup" all of the objects/vars in order to have
  //   my code testable

  // Reserving space in memory at a higher level of scope
  //   in order to use it between each of my it/describe blocks
  let document;

  beforeEach(()=>{
    // Mocking out the `document` for my tests
    document = {
      querySelector: ()=>{

      }
    };
    spyOn(document, "querySelector");
    indexController._init(document);
  });

  it("should have about menu selected", ()=>{
    expect(document.querySelector).toHaveBeenCalledWith('[data-js="dropdown-about"]');
  });

  it("should have about button selected", ()=>{
    expect(document.querySelector).toHaveBeenCalledWith('[data-js="about-menu"]');
  });

  describe("on about button click callback", ()=>{
    it("should toggle 'hidden' class", ()=>{
      //
    });
  })
});
