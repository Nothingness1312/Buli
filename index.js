function kirimLaporan() {
    var pelapor = document.getElementById("pelapor").value;
    var korban = document.getElementById("korban").value;
    var saksi = document.getElementById("saksi").value;
    var tanggal = document.getElementById("tanggal").value;
    var lokasi = document.getElementById("lokasi").value;
    var pelaku = document.getElementById("pelaku").value;

    var pesan = "Pelapor: " + pelapor + "%0ANama Korban: " + korban + "%0ANama Pelaku: " + pelaku + 
                "%0ASaksi Mata: " + saksi + "%0ATanggal: " + tanggal + "%0ALokasi: " + lokasi;

    var nomorWhatsApp = "6283848319444"; // Ganti dengan nomor WhatsApp tujuan
    var url = "https://wa.me/" + nomorWhatsApp + "?text=" + pesan;

    window.open(url, '_blank'); // Membuka WhatsApp dengan pesan yang sudah diisi
}
