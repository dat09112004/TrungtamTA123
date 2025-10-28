module.exports = (sequelize, DataTypes) => {
  const CongNo = sequelize.define('CongNo', {
    Idcongno: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    IdGiangvien: { type: DataTypes.INTEGER },
    tencongno: { type: DataTypes.STRING },
    soTienNo: { type: DataTypes.FLOAT },
    ngayPhatSinh: { type: DataTypes.DATE },
    trangThai: { type: DataTypes.STRING }
  }, {
    tableName: 'CongNo',
    timestamps: false
  });

  return CongNo;
};