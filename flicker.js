$(document).ready(function(){
	var url	= "https://api.flickr.com/services/feeds/photos_public.gne?id=171034585@N07&format=json&jsoncallback=?&tags=AddisHiwot"
	var url1 = "https://api.flickr.com/services/feeds/photos_public.gne?id=171034585@N07&format=json&jsoncallback=?&tags=HolyTrinity"
	var url2 = "https://api.flickr.com/services/feeds/photos_public.gne?id=171034585@N07&format=json&jsoncallback=?&tags=AnkiseMiheret" 
			  
	$.getJSON( url, function(data) {
		var html = "";
		$.each(data.items, function(i, item) {
			var temp = item.media.m;
			html += '<a href=' + '"' + temp + '"' + " ><img src=" + item.media.m + "></a> <br>";
			
		}); 
		
		$(".AddisHiwot").html(html);
	});	

	$.getJSON( url1, function(data) {
		var html = "";
		$.each(data.items, function(i, item) {
			var temp = item.media.m;
			html += '<a href=' + '"' + temp + '"' + " ><img src=" + item.media.m + "></a> <br>";
			
		}); 
		
		$(".HolyTrinity").html(html);


	});	

	$.getJSON( url2, function(data) {
		var html = "";
		$.each(data.items, function(i, item) {
			var temp = item.media.m;
			html += '<a href=' + '"' + temp + '"' + " ><img src=" + item.media.m + "></a> <br>";
			
		}); 
		
		$(".AnkiseMiheret").html(html);
	});	
});
