    const $input = document.getElementById("inputGroupFile02");
    const $visualImg = document.getElementById("visualImg")

      $input.addEventListener("change", e => {
        if(e.target.files[0]){
          const reader = new FileReader();
          reader.onload = function(e){
            $visualImg.src = e.target.result;
          }
          reader.readAsDataURL(e.target.files[0])
        }else{
          $visualImg.src = "";
        }
      })