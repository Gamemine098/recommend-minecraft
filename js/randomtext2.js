var texts = ["De kub", "Hello World!", "สวัสดีครับ"];

document.getElementById("randomText2").value =
  texts[Math.floor(Math.random() * texts.length)];
