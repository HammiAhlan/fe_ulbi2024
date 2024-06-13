export let urlPOST = "https://ws-allan2024-0d01e8eb9e77.herokuapp.com/insert"

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.reload(); //reload halaman setelah klik ok pada alert
}