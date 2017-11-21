
$(document).ready(function(){
    $('input[type="submit"]').on("click",function(event){
        event.preventDefault();

        var first_name = $('#first_name').val(); //first_name
        var answer = $('input[name="answer"]:checked').val();
        var type = $('input[name="type"]:checked');
        var types = new Array();
        var textarea = $('#textarea').val();

        for (var i = 0; i < type.length; i++) {
          var temp_type = type[i];
          types.push(temp_type.value);
        }

        var payload = {
          'first_name':first_name,
          'answer':answer,
          "types": types,
          'textarea': textarea
        }

        $.post('/find', payload);
        $.get('/find', payload);



    });
});



/*$.get('find.html',{'last_name':last_name});
$.post('find.html',{'last_name':last_name});
$.post('find.html',{'gender':gender});
 /*$.get('find.html',{'femenino':femenino});
        $.post('find.html',{'femenino':femenino});
        $.get('find.html',{'masculino':,masculino});
        $.post('find.html',{'masculino':masculino});/*

        var payload = {
          'first_name':first_name,
          'last_name':last_name,
          'gender':gender,
          'interests': interests.map(function(i, element){
              return $(element).val();
          })
        };





        $.get('find.html', payload);
        $.post('find.html', payload);


/*  console.log("Hiciste click!", $('#first_name').val());
  console.log("Hiciste click!", $('#last_name').val());
  console.log("Hiciste click!", $('input[name="gender"]:checked').val());
  console.log("Hiciste click!", $('input[name="interests"]:checked').val());*/
/*var first_name = $('input[name="first_name"]').val();

String RadioValues= request.getParameter("gender");
String checkboxValues = request.getParameter("Intereses");

console.log(first_name);
event.preventDefault();*/
/*$.ajax('find.html', {
  method: 'post',
  data: {
    'first_name': first_name
  }
});*/
