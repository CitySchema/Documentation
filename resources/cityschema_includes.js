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
         <li class="verse"><a href="../home/index.htm#early">early Link</a></li>
         <li class="verse"><a href="../home/index.htm#late">Late Link</a></li>
       </ul>
    <li class="verse">List item three</li>
</ul> */}
// Note that a "chapters are web pages represented by index.htm files (based on the template).
// A chapter is al LI element followed by a complete UL element with class="verses". 
// Each "verse" is an LI class="verse" that contains an href to an internal target within the 
// parent chapter.
// A chapter's verses can also include references to other chapters.  Go just one level deep 
// with this. 


let index_htm = `
<span class="title">Techniques & Tools</span>
<ul class="treeview">
<li class="chapter"><a href="../home/index.htm">Home Page</a></li>
    <ul class="verses">
    <li class="verse"><a href="../home/index.htm#why">Why?</a></li>
    <li class="verse"><a href="../home/index.htm#streetscapes">Streetscapes are part of our cultural heritage</a></li>
</ul>
<li class="chapter"><a href="../repocat/index.htm">Repository / Catalog </a></li>
<li class="chapter"><a href="../model_collection/index.htm">Building Model Collection Overview</a></li>
   <ul class="verses">
      <li><a href="../model_collection/index.htm#overview">Conceptual Overview</a>
      <li><a href="../model_collection/index.htm#interop">Interoperability Strategy</a>
      <li><a href="../model_collection/index.htm#gdb">Geodatabase Format Collection and Catalog</a>
      <li><a href="../model_collection/index.htm#obj">Open Source Format Collection and Catalog</a>
      <li><a href="../model_collection/index.htm#datadictionary">Data Dictionary for Model Catalog</a> 
      <li><a href="../model_collection/index.htm#status">Model Status Dictionary</a>
      <li><a href="../model_collection/index.htm#LOD">Levels of Detail and other Recommendations for Model Structure</a>
     <li class="chapter"><a href="../model_management/index.htm">Managing the Model Collection</a></li>
   </ul>
<li class="chapter"><a href="../tile_grid/index.htm">Tile Grid and Coordinate System</a></li>
    <ul class="verses">
            <li><a href="../tile_grid/index.htm#purpose" target="metadata">Tiling Strategy</a>
            <li><a href="../tile_grid/index.htm#coordinates" target="metadata">Metro Boston 3D Coordinate System</a>
            <li><a href="../tile_grid/index.htm#tips" target="metadata">Tips for maintaining georeferencing in your projects</a>
            <li><a href="../tile_grid/index.htm#download" target="metadata">Download City-Wide Tile-Grid in various formats</a>
            <li><a href="../tile_grid/index.htm#datadictionary" target="metadata">Tile Grid Data Dictionary</a>
     </ul>


</ul> <!-- Closes Index -->
`
let header_htm = `
<div style="float: left; width: 50%; margin: 0px"><img src="../resources/images/headerimage_cropped.png" height="50px"></div>
<div style= "width: 50%; float: right; padding-top: 20px; font-size: 17px;">
<div class="rightflex">
<div><a href="https://github.com/CitySchema" target="github">GitHub</a></div> 
<div><a href="https://www.youtube.com/channel/UCPkMHdYokjSvoaljowhkjBQ" target="youtube">YouTube</a></div>
<div><a href="http://www.cityschema.org">Home</a></div>
</div></div>
`;

let index_head_htm = `<img height="100%" style="float:left; padding: 0px 5px 15px 5px;" src="../resources/images/favicon_lg.png"><p class="title" style="font-size: 28px;" >citySchema.org</p>`;

let index_footer_htm = `
<!-- div class="middleflex " >
   <div>Hide/Show: </div> 
   <div id="toggle_headings">Pages</div> 
   <div id="toggle_subjects">Headings</div>
 
  
</div-->
`

let footer_htm = `<div style="float: left;"><a style="color: black;" href="../resources/mit_license.txt">MIT License</a></div>
<div class="rightflex" style="color: red; font-size: 10pt; font-family: Arial, Helvetica, sans-serif;"><div><a href="http://pbcgis.com" target="_new">pbcGIS: cultivating spatial intelligence</a> <span style="font-size: 6pt; vertical-align: super;"> &reg;</span></div></div>`;




$(function() {
  $('#index-header').html(index_head_htm);
   $('#index').html(index_htm);
   $('#index-footer').html(index_footer_htm);
   $('#footer').html(footer_htm);
   $('#header').html(header_htm);

});

 