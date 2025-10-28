module.exports = (sequelize, DataTypes) => {
  const ThoiKhoaBieu = sequelize.define('ThoiKhoaBieu', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    Idlophoc: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      comment: 'Liên kết tới lớp học'
    },
    Thutrongtuan: {
      type: DataTypes.ENUM('Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'Chủ Nhật'),
      allowNull: false,
      comment: 'Thứ trong tuần'
    },
    Cahoc: {
      type: DataTypes.ENUM('Sáng', 'Chiều', 'Tối'),
      allowNull: false,
      comment: 'Ca học: sáng / chiều / tối'
    },
    Giobatdau: { 
      type: DataTypes.TIME, 
      allowNull: false 
    },
    Gioketthuc: { 
      type: DataTypes.TIME, 
      allowNull: false 
    },
    Idphong: { 
      type: DataTypes.INTEGER,
      allowNull: true 
    },
    ghiChu: { 
      type: DataTypes.STRING, 
      allowNull: true 
    }
  }, {
    tableName: 'ThoiKhoaBieu',
    timestamps: false
  });

  ThoiKhoaBieu.associate = (models) => {
    ThoiKhoaBieu.belongsTo(models.LopHoc, { foreignKey: 'Idlophoc', as: 'LopHoc' });
  };

  return ThoiKhoaBieu;
};
