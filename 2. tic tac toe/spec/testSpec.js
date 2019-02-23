describe("Calculation Object Test", function () {
  
  describe("in the add function", function () {
    
    it("should combine two number", function () {
      expect(Calculation.add(2, 3)).toEqual(5);
      expect(Calculation.add(2, 3)).not.toEqual(6);
    });

    it("0.1 + 0.2 should be 0.3", function () {
      expect(Calculation.add(0.1,0.2)).toEqual(0.3);
    });

    it("should throw error when combine two string", function () {
        expect(function(){
          Calculation.add("3","3");
        }).toThrowError('Parameters must be numbers');
    });
  });

  describe("in the divide function",function(){
    it("divide should work properly",function(){
        expect(Calculation.divide(2,4)).toEqual(0.5);

        expect(Calculation.divide(4,2)).toEqual(2);

        expect(Calculation.divide(3,3)).toEqual(1);        
    });

    it("second parameter should not be a zero",function(){
      expect(function(){
        Calculation.divide(2,0);
      }).toThrowError('Cannot Divide by zero');

      expect(function(){
        Calculation.divide(0,0);
      }).toThrowError('Cannot Divide by zero');
  });

    it("should throw error when paramters are the string", function () {
      expect(function(){
        Calculation.divide(2,"3");
      }).toThrowError('Parameters must be numbers');

      expect(function(){
        Calculation.divide("2",3);
      }).toThrowError('Parameters must be numbers');

      expect(function(){
        Calculation.divide("2","3");
      }).toThrowError('Parameters must be numbers');
  });
  });

});
