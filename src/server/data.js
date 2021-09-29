const CategoryList = [
    {
        id: 1,
        name: "test name 1"
    },
    {
        id: 2,
        name: "test name 2"
    }
]
const TimestampList = [
    {
        id: 1,
        start: "1970-01-01T00:00:01",
        end: "1970-01-01T00:00:02",
        description: "Test Description",
        category: {id: 1,name: "test name 1"}
    },
    {
        id: 2,
        start: "1970-01-01T00:00:01",
        end: "1970-01-01T00:00:02",
        description: "Test Description 2",
        category: {id: 2,name: "test name 2"}
    }
]

module.exports = {TimestampList, CategoryList}