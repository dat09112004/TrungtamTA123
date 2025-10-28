module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define('Payments', {
    Idpayment: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Idhocphi: { type: DataTypes.INTEGER },
    Idlophoc: { type: DataTypes.INTEGER },
    sotien: { type: DataTypes.FLOAT },
    ngayThanhToan: { type: DataTypes.DATE },
    phuongThuc: { type: DataTypes.STRING },
    ghiChu: { type: DataTypes.STRING }
  }, {
    tableName: 'Payments',
    timestamps: false
  });

  return Payments;
};
