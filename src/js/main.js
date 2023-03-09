import $ from "./lib/lib";
$('#first-out').on('click', () => {
    $('div').eq(1).fadeOut(800);
});

$('#first-in').on('click', () => {
    $('div').eq(1).fadeIn(800);
});

$('[data-count="second-out"]').on('click', () => {
    $('div').eq(2).fadeOut(800);
});

$('[data-count="second-in"]').on('click', () => {
    $('div').eq(2).fadeIn(800);
});

$('button', '#toggle').eq(4).on('click', () => {
    $('.w-500').fadeToggle(800);
});