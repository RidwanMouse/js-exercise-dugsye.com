function fechtUserData() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const success = true;

      if (success) {

        resolve({ id: 1, name: "Ridwan" });

      } else {

        reject("failed feching data");

      }
    }, 3000);

  });

}

fechtUserData()
  .then((data) => console.log("user data :", data))
  .catch((error) => console.log("errorr :", error));
