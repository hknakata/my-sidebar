(() => {
  console.log("content.js is loaded.");

  // Create a new div element and add a class "my-extension-sidebar"
  const sidebar = document.createElement("div");
  sidebar.classList.add("my-extension-sidebar");

  // Create a new ul element
  const ul = document.createElement("ul");
  ul.classList.add("nav-list");

  // Create an array of links
  const links = [
    { url: "https://github.com", icon: "bxl-github", tooltip: "GitHub" },
    {
      url: "https://hagithub.ha.org.hk/CMSCHASSIS",
      icon: "bxl-github",
      isIconFlashing: true,
      tooltip: "GitHub - HA - CMSCHASSIS",
    },
    {
      url: "https://drive.google.com",
      icon: "bx-hdd",
      tooltip: "Google Drive",
    },
  ];

  // Create an li element for each link and append it to the ul
  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const i = document.createElement("i");
    const span = document.createElement("span");

    a.href = link.url;
    a.target = "_blank";

    i.classList.add("bx", link.icon);

    if (link.isIconFlashing) {
      i.classList.add("bx-flashing");
    }

    span.textContent = link.tooltip;
    span.classList.add("tooltip");

    a.appendChild(i);
    li.appendChild(a);
    li.appendChild(span);
    ul.appendChild(li);
  });

  // Append the ul to the sidebar
  sidebar.appendChild(ul);

  // Append the sidebar to the body
  document.body.appendChild(sidebar);
})();
