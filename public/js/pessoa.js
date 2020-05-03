$(document).ready(function(){

    $('.listar_linha').click(function(){
        if($(this).hasClass('selected') != true){
            $(this).addClass('selected')
            $(this).css("background", "RoyalBlue")
            $(this).css("color", "white")
            
            let id = $(this).find('td:first-child').text()
            $(this).append('<input type="hidden" class="test" name="pessoas[]" value=' + id + '>')

            $("#excluir").css("display", "")

            let pessoas = $("input[name='pessoas[]']")
            if(pessoas.length == 1){
                $("#editar").css("display", "")
            }else{
                $("#editar").css("display", "none")
            }
        }
        else{
            $(this).removeClass('selected')
            $(this).css("background", "white")
            $(this).css("color", "black")
            $(this).find('input').remove()

            let pessoas = $("input[name='pessoas[]']")

            if(pessoas.length == 0){
                $("#excluir").css("display", "none")
                $("#editar").css("display", "none")
            }
            else if(pessoas.length == 1){
                $("#editar").css("display", "")
            }
            else{
                $("#editar").css("display", "none")
            }
        }
    })

    $('#editar').click(function(){
        let pessoas = $("input[name='pessoas[]']").map(function(){return $(this).val();}).get(); //array
        window.location.href = "/pessoa/"+ pessoas[0]
    })  
    

    $('#excluir').click(function(){
   
        let pessoas = $("input[name='pessoas[]']")  //objeto
        //let pessoas = $("input[name='pessoas[]']").map(function(){return $(this).val();}).get(); //array
        
        $.ajax({
            url : "/pessoas/apagar",
            type : 'post',
            data : pessoas, //enviando objeto
            success: function(res){
                alert(res.msg)
                window.location.href = "/pessoas"
            }
        });
    })  
})