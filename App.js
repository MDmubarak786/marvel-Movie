import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MarvelBg from './assests/marvelBg.jpeg';
import {phaseOne} from './imageUrl';

const App = () => {
  const [search, setSearch] = useState('');

  const MovieComponent = ({item}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: item.image}}
          style={styles.imageStyle}
          resizeMode="contain"
        />

        <TouchableOpacity onPress={() => Alert.alert(item.name)}>
          <Text style={styles.movieTitle}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ImageBackground source={MarvelBg} style={styles.foregroundBg}>
        <ScrollView>
          <Text style={styles.heading}>Marvel</Text>
          <View style={styles.searchViewSplit}>
            <Text style={styles.subHeading}>Phase One</Text>
            <TextInput
              style={styles.searchBox}
              placeholder="Search"
              onChangeText={e => setSearch(e)}
            />
          </View>
          {search && <Text style={styles.subHeading}>{search}</Text>}

          <View style={styles.alignC}>
            {phaseOne.map(item => {
              return <MovieComponent item={item} />;
            })}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  foregroundBg: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  heading: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '500',
  },
  subHeading: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 20,
  },
  movieTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 20,
  },
  imageStyle: {
    height: 150,
    width: 150,
  },
  alignC: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  searchBox: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    height: 28,
    borderRadius: 18,
    marginBottom: 15,
    borderColor: 'grey',
    opacity: 0.6,
    fontSize: 14,
    paddingLeft: 15,
    width: '68%',
    color: 'white',
  },
  searchViewSplit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});

export default App;
