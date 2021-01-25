// Get the modal
var modal = document.getElementById("myModal");
var v = document.getElementById("test")            
var divs = document.getElementsByClassName('myImg');
for (var i = 0; i < divs.length; i++) {
    var img = divs[i];

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    divs[i].addEventListener("click",function(event){
        modal.style.display = "block";
        modalImg.src = this.src;
        event.preventDefault();
    }, false);
    // img.onclick = function(){
    //     modal.style.display = "block";
        
    //     // modalImg.src = this.src;
    //     // captionText.innerHTML = this.alt;
    // }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modalImg.pause(); 
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modalImg.pause();
            modal.style.display = "none";
        }
    }
}