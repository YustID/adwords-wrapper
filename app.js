// Wrapping keywords (Main function)
$("#action-wrap").click(function () {
  // Getting text area
  keywords = $("#unwrapped-keywords").val();

  // Getting keywords choice values
  choiceBroad = $("#choice-broad").is(":checked");
  choiceBroadModified = $("#choice-broadmodified").is(":checked");
  choicePhrase = $("#choice-phrase").is(":checked");
  choiceExact = $("#choice-exact").is(":checked");

  // Splitting each keyword in array
  keywordsList = keywords.split("\n");

  // Remove blank keywords
  keywordsList = keywordsList.filter(function (val) {
    if (val == "" || val == NaN || val == undefined || val == null) {
      return false;
    }
    return true;
  });

  // Modifying keywords
  keywordsListFinal = "";
  console.log(keywordsList);

  for (var i = 0; i < keywordsList.length; i++) {
    var keyword = keywordsList[i];

    if (choicePhrase === true) {
      keywordsListFinal += '"' + keyword + '"' + "\n";
    }

    if (choiceExact === true) {
      keywordsListFinal += "[" + keyword + "]" + "\n";
    }

    if (choiceBroadModified === true) {
      keywordsListFinal += '"' + keyword + '"' + "\n";
      keywordsListFinal += "[" + keyword + "]" + "\n";
    }
  }

  // Creating final list
  $("#wrappedKeywords").val(keywordsListFinal);
});

// ============================================================================
// Zeroclipboard
// Check it out on github :  https://github.com/zeroclipboard

// JavaScript for copy text
document.getElementById("copy-button").addEventListener("click", function () {
  var textToCopy = document.getElementById("wrappedKeywords").value;

  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      alert("Copied text to clipboard: " + textToCopy);
    })
    .catch(function (error) {
      console.error("Error copying text: ", error);
    });
});
