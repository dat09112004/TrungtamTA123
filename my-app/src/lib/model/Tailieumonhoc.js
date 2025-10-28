module.exports = (sequelize, DataTypes) => {
  const TaiLieuMon = sequelize.define('TaiLieuMon', {
    IdTaiLieu: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    TieuDe: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    MoTa: { 
      type: DataTypes.TEXT, 
      allowNull: true 
    },
    TepTin: { 
      type: DataTypes.STRING, 
      allowNull: true 
    },
    NgayDang: { 
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW 
    },
    IdMonHoc: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'MonHoc', key: 'Idmonhoc' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    IdGiangvien: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Giangvien', key: 'IdGiangvien' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }
  }, {
    tableName: 'TaiLieuMon',
    timestamps: false
  });

  // Thiết lập quan hệ
  TaiLieuMon.associate = (models) => {
    TaiLieuMon.belongsTo(models.MonHoc, { 
      foreignKey: 'IdMonHoc', 
      as: 'monhoc' 
    });
    TaiLieuMon.belongsTo(models.Giangvien, { 
      foreignKey: 'IdGiangvien', 
      as: 'giangvien' 
    });
  };

  return TaiLieuMon;
};
