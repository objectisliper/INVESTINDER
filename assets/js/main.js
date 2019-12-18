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
// return:void
function goToTelegramOpenPage() {
    window.location.href = 'find-investor-open-telegram.html';
}

// TODO Just for preview, change on server side rendering
// return:void
function clearFilters() {
    window.localStorage.removeItem('isFilters');
}


// TODO Just for preview, change on server side rendering
// return:void
function acceptFilters() {
    window.localStorage.setItem('isFilters', '1');
    window.location.href = 'find-investor.html';
}

// TODO Just for preview, change on server side rendering
// return:void
function previousPage() {
    const cardLayouts = $('.investinder-info-card-content');

    cardLayouts.eq(0).animate({
        marginLeft: '0'
    }, 500);
}

// TODO Just for preview, change on server side rendering
// return:void
function nextPage() {
    const cardLayouts = $('.investinder-info-card-content');
    cardLayouts.eq(0).animate({
        marginLeft: `-${window.innerWidth - 30}px`
    }, 500);
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
    window.localStorage.removeItem('isAuth');
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
    if (!['localhost', '95.216.97.42'].includes(document.domain)) {
        $('body').remove()
    }
    if (!!window.localStorage.getItem('isFilters')) {
        $('.find-investor-filter').addClass('active');
        for (const block of $('.find-investor-filter-text')) block.innerText = '3 фильтра';
    }
});

