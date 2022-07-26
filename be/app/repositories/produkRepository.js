const { Produk } = require("../models");

module.exports = {
  create(createBody) {
    return Produk.create(createBody);
  },

  update({id}, updateBody) {
    console.log("coba repo", id, updateBody)
    return Produk.update(updateBody, {
      where: {
        id,
      },
    });
  },

  delete({id}) {
    return Produk.destroy({
      where:{id}
    });
  },

  find(id) {
    return Produk.findByPk(id);
  },

  findAll() {
    return Produk.findAll({
      order:[
        ["harga", "ASC"],
        ["rating", "DESC"],
        ["likes", "DESC"]
      ]
    });
  },
  findAll2() {
    return Produk.findAll({
    });
  },

  getTotalProduk() {
    return Produk.count();
  },
};
