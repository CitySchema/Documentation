let index_htm = `
<span class="title">Techniques & Tools</span>
<ul class="treeview">
<li class="chapter"><a href="../home/index.htm">cityScheme Home</a></li>
    <ul class="verses">
        <li><a href="../home/index.htm#late">Home late!</a></li>
        <li>List item two</li>
        <li>List item three</li>
      </ul>

<li class="chapter"><a href="../template/index.htm">Template</a></li>
    <ul class="verses">
        <li><a href="../template/index.htm#early">Early Link</a></li>
        <li><a href="../template/index.htm#late">Late Link</a></li>
        <li>List item three</li>
      </ul>

<li class="chapter"><a href="../dummy/index.htm"> Section 3</a></li>
  <ul class="verses">
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
    <li> Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya doing? Hi how ya
  </ul>
</ul>

`
let header_htm = `
<div class="rightflex">
<div>GitHub</div> 
<div>YouTube</div>
<div>Home</div>
</div>
`;

let index_head_htm = `<img height="100%" style="float:left;" src="../resources/images/cityschema_favicon_sm.png"><p class="title">citySchema.org</p>`;

let index_footer_htm = `
<div class="rightflex" style="color: green;">Expand / Collapse All</div>
`

let footer_htm = `<div class="rightflex" style="color: red;">cultivating spatial intelligence [tm]</div>`;




$(function() {
  $('#index-header').html(index_head_htm);
   $('#index').html(index_htm);
   $('#index-footer').html(index_footer_htm);
   $('#footer').html(footer_htm);
   $('#header').html(header_htm);

});

 