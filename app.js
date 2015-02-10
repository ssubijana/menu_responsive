// DECLARACIÓN DE LA FUNCION

function toggleNavigation(){
	$('.page-header').toggleClass('menu-expanded');
	$('.page-nav').toggleClass('collapse');
}

// EVENTOS DEL DOM
$(window).on('load',function(){
	$('.toggle-nav').click(toggleNavigation);
});
