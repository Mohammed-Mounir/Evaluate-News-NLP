const handleSubmit = async (e) => {
  e.preventDefault();

  // check what text was put into the form field
  let url = document.getElementById("name").value;
  Client.checkForName(url);

  console.log("::: Form Submitted :::");
  const res = await fetch(`http://localhost:8081/news-eval/${url}`);
  document.getElementById("results").innerHTML = res.message;
  // .then((res) => res.json())
  // .then(function (res) {
  //   document.getElementById("results").innerHTML = res.message;
  // });
};

export { handleSubmit };
