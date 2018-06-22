function modal() {

    // Get the modal
    var modal = document.getElementById('applyModal');
    var apply = document.getElementById('apply-form');
    var thanks = document.getElementById('thanks');

    // Get the button that opens the modal
    var btn = document.getElementsByClassName('btn-apply');
    var submit = document.getElementById('submit');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close-modal');

    // When the user clicks on the button, open the modal 
    for (i = 0; i < btn.length; i++) {
        btn[i].onclick = function() {
            modal.style.display = "block";
        }
    }

    submit.onclick = function() {
        submit.style.display = "none";
        apply.style.display = "none";
        thanks.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    for (i = 0; i < span.length; i++) {
        span[i].onclick = function() {
            modal.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}