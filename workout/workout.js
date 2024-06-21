var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
function showExercise(exerciseName, targetContent) {
  var exerciseContent = document.getElementById(targetContent);
  exerciseContent.innerHTML = ""; // Clear previous exercise content

  var exerciseDiv = document.createElement("div");
  exerciseDiv.className = "exercise";

  var video = document.createElement("video");
  video.width = 320;
  video.height = 240;
  video.controls = true;
  video.autoplay = true;
  video.muted = true; // Add muted attribute to mute the video

  var source = document.createElement("source");
  source.src = "res/exercise_" + exerciseName + ".mp4"; // Path to your video file
  source.type = "video/mp4";

  video.appendChild(source);

  var notSupportedText = document.createTextNode(
    "Your browser does not support the video tag."
  );
  video.appendChild(notSupportedText);

  exerciseDiv.appendChild(video);
  exerciseContent.appendChild(exerciseDiv);
}
