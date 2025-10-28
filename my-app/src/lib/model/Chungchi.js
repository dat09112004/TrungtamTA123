module.exports = (sequelize, DataTypes) => {
  const ChungChi = sequelize.define('ChungChi', {
    IDchungchi: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Iduser: { type: DataTypes.INTEGER },
    tenchungchi: { type: DataTypes.STRING },
    ngaycap: { type: DataTypes.DATE },
    ngayhethan: { type: DataTypes.DATE },
    trangthai: { type: DataTypes.STRING }
  }, {
    tableName: 'ChungChi',
    timestamps: false
  });

  return ChungChi;
};
