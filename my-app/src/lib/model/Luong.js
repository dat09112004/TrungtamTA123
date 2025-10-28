module.exports = (sequelize, DataTypes) => {
  const Luong = sequelize.define('Luong', {
    IdLuong: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    IdGiangvien: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Giangvien', key: 'IdGiangvien' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    Thang: { type: DataTypes.STRING, allowNull: false }, // ví dụ: "10/2025"
    TongGioDay: { type: DataTypes.FLOAT, defaultValue: 0 },
    DonGia: { type: DataTypes.FLOAT, defaultValue: 100000 }, // lương 1 giờ
    TongLuong: { type: DataTypes.FLOAT, defaultValue: 0 },
    NgayTinhLuong: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'Luong',
    timestamps: false
  });

  Luong.associate = (models) => {
    Luong.belongsTo(models.Giangvien, { foreignKey: 'IdGiangvien', as: 'giangvien' });
  };

  return Luong;
};
