const makeImage = function (
  url,
  width = "auto",
  height = "auto",
  background = "transparent"
) {
  const stats = { nodes: [1, 3], ...{ nodes: [2, 4] } };
  // TODO remember to set limit on url-loader else large images will be added to the bundle.js file and it will become HUGE!
  const wrapper = document.createElement("div");
  wrapper.style.width = width;
  wrapper.style.height = height;
  wrapper.style.background = background;

  const image = document.createElement("img");
  image.src = url;
  image.style.maxWidth = "100%";
  image.style.maxHeight = "100%";

  wrapper.appendChild(image);
  return wrapper;
};

export default makeImage;
