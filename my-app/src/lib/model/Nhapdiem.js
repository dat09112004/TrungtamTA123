// models/nhapdiem.model.js
module.exports = (sequelize, DataTypes) => {
  const NhapDiem = sequelize.define('NhapDiem', {
    IdNhapDiem: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true 
    },
    IdUser: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: { model: 'User', key: 'userId' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }, // học viên được chấm điểm
    IdLopHoc: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: { model: 'LopHoc', key: 'IdLopHoc' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    IdGiangvien: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Giangvien', key: 'IdGiangvien' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }, // người nhập điểm
    Tx1: { type: DataTypes.FLOAT, defaultValue: 0 },
    Tx2: { type: DataTypes.FLOAT, defaultValue: 0 },
    Tx3: { type: DataTypes.FLOAT, defaultValue: 0 },
    Tx4: { type: DataTypes.FLOAT, defaultValue: 0 },
    Tx5: { type: DataTypes.FLOAT, defaultValue: 0 },
    DiemGiuaKy: { type: DataTypes.FLOAT, defaultValue: 0 },
    DiemCuoiKy: { type: DataTypes.FLOAT, defaultValue: 0 },
    DiemTrungBinh: { type: DataTypes.FLOAT, defaultValue: 0 },
    GhiChu: { type: DataTypes.STRING }
  }, {
    tableName: 'NhapDiem',
    timestamps: false
  });

  NhapDiem.associate = (models) => {
    NhapDiem.belongsTo(models.User, { foreignKey: 'IdUser', as: 'hocvien' });
    NhapDiem.belongsTo(models.LopHoc, { foreignKey: 'IdLopHoc', as: 'lophoc' });
    NhapDiem.belongsTo(models.Giangvien, { foreignKey: 'IdGiangvien', as: 'giangvien' });
  };

  return NhapDiem;
};
