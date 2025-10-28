// models/baiTapNop.model.js
module.exports = (sequelize, DataTypes) => {
  const NopBaiTap = sequelize.define('NopBaiTap', {
    IdNopBaiTap: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    IdBaitap: { type: DataTypes.INTEGER, allowNull: false },
    Idlophoc: { type: DataTypes.INTEGER},
    Iduser: { type: DataTypes.INTEGER, allowNull: false },
    noiDung: { type: DataTypes.TEXT },
    diem: { type: DataTypes.FLOAT },
    nhanXet: { type: DataTypes.STRING },
    ngayNop: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'NopBaiTap',
    timestamps: false
  });

  BaiTapNop.associate = models => {
    BaiTapNop.belongsTo(models.BaiTap, { foreignKey: 'IdBaitap' });
    BaiTapNop.belongsTo(models.HocVien, { foreignKey: 'Iduser' });
  };

  return BaiTapNop;
};
