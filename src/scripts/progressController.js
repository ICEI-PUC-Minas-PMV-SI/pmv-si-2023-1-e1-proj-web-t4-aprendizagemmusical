function updateProgressBar() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var progressBar = document.querySelector('.progress-bar');
    var checkedCount = 0;
    
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        checkedCount++;
      }
    });
    
    var progressPercentage = (checkedCount / checkboxes.length) * 100;
    progressBar.style.width = progressPercentage + '%';
    
    if (checkedCount === checkboxes.length) {
      checkboxes.forEach(function(checkbox) {
        checkbox.disabled = true;
      });
    }
  }
  