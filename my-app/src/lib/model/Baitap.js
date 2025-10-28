module.exports = (sequelize, DataTypes) => {
  const BaiTap = sequelize.define('BaiTap', {
    IdBaitap: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    tieuDe: { type: DataTypes.STRING, allowNull: false },
    noiDung: { type: DataTypes.TEXT },
    hanNop: { type: DataTypes.DATE },
    tepDinhKem: { type: DataTypes.STRING },
    IdGiangvien: { type: DataTypes.INTEGER, allowNull: false },
    Idlophoc: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    tableName: 'BaiTap',
    timestamps: true
  });

  BaiTap.associate = models => {
    BaiTap.belongsTo(models.GiaoVien, { foreignKey: 'IdGiangvien' });
    BaiTap.belongsTo(models.LopHoc, { foreignKey: 'Idlophoc' });
    BaiTap.hasMany(models.BaiTapNop, { foreignKey: 'Idbaitapnop' });
  };

  return BaiTap;
};
