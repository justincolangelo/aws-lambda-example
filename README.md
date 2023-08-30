# AWS Lambda Function Example

### What Does This One Do?

This function was set up to trigger when an action was performed on an S3 bucket. 
It prints the event details as well as the file and bucket name.


```
2023-08-30T00:36:01.102Z	72dfd9bd-a71b-43ae-ad32-ce2593b14f12	
INFO	Incoming Event to Lambda Function: 

{
  Records: [
    {
      eventVersion: '2.0',
      eventSource: 'aws:s3',
      awsRegion: 'us-east-1',
      eventTime: '1970-01-01T00:00:00.000Z',
      eventName: 'ObjectCreated:Put',
      userIdentity: [Object],
      requestParameters: [Object],
      responseElements: [Object],
      s3: [Object]
    }
  ]
}

2023-08-30T00:36:01.118Z	72dfd9bd-a71b-43ae-ad32-ce2593b14f12	
INFO	File: test/key added to bucket: example-bucket
```

