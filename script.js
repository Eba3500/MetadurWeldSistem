
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-card");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // Previne redirecționarea instantă dacă vrei să vezi efectul (opțional pentru testare)
        // e.preventDefault(); 

        btn.classList.add("clicked");
      });
    });
  });
</script>
