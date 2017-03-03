describe('isFromBellville  function', function(){

  it('should check is from bellville', function(){
      assert.equal(false,isFromBellville('CF'));
  });
  it('should check is from bellville', function(){
      assert.equal(true,isFromBellville('CY'));
  });
});
