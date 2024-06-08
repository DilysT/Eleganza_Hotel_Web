$(document).ready(function () {
    $(function () {
        // Tính toán ngày hiện tại và ngày hôm sau
        var currentDate = new Date(); // Lấy ngày hiện tại
        var tomorrowDate = new Date(currentDate); // Sao chép ngày hiện tại
        tomorrowDate.setDate(tomorrowDate.getDate() + 1); // Thêm 1 ngày để có ngày hôm sau

        // Format ngày hiện tại và ngày hôm sau thành chuỗi 'ddd, D MMM'
        var startDate = currentDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
        var endDate = tomorrowDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });

        // Thiết lập ngày bắt đầu và ngày kết thúc cho ô input
        $('input[name="daterange"]').daterangepicker({
            "startDate": startDate,
            "endDate": endDate,
            opens: 'center',
            locale: {
                format: 'ddd, D MMMM'
            },
            isInvalidDate: function (date) {
                // Check if the date is the 1st or 15th of May
                if ((date.date() === 18 || date.date() === 19) && date.month() === 5) { // Note: month() returns 0-based month (0 for January, 4 for May)
                    return true;
                }
                // Otherwise, return false (selectable)
                return false;
            },
            isCustomDate: function (date) {
                // Check if the date is the 1st or 15th of May
                if ((date.date() === 18 || date.date() === 19) && date.month() === 5) // tháng cộng thêm 1 ngày
                {
                    return 'invalid-date';
                }
                return '';
            }
        });

        // Xử lý sự kiện khi ngày thay đổi
        $('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
            var startDate = picker.startDate.format('ddd, D MMM');
            var endDate = picker.endDate.format('ddd, D MMM');
            $(this).val(startDate + ' \u2192 ' + endDate);
        });

        // Thiết lập giá trị ban đầu cho ô input
        $('input[name="daterange"]').val(startDate + ' \u2192 ' + endDate);
    });
});


/* Toggle drop down */
const dropdown = document.querySelector('.dropdown');
const dropBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

// Xử lý sự kiện khi click vào dropBtn
dropBtn.addEventListener('click', () => {
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    dropBtn.classList.toggle('rotate'); // Thêm hoặc xóa lớp 'rotate' khi click
});

// Xử lý sự kiện khi click vào một phần tử trong dropdown
dropdown.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        const guestValue = event.target.dataset.value;
        dropBtn.textContent = `${guestValue} ${guestValue == 1 ? 'guest' : 'guests'}`;
        dropdownContent.style.display = 'none';
        dropBtn.classList.remove('rotate'); // Xóa lớp 'rotate' sau khi chọn xong
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Initially hide the booking summary
    document.querySelector('.booking-summary').style.display = 'none';

    // Get all buttons with class 'card'
    const reserveButtons = document.querySelectorAll('.card');

    // Add event listener to each button
    reserveButtons.forEach(button => {
        button.addEventListener('click', function () {
            document.getElementById('no-rooms-selected').style.display = 'none';
            document.querySelector('.booking-summary').style.display = 'block';
        });
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.image-slider');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const seeMoreLinks = document.querySelectorAll('.see-more');
    const popupImageSlider = document.querySelector('.popup-image-slider');
    const popupImages = popupImageSlider.querySelectorAll('img');
    const popupPrev = popupImageSlider.querySelector('.prev');
    const popupNext = popupImageSlider.querySelector('.next');
    let popupIndex = 0;

    sliders.forEach(slider => {
        let index = 0;
        const images = slider.querySelectorAll('img');
        const prev = slider.querySelector('.prev');
        const next = slider.querySelector('.next');

        function showImage(newIndex) {
            images.forEach((img, i) => {
                img.classList.remove('active', 'prev');
                if (i === newIndex) {
                    img.classList.add('active');
                } else if (i === index) {
                    img.classList.add('prev');
                }
            });
            index = newIndex;
        }

        prev.addEventListener('click', () => {
            const newIndex = (index > 0) ? index - 1 : images.length - 1;
            showImage(newIndex);
        });

        next.addEventListener('click', () => {
            const newIndex = (index < images.length - 1) ? index + 1 : 0;
            showImage(newIndex);
        });

        showImage(index);
    });

    function showPopupImage(newIndex) {
        popupImages.forEach((img, i) => {
            img.classList.remove('active', 'prev');
            if (i === newIndex) {
                img.classList.add('active');
            } else if (i === popupIndex) {
                img.classList.add('prev');
            }
        });
        popupIndex = newIndex;
    }

    popupPrev.addEventListener('click', () => {
        const newIndex = (popupIndex > 0) ? popupIndex - 1 : popupImages.length - 1;
        showPopupImage(newIndex);
    });

    popupNext.addEventListener('click', () => {
        const newIndex = (popupIndex < popupImages.length - 1) ? popupIndex + 1 : 0;
        showPopupImage(newIndex);
    });

    seeMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'flex';
            showPopupImage(popupIndex);
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});



// Thêm sự kiện hover vào biểu tượng chấm than
document.addEventListener('DOMContentLoaded', function () {
    const tooltipIcons = document.querySelectorAll('.tooltip-icon');
    const tooltipTexts = document.querySelectorAll('.tooltip-text');

    tooltipIcons.forEach((tooltipIcon, index) => {
        const tooltipText = tooltipTexts[index];

        tooltipIcon.addEventListener('mouseover', () => {
            tooltipText.style.display = 'block';
        });

        tooltipIcon.addEventListener('mouseout', () => {
            tooltipText.style.display = 'none';
        });
    });
});


document.querySelectorAll('.icon').forEach(function (icon) {
    icon.addEventListener('click', function () {
        this.closest('.item').remove();
    });
});