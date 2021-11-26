const handleSubmit = async (e) => {
  e.preventDefault();

  let url = document.getElementById("url").value;
  console.log(url);
  console.log(Client.checkValidUrl(url));

  const res = await fetch("http://localhost:8081/eval", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });
  // console.log(res);
  document.getElementById("results").innerHTML = res.message;
  // .then((res) => res.json())
  // .then(function (res) {
  //   document.getElementById("results").innerHTML = res.message;
  // });
};

export { handleSubmit };
