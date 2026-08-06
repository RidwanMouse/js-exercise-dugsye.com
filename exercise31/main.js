async function fetchUsers () {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok){
            throw new Error(`http error! status: ${response.status }`);
        }
        const users = await response.json();
        console.log("list of users: ", users)

    } catch (error) {
        console.error("error fetching users: ", error)

    }
}

fetchUsers();