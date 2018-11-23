// set up text animation
$(function () {
    $('.tlt').textillate({
        loop: true,
        initialDelay: 50,
        in: {
            effect: 'bounceIn',
            delay: 10,
            shuffle: false,
        },
        out: {
            effect: 'bounceOut',
            delay: 50,
            shuffle: false
        }
    });
  });


