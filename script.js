document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.b1');
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
  
    button.addEventListener('click', function() {
      container1.classList.add('hidden');
      container2.classList.remove('hidden');
    });
  });
  

  