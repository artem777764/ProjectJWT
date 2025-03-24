window.addEventListener("load", async () => {
  const token = localStorage.getItem("token");
  let imageUrl = "fail.jpg";

  if (token) {
    try {
      const response = await fetch("http://localhost:3000/protected", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (response.ok) {
        imageUrl = "successful.jpg";
      }
    } catch (error) {
      console.error(error);
    }
  }

  const img = document.createElement("img");
  img.src = imageUrl;
  img.className = "fullscreen-image";
  document.body.appendChild(img);
});
