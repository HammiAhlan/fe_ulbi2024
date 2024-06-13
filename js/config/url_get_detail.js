//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-allan2024-0d01e8eb9e77.herokuapp.com/presensi/" + presensiId;