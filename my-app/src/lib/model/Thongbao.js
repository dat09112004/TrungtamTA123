module.exports = (sequelize, DataTypes) => {
  const ThongBao = sequelize.define('ThongBao', {
    Idthongbao: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    tieude: { type: DataTypes.STRING, allowNull: false },
    noidung: { type: DataTypes.TEXT, allowNull: false },
    Idnguoigui: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
      comment: 'userId của người gửi (admin, giáo viên, ...)'
    },
    Idnguoinhan: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
      comment: 'userId của người nhận (học viên, giáo viên, ...)'
    },
    daXem: { type: DataTypes.BOOLEAN, defaultValue: false },
    thoiGianGui: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'ThongBao',
    timestamps: false
  });

  ThongBao.associate = (models) => {
    ThongBao.belongsTo(models.User, { foreignKey: 'Idnguoigui', as: 'NguoiGui' });
    ThongBao.belongsTo(models.User, { foreignKey: 'Idnguoinhan', as: 'NguoiNhan' });
  };

  return ThongBao;
};
