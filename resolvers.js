export default {
  Query: {
    allCats: async (parent, args, { Cat }) => {
      // { _id: 123123, name: "whatever"}
      const cats = await Cat.find();
      return cats.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
  },
  Mutation: {
    createCat: async (parent, args, { Cat }) => {
      // { _id: 123123, name: "whatever"}
      const kitty = await new Cat(args).save();
      kitty._id = kitty._id.toString();
      return kitty;
    },
  },
};
