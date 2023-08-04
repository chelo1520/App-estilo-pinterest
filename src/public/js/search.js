  document.addEventListener("keyup", (e) => {
    if (e.target.matches("#search")) {
      
      const $imgTitle = document.querySelectorAll(".imgTitle");

      $imgTitle.forEach(title => {
        const parentElement = title.parentElement; // Acceder al elemento padre
        if (title.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
          parentElement.classList.remove("filter"); // Remover clase "filter" del padre
        } else {
          parentElement.classList.add("filter"); // Agregar clase "filter" al padre
        }
      });
    }
  });