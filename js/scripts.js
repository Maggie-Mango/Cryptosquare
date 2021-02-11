//business logic

function encode(str) {
  const normalizedStr = str.replace(/[^\w]/gi, "").toLowerCase();
  const strLength = normalizedStr.length;
  const columns = Math.ceil(Math.sqrt(strLength));

  let encodedText = "";

  for (let i = 0; i < columns; i ++) {
    for (let j = i; j < strLength; j += columns) {
      encodedText += normalizedStr[j];
    }
    encodedText += '\n';
  }
  return encodedText
}

// user interface logic
$(document).ready(function() {
  $("form#word").submit(function(event) {
    const userMessage = $("input#message").val();
    $("#output").show()
    $("#output").text("Enter the Matrix: \n" + encode(userMessage));
    $("form#word").hide();
    event.preventDefault();
  })
});
