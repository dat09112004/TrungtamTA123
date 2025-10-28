module.exports = (sequelize, DataTypes) => {
  const Baocao = sequelize.define('Baocao', {
    IdBaocao: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    IdGiangvien: { type: DataTypes.INTEGER },
    Iduser: { type: DataTypes.INTEGER },
    Idhocphi: { type: DataTypes.STRING },
    Idhocphi: { type: DataTypes.STRING },
    Tongdoanhthu: { type: DataTypes.FLOAT },
    Tongchi: { type: DataTypes.DATE },
    trangThai: { type: DataTypes.STRING }
    
  }, {
    tableName: 'Baocao',
    timestamps: false
  });

  return CongNo;
};