const produkRepository = require("../repositories/produkRepository");

module.exports = {
  create(requestBody) {
    return produkRepository.create(requestBody);
  },

  update({id}, requestBody) {
    console.log("coba update", id, requestBody)
    return produkRepository.update({id}, requestBody);
  },

  delete({id}) {
    return produkRepository.delete({id});
  },

  async list() {
    try {
      const produks = await produkRepository.findAll();
      const produkCount = await produkRepository.getTotalProduk();

      return {
        data: produks,
        count: produkCount,
      };
    } catch (err) {
      throw err;
    }
  },
  async list2() {
    try {
      const produks = await produkRepository.findAll2();
      const produkCount = await produkRepository.getTotalProduk();

      return {
        data: produks,
        count: produkCount,
      };
    } catch (err) {
      throw err;
    }
  },

  get(id) {
    return produkRepository.find(id);
  },
};
