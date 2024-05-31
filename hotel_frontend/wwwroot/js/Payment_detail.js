// additional services

 document.getElementById('barChampaignCheckbox').addEventListener('change', function() {
        var select = document.getElementById('barChampaignSelect');
        if (this.checked) {
            select.classList.add('enabled');
            select.dataset.disabled = "false";
        } else {
            select.classList.remove('enabled');
            select.dataset.disabled = "true";
        }
    });

    document.getElementById('meetingCheckbox').addEventListener('change', function() {
        var select = document.getElementById('meetingSelect');
        if (this.checked) {
            select.classList.add('enabled');
            select.dataset.disabled = "false";
        } else {
            select.classList.remove('enabled');
            select.dataset.disabled = "true";
        }
    });

    document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
        const select = wrapper.querySelector('.custom-select');
        const options = wrapper.querySelector('.custom-select-options');

        select.addEventListener('click', function() {
            if (select.dataset.disabled === "true") return;
            wrapper.classList.toggle('active');
        });

        options.querySelectorAll('div').forEach(option => {
            option.addEventListener('click', function() {
                select.textContent = this.textContent;
                wrapper.classList.remove('active');
            });
        });
    });

    window.addEventListener('click', function(e) {
        if (!e.target.matches('.custom-select') && !e.target.matches('.custom-select-options div')) {
            document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
                wrapper.classList.remove('active');
            });
        }
    });


    

    //form personal

    document.getElementById('personal-details-form').addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirm-email').value;
        const emailError = document.getElementById('email-error');

        if (email !== confirmEmail) {
            emailError.style.display = 'block';
            event.preventDefault();
        } else {
            emailError.style.display = 'none';
        }
    });


