let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


describe("calculator", function() {
  
  context("when 2 and 3 entered", function() {
    beforeEach(function() {
      sinon.stub(window, "prompt");

      prompt.onCall(0).returns("2");
      prompt.onCall(1).returns("3");

      calculator.read();
    });

    afterEach(function() {
      prompt.restore();
    });
    
    it('the read get two values and saves them as object properties', function () {
      assert.equal(calculator.a, 2);
      assert.equal(calculator.b, 3);
    });

    it("the sum is 5", function() {
      assert.equal(calculator.sum(), 5);
    });

    it("the multiplication product is 6", function() {
      assert.equal(calculator.mul(), 6);
    });
  });

});

