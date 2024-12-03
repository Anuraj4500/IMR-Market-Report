// models/report.js
const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'report';

const getAllReports = async () => {
    const params = {
        TableName: TABLE_NAME,
    };
    const data = await dynamoDB.scan(params).promise();
    return data.Items;
};

const getReportById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { id },
    };
    const data = await dynamoDB.get(params).promise();
    return data.Item;
};

const createReport = async (report) => {
    const params = {
        TableName: TABLE_NAME,
        Item: report,
    };
    await dynamoDB.put(params).promise();
};

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
    createReport,
    updateReport,
    deleteReport,
};
