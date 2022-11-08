import { gql } from '@apollo/client';

export const UPLOAD_IMAGE_GQL = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file) {
      filename
      mimetype
      encoding
      url
    }
  }
`;
