// maxLength:number
// return:void
function getCharLeftCount(maxLength) {
    const description = $('#add-project-description')[0];
    const charCounter = $('#description-char-count')[0];
    console.error(description.value);
    console.error(charCounter);
    console.error(maxLength - description.value.length);
    charCounter.innerText = maxLength - description.value.length;
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
