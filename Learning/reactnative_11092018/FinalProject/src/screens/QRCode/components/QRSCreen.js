// Library
import React from 'react';
import { 
  Text, View, Alert 
} from 'react-native';
import { 
  BarCodeScanner, Permissions, Constants, 
} from 'expo';


// Main QRSCreen.js
export default class QRSCreen extends React.Component {

  state = {

    hasCameraPermission: null,
  };

  componentDidMount() {

    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {

    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {

    Alert.alert(
      'Scan successful!',
      JSON.stringify(data)
    );
  };

  render() {

    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: Constants.statusBarHeight,  backgroundColor: 'rgb(55, 78, 105)', }}>
        {
          this.state.hasCameraPermission === null 
          ? <Text>Requesting for camera permission</Text> 
          : this.state.hasCameraPermission === false 
            ? <Text>Camera permission is not granted</Text> 
            : <BarCodeScanner
                onBarCodeRead={this._handleBarCodeRead}
                style={{ height: 200, width: 200, }}
                barCodeTypes={[
                  BarCodeScanner.Constants.BarCodeType.qr,
                ]}
                type={this.state.type}
              />
        }
      </View>
    )
  };
};

