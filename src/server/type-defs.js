const {gql} = require("apollo-server")

const typeDefs = gql`
    type Timestamp {
        id: ID!
        start: String!
        end: String!
        description: String
        category: Category!
    }
    type Category {
        id: ID
        name: String
    }

    type Query {
        categories: [Category]
        timestamps: [Timestamp]
        timestamp(id: ID): Timestamp
        category(id: ID): Category
    }
    
    input CreateTimestamp {
        start: String!
        end: String!
        description: String = ""
        category: CreateCategoryForTimestamp!
    }
    input CreateCategoryForTimestamp {
        id: ID!
    }
    input CreateCategory {
        name: String
    }
    input UpdateTimestamp{
        id: ID!
        newStart: String!
        newEnd: String!
        newDescription: String = ""
        newCategory: CreateCategoryForTimestamp!
    }
    input UpdateCategory {
        id: ID!
        newName: String!
    }
    type Mutation {
        createTimestamp(input: CreateTimestamp): Timestamp
        createCategory(input: CreateCategory!): Category!
        updateTimestamp(input: UpdateTimestamp!): Timestamp
        updateCategory(input: UpdateCategory): Category
        deleteTimestamp(id: ID!): Timestamp
        deleteCategory(id: ID!): Category
    }
`;

module.exports = {typeDefs}