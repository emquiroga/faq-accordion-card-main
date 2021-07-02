document.querySelectorAll('.__question').forEach((item) => {
    item.addEventListener('click', (event) => {

        let collapse = item.nextElementSibling;

        if(!item.classList.contains('collapsing')){

            //OPEN ACCORDION ITEM
            if (!item.classList.contains('open')) {

            //REMOVE COLLAPSE CLASS, ADD COLLAPSING CLASS

            collapse.style.display = 'block';
            let accHeight = collapse.clientHeight;

            setTimeout(() => {
                collapse.style.height = accHeight + 'px';
                collapse.style.display = '';
            }, 1)
            
            collapse.classList = 'accordion__collapse collapsing';

            //TRANSITION
            setTimeout (() => {
                collapse.classList = 'accordion__collapse collapse open';
                collapse.style.height = '';
            }, 300);

            } else { // CLOSE ACCORDION ITEM
            collapse.classList = 'accordion__collapse collapsing';

            setTimeout(() => {
                collapse.style.height = '0px';
                }, 1);

            setTimeout (() => {
                collapse.classList = 'accordion__collapse collapse';
                collapse.style.height = '';
            }, 300);
            
            }

        item.classList.toggle('open');

        }
    });
});