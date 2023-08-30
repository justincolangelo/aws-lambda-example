export const handler = async (event, context, callback) => {
    console.log("Incoming Event to Lambda Function: ", event);
    
    const bucket = event.Records[0].s3.bucket.name;
    
    const filename = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    
    const message = `File: ${filename} added to bucket: ${bucket}`;
    
    console.log(message);
    
    callback(null, message);
 };