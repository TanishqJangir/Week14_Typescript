type NumberOrString = number | string;

function add (a:NumberOrString, b:NumberOrString) : NumberOrString{
    return a as any + b as any;
}

let result = add(3, -7);

console.log(result);