let bikes = ['RE', 'triumph', 'honda', 'jawa']
let cc = 660;
let index = 0;
function buybike(bikes, cc, index) {

    if (index >= bikes.length) {
        console.log("bikes em lev")
        return;
    }
    let bike = bikes[index];
    console.log(bike)
    if (bike == 'RE') {
        if (600 >= cc) {
            console.log("RE:book cheyyamantara")
        } else {
            console.log("anta cc bike ledu")
            buybike(bikes, cc, index + 1)
        }
    }
    if (bike == 'triumph') {
        if (500 >= cc) {
            console.log("triumph :book cheyyamantara")
        } else {
            console.log("antha cc bike ledu")
            buybike(bikes, cc, index + 1)
        }
    }
    if (bike == 'honda') {
        if (660 >= cc) {
            console.log("honda :book cheyyamantara")
        } else {
            console.log("antha cc bike ledu")
            buybike(bikes, cc, index + 1)
        }
    }


    if (bike == 'jawa') {
        if (400 >= cc) {
            console.log("jawa :book cheyyamantara")



        } else {
            console.log("antha cc bike ledu")
            buybike(bikes, cc, index + 1)

        }
    }

}

buybike(bikes, cc, index)
