let mainSection = $("[id^=MainProduct-template--]").parent('section');
mainSection.css('background', 'linear-gradient(0deg, rgba(255,255,255,1) 53%, rgba(250,247,242,1) 95%, rgba(247,243,236,1) 100%)');

let varisntSelect = $('.product-form__input--dropdown select');
let [firstSelect, secondSelect] = varisntSelect;

$(firstSelect).change(function(event) {
    if(!$('.main-product-item').hasClass('product-item_active')) {
        secondSelect.value = 'no'; 
    } else {
        console.log(event.target.value)
        secondSelect.value = event.target.value;    
    }
});

$('.main-product-item').click(function() {
    let firstSelectedValue = $(firstSelect).val();
    let secondSelectedValue = $(secondSelect).val();

    let newValue = secondSelectedValue == 'no' ?  firstSelectedValue : 'no';
    let isActive = secondSelectedValue != 'no';

    isActive ? $(this).removeClass('product-item_active') : $(this).addClass('product-item_active');

    $(secondSelect).val(newValue).change();
    $('variant-selects')[0].onVariantChange();
    
});

  $('.product-item').click(function() {
    let isActive = $(this).hasClass('product-item_active');
    let productPrice = $('.main-product-item').data('price');
    let thisPrice = $(this).data('price');
    let customPrice = $('.custom-price-item').text();
    let customSum = $('.custom-price-item').data('price');

    if (isActive) {
        let sum = +customPrice - thisPrice;
        let additionalSum = Number(customSum) - Number(thisPrice)
        $('.custom-price-item').text(sum);
        $('.custom-price-item').data('price', additionalSum).attr('data-price',additionalSum);  
        $(this).removeClass('product-item_active');
    } else {
      let sum = +customPrice + thisPrice;
      let additionalSum = Number(customSum) + Number(thisPrice)
      $('.custom-price-item').text(sum);
      $('.custom-price-item').data('price', additionalSum).attr('data-price',additionalSum); 
      $(this).addClass('product-item_active');
    }

    // $('.price__regular .price-item').text(finalPrice).change();
});

$('.custom-product-container').on('click', '#custom-btn button', function() {
    let items = [];
    let products = $('.product-item.product-item_active');

    products.each(function() {
        items.push({'id': $(this).data('product-id'), 'quantity': 1})
    });
    
    fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'items': items})
      })
      .then(response => {
        $('.custom-product-container .product-form__submit').trigger('click');
        console.log(response)
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
});
