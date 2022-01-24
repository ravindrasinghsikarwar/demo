/**
 * Movie seach ajax jquery
 *  
 */
// jQuery on DOM is ready. ------------------------------------------------------------------------------------------------
jQuery(document).ready(function($) {
	/**
	* When user clicks on enter key run ajax...
	*
	*/
	$(document).keypress(function(event) {
		if (event.key === "Enter") {
			$('#search-button').click();
			return false;
		}
	});
	/**
	* When user clicks on search icon...
	*
	*/
	$('#search-button').click( function(event) {
		/**
		 * Prevent default action, so when user clicks button he doesn't navigate away from page
		 *
		 */
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}


		// Collect data from inputs
		var search_key  = $('#MovieSearch').val();

		/**
		 * AJAX URL where to send data
		 * (from localize_script)
		 */
		
		$.ajax({
			url: "https://www.omdbapi.com/?apikey=4d97756&s="+search_key,
			method: "GET",
			dataType: "json",
			beforeSend: function() {    
				$('#Loader').removeClass("d-none"); //Display loader
			},
			success: function(data) {
				var str = "";
				var count = 1;
				if (typeof data.Search !== 'undefined' && data.Search.length > 0) {
					for(var i= 0; i < data.Search.length; i++){
						str +='<tr>';
						str +='<td class="number text-center">'+count+'</td>';
						str +='<td class="image"><img src="'+data.Search[i].Poster+'" alt="'+data.Search[i].Title+'"></td>';
						str +='<td class="title"><strong>Title : </strong>'+data.Search[i].Title+'</td>';
						str +='<td class="rate text-right"><strong>Type : </strong>'+data.Search[i].Type+'</td>';
						str +='<td class="price text-right"><strong>Year : </strong>'+data.Search[i].Year+'</td>';
						str +='</tr>';
						count++;
					}
				} else {
					str +='No result found for this keyword.';
				}
				$("table.table-hover tbody").html(str);
				//Hide Loader
				setTimeout(function () {
					$('#Loader').addClass("d-none");
				}, 1000);
				//Highlight search keyword
				var myColors = ['red', 'green', 'blue', 'yellow'];
				//check if searching keyword exist in array
				var result = myColors.findIndex(item => search_key.toLowerCase() === item.toLowerCase());
				
				var custfilter = new RegExp(search_key, "ig");
				if (result >= 0) {
					var repstr = "<span style='background:" + search_key + "'>" + search_key + "</span>";
				} else {
					var repstr = "<span style='background: #00FF00;'>" + search_key + "</span>";
				}

				if (search_key != "") {
					$('td.title').each(function() {
						$(this).html($(this).html().replace(custfilter, repstr));
					})
				}
			}
        });
	});
});
