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
<span class="title">Templates & Tools</span>
<!--p>This site is not yet officially open.  Feel free to look around.  Watch this space for the grand opening.
If you are interested in being notified with announcements, email paul b cote (no spaces) at gmail.com.
</p -->  
<ul class="treeview">
<li class="chapter"><a href="../home/index.htm">Home Page</a></li>
    <ul class="verses">
    <li class="verse"><a href="../home/index.htm#challenges">City Modeling Challenges</a></li>
    <li class="verse"><a href="../home/index.htm#fab">Features and Benefits</a></li>
    <li class="verse"><a href="../home/index.htm#why">Coordination of Effort</a></li>
    <li class="verse"><a href="../home/index.htm#streetscapes">Streetscapes are part of our cultural heritage</a></li>
    <li class="verse"><a href="../home/index.htm#approach">Archival Asset Management Approach</a></li>
    <li class="verse"><a href="../home/index.htm#ack">Acknowledgements</a></li>
</ul>
<li class="chapter"><a href="../repocat/index.htm">Repository / Catalog </a></li>
  <ul class="verses">
  <li class="verse"><a href="../repocat/index.htm#principles">Guided by Sound Asset Management Principles</a></li>
  <li class="verse"><a href="../repocat/index.htm#web">Simple-Self-contained Web Publishing Solution</a></li>
    <li class="verse"><a href="../repocat/index.htm#github">Explore, Clone and Customize on GitHub.</a></li>
   </ul>
<li class="chapter"><a href="../model_collection/index.htm">Building Model Collection</a></li>
   <ul class="verses">
      <li class="verse"><a href="../model_collection/index.htm#overview">Conceptual Overview</a>
      <li class="verse"><a href="../model_collection/index.htm#interop">Interoperability Strategy</a>
      <li class="verse"><a href="../model_collection/index.htm#gdb">Geodatabase Format Collection and Catalog</a>
      <li class="verse"><a href="../model_collection/index.htm#obj">Open Source Format Collection and Catalog</a>
      <li class="verse"><a href="../model_collection/index.htm#datadictionary">Data Dictionary for Model Catalog</a> 
      <li class="verse"><a href="../model_collection/index.htm#status_domain">Model Status Dictionary</a>
      <li class="verse"><a href="../model_collection/index.htm#LOD">Levels of Detail and other Recommendations for Model Structure</a>

   </ul>

   <li class="chapter"><a href="../filesystem/index.htm">citySchema Modular File System</a></li>
   <ul class="verses">
      <li class="verse"><a href="../filesystem/index.htm#master">Cty3D_Master Folder</a></li>
      <li class="verse"><a href="../filesystem/index.htm#dev">Cty3D_Dev Folder</a></li>
   </ul>

   <li class="chapter"><a href="../model_management/index.htm">Managing the Building Model Collection in ArcGIS</a></li>
   <ul class="verses">

      <li class="verse"><a href="../model_management/index.htm#roles">Enterprise and Technical Viewpoints</a>
      <li class="verse"><a href="../model_management/index.htm#foundation">Foundation Concepts and Data Dictionary</a>
      <li class="verse"><a href="../model_management/index.htm#context">Filesystem Context </a>
      <li class="verse"><a href="../model_management/index.htm#tour">Tour of the Model Management Workspace Folder</a>
      <li class="verse"><a href="../model_management/index.htm#lifecycle">Lifecycle of a Model Management Workspace</a>
      <li class="verse"><a href="../model_management/index.htm#project">Tour of the ArcGIS Pro Project: Properties, Layers and Views</a>
      <li class="verse"><a href="../model_management/index.htm#initialize">Initializing the Workspace</a>
      <li class="verse"><a href="../model_management/index.htm#import">Import, Inspect and Enroll Models</a>
      <li class="verse"><a href="../model_management/index.htm#stage">Promote and Demote Models</a>
      <li class="verse"><a href="../model_management/index.htm#edit">Model Editing Workflows</a>
      <li class="verse"><a href="../model_management/index.htm#nextedition">Publishing the Next Edition Model Collection</a>. 
   </ul>

   <li class="chapter"><a href="../submissions/index.htm">Model Submission Guidelines</a></li>
   <ul class="verses">
      <li class="verse"><a href="../submissions/index.htm#lod">Level of Detail</a>
      <li class="verse"><a href="../submissions/index.htm#obj">Triangulated OBJ Format</a>
      <li class="verse"><a href="../submissions/index.htm#georef">Context and/or Geolocation</a>
      <li class="verse"><a href="../submissions/index.htm#sources">Source Material</a>
   </ul>

<li class="chapter"><a href="../tile_scheme/index.htm">Tile Scheme and Coordinate System</a></li>
    <ul class="verses">
            <li class="verse"><a href="../tile_scheme/index.htm#purpose" target="metadata">Tiling Strategy</a>
            <li class="verse"><a href="../tile_scheme/index.htm#coordinates" target="metadata">Metro Boston 3D Coordinate System</a>
            <li class="verse"><a href="../tile_scheme/index.htm#tips" target="metadata">Tips for maintaining georeferencing in your projects</a>
            <li class="verse"><a href="../tile_scheme/index.htm#download" target="metadata">Download City-Wide Tile-Grid in various formats</a>
            <li class="verse"><a href="../tile_scheme/index.htm#datadictionary" target="metadata">Tile Grid Data Dictionary</a>
     </ul>
     <li class="chapter"><a href="../terrain/index.htm">Modular Terrain Models</a></li>
    <ul class="verses">
      <li class="verse"><a href="../terrain/index.htm#anatomy">Anatomy of a DTM</a>
      <li class="verse"><a href="../terrain/index.htm#sources">Source Data</a>
      <li class="verse"><a href="../terrain/index.htm#process">The Process</a>
   </ul>
     <li class="chapter"><a href="../template/index.htm">Documentation Template</a></li>
     <ul class="verses">
             <li class="verse"><a href="../template/index.htm#early">An internal Link</a>
             <li class="verse"><a href="../template/index.htm#figures">A Right-Hand Figure</a>
             <li class="verse"><a href="../template/index.htm#midfig">A Middle Figure</a>
             <li class="verse"><a href="../template/index.htm#late">A Later Link</a>
             <li class="verse"><a href="../template/index.htm#triptic">A Three-Panel Figure</a>
             <li class="verse"><a href="../template/index.htm#table">Table Style</a>
             <li class="verse"><a href="../template/index.htm#tabtargets">Tab Targets</a>
             <li class="verse"><a href="../template/index.htm#blocks">Colored Text Blocks</a>
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

let index_head_htm = `<img height="100%" style="float:left; padding: 0px 5px 15px 5px;" src="../resources/images/favicon_lg.png"><p class="title">citySchema.org</p>`;

let index_footer_htm = `
<!-- div class="middleflex " >
   <div>Hide/Show: </div> 
   <div id="toggle_headings">Pages</div> 
   <div id="toggle_subjects">Headings</div>
 
  
</div-->
`

let footer_htm = `<div style="float: left;"><a style="color: black; font-size: 10pt;" href="../resources/mit_license.txt">MIT License</a></div>
<div class="rightflex" style="color: red; font-size: 10pt; font-family: Arial, Helvetica, sans-serif;"><div><a href="http://pbcgis.com" target="_new">pbcGIS: cultivating spatial intelligence</a> <span style="font-size: 6pt; vertical-align: super;"> &reg;</span></div></div>`;




$(function() {
  $('#index-header').html(index_head_htm);
   $('#index').html(index_htm);
   $('#index-footer').html(index_footer_htm);
   $('#footer').html(footer_htm);
   $('#header').html(header_htm);

});

 