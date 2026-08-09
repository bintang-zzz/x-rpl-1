/* =========================================================
   X RPL-1 — siswa.js
   Student data + live search + gender filter
   (runs only on pages/siswa.html)
   ========================================================= */

(function () {
  const grid = document.querySelector("[data-siswa-grid]");
  if (!grid) return;

  const students = [
    { no: 1, name: "Adzkia Dewi Nadin", gender: "P" },
    { no: 2, name: "Ahmad Fahrezi", gender: "L" },
    { no: 3, name: "Akbar Rizig Paton", gender: "L" },
    { no: 4, name: "Aldo Riezky Erlangga Nst", gender: "L" },
    { no: 5, name: "Anggi Ramahdani", gender: "P" },
    { no: 6, name: "Aprilya Kristiana Simangunsong", gender: "P" },
    { no: 7, name: "Arinny Kahilah Hadi", gender: "P" },
    { no: 8, name: "Asyifah Septiani", gender: "P" },
    { no: 9, name: "Bentio Alfarabi", gender: "L" },
    { no: 10, name: "Bilva Aulia Syalyani", gender: "P" },
    { no: 11, name: "Bima Damanik", gender: "L" },
    { no: 12, name: "Bima Sakti Tarigan", gender: "L" },
    { no: 13, name: "Bintang Aya Al-Qadr", gender: "L" },
    {
      no: 14,
      name: "Bintang Al-Haq Syahputra Simanungkalit",
      gender: "L",
      title: "DEVELOPER",
    },
    { no: 15, name: "Celsie Angel Br. Haloho", gender: "P" },
    { no: 16, name: "Cinta Uli Natasya Br Manullang", gender: "P" },
    { no: 17, name: "Clarissa Dewi Mazaya", gender: "P" },
    { no: 18, name: "Dina Maria Br Silalahi", gender: "P" },
    { no: 19, name: "Dwi Diandry Saputri", gender: "P" },
    { no: 20, name: "Erlina Sriwani Gultom", gender: "P" },
    { no: 21, name: "Genta Mulia Marbun", gender: "L" },
    { no: 22, name: "Helen Seberia Rotua Simanjuntak", gender: "P" },
    { no: 23, name: "Indri Yani Sinaga", gender: "P" },
    { no: 24, name: "Jhoni Cristian Nduru", gender: "L" },
    { no: 25, name: "Kenzi Rafha Fahwas", gender: "L" },
    { no: 26, name: "Kesila Zahra", gender: "P" },
    { no: 27, name: "Muhammad Fikran Aulia", gender: "L" },
    { no: 28, name: "Muhammad Jabbar Falah", gender: "L" },
    { no: 29, name: "Muhammad Nazril", gender: "L" },
    { no: 30, name: "Muhammad Noval Ardan", gender: "L" },
    { no: 31, name: "Muhammad Ramadhan", gender: "L" },
    { no: 32, name: "Revalina Rahmadania", gender: "P" },
    { no: 33, name: "Revan Syahputra", gender: "L" },
    { no: 34, name: "Rivay Ananda Pratama", gender: "L" },
    { no: 35, name: "Rizki Arrasyid", gender: "P" },
    { no: 36, name: "Samara Safa Kholilah", gender: "P" },
  ];

  const searchInput = document.querySelector("[data-siswa-search]");
  const filterBtns = document.querySelectorAll("[data-siswa-filter]");
  const noResults = document.querySelector("[data-siswa-empty]");
  const countLabel = document.querySelector("[data-siswa-count]");

  let activeFilter = "all";
  let query = "";

  function initials(name) {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  function genderLabel(g) {
    return g === "L" ? "Laki-laki" : "Perempuan";
  }

  function render() {
    const filtered = students.filter((s) => {
      const matchesFilter = activeFilter === "all" || s.gender === activeFilter;
      const matchesQuery = s.name.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });

    grid.innerHTML = filtered
      .map(
        (s) => `
        <div class="card siswa-card${s.title ? " is-developer" : ""}">
          <div class="avatar" aria-hidden="true">${initials(s.name)}</div>
          <div class="siswa-info">
            <div class="siswa-name">${s.name}</div>
            <div class="siswa-gender">${genderLabel(s.gender)}</div>
            ${s.title ? `<span class="dev-badge">${s.title}</span>` : ""}
          </div>
        </div>
      `
      )
      .join("");

    if (noResults) {
      noResults.classList.toggle("is-visible", filtered.length === 0);
    }

    if (countLabel) {
      countLabel.textContent = `Menampilkan ${filtered.length} dari ${students.length} siswa`;
    }
  }

  searchInput?.addEventListener("input", (e) => {
    query = e.target.value.trim();
    render();
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.getAttribute("data-siswa-filter");
      render();
    });
  });

  render();
})();
