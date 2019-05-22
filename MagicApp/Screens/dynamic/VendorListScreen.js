//
//  VendorList
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import {
  Text,
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Vendor from '../../models/Vendor';

export default class VendorListScreen extends React.Component {
  constructor (props) {
    super (props);

    const {navigation} = this.props;
    var hourData = navigation.getParam ('hourData', []);
    this.state = {
      hourData: hourData,
    };
  }

  componentDidMount () {}

  componentWillUnmount () {}

  renderViewFlatListCell = ({item}) => {
    return <Vendor navigation={this.props.navigation} resData={item} />;
  };

  render () {
    return (
      <View style={styles.vendorlistView}>

        <TouchableOpacity
          style={styles.buttonButton}
          onPress={() => this.props.navigation.goBack ()}
        >
          <Text style={styles.buttonButtonText}>Go Back to All Hours </Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Search Restaurants"
          onChangeText={text => this.searchFilterFunction (text)}
          style={styles.group5TwoTextInput}
        />
        <View style={styles.viewFlatListViewWrapper}>
          <FlatList
            horizontal={false}
            renderItem={this.renderViewFlatListCell}
            data={this.state.hourData}
            style={styles.viewFlatList}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  vendorlistView: {
    backgroundColor: 'rgb(255, 255, 255)',
    flex: 1,
  },
  group5TwoTextInput: {
    borderRadius: 17,
    borderWidth: 1,
    borderColor: 'rgb(196, 201, 223)',
    borderStyle: 'solid',
    color: 'rgb(134, 142, 150)',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0,
    marginTop: hp ('1%'),
    marginHorizontal: wp ('8%'),
    height: 35,
    alignSelf: 'stretch',
  },
  viewFlatList: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    width: '100%',
    height: '100%',
  },
  buttonButton: {
    //    position: "absolute",
    marginLeft: wp ('2%'),
    marginTop: hp ('3%'),
  },
  buttonButtonText: {
    color: 'rgba(155, 155, 155, 0.8)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    marginLeft: 3,
  },
  buttonButtonImage: {
    resizeMode: 'contain',
  },
  viewFlatListViewWrapper: {
    marginTop: hp ('2%'),
    marginBottom: hp ('2%'),
    flex: 1,
  },
});