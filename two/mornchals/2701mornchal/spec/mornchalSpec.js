describe('Add function', function(){
    it('Adds 2 and 3', function(){
        expect(add(2,3)).toEqual(5);
    });
    it('Adds negative 2 and 3', function(){
        expect(add(-2,-3)).toEqual(-5);
    });
    it('Adds negative 2 and 3', function(){
        expect(add(2,3)).not.toEqual(6);
    });
    it('Deals with text input properly', function(){
        expect(add('foo', 'bar')).toEqual('foobar');
    });
    it('Tests add function for random numbers', function(){
        var rand1 = Math.floor(Math.random()*200-100);
        var rand2 = Math.floor(Math.random()*200-100);
        expect(add(rand1, rand2)).toEqual(rand1+rand2);
    });
});

describe('Multiply function', function(){
    it('multiplys 2 and 3', function(){
        expect(multiply(2,3)).toEqual(6);
    });
    it('multiplys negative 2 and 3', function(){
        expect(multiply(-2,-3)).toEqual(6);
    });
    it('multiplys negative 2 and 3', function(){
        expect(multiply(2,3)).not.toEqual(5);
    });
    it('Deals with text input properly', function(){
        expect(multiply('foo', 'bar')).toEqual(NaN);
    });
    it('Tests multiply function for random numbers', function(){
        var rand1 = Math.floor(Math.random()*200-100);
        var rand2 = Math.floor(Math.random()*200-100);
        expect(multiply(rand1, rand2)).toEqual(rand1*rand2);
    });
});

describe('vowelRemover function should:', function(){
    it('remove vowels from given string', function(){
        expect(vowelRemover('lots of vowels')).toEqual('lts f vwls');
    });
    it('removes vowels from a string containing wierd characters', function(){
        expect(vowelRemover('!%*(%£^ejldsildsiowa56)')).toEqual('!%*(%£^jldsldsw56)');
    });
});

describe('isOdd function should:', function(){
    it('return true for odd numbers', function(){
        expect(isOdd(5)).toEqual(true);
    });
    it('return false for even numbers', function(){
        expect(isOdd(106)).toEqual(false);
    });
});

describe('numToString function', function(){
    it('checks numToString function works for 12', function(){
        expect(numToString(12)).toEqual('12');
    });
    it('checks whether function handles large negative numbers', function(){
        expect(numToString(-934829)).toEqual('-934829');
    });
});

describe('arraySquarer function', function(){
    it('checks arraySquarer function works for [12,3,4]', function(){
        expect(arraySquarer([12,3,4])).toEqual([144,9,16]);
    });
    it('handles negative numbers: [-3,-4,-5,-25]', function(){
        expect(arraySquarer([-3,-4,-5,-25])).toEqual([9, 16, 25, 625]);
    });
});
