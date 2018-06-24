//Getters
$("ul").on("click","li", function(){
	$(this).toggleClass("selected");
})

$("ul").on("click","span", function(){
	$(this).parent().fadeOut("1000", function(){
		$(this).remove();	
	});
});

$("input[type='text']").on("keypress",function(event){
	if (event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+newTodo	+"</li>");
	}
});

$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle();
});