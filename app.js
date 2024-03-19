// function createKeywords() {
//   var inputData = document.getElementById("input-data").value.split("\n");
//   var phraseChecked = document.getElementById("phrase-checkbox").checked;
//   var exactChecked = document.getElementById("exact-checkbox").checked;
//   var modifiedBroadChecked = document.getElementById("modifiedBroad-checkbox").checked;
//   var phraseOutput = "";
//   var exactOutput = "";
//   var modifiedBroadOutput = "";

//   inputData.forEach(function (keyword) {
//     if (phraseChecked) {
//       phraseOutput += '"' + keyword.trim() + '"\n';
//     }
//     if (exactChecked) {
//       exactOutput += "[" + keyword.trim() + "]\n";
//     }
//     if (modifiedBroadChecked) {
//       modifiedBroadOutput += '"' + keyword.trim() + '" [' + keyword.trim() + "]\n";
//     }
//   });

//   document.getElementById("phrase-output").value = phraseOutput;
//   document.getElementById("exact-output").value = exactOutput;
//   document.getElementById("modifiedBroad-output").value = modifiedBroadOutput;
// }

// function copyToClipboard(id) {
//   var textarea = document.getElementById(id);
//   textarea.select();
//   document.execCommand("copy");
//   alert("Copied to clipboard: " + textarea.value);
// }

function wrapKeywords(inputData) {
  var phraseOutput = "";
  var exactOutput = "";
  var modifiedBroadOutput = "";

  inputData.forEach(function (keyword) {
    phraseOutput += '"' + keyword.trim() + '"\n';
    exactOutput += "[" + keyword.trim() + "]\n";
    modifiedBroadOutput += '"' + keyword.trim() + '" [' + keyword.trim() + "]\n";
  });

  document.getElementById("phrase-output").value = phraseOutput;
  document.getElementById("exact-output").value = exactOutput;
  document.getElementById("modifiedBroad-output").value = modifiedBroadOutput;
}

function createKeywords() {
  var inputData = document.getElementById("input-data").value.split("\n");
  wrapKeywords(inputData);
}

function copyToClipboard(id) {
  var textarea = document.getElementById(id);
  textarea.select();
  document.execCommand("copy");
  alert("Copied to clipboard: " + textarea.value);
}
