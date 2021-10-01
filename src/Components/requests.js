import {gql} from "@apollo/client";

const GetTimestamps = gql`
    query getTimestamps {
        allTimestamps {
            nodes {
                id
                start
                end
                description
            }
        }
    }
`

const GetCategories = gql`
    query getCategories {
        allCategories{
            nodes {
                id
                name
            }
        }
    }
`

const CreateTimestamp = gql`
    mutation CreateTimestamp(
        $start: String!, $end:String!,
        $description:String, $category:Int
    ) {
        createTimestamp(
            input: {
                timestamp: {
                    start: $start,
                    end: $end,
                    description: $description,
                    category:$category
                }
            }
        ) {
            timestamp {
                id
            }
        }
    }
`

const CreateCategory = gql`
    mutation CreateCategory($name: String!){
        createCategory(input: {
            category: {
                name:$name
            }
        }) {
            category {
                id
            }
        }
    }
`

const UpdateTimestampMutation = gql`
    mutation UpdateTimestamp($id: Int!,
        $start: String!, $end:String!,
        $description:String, $category:Int
    ) {
        updateTimestampById(input: {
            id: $id
            timestampPatch: {
                start: $start,
                end: $end,
                description: $description,
                category:$category
            }
        }) {
            timestamp {
                id
            }
        }
    }
`

const UpdateCategoryById = gql`
    mutation UpdateCategory($id:Int!,
        $name:String!) {
        updateCategoryById(
            input: {
                id: $id
                categoryPatch:{
                    name: $name
                }
            }) {
            category {
                id
            }
        }
    }
`

const DeleteTimestampById = gql`
    mutation DeleteTimestamp($id: Int!){
        deleteTimestampById(input: { id: $id }) {
            deletedTimestampId
        }
    }
`

const DeleteCategoryById = gql`
    mutation DeleteCategoryById($id:Int!){
        deleteCategoryById(input:{id: $id}) {
            deletedCategoryId
        }
    }
`

export {
    GetTimestamps,
    GetCategories,
    CreateTimestamp,
    UpdateTimestampMutation,
    DeleteTimestampById,
    CreateCategory,
    DeleteCategoryById,
    UpdateCategoryById
}