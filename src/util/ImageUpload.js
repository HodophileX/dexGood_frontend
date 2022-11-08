import { toastAction } from '../_redux/toastAction';
import { v4 as uuidv4 } from 'uuid';
import { uploadFileS3bucketAction } from '../_redux/action/aws';

export const ImageUploadLink = (user, base64Image, type) => {
  return new Promise((resolve, reject) => {
    const fileName = uuidv4() + '.' + type.split('/')[1];

    fetch(base64Image)
      .then(res => res.blob())
      .then(async blob => {
        const files = new File([blob], fileName, {
          type: type,
        });

        const prefixName = `user/${user && user._id}`;
        const url = await uploadFileS3bucketAction(files, prefixName);
        if (url) {
          resolve(url);
        } else {
          reject('undefined url');
        }

        //action name and pass the value
      });
  });
};
