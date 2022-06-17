
// var legs = 4

// const animal = {
//     legs,
//     color: "red",
//     run() {
//         console.log("Running...")
//     }
// }

// console.log(animal.legs)
// var movies = []

// fetch("https://www.omdbapi.com/?apikey=6c47ad6a&s=Hulk")
//     .then(result => result.json())
//     .then((result) => {
//         console.log(result)
//         const { Search, totalResults } = result
//         console.log(totalResults)
//         movies = Search
//         console.log(Search)
//     })
// var color = "yellow";

// var { legs, color = "black", run } = animal
// console.log(legs)
// run()
// console.log(color)


// const user1 = {
//     firstName: "John1",
//     lastName: "Doe",
//     age: 32,
//     role: {
//         isAdmin: true,
//         isOwner: false
//     },
//     email: "example@gmail.com"
// }

// const { ...userInfo } = user1;
// console.log(userInfo);



// const user2 = {
//     firstName: "John2",
//     lastName: "Doe",
//     age: 12,
//     email: "example@gmail.com"
// }

// const { age: userAge, firstName, lastName, fullName = `${firstName} ${lastName}` } = user
// console.log(fullName)

// let hasPermission
// ({ role: { isAdmin: hasPermission, isOwner } } = user)
// console.log(hasPermission)
// console.log(isOwner)


// Spread

// const age = 23
// const updatedUser = { ...user1, ...user2, favouriteColor: "red", age };
// // updated.role.isAdmin = false

// // console.log(user)
// console.log(updatedUser)


// var movies = [] // 0xca12
// movies = [] // 0x321ab
// const Search = [12, 23, 45, 67, 1];

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // movies = [...Search] // 0x12ac3
// movies.push(...Search)
// console.log(movies)

// console.log([...Search, ...numbers])




// const user1 = {
//     firstName: "John1",
//     lastName: "Doe",
//     age: 32,
//     role: {
//         isAdmin: true,
//         isOwner: false
//     },
//     email: "example@gmail.com"
// }

// // userCopy = user1;
// // var userCopy = Object.assign({}, user1)
// // userCopy.firstName = "a"
// // user1.role.isAdmin = false
// // console.log(user1)
// // console.log(userCopy)

// // var userCopy = { ...user1 }

// const userCopy = JSON.parse(JSON.stringify(user1))
// user1.role.isAdmin = false;
// console.log(userCopy);
// console.log(user1);