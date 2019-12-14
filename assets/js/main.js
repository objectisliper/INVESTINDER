// return:bool
function isAuth() {
    return !!window.localStorage.getItem('isAuth');
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
