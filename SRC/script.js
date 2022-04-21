$(document).ready(() => {
    //MENU
    $(".navbar__menu-btn").on('click', function () {
        $(".navbar__links").toggleClass("active");
        $(this).find("i").toggleClass("fa-bars");
        $(this).find("i").toggleClass("fa-times");

    });


    //CAROUSEL
    const slickOptions = {
        autoplay: true,
        dots: false,
        //pauseOnHover: false,
        prevArrow:
            '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
        nextArrow:
            '<button type="button" class="slick-next slider__next-arrow">Previous</button>'
    };

    $('.slider').slick(slickOptions);

    const counterOptions = {
        delay: 10,
        time: 1000,
    };

    setInterval(() => {
        const numberCollection = document.querySelectorAll(".counter__number");

        numberCollection.forEach((number) => {
            const currentNumber = parseInt(number.innerHTML);
            number.innerHTML = currentNumber + 1;
        });
    }, 1000);

    $('.footer__form-button').on('click', () => {
        const email = $('#email').val();
        Email.send({
            Host: "smtp.yourisp.com",
            Username: "username",
            Password: "password",
            To: 'them@website.com',
            From: email,
            Subject: "Please add me on your's newsletter",
            Body: 'Hi, whould you like add me? My email is ${email}. Thank you!',
        }).then(
            message => alert(message)
        );
    });

});
