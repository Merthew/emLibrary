function confirmModal(message, trueMessage, falseMessage, trueFunction, falseFunction) {
    var modalWrapper = document.createElement('div');
    modalWrapper.style.opacity = 0;
    modalWrapper.style.position = 'fixed';
    modalWrapper.style.zIndex = '1';
    modalWrapper.style.left = '0px';
    modalWrapper.style.top = '0px';
    modalWrapper.style.width = '100%';
    modalWrapper.style.height = '100%';
    modalWrapper.style.overflow = 'auto';
    modalWrapper.style.backgroundColor = 'rgb(0,0,0)';
    modalWrapper.style.backgroundColor = 'rgb(0,0,0,0.4)';

    var modalContent = document.createElement('div');
    modalContent.style.backgroundColor = '#fefefe';
    modalContent.style.margin = '1% auto';
    modalContent.style.padding = '20px';
    modalContent.style.border = '1px solid #888';
    modalContent.style.width = '30%';

    var modalContent_message = document.createElement('div');
    modalContent_message.innerHTML = message;
    modalContent_message.style.textAlign = 'center';
    modalContent.appendChild(modalContent_message);

    var modalContent_true = document.createElement('div');
    modalContent_true.innerHTML = trueMessage;
    modalContent_true.onclick = () => { removeConfirmModal(); trueFunction(); };
    modalContent_true.style.width = '75px';
    modalContent_true.style.height = '34px';
    modalContent_true.style.border = '1px solid #cccccc';
    modalContent_true.style.background = '#ffffff';
    modalContent_true.style.display = 'inline-block';
    modalContent_true.style.textAlign = 'center';
    modalContent_true.style.lineHeight = '32px';
    modalContent_true.style.margin = '5px';
    modalContent_true.style.cursor = 'pointer';
    modalContent_true.style.transition = 'all 0.2s';
    modalContent_true.addEventListener('mouseenter', () => {
        modalContent_true.style.background = '#cccccc';
    });
    modalContent_true.addEventListener('mouseleave', () => {
        modalContent_true.style.background = '#ffffff';
    });
    modalContent.appendChild(modalContent_true);

    var modalContent_false = document.createElement('div');
    modalContent_false.innerHTML = falseMessage;
    modalContent_false.onclick = () => { removeConfirmModal(); falseFunction(); };
    modalContent_false.style.width = '75px';
    modalContent_false.style.height = '34px';
    modalContent_false.style.border = '1px solid #cccccc';
    modalContent_false.style.display = 'inline-block';
    modalContent_false.style.textAlign = 'center';
    modalContent_false.style.lineHeight = '32px';
    modalContent_false.style.margin = '5px';
    modalContent_false.style.cursor = 'pointer';
    modalContent_false.style.transition = 'all 0.2s';
    modalContent_false.addEventListener('mouseenter', () => {
        modalContent_false.style.background = '#cccccc';
    });
    modalContent_false.addEventListener('mouseleave', () => {
        modalContent_false.style.background = '#ffffff';
    });
    modalContent.appendChild(modalContent_false);

    modalWrapper.appendChild(modalContent);
    document.body.appendChild(modalWrapper);

    var interval = setInterval(() => {
        modalWrapper.style.opacity = Number(modalWrapper.style.opacity) + 0.02;
        if (modalWrapper.style.opacity >= 1) {
            window.clearInterval(interval);
        }
    }, 1);

    function removeConfirmModal() {
        var interval = setInterval(() => {
            modalWrapper.style.opacity = Number(modalWrapper.style.opacity) - 0.02;
            if (modalWrapper.style.opacity <= 0) {
                window.clearInterval(interval);
                modalContent_message.remove();
                modalContent_true.remove();
                modalContent_false.remove();
                modalContent.remove();
                modalWrapper.remove();
            }
        }, 1);
    }
}

function alertModal(message, confirmMessage) {
    var modalWrapper = document.createElement('div');
    modalWrapper.style.opacity = 0;
    modalWrapper.style.position = 'fixed';
    modalWrapper.style.zIndex = '1';
    modalWrapper.style.left = '0px';
    modalWrapper.style.top = '0px';
    modalWrapper.style.width = '100%';
    modalWrapper.style.height = '100%';
    modalWrapper.style.overflow = 'auto';
    modalWrapper.style.backgroundColor = 'rgb(0,0,0)';
    modalWrapper.style.backgroundColor = 'rgb(0,0,0,0.4)';

    var modalContent = document.createElement('div');
    modalContent.style.backgroundColor = '#fefefe';
    modalContent.style.margin = '1% auto';
    modalContent.style.padding = '20px';
    modalContent.style.border = '1px solid #888';
    modalContent.style.width = '30%';

    var modalContent_message = document.createElement('div');
    modalContent_message.innerHTML = message;
    modalContent_message.style.textAlign = 'center';
    modalContent.appendChild(modalContent_message);

    var modalContent_confirm = document.createElement('div');
    modalContent_confirm.innerHTML = confirmMessage;
    modalContent_confirm.onclick = () => { removeAlertModal(); };
    modalContent_confirm.style.width = '75px';
    modalContent_confirm.style.height = '34px';
    modalContent_confirm.style.border = '1px solid #cccccc';
    modalContent_confirm.style.background = '#ffffff';
    modalContent_confirm.style.display = 'inline-block';
    modalContent_confirm.style.textAlign = 'center';
    modalContent_confirm.style.lineHeight = '32px';
    modalContent_confirm.style.margin = '5px';
    modalContent_confirm.style.cursor = 'pointer';
    modalContent_confirm.style.transition = 'all 0.2s';
    modalContent_confirm.addEventListener('mouseenter', (event) => {
        modalContent_confirm.style.background = '#cccccc';
    });
    modalContent_confirm.addEventListener('mouseleave', (event) => {
        modalContent_confirm.style.background = '#ffffff';
    });
    modalContent.appendChild(modalContent_confirm);

    modalWrapper.appendChild(modalContent);
    document.body.appendChild(modalWrapper);

    var interval = setInterval(() => {
        modalWrapper.style.opacity = Number(modalWrapper.style.opacity) + 0.02;
        if (modalWrapper.style.opacity >= 1) {
            window.clearInterval(interval);
        }
    }, 1);

    function removeAlertModal() {
        var interval = setInterval(() => {
            modalWrapper.style.opacity = Number(modalWrapper.style.opacity) - 0.02;
            if (modalWrapper.style.opacity <= 0) {
                window.clearInterval(interval);
                modalContent_message.remove();
                modalContent_confirm.remove();
                modalContent.remove();
                modalWrapper.remove();
            }
        }, 1);
    }
}