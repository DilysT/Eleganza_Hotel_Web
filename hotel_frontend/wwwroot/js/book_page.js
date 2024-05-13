
$(document).ready(function(){
    $(function() {
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
            }
        });

        // Xử lý sự kiện khi ngày thay đổi
        $('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
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