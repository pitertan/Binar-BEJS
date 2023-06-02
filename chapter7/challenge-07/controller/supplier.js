const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  show: async (req, res, next) => {
    try {
      const suppliers = await prisma.suppliers.findMany();
      return res.status(200).json({
        message: "success",
        data: suppliers,
      });
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const { name, address } = req.body;

      if (!name || !address) {
        return res.status(404).json({
          message: "please enter name and address",
          data: null,
        });
      }

      const supplierData = await prisma.suppliers.create({
        data: { supplier_name: name, address: address },
      });
      return res.status(200).json({
        message: "success",
        data: supplierData,
      });
    } catch (error) {
      next(error);
    }
  },

  showOne: async (req, res, next) => {
    try {
        const {id} = req.params;
      const suppliers = await prisma.suppliers.findUnique({
        where: {
            supplier_id: id,
      }});
      return res.status(200).json({
        message: "success",
        data: suppliers,
      });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
        const updateData = req.body;
        const {id} = req.params;
        console.log(updateData)
        const updateSupplier = await prisma.suppliers.update({
            where: {
              supplier_id: id,
            },
            data: updateData
          })

        if (updateSupplier[0] == 0) {
            return res.status(404).json({
                status: false,
                message: `can't find channel with id ${id}!`,
                data: null
            });
        }

        return res.status(201).json({
            status: true,
            message: 'success',
            data: id
        });
    } catch (error) {
        next(error);
    }
},

destroy: async (req, res, next) => {
    try {
        const {id} = req.params;

        const deleteSupllier = await prisma.suppliers.delete({
            where: {
              supplier_id: id,
            },
          })

        if (!deleteSupllier) {
            return res.status(404).json({
                status: false,
                message: `can't find supplier with id ${id}!`,
                data: null
            });
        }

        return res.status(200).json({
            status: true,
            message: 'success',
            data: null
        });
    } catch (error) {
        next(error);
    }
}
};


