document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('is-open');
    });
  }

  // Mobile sub-menu accordion
  var parentItems = document.querySelectorAll('#mobile-menu .menu-item-has-children > a');
  parentItems.forEach(function (link) {
    var arrow = document.createElement('span');
    arrow.className = 'submenu-toggle';
    arrow.innerHTML = '▾';
    arrow.style.cssText = 'margin-left:auto;padding:0.25rem 0.5rem;cursor:pointer;font-size:0.75rem;';
    
    var li = link.parentElement;
    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;align-items:center;';
    li.insertBefore(wrapper, link);
    wrapper.appendChild(link);
    wrapper.appendChild(arrow);

    var subMenu = li.querySelector('.sub-menu');
    if (subMenu) {
      subMenu.style.display = 'none';
    }

    arrow.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (subMenu) {
        var isOpen = subMenu.style.display !== 'none';
        subMenu.style.display = isOpen ? 'none' : 'block';
        arrow.innerHTML = isOpen ? '▾' : '▴';
      }
    });
  });
});
