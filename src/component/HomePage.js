import { uploadFile } from 'react-s3';
import React from 'react';

const config = {
    bucketName: 'korishop',
    dirName: 'photos', /* optional */
    region: 'us-east-2',
    accessKeyId: '',
    secretAccessKey: ''
}
const HomePage = () => {


    /*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
    // S3FileUpload
    //     .uploadFile(file, config)
    //     .then(data => console.log(data))
    //     .catch(err => console.error(err))

    // //** OR *//

    // uploadFile(file, config)
    //     .then(data => console.log(data))
    //     .catch(err => console.error(err))

    const upload = (e) => {
        uploadFile(e.target.files[0], config).then(data => {
            console.log(data)
        }).catch(err => console.log(err))
    }
    return (
        <div>
            <h1>upload file s3</h1>
            <input type="file"
                onChange={upload}
            />
        </div>
    )
}
export default HomePage;