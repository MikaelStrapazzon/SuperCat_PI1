$("#enviar").click(function()
{
	if( $( "#nome" ).val() )
	{
		$( "#nome" ).css( "border-color", "black" );
	}
	else
	{
		$( "#nome" ).css( "border-color", "red" );
		return;
	}

	if( IsEmail( $( "#email" ).val() ) )
	{
		$( "#email" ).css( "border-color", "black" );
	}
	else
	{
		$( "#email" ).css( "border-color", "red" );
		return;
	}

	if( $( "#problema" ).val() )
	{
		$( "#problema" ).css( "border-color", "black" );
	}
	else
	{
		$( "#problema" ).css( "border-color", "red" );
		return;
	}

	mostraDialogo();

	$( "#nome" ).val( "" );
	$( "#email" ).val( "" );
	$( "#problema" ).val( "" );
});

function mostraDialogo()
{
	if( $("#message").is(":visible") )
	{
		return false;
	}

	let cssMessage = "display: block; position: fixed; top: 0; left: 20%; right: 20%; width: 60%; padding-top: 10px; z-index: 9999; background-color: #CCB07C";
	let cssInner = "margin: 0 auto; box-shadow: 1px 1px 5px black;";

	let dialogo ='<div id="message" style="' + cssMessage + '">';
	dialogo +=		'<div alert-dismissable" style="'+cssInner+'">';
	dialogo +=			'<a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>';
	dialogo +=				'<strong>Mensagem enviada com sucesso!</strong><br>Responderemos o quanto antes';
	dialogo +=		'</div>';
	dialogo +=	'</div>';

	$("body").append(dialogo);
	$("#message").hide();
	$("#message").fadeIn(200);

	setTimeout(function() {
		$('#message').fadeOut(300, function(){
			$(this).remove();
		});
	}, 2000);
}

function IsEmail( email )
{
	var expressao = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);

	if( expressao.test( email ) )
	{
		return true;
	}
	else
	{
		return false;
	}
}