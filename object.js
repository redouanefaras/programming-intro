var list = [];

function createProfile(fname, yold, nat, vac) {
    var person = {
        firstName: fname,
        age: yold,
        nationality: nat,
        vaccinated: vac
    }
    list.push(person);
}


createProfile("Youcef", 31, "DZ", true);
createProfile("Hannibal", 17, "TN", false);



function isMinMaj(personList) {
    for (var i = 0; i < personList.length; i++) {
        if (personList[i].age >= 18) {
            console.log(personList[i].firstName + "---maJeur")
        } else {
            console.log(personList[i].firstName + "---miNeur")
        }
    }
}

isMinMaj(list)