let name = 'blinding lights'
let index = name.length - 1;


function reverse(name, index) {
    if (index < 0)
        return 'name';

    else {
        return name[index] + reverse(name, index - 1);
    }

}
console.log(reverse(name, index))



