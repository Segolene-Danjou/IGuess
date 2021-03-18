const app = {

    init: function () {
        const more = document.querySelector('#more');
        const less = document.querySelector('#less');
        const win = document.querySelector('#win');
        const replay = document.querySelector('#replay');
        if (more) {
            more.addEventListener('click', app.moreClickHandler);
        }
        if (less) {
            less.addEventListener('click', app.lessClickHandler);
        }
        if (win) {
            win.addEventListener('click', app.winClickHandler);
        }
        if (replay) {
            replay.addEventListener('click', app.replayClickHandler);
        }
    },

    moreClickHandler: function (evt) {
        location.href = '/plus';
    },

    lessClickHandler: function (evt) {
        location.href = '/moins';
    },

    winClickHandler: function (evt) {
        location.href = '/bravo';
    },

    replayClickHandler: function (evt) {
        location.href = '/';
    }

}

document.addEventListener('DOMContentLoaded', app.init);