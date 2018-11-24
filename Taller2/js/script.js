$(document).ready(function(){

	$('button.btn_buscar').click(function(){
		$.ajax({
			url: "xml/twitterRSS.xml",
			type: "GET",
			dataType: "xml",
			success: function(datos){
				$("div.tweets").html("");
				var info;
				var i = 0;
				var cont = 0;
				var contenido;
				var resultado;
				var datoAbuscar = $("#buscar_tweets").val();
				$(datos).find("item").each(function(){
					console.log(datoAbuscar);
					contenido = $(this).find("description").text();
					resultado = contenido.indexOf(datoAbuscar);
					console.log(resultado);
					if(datoAbuscar==""){
						window.alert("Valor invalido,ingrese de nuevo bien!");
						return false;
					}
					else{
						if(resultado!=-1){ 
						$("#tweets").html(datoAbuscar);
						var div_interno = '<div class="interno' + i +  '"></div>';
						$("div.tweets").append(div_interno);
						info = '<p>' + $(this).find('creator').text() + ' dijo: </p>';
						$('.interno'+i).append(info);
						info = '<p>' + contenido + '</p>';
						$('.interno'+i).append(info);
						info = '<p id="fecha">' + $(this).find("pubDate").text() + '</p>';
						$('.interno'+i).append(info);
						$('.interno'+i).append("__________________________________________________________________________________________________________________________");
						i = i + 1;
						cont = cont + 1;
						}
					}
				});
				if(cont == 0){
					window.alert("No existe esa informacion!");
					return false;
				}
			}

		});

	});

	$('button.btn_limpiar').click(function(){
		$('div#borrar').html("");
		$("#buscar_tweets").val("");
	});
});
	
