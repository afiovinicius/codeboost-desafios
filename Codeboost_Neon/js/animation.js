// Effect Left/Right
ScrollReveal().reveal(".ef-right", {
  origin: "right",
  distance: "2rem",
  duration: 1200,
  easing: "ease-out",
});

ScrollReveal().reveal(".ef-left", {
  origin: "left",
  distance: "2rem",
  duration: 1000,
  easing: "ease-out",
});

// Effect Up/Down
ScrollReveal().reveal(".ef-down", {
  origin: "top",
  distance: "2rem",
  duration: 1000,
  easing: "ease-in",
});
ScrollReveal().reveal(".ef-up", {
  origin: "bottom",
  distance: "2rem",
  duration: 1000,
  easing: "ease-in",
});

// Effect Interval
ScrollReveal().reveal(".ef-i-left", {
  origin: "left",
  interval: "300",
  distance: "2rem",
  duration: 1000,
  easing: "ease-in",
});

ScrollReveal().reveal(".ef-i-right", {
  origin: "right",
  interval: "300",
  distance: "2rem",
  duration: 800,
  easing: "ease-in",
});

ScrollReveal().reveal(".ef-i-up", {
  origin: "bottom",
  interval: "300",
  distance: "2rem",
  duration: 600,
  easing: "ease-out",
});
ScrollReveal().reveal(".ef-i-down", {
  origin: "top",
  interval: "300",
  distance: "2rem",
  duration: 600,
  easing: "ease-out",
});

// Effect Opacity
ScrollReveal().reveal(".ef-opacity", {
  distance: "0rem",
  interval: "300",
  scale: 0.85,
  opacity: 0.4,
  duration: 1000,
  easing: "ease-out",
});

ScrollReveal().reveal(".card-right", {
  origin: "right",
  interval: "300",
  distance: "1.2rem",
  duration: 600,
  easing: "ease-out",
});

ScrollReveal().reveal(".flip", {
  duration: 1000,
  rotate: {
    x: 360,
    y: -180,
    z: 20,
  },
  scale: 0.3,
});
