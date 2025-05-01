// nav
  const miniHeader = document.getElementById("mini-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      miniHeader.classList.remove("d-none");
      setTimeout(() => {
        miniHeader.classList.add("show");
      }, 10);
    } else {
      miniHeader.classList.remove("show");
      setTimeout(() => {
        miniHeader.classList.add("d-none");
      }, 300); 
    }
  });

  const totalFrames =50;
const frameImg = document.getElementById("videoFrame");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;

  const frameIndex = Math.min(
    totalFrames - 1,
    Math.floor(scrollFraction * totalFrames)
  );

  const frameNumber = String(frameIndex + 1).padStart(3, "0");
  frameImg.src = `frames/ezgif-frame-${frameNumber}-removebg-preview.png`;

});

  

  // cursor
  const cursor = document.querySelector(".custom-cursor");
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
  document.addEventListener("click", (e) => {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";
    document.body.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 500);
  });


