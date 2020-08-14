/**
 * @param {string} text
 * @returns {Element}
 */
const nav = () => {
  const nav = document.createElement("nav");
  nav.className = "mynav";
  nav.innerHTML = "<ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>";

  return nav;
};

export default nav;
