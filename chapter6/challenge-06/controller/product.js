const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  show: async (req, res, next) => {
    try {
        const product = await prisma.products.findMany({
            include: {
              component: true,
            },
          })
      return res.status(200).json({
        message: "success",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const { product_name, quantity, component_id} = req.body;

      if (!product_name || !quantity || !component_id) {
        return res.status(404).json({
          message: "please enter product's name and quantity",
          data: null,
        });
      }

      const productData = await prisma.products.create({
        data: {
          product_name,
          quantity,
          component: {
            create: {component_id}
          },
        },
        include: {
          component: true, // Include all posts in the returned object
        },
      })
      return res.status(200).json({
        message: "success",
        data: productData,
      });
    } catch (error) {
      next(error);
    }
  },

  showOne: async (req, res, next) => {
    try {
        const {id} = req.params;
      const product = await prisma.products.findUnique({
        where : {product_id : id},
        include: {
            component: true,
          },
        })
      return res.status(200).json({
        message: "success",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
        const updateData = req.body;
        const {id} = req.params;

        const updateProduct = await prisma.products.update({
            where: {
              product_id: id,
            },
            data: updateData
          })

        if (updateProduct[0] == 0) {
            return res.status(404).json({
                status: false,
                message: `can't find product with id ${id}!`,
                data: null
            });
        }

        return res.status(200).json({
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
        const update = await prisma.products.update({
            where: {
              product_id: id,
            },
            data: {
              component: {
                deleteMany: {},
              },
            },
          })
        const deleteProduct = await prisma.products.delete({
            where: {
              product_id: id,
            },
          })

        if (!deleteProduct) {
            return res.status(404).json({
                status: false,
                message: `can't find product with id ${id}!`,
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
}