// Dynamic route preloader for non-blocking instantaneous page navigation
export const preloadRoute = (path) => {
  if (path === "/" || path === "/home") {
    import("../pages/Home")
  } else if (path === "/about") {
    import("../pages/About")
  } else if (path === "/events") {
    import("../pages/Events")
  } else if (path === "/gallery") {
    import("../pages/Gallery")
  } else if (path === "/project") {
    import("../pages/Project")
  } else if (path === "/team") {
    import("../pages/Teams")
  } else if (path === "/alumni") {
    import("../pages/Alumni")
  } else if (path === "/recruitment") {
    import("../pages/Recruitment")
  } else if (path === "/contact") {
    import("../pages/Contact")
  }
}
