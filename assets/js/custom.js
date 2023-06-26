$(document).ready(function () {
  // JavaScript
  const container = document.getElementById("binary-anime");
  const numBoxes = 7; // Number of boxes
  const boxWidth = 100 / numBoxes; // Width of each box in pixels
  const spanHeight = 10; // Height of each span in pixels

  const plainView = document.getElementById("plain-view");
  const editorView = document.getElementById("editor-view");
  const toggleBtn = document.getElementById("toggle-btn");

  // Function to generate the <span> tags
  function generateSpans(container, spanCount) {
    for (let i = 0; i < spanCount; i++) {
      const span = document.createElement("span");
      span.textContent = getRandomBinaryString(10);
      container.appendChild(span);
    }
  }

  // Function to generate a random binary string of specific length
  function getRandomBinaryString(length) {
    let binaryString = "";
    for (let i = 0; i < length; i++) {
      binaryString += Math.floor(Math.random() * 2);
    }
    return binaryString;
  }

  // Calculate the number of boxes and spans based on the viewport size
  // const boxCount = Math.floor(window.innerWidth / boxWidth);
  const spanCount = Math.floor(window.innerHeight / spanHeight);

  // Generate boxes and spans dynamically
  for (let i = 1; i <= numBoxes; i++) {
    const box = document.createElement("div");
    box.className = `box box${i}`;
    generateSpans(box, spanCount);
    container.appendChild(box);
    box.style.width = `${boxWidth}vw`;
  }

  //To apply animations
  // Get all the box elements
  const boxes = document.querySelectorAll(".box");

  // Loop through each box
  boxes.forEach((box) => {
    // Get all the spans within the box
    const spans = box.querySelectorAll("span");

    // Add the animation classes to each span
    spans.forEach((span, index) => {
      if (index % 2 === 0) {
        span.classList.add("zeroAnimate");
      } else {
        span.classList.add("oneAnimate");
      }
    });
  });

  //To include HTML files into another HTML file
  $(function () {
    var includes = $("[data-include]");
    $.each(includes, function () {
      var file = "views/" + $(this).data("include") + ".html";
      $(this).load(file);
    });
  });

  //To toggle about section view
  function toggleView() {
    editorView.classList.toggle("hidden");
    editorView.classList.toggle("visible");
    plainView.classList.toggle("hidden");
    plainView.classList.toggle("visible");
    toggleBtn.classList.toggle("icon-text-width");
    toggleBtn.classList.toggle("icon-embed2");
  }

  document.getElementById("toggle-btn").addEventListener("change", toggleView);

  $(".projects-carousel").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
