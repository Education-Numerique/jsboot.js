jsBoot.pack('jsBoot.ui', function() {
  /*global $, console*/
  'use strict';

  // XXX build that with the chosen plugin
  // http://harvesthq.github.com/chosen/

  if (typeof $().chosen == 'undefined')
    console.warn(' [jsBoot.ui]: Chosen is not loaded - enhanced form selects support disabled');
  else
    this.select = function(selector, opts) {
      return $(selector).chosen(opts);
    };
});
/*
$(".chzn-select").chosen({
    no_results_text: "No results matched",
    allow_single_deselect: true
  });


$("#form_field").chosen().change(function(){
});

<select data-placeholder="Choose a country..." style="width:350px;" multiple class="chzn-select">
Note: on single selects, the first element is assumed to be selected by the browser.
To take advantage of the default text support, you will need to include a blank option as the
first element of your select list.


*/
