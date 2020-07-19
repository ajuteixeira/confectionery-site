window.addEventListener('load', function() {
  var menuItems = document.querySelectorAll('#menu li a')

  menuItems.forEach(addMenuCollapseListener)
})

function addMenuCollapseListener(currentItem) {
  var menu = document.querySelector('#menuToggle input')

	currentItem.addEventListener('click', function() {
    if (menu && menu.checked) {
      menu.checked = false
    }
	})
}
