describe('isWeekday', function(){

    it('should check if it is a weekday', function(){
        assert.equal(false, regCheck('Sunday'));
    });
    it('should check if it is a weekday', function(){
        assert.equal(false, regCheck('Monday'));
    });
});
