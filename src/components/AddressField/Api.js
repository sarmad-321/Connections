const googleBaseUrl =
  'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=';
const geoBase = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
const googleApiKey = 'AIzaSyB2hxNhJCBwaHoQ2eggJmLR4pfDYAN93cY';
const geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

export const AddressApi = {
  getAddressByLatlng: (data, callback) => {
    console.log(data, 'datadatadata');
    let latlng = data.lat + ',' + data.lng;
    let full_url =
      geoBase +
      latlng +
      '&sensor=false' +
      '&key=' +
      googleApiKey +
      '&sessiontoken=' +
      AddressApi.getSessionToken();
    fetch(full_url).then(d => {
      d.json().then(data => {
        // console.log('data',data)
        // data[]
        let re = [];
        if (data.status === 'OK') {
          // data.result
          let a = data.results.reverse();
          // console.log('asd',a)
          for (var da of a) {
            // console.log(da)
            if (da.types.indexOf('country') > -1) {
              for (var component of da.address_components) {
                if (component.types.indexOf('country') > -1) {
                  callback(da);
                  break;
                }
              }
              break;
            }
          }
        }
      });
      // console.log('d',d)
    });
  },
  getAddressPrediction: (word, callback) => {
    let url =
      googleBaseUrl +
      word +
      '&key=' +
      googleApiKey +
      '&sessiontoken=' +
      AddressApi.getSessionToken();
    fetch(url)
      .then(d => {
        d.json()
          .then(data => {
            console.log('data', data);
            callback(data);
          })
          .catch(e => {
            console.log(e);
          });
      })
      .catch(e => {
        console.log(e);
      });
  },
  getSessionToken: () => {
    let sessionKey = Math.floor(Math.random() * 10).toString();
    // console.log('sessionKey ',sessionKey)
    return sessionKey;
  },
  getGeoCode: (address, success) => {
    let url = geocodeUrl + address + '&key=' + googleApiKey;
    console.log(url, 'addressHERe');
    fetch(url).then(d => {
      console.log(d, 'ddddd');
      d.json().then(data => {
        success(data?.results[0]);
        console.log('add data', data);
      });
    });
  },

  getStreet_address: (data, callback) => {
    let latlng = data.lat + ',' + data.lng;
    let full_url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.lat},${data.lng}&key=AIzaSyB2hxNhJCBwaHoQ2eggJmLR4pfDYAN93cY`;
    console.log('api hittting');
    fetch(full_url)
      .then(d => {
        console.log(d, 'saaaad');

        d.json().then(data => {
          // data[]

          let re = [];

          if (data.status === 'OK') {
            // data.result

            let a = data.results.reverse();

            for (var da of a) {
              if (da.types.indexOf('route') > -1) {
                let address = {
                  formatted_address: da.formatted_address,

                  lat: da.geometry.location.lat,

                  lng: da.geometry.location.lng,
                };
                console.log(address, 'HELLLLO');
                callback(address);

                break;
              }
            }
          }
        });

        // console.log('d',d)
      })
      .catch(ex => console.log(ex, 'exception'));
  },
};
export default AddressApi;
