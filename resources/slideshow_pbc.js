///////// HERE IS THE NEW SLIDESHOW CLASS ////////////////
// The SlideShow is a div isentified by its class, "slideshow".  
// A slideshow div has a few attributes that control its behavior:
//    data-imgheight = "350px" 
//    data-title = "" 
//    data-fadespeed = "10000"     
//    data-playpause = "pause"
//

// A slideshow contains a a group of SlideContainer divs identified by class "slidecontainer".  
// Each SlideContainer is a div element that contains div elements defined by their class 
// -- divClass:  Payload:
//    Slide:     Image or I-frame, 
//    Caption:   Html 
//    Learnmore: an html hyperlink.
//


var SlideShowClass = function(options){
    var vars = {         //Initialize default local variables passed as options in the create call.
    imgheight: '350px',  // Set by slideshow's data-imgheight value
    playpaused: 'paused',  // Set by slideshow's data-playupaused should either be 'play' or 'paused'
    slideshowTitle: "",  // Set by slideshow's data-title value if length = o the title wil not be rendered
    fadespeed: 1000,     // Duration of fade in fade out. 
    slideshowId: "" ,     // The # id for the slideshow.  
    // -- These are populated by the constructor
    slidelist:  [] ,     // will an ordered list of slide containers -- which contain
                        // the slide, caption, title and showmore divs. 
    slides: [],          // A list of the slides.  These get detached and appended to 
                        // The stage div that is created here.  
    captions: [],        // A list of the captions
    learnmores: [],
    slideIndex: 0       // holds the slidelist[index] for the current slide. 
    }

    var root = this;

this.construct = function(options){
  // Populates the vars array with the run-time options for each div.
    {$.extend(vars , options);  
     // Get a jquery opbject for the slideshow div and add it to an ordered array 
      vars.slideshow = $("#" + vars.slideshowId);
      vars.slidelist = vars.slideshow.find(".slidecontainer");

  /// Construct the html object model of the slideshow.

   /// Add a couple of divs to the slideshow 
   vars.slideshow.prepend('<div class="slideshowtitle"></div>');
    vars.slideshow.append("<div class='stage' style='height: " + vars.imgheight + ";'></div>");   // this is where the slide is going to be rendered          
    vars.slideshow.append(`<div class='nav'>                  
                        <div class='navleft'></div>
                        <div class='readmore'></div>
                        <div class='slidecontrols'>
                          <div class='slidenum'></div>
                          <div class='slideshowbuttons'</div>
                      </div>` ); 

    // The "this."  namespace can be confusing when getting values from dom events.  So we make a copy called "self" 
    var self = this;

    vars.slideshow.find(".slideshowtitle").html(vars.slideshowTitle);
    vars.slideshow.find(".stage").css({"height": vars.imgheight});
    vars.slideshow.find(".slideshowbuttons").append("<button id='" + vars.slideshowId + "_prev' class='prev_btn'> </button>")
    
    vars.slideshow.find(".slideshowbuttons").append("<button id='" + vars.slideshowId + "_playpause' class='playpause_btn " + vars.playpaused + "'></button>");

    vars.slideshow.find(".slideshowbuttons").append("<button id='" + vars.slideshowId + "_next' class='next_btn'> </button>");
    }

  $(document).on("click", "#" +vars.slideshowId + "_next", function(){  
     console.log("Next slide"); 
     if (vars.playpaused == "playing") {  // then 
        self.stopgo()
      };
     self.slideBump(1);
    });
  
    $(document).on("click", "#" + vars.slideshowId + "_playpause", function(){  
     console.log("playpause " + vars.slideshowId); 
     self.stopgo();
    });

    $(document).on("click", "#" + vars.slideshowId + "_prev", function(){  
     console.log("Previous slide"); 
     if (vars.playpaused == "playing") {  // then 
       self.stopgo()
      };
     self.slideBump(-1);
    });
  


    // For each slidecontainer, we have to re-organize the slides, captions 
    // and readmore links. 
    var caption_count = 0
    for (var i = 0; i < vars.slidelist.length; i++) {
      // For each slide container, grab and process the inner divs.
      var myslide = $(vars.slidelist[i]).find(".slide");
      $(myslide).detach($(vars.slidelist[i])).appendTo($(vars.slideshow).find(".stage"));
      vars.slides[i] = myslide;
      //vars.slides[i] = $(vars.slidelist[i]).find(".slide");


      if ($(vars.slidelist[i]).find(".caption").html().length > 0) {
        console.log("Found caption: " + $(vars.slidelist[i]).find(".caption").html());
         vars.captions[i] = $(vars.slidelist[i]).find(".caption").html();
         console.log("Captions array place : " + i + ": " + vars.captions[i]);
         caption_count +=1;
      }else{
        console.log(vars.slideshowId + ":" + i + " zero length caption." );
      };
      vars.learnmores[i] = $(vars.slidelist[i]).find(".learnmore").html();
      console.log("Slidecontainer " + i + " has slide of type " + $(vars.slides[i]).html());
    };

    console.log("Slides List has :" + vars.slides.length + " slides. " );
    
    // Don't include the caption div if there are not captions
    if (caption_count > 0){
        vars.slideshow.append("<div class='caption'><p></p></div>"); 
      }else{
        console.log(vars.slideshowId + " No captions!")
      };



/// Generate slide pick-list.
// Initial value for title is needed for setting the "selected" toggle
//in the picklist.
selectedTitle = vars.slidelist[vars.startslide].dataset.title;
this.makeList = function(selectSlide) {
    var slidePickList = "";
    for (var i = 0; i < vars.slidelist.length; i++) {
      title = vars.slidelist[i].dataset.title;
      if (i == selectSlide ) {
        slidePickList  += "<option selected value= " + i + ">" + title + "</option>\n";
        vars.slideIndex = i;
        console.log("Selected title is: " + title + " Index is: " + i);
      }else{
        slidePickList  += "<option value=" + i + ">" + title + "</option>\n";
        console.log("Other title: " + title + ", index: " + i);
      }
      };

        picklist = "<select class='slidepicker' id=" + vars.slideshowId + "_picklist>" + slidePickList + "</select>"
        
        vars.slideshow.find(".navleft" ).html(picklist);
        var self=this;  // This little trick to dodge the confusion to the "this" used by the event handler. 
        vars.slideshow.find("#" + vars.slideshowId + "_picklist" ).change(function() {        
          console.log(this.value);
        self.showSlide(this.value)
    });
  }  // closes makelist function


    // Render the first slide -- hide all the other ones. 
    this.showSlide(vars.slideIndex);
    if (vars.playpaused == "playing") {
      this.autobump();
    }

} // closes constructor function

/// Private Methods

/// Show a slide, given its index number (order of appearance in html)
    this.showSlide = function(n) {
      console.log("Showing slide:" + n);
      vars.slideIndex = n;  // Sets class variable totrackcurrent slide.  
      //var i;
      // find the stage div
      $(vars.slideshow).find('.stage').html(vars.slides[n])

        //$(vars.slideshow).find('.stage').find('.slide').css('visibility','visible').hide().fadeIn(500);

        $(vars.slides[vars.slideIndex]).css('visibility','visible').hide().fadeOut(1000);
        $(vars.slides[n]).css('visibility','visible').hide().fadeIn(500);

        //Theoetically, these lines woud do a crossfade, but.. not working. 
        //$(vars.slides[vars.slideIndex]).removeClass("opaque");
        //$(vars.slides[n]).addClass("opaque");

      console.log("adding caption");      
      $(vars.slideshow).find(".caption").html(vars.captions[n]);
      $(vars.slideshow).find(".caption").css({"height": "60px"});
      $(vars.slideshow).find(".readmore").html(vars.learnmores[n]);
      //$("#" + vars.slideshowId).find(".readmore").html("<p>Hey baby!</p>");

      let slidenum = +n + 1 ;
      $(vars.slideshow).find(".slidenum").html(slidenum + " of " + vars.slidelist.length ); 
      // contructs and adds the picklist with the selected slide in the chamber.
      this.makeList(n);

    }  // closes showslide function



this.stopgo = async function() {
  console.log("Doing the STOPGO! playpaused value is " + vars.playpaused);

  if (vars.playpaused == "paused") {  // then 
     $("#" + vars.slideshowId + "_playpause").removeClass( "paused" ).addClass( "playing" )
     vars.playpaused = 'playing';
     //this.blinkbutton();
     this.slideBump(1);
     this.autobump();

    } else {
    $("#" + vars.slideshowId + "_playpause").removeClass( "playing" ).addClass( "paused" )
    vars.playpaused = 'paused';
    $("#" + vars.slideshowId + "_playpause").css({'outline-style':'none'});
  }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

this.blinkbutton = async function() {
  while (vars.playpaused == 'playing') {
    await sleep(1000);
      if (vars.playpaused == "playing") {  // check if the buttonhas been pushed
        if ($("#" + vars.slideshowId + "_playpause").css('outline-style') == 'none') {
          $("#" + vars.slideshowId + "_playpause").css({'outline-style':'solid'});
        }else{
          $("#" + vars.slideshowId + "_playpause").css({'outline-style':'none'});
        }
      }
    }
}

this.autobump = async function() {
  this.blinkbutton();
 while (vars.playpaused == 'playing') {

    await sleep(4000);
        console.log(vars.slideshowId + " now playing ");
        if (vars.playpaused == "playing") {  // check if the buttonhas been pushed
           this.slideBump(1);
        }
  }
}


this.slideBump = function(n) {
    console.log("SlideIndex: " + vars.slideIndex + " bump: " + 1);
    // If the slideshow is on autoplay, stop it

  if ((vars.slideIndex + n) >= vars.slidelist.length ) {
       console.log("Advancing past last slide " + vars.slideIndex + " bump: " + n);
       newIndex = 0;
        this.showSlide(0);
  }else if ((vars.slideIndex + n) <= -1) {
    console.log("Backing past first slide " + vars.slideIndex + " bump: " + n);
       newIndex = vars.slidelist.length - 1
    this.showSlide( newIndex);
  }else{ 
    newIndex = vars.slideIndex + n ;
   this.showSlide(newIndex);
   console.log("Midrange: " + vars.slideIndex + " bump: " + n);
  }
  console.log("Setting slideIndex to: " + newIndex)
  vars.slideIndex = newIndex;

}

// Run the constructor
this.construct(options);
}


$( document ).ready(function() {
        // collect all the divs of class slideshow and create slideshow objects 
        let slideshowlist = $(".slideshow");
        let slideshows = [];  // array for naming and holding multiple slideshows
        if (slideshowlist.length > 0) {slideshowlist.each(function( index ) {
            slideshows[index] = new SlideShowClass({ 
                slideshowId : slideshowlist[index].id, 
                startslide : 0,
                imgheight : slideshowlist[index].getAttribute('data-imgheight'),
                slideshowTitle : slideshowlist[index].getAttribute('data-title'),
                playpaused : slideshowlist[index].getAttribute('data-playpaused')
            })
        });
        }

    });
    