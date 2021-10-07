// THis file sets up a lot of constants used in the Metro3D catalog
// Notice that the quotation marks for these multi-line text constants 
// are back-tics.  Located at the upper left corner of most american keyboards
// Paul Cote paulbcote@gmail.com


let context = `
<h2>Context</h2>
<p>[Your Agency Name Here] maintains a 3D model of the city as a visualization and analytical tool for understanding ideas related to the future of neighborhoods.  The city model is constructed of several components: Terrain, Groundplan, and 3D models of buildings.  Each of these components is
    shared in formats intended to facilitate collaboration between diverse communities who have an interest in understanding places in the city as they have changed or as they may be changed.  
</p> 
`;

let banner = `<h1 class="banner">Your City Model</h1>`;

let nav3d = `
<a href="./index.htm" target="download">Data Download</a>
<a href="./about.htm">About the Project</a>
<a href="./doc_index.htm" target="index">Documentation Index</a>
`
let coordsys = `
<h2>Coordinate System</h2>

	<p><b>Projected Coordinate System:</b> State Plane Massachusetts Mainland (Feet),  North American Datum of 1983.
	<br>
    <b>Vertical Coordinate System for 3D data:</b> North American Vertical Datum, 1988 (NAVD 88) Feet (Height)
	<br><b>Origin / Offset / Insertion Point: </B>
	<br>The origin of the Metro 3D Boston coordinate system serves as the insertion point for models.
		 <UL>
			 <LI><b>State Plane Coordinates:</b>
			<ul> <li><b>X:</b>731,100 feet
				 <li><b>Y:</b>2,902,900 feet
			</ul>
		<li><b>Geographic:</b>
		<ul><li><b>Longitude:</b> 71.223391 W 
			<li><b>Latitude:</b> 42.213379 N 
			</ul>
		</ul>
  <p>For more details about the <b>Metro Boston 3D Coordinate Referencing System</b> and how to coordinate your projects with city-model resources, see the <a href="./tile_grid.htm" target="metadata">Boston 3D Tile Grid</a> page.
`

let disclaimer = `
<br>
<p> <a href="./contact_us.htm" target="contact">Contact Us</a></p>
<br>
<hr>    
<h3>Disclaimer</h3>
    <p>
	<em><span style="font-size:14px;">Disclaimer:&nbsp;</span><span style="font-size: small;">[Your agency name here] (Agency) makes no representations or guarantees about the accuracy, completeness, or currency of the information provided. The Agency provides this data as is and with all faults, and makes no warranty of any kind. Each user is responsible for determining the suitability of the data for their intended use or purpose. Neither the City, the Agency nor its affiliates, employees, or agents shall be liable for any loss or injury caused in whole or in part by use of any data obtained from this website. The geospatial data is updated and modified on a regular basis and users are encouraged to report any errors to the Agency.</span></em></p>
`;


$(function() {
    console.log("ready!");
    $("#banner").html(banner);
    $("#context").html(context);
    $("#nav3d").html(nav3d);
	$("#coordsys").html(coordsys);
    $("#disclaimer").html(disclaimer);

});