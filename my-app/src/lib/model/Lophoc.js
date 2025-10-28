module.exports = (sequelize, DataTypes) => {
  const LopHoc = sequelize.define('LopHoc', {
    Idlophoc: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tenLop: { type: DataTypes.STRING },
    ngayBatDau: { type: DataTypes.DATE },
    ngayKetThuc: { type: DataTypes.DATE },
    trangThai: { type: DataTypes.STRING },
    Idmonhoc: { type: DataTypes.INTEGER },
    phongHocId: { type: DataTypes.INTEGER },
    giaoVienId: { type: DataTypes.INTEGER }
  }, {
    tableName: 'LopHoc',
    timestamps: false
  });

  return LopHoc;
};
