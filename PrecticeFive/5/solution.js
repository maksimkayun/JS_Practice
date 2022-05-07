function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = document.querySelectorAll("table tbody tr td");
      let index = 0;
      let result = false;
      
      for(let row of rows){
         if(document.getElementById("searchField").value === ""){
            row.parentNode.className = "";
         }else{
            if(index % 3 === 0){
               result = false;
            }
            index++;
            if(row.innerText.includes(document.getElementById("searchField").value)){
               row.parentNode.className = "select";
               result = true;
            }
            else if(!result){
               row.parentNode.className = "";
            }
         }
         
         
      }
   }
}