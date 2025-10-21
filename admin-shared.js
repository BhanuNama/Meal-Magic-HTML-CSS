
(function () {
  function getStatusColor(status) {
    const colors = {
      'Pending': 'warning',
      'Processing': 'info',
      'Shipped': 'primary',
      'Delivered': 'success',
      'Cancelled': 'danger'
    };
    return colors[status] || 'secondary';
  }

  function bindLogout(logoutModalId, confirmBtnId) {
    const logoutModalEl = document.getElementById(logoutModalId);
    const confirmBtn = document.getElementById(confirmBtnId);
    if (!logoutModalEl || !confirmBtn) return;
    const modal = bootstrap.Modal.getOrCreateInstance(logoutModalEl);
    confirmBtn.addEventListener('click', () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      modal.hide();
      setTimeout(() => { window.location.href = 'login.html'; }, 1500);
    });
  }

  function showSuccessModal(title, message) {
    const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('successModal'));
    if (!modal) return;
    const titleEl = document.getElementById('successTitle');
    const messageEl = document.getElementById('successMessage');
    if (titleEl) titleEl.textContent = title;
    if (messageEl) messageEl.textContent = message;
    modal.show();
  }

  function showErrorModal(title, message) {
    const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('errorModal'));
    if (!modal) return;
    const titleEl = document.getElementById('errorTitle');
    const messageEl = document.getElementById('errorMessage');
    if (titleEl) titleEl.textContent = title;
    if (messageEl) messageEl.textContent = message;
    modal.show();
  }

  function showConfirmModal(title, message, onConfirm) {
    const modalEl = document.getElementById('confirmModal');
    if (!modalEl) return;
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    const titleEl = document.getElementById('confirmTitle');
    const messageEl = document.getElementById('confirmMessage');
    const confirmBtn = document.getElementById('confirmAction');
    if (titleEl) titleEl.textContent = title;
    if (messageEl) messageEl.textContent = message;
    if (confirmBtn) {
      const newConfirmBtn = confirmBtn.cloneNode(true);
      confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
      newConfirmBtn.addEventListener('click', () => {
        modal.hide();
        if (typeof onConfirm === 'function') onConfirm();
      });
    }
    modal.show();
  }

  function setActiveNav(current) {
    const links = document.querySelectorAll('.top-nav a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.toLowerCase().includes(current.toLowerCase())) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.AdminShared = {
    getStatusColor,
    bindLogout,
    showSuccessModal,
    showErrorModal,
    showConfirmModal,
    setActiveNav
  };
})();
