class SinhVien {
    constructor() {
        this.maSinhvien = ""
        this.tenSinhVien = ""
        this.loaiSinhVien = ""
        this.diemToan = ""
        this.diemLy = ""
        this.diemHoa = ""
        this.diemRenLuyen = ""
        this.avengerPoint = function() {
            if (this.diemToan > 10 || this.diemLy > 10 || this.diemHoa > 10) {
                return "Nhập điểm không hợp lệ"
            } else {
                var caculateAvenger = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3
                return caculateAvenger.toFixed(2)
            }
        }
        this.softStudent = function() {
            var avenger = this.avengerPoint()
            if (this.diemRenLuyen < 5) {
                return "Yếu"
            } else {
                if (avenger < 5) {
                    return "Yếu"
                } else if (avenger >= 5 && avenger <= 6.9) {
                    return "Trung Bình"
                } else if (avenger >= 7 && avenger <= 8) {
                    return "Khá"
                } else if (avenger > 8 && avenger <= 9) {
                    return "Giỏi"
                } else if (avenger > 9 && avenger <= 10) {
                    return "Xuất sắc"
                } else {
                    return "Không hợp lệ!!"
                }
            }
        }
    }
}