// maxLength:number
// return:void
function getCharLeftCount(maxLength) {
    const description = $('#add-project-description')[0];
    const charCounter = $('#description-char-count')[0];
    charCounter.innerText = maxLength - description.value.length;
}

function nextCard() {

}

// TODO Just for preview, change on server side rendering
// currentPage:number
// return:void
function previousPage(currentPage) {
    const cardLayouts = $('.investinder-info-card-layout');

    if (currentPage - 1 >= 0) {
        cardLayouts.eq(currentPage - 1).animate({
            marginLeft: '0'
        }, 500);
    }
}

// TODO Just for preview, change on server side rendering
// currentPage:number
// return:void
function nextPage(currentPage) {
    const cardLayouts = $('.investinder-info-card-layout');

    if (currentPage < cardLayouts.length) {
        cardLayouts.eq(currentPage).animate({
            marginLeft: `-100vw`
        }, 500);
    }
}

// TODO Just for preview, change on server side rendering
// return:void
function openContacts() {
    const mainCardBlocks = $('.investinder-info-card-main-info-block');
    const footer = $('.investinder-info-card-footer');
    const buttons = $('.investinder-info-card-footer button');
    const investorNames = $('.investor-name');
    const emails = $('.main-info-block-email p b');
    const phones = $('.main-info-block-phone p b');
    const telegrams = $('.main-info-block-telegram p b');

    for (const item of emails) item.innerText = 'antntelmewe@mail.ru';
    for (const item of phones) item.innerText = '8(915)825-45-19';
    for (const item of telegrams) item.innerText = '@antelmewe';
    for (const item of investorNames) item.innerHTML = '<b>Александр</b> - Частный инвестор';
    buttons.remove();
    footer.addClass('active');
    mainCardBlocks.addClass('active');
}

// return:void
function hideNewsSnackbar() {
    const newsSnackbar = $('#news-snackbar');
    newsSnackbar.hide();
}

// return:void
function hideCookieSnackbar() {
    const cookieSnackbar = $('#cookieSnackbar');
    cookieSnackbar.hide();
}

// return:bool
function isAuth() {
    return !!window.localStorage.getItem('isAuth');
}

// TODO Just for preview, change on server side rendering
// return:void
function returnToPreviousPage() {
    window.history.back();
}

// TODO Just for preview, change on server side rendering
// return:void
function logout() {
    window.localStorage.removeItem('isAuth')
    window.location.href = 'main-page.html'
}

// TODO Just for preview, change on server side rendering
// return:void
function login() {
    const email = $('#login-email')[0];
    const password = $('#login-password')[0];

    if (email.value === 'admin@gmail.com' && password.value === 'admin') {
        window.localStorage.setItem('isAuth', '1');
        window.location.href = 'main-page.html';
    }
}

// return:void
function togglePageList() {
    const navigationPageList = $('#navigation-page-list');
    const navigationOpen = $('#navigation-open');
    const navigationClose = $('#navigation-close');
    const unauthNavigation = $('#unauth-navigation');
    const authNavigation = $('#auth-navigation');

    // TODO remove on Server-side rendering
    if (isAuth()) {
        unauthNavigation.removeClass('active');
        authNavigation.addClass('active');
    } else {
        authNavigation.removeClass('active');
        unauthNavigation.addClass('active');
    }

    // Cause of very good JQuery scalability (No) (Hate this lib)
    if (navigationPageList.is(':visible')) {
        navigationPageList.toggle('slide', {direction: 'right'}, function() {
            navigationPageList.toggleClass('active');
        });
    } else {
        navigationPageList.toggle('slide', {direction: 'right'});
        navigationPageList.toggleClass('active');
    }
    if (navigationOpen.is(":visible")) {
        navigationOpen.toggle('slow', function () {
            navigationClose.toggleClass('active');
        });
    } else {
        navigationClose.toggleClass('active', function () {
            navigationOpen.toggle('slow')
        });
    }
}

// TODO Удалить перед сдачей.
// Уважаемый программист, прежде чем удалять эту строчку, задумайся. Если ты видишь данный коммент, значит
// заказчик кидала. Удачи.
$( document ).ready(function () {
    // if (!['localhost'].includes(document.domain)) {
    //     $('body').remove()
    // }
});

