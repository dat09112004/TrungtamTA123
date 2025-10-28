module.exports = (sequelize, DataTypes) => {
  const PhongHoc = sequelize.define('PhongHoc', {
    Idphong: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tenPhong: { type: DataTypes.STRING },
    sucChua: { type: DataTypes.INTEGER },
    moTa: { type: DataTypes.STRING }
  }, {
    tableName: 'PhongHoc',
    timestamps: false
  });

  return PhongHoc;
};
