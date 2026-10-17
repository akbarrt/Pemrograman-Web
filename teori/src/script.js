document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isHidden = navMenu.classList.toggle('hidden');
      menuToggle.setAttribute('aria-expanded', String(!isHidden));
      menuToggle.textContent = isHidden ? '☰' : '✕';
      menuToggle.setAttribute('aria-label', isHidden ? 'Buka menu navigasi' : 'Tutup menu navigasi');
    });
  }

  if (contactForm && formMessage) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name) {
        formMessage.textContent = 'Nama wajib diisi.';
        formMessage.className = 'w-full rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700';
        formMessage.classList.remove('hidden');
        contactForm.name.focus();
        return;
      }

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formMessage.textContent = 'Email harus diisi dengan format yang valid.';
        formMessage.className = 'w-full rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700';
        formMessage.classList.remove('hidden');
        contactForm.email.focus();
        return;
      }

      if (!message) {
        formMessage.textContent = 'Pesan tidak boleh kosong.';
        formMessage.className = 'w-full rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700';
        formMessage.classList.remove('hidden');
        contactForm.message.focus();
        return;
      }

      formMessage.textContent = 'Terima kasih, ' + name + '! Pesan Anda berhasil dikirim.';
      formMessage.className = 'w-full rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700';
      formMessage.classList.remove('hidden');
      contactForm.reset();
    });
  }

});
