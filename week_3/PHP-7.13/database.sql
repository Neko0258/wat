CREATE TABLE LOP(
    MALOP VARCHAR(255) NOT NULL PRIMARY KEY ,
    TENLOP VARCHAR(255) NOT NULL,
    KHOAHOC INTEGER NOT NULL,
    GVCN VARCHAR(255) NOT NULL
);

INSERT INTO LOP(MALOP, TENLOP, KHOAHOC, GVCN) VALUES ('AT1', "AT16G", 1, "Nguyễn Văn Bình");
INSERT INTO LOP(MALOP, TENLOP, KHOAHOC, GVCN) VALUES ('AT2', "AT16H", 3, "Trần Quốc Tuấn");
INSERT INTO LOP(MALOP, TENLOP, KHOAHOC, GVCN) VALUES ('AT3', "AT16A", 2, "Nguyễn Trường Giang Huy");
INSERT INTO LOP(MALOP, TENLOP, KHOAHOC, GVCN) VALUES ('AT4', "AT16D", 4, "Vũ Yến Vi");

CREATE TABLE HOSO(
    MAHS VARCHAR(255) NOT NULL PRIMARY KEY ,
    HOTEN VARCHAR(255) NOT NULL,
    NGAYSINH DATE,
    DIACHI VARCHAR(255) NOT NULL,
    LOP VARCHAR(255) NOT NULL,
    DIEMTOAN FLOAT,
    DIEMLY FLOAT,
    DIEMHOA FLOAT
);

INSERT INTO HOSO(MAHS, HOTEN, NGAYSINH, DIACHI, LOP, DIEMTOAN, DIEMLY, DIEMHOA) VALUES ('HS1', "Nguyễn Trường Giang Huy", "2000-1-21", "Quảng Ninh", "AT16G", 9, 8, 10);
INSERT INTO HOSO(MAHS, HOTEN, NGAYSINH, DIACHI, LOP, DIEMTOAN, DIEMLY, DIEMHOA) VALUES ('HS2', "Trần Quỳnh Trang", "2001-3-12", "Quảng Ninh", "AT16G", 9, 8, 10);
INSERT INTO HOSO(MAHS, HOTEN, NGAYSINH, DIACHI, LOP, DIEMTOAN, DIEMLY, DIEMHOA) VALUES ('HS3', "Vũ Minh Đức", "2004-8-6", "Quảng Ninh", "AT16B", 9, 8, 10);
INSERT INTO HOSO(MAHS, HOTEN, NGAYSINH, DIACHI, LOP, DIEMTOAN, DIEMLY, DIEMHOA) VALUES ('HS4', "Lionel Messi", "2000-5-4", "Argentina", "AT16H", 9, 8, 10);

