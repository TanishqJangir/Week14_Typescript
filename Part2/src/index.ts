interface User {
    firstName: string;
    lastName: string;
    age: number;
}

let user: User[] = [
    {
        firstName: "skdfjks",
        lastName: "skjfkld",
        age: 44
    },
    {
        firstName: "skdfjks",
        lastName: "skjfkld",
        age: 10
    }

]

function isEligible(users: User[]) {
    return users.filter((element) => element.age >= 18)
}

const filteredUser = isEligible(user);

console.log(filteredUser)