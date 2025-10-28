module.exports = (sequelize, DataTypes) => {
  const Giangvien = sequelize.define('Giangvien', {
    IdGiangvien: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    address: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    dateOfBirth: { type: DataTypes.DATE },
    avatar: { type: DataTypes.STRING },
    trinhDo: { type: DataTypes.STRING },
    chuyenMon: { type: DataTypes.STRING },
    userId: { 
      type: DataTypes.INTEGER, 
      references: { model: 'User', key: 'userId' },
      allowNull: false
    }
  }, {
    tableName: 'Giangvien',
    timestamps: false
  });

  return GiaoVien;
};
