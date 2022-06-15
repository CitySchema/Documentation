// This is the javascript library fo the citySchema.org documentation


// These functions are to handle the collapsible sidebar.

// First, lets sort out the characters:  A list item with the class "chapter" is a 
// collapsible element that contains an href to a document in our collection.
// A chapter corresponds with a web page.  In this context each page is an index.htm 
// that lives in its own folder with an optional folder full of images. Pages are 
// based on our template/index.htm.  All page folders are in the same folder as our resources 
// folder.  
//
// A chapter page can have headings within it that are referenced by id tags.  We call these 
// headings "verses" because they are particles within our chapters. 
//
// In our index, a chapter is represented by a list item that has a class "chapter."  The LI 
// is followed by a an un-numbered list that has a class 'verses'.  The items within the 'verses list
// that are hyperlinks -- either to "verses"  within the chapter.  Or may include other chapters. one or 
// We are only allowed to have one level  of nesting.  
//   
// When the page loads, chapters whose UL>LIs are also chapters automatically get a 
// "is-parent" class appended. The chapters contained within a parent automatically get 
// an "is-child" class. 
// 
$(function() {
$(" li.chapter ").parent().prev('li.chapter').each(function(e) { 
 // $(" li.chapter >a ").each(function(e) { 
      let dadname = $(this).text()
      console.log($(this).text() + " is a parent");
     $(this).addClass("is-parent");
     //$(this).css("background-color","lightblue");

     $(this).next("ul").children(" li.chapter").each(function(e) { 
      console.log($(this).text() + " is a child of " + dadname);
      $(this).addClass("is-child");
      //$(this).css("background-color","lightgreen");
     });
}) ;

        // Also on page load, we look at the url location of the current page, and look for the 
// chapter that matches that URL.  That chapter is given an "active" class, and is highlighted
// and its next:UL is toggled to show the contents.
// 
// If the active class is a child, the parent's next UL is also toggled to show.
//
// OK, so the page has loaded and the active chapter is exposed with its list of verses exposed.
// Now, if you click the bullet for any other chapter in the table of contents, you can expose 
// its UL, and likewise any chlld chaptes can be unrolled this way. Obviously, if you click the 
// hyperlinks in any of these, then the page will reload and the chapter in question will become 
// active. 
    
    let current_url = window.location.pathname;
    let filename = current_url.replace(/^.*[\\\/]/, '');
    console.log("Filename is: " + filename);
 
  // check the anchor for each chapter entry. If the href of the chapter is the same as the 
  // directory and file name in the current url... 
     $(".treeview li.chapter >a").each(function() {
       //console.log("href is: " + this.href );
          if (this.href.indexOf(current_url) != -1) {
            //console.log("FOO!");
            //$(this).parent().children().show();       
            $(this).parent().addClass("is-open");
            $(this).parent().addClass("active");
            $(this).parent().next("ul").toggle("slow");
            //$(this).find(">ul").toggle("slow");
             $(this).css('color', 'red');

// Once you have found the active chapter, check to see if it is a child of a subject chapter.
// If s, expand list associated with the parent subject             
            if ($(this).parent().hasClass("is-child")) {
                 let dadname = $(this).parent().parent().prev('.is-parent').text();
                 console.log($(this).text() + " is a child of " + dadname); 
                 $(this).parent().parent().prev('.is-parent').addClass("is-open");
                 $(this).parent().parent().prev('.is-parent').next("ul").toggle("slow");
              };

        }
     });


// When a list item with class "chapter" is clicked, toggle the next UL element. and
// set a "is-open" class which applies the correct indicator image before the li. 

     $(" .treeview li.chapter ").click(function (e) {
      e.stopPropagation();
      //if (!$(this).hasClass("active")) {
      $(this).next("ul").toggle("slow");
      //$(this).find(">ul").toggle("slow");
      if ($(this).hasClass("is-open"))// && (!$(this).hasClass("active")))
            $(this).removeClass("is-open");
      else 
          $(this).addClass("is-open");
      
      //if ($(this).hasClass("is-child")) {
      //     $(this).parent().prev('li.chapter').toggle("slow");
      //     $(this).parent().prev('li.chapter').addClass("is-open");
      //  };
      });
 

// Now a couple of functions to toggle the chapters and topics.

$(" #toggle_subjects " ).click(function (e) {
   console.log("Toggle my subjects!");
});

 }); // Closes main function