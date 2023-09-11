// const user = {
//     firstName: "Patrick",
//     lastName: "Scott",
//     hobbies: ["programming", "piano"],
//     listHobbies: function() {
//         this.hobbies.forEach(function(hobby) {
//             console.log(this.firstName)
//             console.log(hobby)
//         }, this);
//     }
// }

// user.listHobbies();

//================================================================
function User(name) {
    this.name = name;
    console.log(this);
}

const devsage = new User("DevSage");
const codingphase = new User("CodingPhase");