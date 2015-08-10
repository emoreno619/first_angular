$(function(){
	$('#vanillaI').keydown(function(event){
		$('#vanillaH').html('My name is: ' + $('#vanillaI').val())
	})
})