// Keep the current page's sidebar link visible inside the floating sidebar's scroll area
function revealActiveLink() {
  const nav = document.querySelector("aside.theme-doc-sidebar-container nav.menu");
  const active = nav?.querySelector(".menu__link--active:not(.menu__link--sublist)");
  if (!nav || !active) return;
  const navRect = nav.getBoundingClientRect();
  const linkRect = active.getBoundingClientRect();
  if (linkRect.top < navRect.top + 16 || linkRect.bottom > navRect.bottom - 16) {
    nav.scrollTop += linkRect.top - navRect.top - nav.clientHeight / 3;
  }
}

export function onRouteDidUpdate() {
  // Categories expand after the route change renders, so check again once they settle
  requestAnimationFrame(revealActiveLink);
  setTimeout(revealActiveLink, 150);
  setTimeout(revealActiveLink, 400);
}
