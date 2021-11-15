// TABS
$('.card').on('click',function(){
    let currTab=$(this).parent().index();

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTab).addClass('active');
})
{
$('.card_2').on('click',function(){
    let currTab=$(this).parent().index();

    $('.card_2').removeClass('active');
    $(this).addClass('active');

    $('.tab_content_2').removeClass('active');
    $('.tab_content_2').eq(currTab).addClass('active');
})
}