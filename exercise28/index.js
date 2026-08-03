function fechtUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 1, name: "Ridwan" });
      } else {
        reject("failed feching data");
      }
    }, 2000);
  });
}
fechtUserData()
  .then((data) => console.log("user data :", data))
  .catch((error) => console.log("errorr :", error));

async function displayUserdata() {
  try {
    const user = await fechtUserData();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

displayUserdata();
