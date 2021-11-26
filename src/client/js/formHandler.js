const handleSubmit = async (e) => {
  e.preventDefault();

  let url = document.getElementById("url").value;
  let htmlNewsResult = "";

  if (Client.checkValidUrl(url)) {
    const res = await fetch("http://localhost:8081/eval", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    const { text, agreement, confidence, score_tag } = await res.json();

    htmlNewsResult = `
  <ul>
  <li>
      ${text}:
      <ul>
          <li>Agreement: ${agreement}</li>
          <li>Confidence: ${confidence}</li>
          <li>Score: ${score_tag}</li>
      </ul>
  </li>
</ul>`;
  } else {
    htmlNewsResult = "<p>Url is not valid</p>";
  }

  document.getElementById("results").innerHTML = htmlNewsResult;
};

export { handleSubmit };
