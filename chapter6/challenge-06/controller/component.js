const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  show: async (req, res, next) => {
    try {
      const component = await prisma.components.findMany();
      return res.status(200).json({
        message: "success",
        data: component,
      });
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const { component_name, description} = req.body;

      if (!component_name || !description) {
        return res.status(404).json({
          message: "please enter component's name and description",
          data: null,
        });
      }

      const componentData = await prisma.components.create({
        data: { component_name, description },
      });
      return res.status(200).json({
        message: "success",
        data: componentData,
      });
    } catch (error) {
      next(error);
    }
  },

  showOne: async (req, res, next) => {
    try {
        const {id} = req.params;
      const component = await prisma.components.findUnique({
        where: {
            component_id: id,
      }});
      return res.status(200).json({
        message: "success",
        data: component,
      });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
        const updateData = req.body;
        const {id} = req.params;

        const updateComponent = await prisma.components.update({
            where: {
              component_id: id,
            },
            data: updateData
          })

        if (updateComponent[0] == 0) {
            return res.status(404).json({
                status: false,
                message: `can't find component with id ${id}!`,
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

        const deleteComponent = await prisma.components.delete({
            where: {
              component_id: id,
            },
          })

        if (!deleteComponent) {
            return res.status(404).json({
                status: false,
                message: `can't find component with id ${id}!`,
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