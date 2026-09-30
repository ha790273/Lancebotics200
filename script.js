function scrollSlider(sliderId, direction) {
  const slider = document.getElementById(sliderId);

  slider.scrollBy({
    left: direction * slider.clientWidth,
    behavior: "smooth"
  });
}