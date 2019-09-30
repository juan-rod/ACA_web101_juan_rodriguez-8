var navIsShowing = false
function openNav(element) {
  let nextElementSibling = element.nextElementSibling
  if (!navIsShowing) {
    nextElementSibling.style.display = 'flex'
    navIsShowing = true
  } else {
    nextElementSibling.style.display = 'none'
    navIsShowing = false
  }
}