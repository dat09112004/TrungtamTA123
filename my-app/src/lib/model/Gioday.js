module.exports = (sequelize, DataTypes) => {
  const Gioday = sequelize.define('Gioday', {
    IdGioday: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    IdGiangvien: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Giangvien', key: 'IdGiangvien' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    IdMonHoc: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'MonHoc', key: 'Idmonhoc' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    SoGioDay: { 
      type: DataTypes.FLOAT, 
      allowNull: false,
      defaultValue: 0 
    },
    NgayDay: { 
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'Gioday',
    timestamps: false
  });

  Gioday.associate = (models) => {
    Gioday.belongsTo(models.Giangvien, { foreignKey: 'IdGiangvien', as: 'giangvien' });
    Gioday.belongsTo(models.MonHoc, { foreignKey: 'IdMonHoc', as: 'monhoc' });
  };

  return Gioday;
};
