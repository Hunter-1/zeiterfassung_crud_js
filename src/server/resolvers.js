const {CategoryList, TimestampList} = require("./data.js");
const _ = require("lodash");
const resolvers = {
    Query: {
       categories() {
            return CategoryList;
        },
        timestamps() {
            return TimestampList;
        },
        timestamp(parent, args) {
            const id = args.id
            return _.find(TimestampList, {id: Number(id)});
        },
        category(parent, args) {
            const id = args.id
            return _.find(CategoryList, {id: Number(id)});
        }
    },
    Mutation: {
        createTimestamp(parent, args){
            const timestamp = args.input;
            console.log(args.input)
            const oldId = TimestampList[TimestampList.length-1].id
            timestamp.id = oldId+1;
            timestamp.category = _.find(CategoryList, {id: Number(timestamp.category.id)})
            TimestampList.push(timestamp)
            return timestamp
        },
        createCategory(parent, args){
            const category = args.input;
            const oldId = CategoryList[CategoryList.length-1].id
            category.id = oldId+1;
            CategoryList.push(category)
            return category
        },
        updateTimestamp(parent, args) {
            const {id, newStart, newEnd, newDescription, newCategory} = args.input;
            let timestampUpdated;
            TimestampList.forEach((timestamp) => {
                if (timestamp.id === Number(id)){
                    timestamp.start = newStart;
                    timestamp.end = newEnd;
                    timestamp.description = newDescription;
                    timestamp.category = newCategory
                    timestampUpdated = timestamp
                }
            });
            return timestampUpdated;
        },
        updateCategory(parent, args) {
            const {id, newName} = args.input;
            let categoryUpdated;
            CategoryList.forEach((category)=> {
                if (category.id === Number(id)){
                    category.name = newName;
                    categoryUpdated = category;
                }
            });
            return categoryUpdated;
        },
        deleteTimestamp(parent, args){
            const id = args.id;
            const timestampDeleted = _.find(TimestampList, {id: Number(id)})
            _.remove(TimestampList, (timestamp) =>
                timestamp.id === Number(id));
            return timestampDeleted;
        },
        deleteCategory(parent, args){
            const id = args.id;
            const categoryDeleted = _.find(CategoryList, {id: Number(id)})
            _.remove(CategoryList, (category) =>
                category.id === Number(id));
            return categoryDeleted;
        }
    }
}

module.exports = {resolvers}