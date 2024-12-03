const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'report';

// Fetch all reports
const getAllReports = async () => {
    const params = {
        TableName: TABLE_NAME,
    };
    const data = await dynamoDB.scan(params).promise();
    return data.Items;
};

// Fetch report by ID
const getReportById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { id },
    };
    const data = await dynamoDB.get(params).promise();
    return data.Item;
};

// Fetch report by slug (requires GSI on 'slug')
const getReportBySlug = async (slug) => {
    const params = {
        TableName: TABLE_NAME,
        IndexName: 'slug-index', // GSI Name
        KeyConditionExpression: 'slug = :slug',
        ExpressionAttributeValues: {
            ':slug': slug,
        },
    };
    const data = await dynamoDB.query(params).promise();
    return data.Items[0]; // Assuming slug is unique
};

// Search reports by keywords or title
const searchReports = async (query) => {
    const params = {
        TableName: TABLE_NAME,
        FilterExpression: 'contains(#title, :query) OR contains(#keywords, :query)',
        ExpressionAttributeNames: {
            '#title': 'title',
            '#keywords': 'keywords',
        },
        ExpressionAttributeValues: {
            ':query': query,
        },
    };
    const data = await dynamoDB.scan(params).promise();
    return data.Items;
};

// Create a new report
const createReport = async (report) => {
    const params = {
        TableName: TABLE_NAME,
        Item: report,
    };
    await dynamoDB.put(params).promise();
};

// Update an existing report
const updateReport = async (id, report) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { id },
        UpdateExpression: 'set #title = :title, #summary = :summary',
        ExpressionAttributeNames: {
            '#title': 'title',
            '#summary': 'summary',
        },
        ExpressionAttributeValues: {
            ':title': report.title,
            ':summary': report.summary,
        },
    };
    await dynamoDB.update(params).promise();
};

// Delete a report
const deleteReport = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { id },
    };
    await dynamoDB.delete(params).promise();
};

module.exports = {
    getAllReports,
    getReportById,
    getReportBySlug,
    searchReports,
    createReport,
    updateReport,
    deleteReport,
};
