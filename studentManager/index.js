var sinhVien = new SinhVien();
var validate = new Validation();

function studentManager() {
    sinhVien.maSinhvien = getEle("maSinhVien")
    sinhVien.tenSinhVien = getEle("tenSinhVien")
    sinhVien.loaiSinhVien = getEle("loaiSinhVien")
    sinhVien.diemToan = getEle("diemToan")
    sinhVien.diemLy = getEle("diemLy")
    sinhVien.diemHoa = getEle("diemHoa")
    sinhVien.diemRenLuyen = getEle("diemRenLuyen")

    //validation
    var valid = true
        // var validateMaSV = validate.checkEmpty(sinhVien.maSinhvien, '#spanMaSinhVien', 'Mã sinh viên')
    valid &= validate.checkEmpty(sinhVien.tenSinhVien, '#spanTenSinhVien', 'Tên sinh viên') &
        validate.checkEmpty(sinhVien.diemToan, '#spanDiemToan', 'Điểm toán') &
        validate.checkEmpty(sinhVien.diemLy, '#spanDiemLy', 'Điểm lý') &
        validate.checkEmpty(sinhVien.diemHoa, '#spanDiemHoa', 'Điểm hóa') &
        validate.checkWord(sinhVien.tenSinhVien, '#spanCheckTen', 'Tên sinh viên') &
        validate.checkNumber(sinhVien.maSinhvien, '#spanKyTu', 'Mã sinh viên') &
        validate.checkNumber(sinhVien.diemToan, '#toanNumber', 'Điểm toán') &
        validate.checkNumber(sinhVien.diemLy, '#lyNumber', 'Điểm lý') &
        validate.checkNumber(sinhVien.diemHoa, '#hoaNumber', 'Điểm hóa') &
        validate.checkLength(sinhVien.diemToan, '#toanLength', 'Điểm toán', 0, 11) &
        validate.checkLength(sinhVien.diemLy, '#lyLength', 'Điểm lý', 0, 11) &
        validate.checkLength(sinhVien.diemHoa, '#hoaLength', 'Điểm hóa', 0, 11)
    if (!valid) {
        return false
    }
    document.querySelector("#txtTenSinhVien").innerHTML = sinhVien.maSinhvien
    document.querySelector("#txtMaSinhVien").innerHTML = sinhVien.tenSinhVien
    document.querySelector("#txtLoaiSinhVien").innerHTML = sinhVien.loaiSinhVien
    document.querySelector("#txtDiemTrungBinh").innerHTML = sinhVien.avengerPoint()
    document.querySelector("#txtXepLoai").innerHTML = sinhVien.softStudent()

}


function getEle(id) {
    var element = document.getElementById(id).value
    return element
}
document.getElementById("button").onclick = studentManager