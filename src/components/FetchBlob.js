import {PermissionsAndroid, TouchableOpacity} from 'react-native';
import React from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import {Icons} from '../components';

export default FetchBlob = (props) => {
  const actualDownload = () => {
    const {dirs} = RNFetchBlob.fs;
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: `${props.title} report.pdf`,
        path: `${dirs.DownloadDir}/${props.title} report.pdf`,
      },
    })
      .fetch(
        'GET',
        `${props.file}`,
        // 'https://picsum.photos/seed/picsum/200/300'
        {},
      )
      .then((res) => {
        console.log('The file saved to ', res.path());
      })
      .catch((e) => {
        console.log(e);
      });
  };

  async function downloadFile() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        actualDownload();
      } else {
        Alert.alert(
          'Permission Denied!',
          'You need to give storage permission to download the file',
        );
      }
    } catch (err) {
      console.warn(err);
    }
  }
  return (
    <TouchableOpacity
      onPress={() => downloadFile()}
      style={{
        width: 50,
        paddingVertical: 4,
        //   backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icons.MaterialCommunityIcons
        name="file-download"
        size={22}
        color={'orange'}
      />
    </TouchableOpacity>
  );
};
