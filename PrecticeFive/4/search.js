function search() {
   let input = document.getElementById('searchText').value;
   let arr = document.querySelectorAll("ul li");
   arr.forEach(e => {
      if (e.innerText.includes(input) && input !== "") {
         e.style.fontWeight = 'bold';
         e.style.textDecoration = 'underline';
      } else {
         e.style.fontWeight = 'normal';
         e.style.textDecoration = 'none';
      }
   });
}
