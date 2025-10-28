// models/monhoc.model.js
module.exports = (sequelize, DataTypes) => {
  const MonHoc = sequelize.define('MonHoc', {
    Idmonhoc: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tenMonHoc: { type: DataTypes.STRING },
    moTa: { type: DataTypes.TEXT },
  }, {
    tableName: 'MonHoc',
    timestamps: false
  });

  return MonHoc;
};
