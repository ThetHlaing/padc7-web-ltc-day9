describe("Calculation Object Test", function () {
  
  describe("in the add function", function () {
    it("should combine two number", function () {
      expect(Calculation.add(2, 3)).toEqual(5);
      expect(Calculation.add(2, 3)).not.toEqual(6);
    });

    it("0.1 + 0.2 should be 0.3", function () {
      expect(Calculation.add(0.1,0.2)).toEqual(0.3);
    });

    // it("should throw error when combine two string", function () {
    //     expect(function(){
    //       Calculation.add('2'+'3');
    //     }).toThrowError('Parameters must be integer');
    // });
  });

});
