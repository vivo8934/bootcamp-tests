describe('findItemsOver20', function(){

    it('should check items over 20', function(){
        assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27}] , findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
]));
    });
    
});
