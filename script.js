$(document).ready(function(event){

    var pokemon = [];
    var pokemonClicked;
    var id;
    var types;

    function getPokemon(){
        for(var k=1;k<=151;k++){
            pokemon[k] = '<img id="' + k + '" src="http://pokeapi.co/media/img/' + k + '.png">';
            $('#pokemon').append(pokemon[k]);
        }
    }
    getPokemon();

    $('img').hover(function(){
        id = $(this).attr("id");
        $.get("http://pokeapi.co/api/v1/pokemon/" + id + "/" ,function(res){
            $('#pokemonBox').html('');
            $('#pokemonBox').append('<h1 class="name">' + res.name + '</h1>');
            console.log(res);
            $('#pokemonBox').append('<img src="http://pokeapi.co/media/img/' + id + '.png">');
            $('#pokemonBox').append('<h4>Types</h4><br><ul>');

            for(var k=0;k<res.types.length;k++){
                $('#pokemonBox').append('<li>' + res.types[k].name + '</li>');
            }
            $('#pokemonBox').append('<br></ul><h4>Height</h4><br>');
            $('#pokemonBox').append(res.height + '<br></br>');
            $('#pokemonBox').append('<h4>Weight</h4><br>');
            $('#pokemonBox').append(res.weight + '<br>');
        },"json");
    });
    
});