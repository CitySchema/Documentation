// This file provides the central location for data dictionary information for the BPDA 3D project. 
// It is encoded as html snippets that are assigned to javescript variables.  These snippets can be
// included on any web page simply by inserting a <div id="name"> where name is the same as the
// variabgle that you see here.


let datadictionary =  `
<br><hr>
<h2>3D Model Attribute Data Dictionary</h2>
    <p>Note: field names have 10 or few characters to retain compatibility with ESRI Shapefile format. </p>

<table class="dictionary">
    <tr>
        <td colspan="2"><b>Real-World Structure Attributes:</b> These are attributes that refer to the real-world structure represented by the model.  </td>
    </tr>
    <tr>
    <td width="20%"><b>Name</b><br>Text</td>
    <td>The name of the structure.  If the model reflects one phase of a development project, you can mention it here.</td>
    </tr>
    <tr>
    <td><b>Struct_ID</b><br>Text</td>
    <td>If there is a table about structures, this would be a reference to the primary key of that table.</td>
    </tr>
    <tr>
    <td><b>Struct_Type</b><br>Text</td>
    <td>Type of structure. See domain values.  Refers mostly to the physical aspect of the structure.  
    <br>Must have one of the following values: Building, Bridge, Wall</td>
    </tr>
    <tr>
    <td><b>Struct_Use</b><br>Text</td>
    <td>Use of the structure.  More specific than Type.  Refers to the functional aspect of the structure. <br>
        Examples: School, Library, Civic, Residential, Commercial, Subway Headhouse, Bus Shelter</td>
    </tr>
    <tr>
    <td><b>Struct_Lnk</b><br>Text</td>
    <td>A URL that provides more information about the structure.  
        <br>For example, a Wikipedia page or a library branch page.</td>
    </tr>
    <tr>
    <td><b>Project_ID</b><br>Text</td>
    <td>The Project ID in the BPDA’s Article 80 Development log.</td>
    </tr>
    <tr>
    <td><b>ProjectLnk</b><br>Text</td>
    <td>A URL linking model to the BostonPlans landing page for the project if applicable. </td>
    </tr>
</table>
<br>

<table class="dictionary">
    <tr>
        <td colspan="2"><b>Model Status Attributes: </b>: These attributes are used to determine whether or how the model should appear in various scenarios involving the time period, or planning context.  These are the attributes most often used for controlling the styling of models and the attributes most frequently updated in the model management workflows.   </td>
    </tr>
    <tr>
    <td width="20%"><b>Status</b><br>Text</td>
    <td>A phase in the lifecycle for proposed, built, demolished or renovated structures.  Values of Status are taken from the <b>Status_Code</b> domain (see below)</td>
    </tr>
    <tr>
    <td><b>Appear_Dt</b><br>Date</td>
    <td>Date of the latest observation or document that confirms the current value of Status.  The Appear date should refer to the same document referred to in the Appear Source fields.
    </td>
    </tr>
    <tr>
    <td><b>AppearSrc</b><br>Text</td>
    <td>The observation or document and the date that confirms the Appear_Dt.  
        <br>Example: “Google Earth“  <i>Note that the date for the document named here is inferred by the value of <b>AppearDt</b></i>
        </td>
    </tr>
    <tr>
    <td><b>Disapp_Dt</b><br>Date</td>
    <td>When the model would be turned off if a time-slider were used.  Usually the date of the earliest observation that confirms that a structure has been demolished or substantially renovated. In the case of models whose status is “Modified”, this date refers to the date when the modification took place.</td>
    </tr>
    <tr>
    <td><b>DisappSrc</b><br>Text</td>
    <td>A short reference to the document that established the Dissap_Dt.  The Disappear Date should refer to the same document referred to in the Disappear Source fields.  
        <br>Example: “Nearmap“, 
    <p>For models with status of Proposed or Permitted Demolish, this field can be used to record observations that the structure is still there.  
    <br> Example: "Building still intact per Nearmap, 03/27/2021" 
        </td>
    </tr>
</table>
<br>
<table class="dictionary">
    <tr>
        <td colspan="2"><b>Model Provenance Attributes:</b>Provide the information for understanding the provenance of models as documents that have authors, contributors sources and issue dates. </td>
    </tr>
    <tr>
    <td width="20%"><b>Model_ID</b><br>Text</td>
    <td>A unique ID for each model.  The ID is a random arrangement of seven upper-case letters and numerals prefixed with BOS_ . </td>
    </tr>
    <tr>
    <td><b>Model_Cred</b><br>Text</td>
    <td>This short reference to the person or enterprise responsible for creating the model.</td>
    </tr>
    <tr>
    <td><b>Model_Batch</b><br>Text</td>
    <td>A folder within the Archive/ModelWork folder where the original source file can be found. </td>
    </tr>
    <tr>
    <td><b>Model_File</b><br>Text</td>
    <td>Name of the original source file for the model.</td>
    </tr>
    <tr>
    <td><b>Model_Dt</b><br>Date</td>
    <td>Date when the model was created. This value should reflect the date that the model was enrolled in the collection.  In the case of modified models, it should reflect the date that the modified model was enrolled. This field will be used to discover updated models.</td>
    </tr>
    <tr>
    <td><b>ModelNote</b><br>Text</td>
    <td>This is the text that would appear as the description of the model as a historical asset.  
    In the case of hand-made models, this note might describe the context of the model'screation.  <br>Examples: <ul>
    <li>"Prepared for the Central Artery and Tunnel Project."
    <li>"Prepared for a Harvard Design School studio to re-envision City Hall Plaza, conducted by Professor Alex Krieger."
    </ul>
    This note might also reflect technical aspects of the model, for example, if the model has been modified.
    </td>
    </tr>
    <tr>
    <td><b>Model_LOD</b><br>Double</td>
    <td>Level of detail.  See table at <a href="#LOD">Levels of Detail</a></td>
    </tr>
    <tr>
    <td><b>Survey_Src</b><br>Text</td>
    <td>The observations that were used for establishing the shape of the model.  Should describe the responsible party and the methodology where possible. 
        <br>Examples:  
        <ul><li>“Photogrammetry by Infotech Spring 2011”
            <li>“Model hand-made from design documents by Sasaki and Associates January 2018"
        </ul>
        </td>
    </tr>
    <tr>
    <td><b>Survey_Dt</b><br>Date</td>
    <td>The date that the model geometry was captured or published.</td>
    </tr>
</table>
<br>

<table class="dictionary">
    <tr>
        <td colspan="2"><b>Model Geometric Attributes:</b>These attributes are automatically generated by the model enrollment process.  
        <p>The centroid positions are critical for applications that must translate the coordinates of models form the shifted Mass state Plane coordinates to geographic coordinates with rotation.
        <p>The elevation information may be used to convert model footprints to LOD1 models that may be used as place-holders in applications where efficienciy is more critical than true 3D. 
        </td>
    </tr>
    <tr>
    <td width="20%"><b>Centr_Lat</b><br>Double</td>
    <td>Latitude of the model centroid (2D) in decimal degrees. Assuming WGS84 earth model. </td>
    </tr>
    <tr>
    <td><b>Centr_Lon</b><br>Double</td>
    <td>Longitude of the model  Centroid (2D) in decimal degrees. Centroid coordinates calculated by ArcGIS using the “Inside” option.</td>
    </tr>
    <tr>
        <td width="20%"><b>Centr_X_Ft</b><br>Double</td>
        <td>X coordinate (Feet) of the model centroid in the Metro Boston 3D coordinate system. </td>
        </tr>
        <tr>
        <td><b>Centr_Y</b>Double<br></td>
        <td>Y coordinate (Feet).  See above.  </td>
        </tr>
    <tr>
    <td><b>Min_El_Ft</b><br>Double</td>
    <td>The lowest elevation of the  model.  This may be below ground. </td>
    </tr>
    <tr>
    <td><b>Max_El_Ft</b><br>Double</td>
    <td>Elevation of the highest point of the model.</td>
    </tr>
    <tr>
    <td>Gnd_El_Ft<b></b><br>Double</td>
    <td>The elevation where the model intersects the ground.  (this measure uses vertices of the 2D footprint to sample elevations. The elevation value is the lowest value from the Infotech DTM that coincides with a vertex from the model's 2d footprint.</td>
    </tr>
    <td><b>Height_Ft</b><br>Double</td>
    <td>The relative height from the Max Elevation of the model to the lowest corner.</td>
    </tr>
    <tr>
    <td><b>Tile_ID</b><br>Text</td>
    <td>ID for the tile that the model centroid falls within. </td>
    </tr>
    <tr>
    <td><b>Parcel_ID</b><br>Text</td>
    <td>The Parcel ID for the parcel that falls under the centroid of the model’s footprint. </td>
    </tr>
    <tr>
    <td><b>Parcel_Lnk</b>Text<br></td>
    <td>A url that opens the Assessor’s web map centered on the parcel that identified by the Parcel_ID.</td>
    </tr>
    <td><b>GoogleLnk</b>Text<br></td>
    <td>A url that brings up an oblique view of the building in Google Streetmap</td>
    </tr>
    <tr>
    <td><b>NearMapLnk</b><br>Text</td>
    <td>A hyperlink that brings up an oblique view of the building in NearMap.  Requires a NearMap login.</td>
    </tr>

</table>
<br>

<table class="dictionary">
    <tr>
        <td colspan="2"><b>Edit Tracking Fields:</b> Publishing a new edition of the model collection using ArcGIS involves generating new multipatch feature classes.  When these are initialized, the automatically assigned Record Initialized and Record Modified fields are wiped out.  These fields are critical for model management.  It is also necessary to preserve the Edit_Date and Edit_Action fields for applications that need to know the last deliberate action that was taken. 
        </td>
    </tr>
    <tr>
    <td width="20%"><b>RecInitDt</b><br>Date</td>
    <td>The time stamp for the creation of the table row.  This defaults to the time that the feature class was issued. Automatically generated.</td>
    </tr>
    <tr>
    <td><b>RecInitUsr</b><br>Text</td>
    <td>The username for the person who initialized the row. Automatically generated.</td>
    </tr>
    <td width="20%"><b>RecModDt</b><br>Date</td>
    <td>The time stamp for the last modification of the table row. Automatically generated.</td>
    </tr>
    <tr>
    <td><b>RecModUsr</b><br>Text</td>
    <td>The username for the person who last modified the row. Automatically generated.</td>
    </tr>
    <tr>
    <tr>
    <td><b>Editor</b><br>Text</td>
    <td>The user name for the person who did the last meaningful change to this record. NOT Automatically generated.</td>
    </tr>
    <tr>
    <td><b>Edit_Dt</b><br>Date</td>
    <td>The timestamp of the last deliberate edit. NOT Automatically updated</td>
    </tr>
    <tr>
    <td><b>Edit_Action</b><br>Text</td>
    <td>Explanation of the last deliberate edit  Not automatically updated</td>
    </tr>
    <tr>
    <td><b>QA_Flag</b><br>Text</td>
    <td>Short code used to redirect models to procedures in the model management process.  Pre-coded domain consisting of: <b>3D Edit, Promote Status, Demote Status, Stop, Alt  </td>
    </tr>
    <tr>
    <td><b>QA_Issue</b><br>Text</td>
    <td>Use this field to explain any issues with the model or catalog information that may need addressing in the model management process. </td>
    </tr>

</table>
`


let status_domain =  `

<h2 id="status_domain">Model Status Domain</h2>
<p>The Model Status attribute is a category scheme that reflects the life-cycle state of the the building or proposal that the model represents.  This field controls when the model is rendered in applications.  
</p>
<p>The GIS-Based model management applications use Model Status to segment the collection into feature classes that streamline applications that may be focused on the current, proposed or historic views.
</p>
<table class="dictionary">
    <tr>
    <td width="20%"><b>Status</b></td>
    <td width="20%"><b>Feature Class</b></td>
    <td width="60%"><b>Description</b></td>
    </tr>
    <tr>
        <td><b>Current</b></td>
        <td>Active</td>
        <td>This status is for models of existing structures that are based on measurements.</td>
    </tr>
    <tr>
    <td><b>Construction Complete</b></td>
    <td>Active</td>
    <td>Hand-made models of proposals. The shell of the building including external finishes appear to be complete.  These models remain in the Active feature class until they are replaced with measured models. 
     </td>
   </tr>
   <tr>
   <td><b>Under Construction</b></td>
   <td>Active</td>
   <td>The foundation (or more) of the new building is visible.</td>
</tr>
<tr>
    <td><b>Permitted Demo</b></td>
    <td>Active</td>
    <td>The model should not be rendered when portraying Permitted projects.  The building still exists according to the latest observation. </td>
</tr>
<tr>
    <td><b>Approved Demo</b></td>
    <td>Active</td>
    <td>The model should not be rendered when portraying Approved projects.  The building still exists according to the latest observation. 
    </td>
</tr>

<tr>
<td><b>Demolished</b></td>
<td>History</td>
<td>A model that has been completely replaced in the Active collection because the real-word structure has been demolished. </td>
</tr>
<tr>
    <td><b>Modified</b></td>
    <td>History</td>
    <td>Model has been partially replaced in the Active collection because the real-world structure(s) represented have been substantially modified due to renovation or demolition of attached structures. The replacement model may be a revised version of this one, which has pieces cut out of it to make room for the models of new buildings or building parts.  </td>
</tr>

    <tr>
        <td><b>Board Approved</b></td>
        <td>Proposed</td>
        <td>The building project has been approved by the planning board. </td>
    </tr>
    <tr>
        <td><b>Permitted</b></td>
        <td>Proposed</td>
        <td>The building project has recieved construction permits. </td>
    </tr>
    

    <tr>
    <td><b>Under Review</b></td>
    <td>Internal</td>
    <td>The model represents a proposal that is under review by the planning board.  </td>
    </tr>

<tr>
    <td><b>Pre-File</b></td>
    <td>Internal</td>
    <td>The model is a draft that has not yet been formally submitted for review. </td>
</tr>
<tr>
<td><b>Internal Study</b></td>
  <td>Internal</td>
  <td>The model represents a completely fictitious scenario not an official proposal </td>
</tr>
<tr>
  <td><b>Proposal Superseded </b></td>
  <td>Internal</td>
  <td>The model represents a proposal that has been superseded by a new proposal.  </td>
</tr>
<tr>
<td><b>Proposal Built </b></td>
  <td>Internal</td>
  <td>The model represents a proposal that has been built.  The model has been replaced by a measured model.  </td>
</tr>



    <tr>
    <td><b>Retired</b></td>
    <td>Retired</td>
    <td>The retired feature class preserves models that are redundant with other models of the same structure.  The real-world structure is represented perfectly well by another model in another feature class. The models are preserved for the purposes of possible recovery and as they reflect a valuable record of observations or creative work.</td>
</tr>

<tr>
<td><b>Alt Model</b></td>
<td>Alt</td>
<td>The alt feature class holds models that represent buildings that are of a higher level of detail -- such as textures.  As opposed to Retired models, these are usually hand-made documents. 
 </td>
</tr>
<tr>
<td><b>Expunge</b></td>
<td>N/A</td>
<td>If a model is an exact duplicate of another model that is in the active collection or the new models pipeline, or if the model is corrupt and being replaced by a repaired model then setting its Status toExpunghed will cause it to be diregarded in the process of building the next edition of the collection.  This is the way to "delete" a model while retaining the ability for someone to go back and understand what it was and why it was deleted.   
</td>
</tr>

    </table>

`

let lod_dictionary =  `
    <h2 id="models">Guidelines for 3D Model Structure and Level of Detail</h2> 
    <p>
        The architecture of this schema, where we use one Multipatch or .Obj file to represent a building, bridge or wall is well suited to handling mesh objects that represent only the exterior shell of the structure.  It is preferable that the mesh be a closed “solid” that has all of its faces oriented toward to outside.  Within this guideline, there are many possibilities for levels of detail – as listed in the table below.  
    </p>
    <ul>
    <li>    Models that are not closed or include two-dimensional planes with single faces are problematic as Multipatches and can behave unpredictably with regard to shading, importing, and exporting.
    <li>    We are unable to publish models that incorporate textures or materials at this time. We may be able to represent these as multipatches, but the textures or materials will have to come off when the models are exported to SketchUp or OBJ.  This is an issue that we hope to address in coming revisions. 
    <li>    Level of detail 3 is preferred.  If models of building shells may be divided when building parts have distinct functions, like parking structures.  Or when parts have different construction dates.
    <li>   Models of LOD 4 or greater require a lot of work to assimilate and may be impossible to clean up to the point of working with our system. 
    </ul>    
    
    
    <h2 id="LOD">3D Model Levels of Detail </h2>
    <p>These levels of detail are compatible with the CityGML LOD scheme but are sub-divided according to the types of rough massing models that we commonly see shared by architects and hobbyists who share models onsites like 3D Warehouse.
    </p>
    <table class="dictionary">
        <tr>
          <th>Code</th>
          <th>Description</th>
         </tr>
          <tr>
          <td>LOD 0</td>
          <td>Polygon Footprint</td>
         </tr>
         <tr>
            <td>LOD 1</td>
            <td>Extruded Polygon Footprint</td>
           </tr>
           <tr>
            <td><p>LOD 1.5</p></td>
            <td>Massing model made from extruded roof prints when a structure with parts that have different heights</td>
           </tr>
           <tr>
            <td><p>LOD 2</p></td>
            <td><p>3D roof detail, extruded to the ground along drip-line.</p></td>
           </tr>
           <tr>
            <td>LOD 3</p></td>
            <td>Model portrays undercuts where appropriate. E.g. entryways, porticos or arcades.</td>
           </tr>
           <tr>
            <td>LOD 3.25</td>
            <td>Architectural details indicated by materials or image textures.</td>
           </tr>
           <tr>
            <td>LOD 3.5</td>
            <td>3.5	Building model expresses location of windows and entryways as 3D indentations</td>
           </tr>
           <td>LOD 4</td>
           <td>Model is divided horizontally as individual stories</td>
        </tr>
        <td>LOD 4.5</td>
        <td>Model divides interior spaces: rooms or zones.</td>
        </tr>
        </table>
    `;

    $(function() {
        console.log("ready!");
        $("#datadictionary").html(datadictionary);
        $("#status_domain").html(status_domain);
        $("#lod_dictionary").html(lod_dictionary);
    });
