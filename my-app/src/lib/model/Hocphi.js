module.exports = (sequelize, DataTypes) => {
  const HocPhi = sequelize.define('HocPhi', {
    Idhocphi: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Iduser: { type: DataTypes.INTEGER },
    Idlophoc: { type: DataTypes.INTEGER },
    soTien: { type: DataTypes.FLOAT },
    ngayThanhToan: { type: DataTypes.DATE },
    phuongThuc: { type: DataTypes.STRING },
    trangThai: { type: DataTypes.STRING }
  }, {
    tableName: 'HocPhi',
    timestamps: false
  });

  return HocPhi;
};
