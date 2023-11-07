localStorage.setItem('key-avatar', avatar)

const firebaseConfig = {
    apiKey: "AIzaSyBaLzeHuOR2B4g1s19dwBWX02wd9Ynr5d0",
    authDomain: "dm1deploy.firebaseapp.com",
    projectId: "dm1deploy",
    storageBucket: "dm1deploy.appspot.com",
    messagingSenderId: "529395444573",
    appId: "1:529395444573:web:7b8ad71282063f84a356b4",
    measurementId: "G-HWP4XYRTJ1"
};
firebase.initializeApp(firebaseConfig);


var fbBucketName = 'images';

// get elements
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

// listen for file selection
fileButton.addEventListener('change', async function (e) {

    // what happened
    console.log('file upload event', e);

    // get file
    var file = e.target.files[0];

    // create a storage ref
    var storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);

    // upload file
    var uploadTask = storageRef.put(file);



    // update progress bar
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = progress;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {


            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        }, function () {

            var downloadURL = uploadTask.snapshot.downloadURL;

            console.log('downloadURL=======',downloadURL)
            localStorage.setItem('uploadAvatarKey', downloadURL)

            let divLocation = document.getElementById("image");

            divLocation.src = downloadURL;
            divLocation.width = 200;
            divLocation.height = 200;

        })
});