$(document).ready(function() {
	$.ajax({
		type: "get",
		url: "EriChurch.json",
		beforeSend: function() {
			$("#team").html("Loading...");
		},
		timeout: 10000,
		error: function(xhr, status, error) {
			alert("Error: " + xhr.status + " - " + error);
		},
		dataType: "json",
		success: function(data) {
			$(".churchs").html("");
			$.getJSON("EriChurch.json", function(data) {
				$.each(data, function() {
					$.each(this, function(key, value) {
						$(".churchs").append(
							"<h3>" + value.name + "</h3>" + 
							 "<p><strong>Address: </strong>" + value.address + "</p>" +
							 "<p><strong> Phone:</strong>" + value.phone + "</p>" + "<br><br>"
						);
					});
				}); 
			});
		}
	});
});