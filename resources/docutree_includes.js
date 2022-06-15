// This javascript file sets html snippets as long variables (note the back-quotes) 
// that represent repeated elements used by the page_name/index.htm template.  At 
// the end of the file, we have some jquery functions that include the snippets in the 
// appropriate div elements.  

// The most common changes wil be updating the side-bar index.  Anytime a page or a 
// deep-link heading is added, you must add it below to make it show up in the sidebar. 
// Here is an example:

{/* <ul class="treeview">
<li class="chapter"><a href="../home/index.htm">Home Page</a></li>
    <ul class="verses">
    <li class="verse"><a href="../home_intro/index.htm#early">Home Intro Early Link</a></li>
    <li class="chapter"><a href="../home/index.htm">Home</a></li>
       <ul class="verses">
         <li><a href="../home/index.htm#early">early Link</a></li>
         <li><a href="../home/index.htm#late">Late Link</a></li>
       </ul>
    <li>List item three</li>
</ul> */}
// Note that a "chapters are web pages represented by index.htm files (based on the template).
// A chapter is al LI element followed by a complete UL element with class="verses". 
// Each "verse" is an LI class="verse" that contains an href to an internal target within the 
// parent chapter.
// A chapter's verses can also include references to other chapters.  Go just one level deep 
// with this. 


let index_htm = `
<span class="title">Documentation</span>
<p style="background-color: white; margin-left: -10px; padding-left: 10px;">Announcements
</p>  
<ul class="treeview">

<li class="chapter"><a href="../home/index.htm">Your Documentation's Home Page</a></li>
    <!-- ul class="verses">
      <li><a href="../home/index.htm#roles">Stakeholder Roles and Motivations</a></li>
      <li><a href="../home/index.htm#oais">Archival Asset Management Approach</a></li>
    </ul -->

  <li class="chapter"><a href="../docutree/index.htm">About DocuTree</a></li>
  <ul class="verses">
  <li><a href="../docutree/index.htm#fab">Features and Benefits</a>
  <li><a href="../docutree/index.htm#publish">Easy to Publish and Update</a>
  <li><a href="../docutree/index.htm#add">Add docutree to your Git project</a>
  <li><a href="../docutree/index.htm#">Preview Local Documentation in any Browser</a>
  <li><a href="../docutree/index.htm#gitpages">Publish On-Line User Documentation with GitPages</a>
  <li><a href="../docutree/index.htm#improve">Re-Use and Improve!</a>
  </ul>


<li class="chapter"><a href="../template/index.htm">Documentation Template / Style Guide</a></li>
<ul class="verses">
  <li><a href="../template/index.htm#css">Basic Styling</a>
  <li><a href="../template/index.htm#slideshow_element">Slide Shows</a>
  <li><a href="../template/index.htm#figures">Figures</a>
  <li><a href="../template/index.htm#table">Tables</a>
  <li><a href="../template/index.htm#tabtargets">Controlling new Tabs</a>
  <li><a href="../template/index.htm#blocks">Colored Text Blocks</a>
  </ul>


</ul> <!-- Closes Index -->
`
let header_htm = `
<div style="float: left; width: 50%; margin: 0px"><img src="../resources/images/banner.png" height="50px"></div>
<div style= "width: 50%; float: right; padding-top: 20px; font-size: 17px;">
<div class="rightflex">
<div><a href="https://github.com/pbcgis/docutree" target="github">GitHub</a></div> 
<!-- div><a href="https://www.youtube.com/channel/UCPkMHdYokjSvoaljowhkjBQ" target="youtube">YouTube</a></div -->
<div><a href="../home/index.htm">Home</a></div>
</div></div>
`;

let index_head_htm = `<img height="100%" style="float:left; padding: 0px 2px 2px 2px;" src="../resources/images/logo-255px.png"><p class="index-title">DocuTree</p></div>`;

let index_footer_htm = `
<div>
   <div><a href="../docutree/index.htm">About docuTree</a>
 </div>
`;

let footer_htm = `<div style="width: 50%; float: left;"><a style="color: black; " href="../resources/mit_license.txt">License</a></div>
<div style="width: 50%; text-align: right; float: right; margin-left: auto; ">
   <a style="color: red; " href="http://pbcgis.com" target="_outboard">Author Credit</a>
</div>`;


$(function() {
  $('#index-header').html(index_head_htm);
   $('#index').html(index_htm);
   $('#index-footer').html(index_footer_htm);
   $('#footer').html(footer_htm);
   $('#header').html(header_htm);

});

 