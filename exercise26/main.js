
function fetchUserDataSync(){
    alert("fetching user data")
    return {id:1, name:"Ridwan"}


}
console.log("starting fetching data");

const user = fetchUserDataSync();
console.log("user dat", user);
console.log("this message is blocked until user data is fetching")

 console.log("emidiately data")
function getUserData(callback){
   setTimeout(() =>{
    const user = {id: 1, name: "Ridwan"}
        callback(user)

    }, 2000)

    }

    console.log("start fetching data");

    getUserData(function (user){
        console.log(user)
    });

    console.log("hey whatsapp")


