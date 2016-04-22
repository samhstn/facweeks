function isEven(val) {
    return val % 2 === 0;
}

function half(val){
    return val /2;
}

function isMultiple3(val){
    return val%3===0;
}

test("Name of the function1",function(){
    ok(isEven(2),"this is correct");
});

test("Name of the function2",function(){
    ok(isEven(1),"this is correct");
});

test("Name of the function3", function(){
    equal(isEven(2), true, "this is correct")
});

test("Name of the function4", function(){
    assert.equal(isEven(1), true, "this is correct")
});

test("Name of the function5", function(){
    asser
}
