$(document).ready(function(){ //после загрузки документа выполняется
     var form = $('#form_buying_product'); //$ означает, что к элементу нужно обращаться как к элементу jQuery
     console.log(form);               //обращаемся к элементу по id (#)
     form.on('submit', function(e){ // e - event отправки формы
        e.preventDefault(); //отменяем отправку формы
        console.log('123');
        var nmb = $('#number').val(); //получаем значение из элемента с id=number
        console.log(nmb);
        var submit_button = $('#submit_btn');
        var product_id = submit_button.data('product_id'); //считываем значения дата-атрибутов с product.html
        var product_name = submit_button.data('name');
        var product_price = submit_button.data('price');
        console.log(product_id);
        console.log(product_name);
        console.log(product_price);

        var data = {}; // ajax переменные, которые отпр. на сервер
       data.product_id = product_id;
       data.nmb = nmb;
       var csrf_token = $('#form_buying_product [name="csrfmiddlewaretoken"]').val();
       data["csrfmiddlewaretoken"] = csrf_token; // токен для Django, чтобы делать POST запрос

        var url = form.attr("action"); //адрес на который надо отправлять POST запрос , берем через атрибут action на форме

       console.log(data)
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            cache: true,
            success: function (data){
                console.log("OK");
                console.log(data.products_total_nmb)
                if (data.products_total_nmb){
                    $('#basket_total_nmb').text(" ("+data.products_total_nmb+")");
                }
         //       $('#likes_list').html();
         //       $.each(data, function (key, value) {
         //           $('#likes_list').append('<p>'+value.username+'</p>')
         //       });
            }, error: function(){
                console.log("error")
            }
        })



        $('.basket-items ul').append('<li>'+product_name+', '+ nmb +'шт. по ' + product_price + 'руб '+
        '<a class="delete-item" href="">x</a>'+'</li>');
     });

     function showingBasket(){
        $('.basket-items').toggleClass('hidden'); //toggleClass добавляет класс, если отсутствует,
        // убирает если присутствует
     };

     $('.basket-container').on('click', function(e){
        e.preventDefault();
        showingBasket();
     })

     $('.basket-container').mouseover(function(){
         showingBasket();
     })

     //$('.basket-container').mouseout(function(){
       //  showingBasket();
     //});

     $(document).on('click','.delete-item', function(e){
        e.preventDefault();
        $(this).closest('li').remove();
     })
});