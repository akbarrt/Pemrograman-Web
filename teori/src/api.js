document.addEventListener('DOMContentLoaded', () => {
  const refreshUsersButton = document.getElementById('refreshUsers');
  const userTableBody = document.getElementById('userTableBody');
  const apiStatus = document.getElementById('apiStatus');

  if (!refreshUsersButton || !userTableBody || !apiStatus) {
    return;
  }

  async function loadUsers() {
    apiStatus.className = 'mb-4 rounded-lg border border-brand-soft bg-brand-soft px-3 py-2 text-sm text-brand';
    apiStatus.textContent = 'Memuat data dari API...';
    apiStatus.classList.remove('hidden');
    userTableBody.innerHTML = `
      <tr>
        <td colspan="4" class="px-3 py-5 text-center text-muted">Sedang mengambil data...</td>
      </tr>
    `;

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error('Gagal mengambil data pengguna');
      }

      const users = await response.json();
      const firstFiveUsers = users.slice(0, 5);

      userTableBody.innerHTML = firstFiveUsers
        .map(
          (user) => `
            <tr class="border-b border-line last:border-b-0">
              <td class="px-3 py-2 font-medium">${user.name}</td>
              <td class="px-3 py-2">${user.email}</td>
              <td class="px-3 py-2">${user.phone}</td>
              <td class="px-3 py-2"><a class="text-brand underline" href="https://${user.website}" target="_blank" rel="noreferrer">${user.website}</a></td>
            </tr>
          `
        )
        .join('');

      apiStatus.className = 'mb-4 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700';
      apiStatus.textContent = 'Berhasil menampilkan ' + firstFiveUsers.length + ' data pengguna dari API publik.';
    } catch (error) {
      userTableBody.innerHTML = `
        <tr>
          <td colspan="4" class="px-3 py-5 text-center text-red-700">Gagal memuat data dari API. Coba lagi nanti.</td>
        </tr>
      `;

      apiStatus.className = 'mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700';
      apiStatus.textContent = 'Terjadi kesalahan saat mengambil data dari API.';
      console.error('Terjadi kesalahan saat mengambil data pengguna:', error);
    }
  }

  refreshUsersButton.addEventListener('click', loadUsers);
  loadUsers();
});
