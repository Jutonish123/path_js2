const mySlider = new Splide("#mySlider", {
    perPage: 4,
    pagination: false,
    arrows: false,
    breakpoints: {
      1000: {
        perPage: 3
      },
      425: {
        perPage: 1,
        pagination: true,
      },
      320: {
        perPage: 1,
        pagination: true,
      }
    }
})
mySlider.mount()


document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);

function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));
    if(dropDown.classList.contains('click-dropdown') === true){
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();        
            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');
    
            } else {
                closeDropdown();
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }
    if(dropDown.classList.contains('hover-dropdown') === true){
        dropDown.onmouseover  =  dropDown.onmouseout = dropdownHover;
        function dropdownHover(e){
            if(e.type == 'mouseover'){
                closeDropdown();
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
                
            }

            // if(e.type == 'mouseout'){
            //     e.target.nextElementSibling.onmouseleave = closeDropdown;
            // }
        }
    }
};

window.addEventListener('click', function (e) {
    if (e.target.closest('.dropdown-container') === null) {
        closeDropdown();
    }
});

function closeDropdown() {
    console.log('run');
    document.querySelectorAll('.dropdown-container').forEach(function (container) { 
        container.classList.remove('dropdown-open')
    });
    document.querySelectorAll('.dropdown-menu').forEach(function (menu) { 
        menu.classList.remove('dropdown-active');
    });
}

document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) {
    dropDownList.onmouseleave = closeDropdown;
});