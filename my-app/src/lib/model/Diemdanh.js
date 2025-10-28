// models/diemdanh.model.js
module.exports = (sequelize, DataTypes) => {
  const DiemDanh = sequelize.define('DiemDanh', {
    Iddiemdanh: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true 
    },
    Iduser: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    }, // học viên được điểm danh
    Idlophoc: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    IdGiangvien: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Giangvien', key: 'IdGiangvien' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }, // giảng viên thực hiện điểm danh
    ngayHoc: { 
      type: DataTypes.DATEONLY, 
      allowNull: false 
    },
    trangThai: { 
      type: DataTypes.ENUM('Có mặt', 'Vắng', 'Muộn'), 
      defaultValue: 'Có mặt' 
    },
    ghiChu: { 
      type: DataTypes.STRING 
    }
  }, {
    tableName: 'DiemDanh',
    timestamps: false
  });

  DiemDanh.associate = (models) => {
    DiemDanh.belongsTo(models.User, { foreignKey: 'Iduser', as: 'hocvien' });
    DiemDanh.belongsTo(models.LopHoc, { foreignKey: 'Idlophoc', as: 'lophoc' });
    DiemDanh.belongsTo(models.Giangvien, { foreignKey: 'IdGiangvien', as: 'giangvien' });
  };

  return DiemDanh;
};
